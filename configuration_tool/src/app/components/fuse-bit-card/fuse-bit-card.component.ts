import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { MatDialog } from '@angular/material/dialog';
import { FuseBitComponent } from '../fuse-bit/fuse-bit.component';
import { Overlay } from '@angular/cdk/overlay';
import { MicroService } from 'src/app/services/micro.service';
import { Fuse } from 'core/models/typeScript/FuseBit';
import { ElectronService } from 'ngx-electron';
import { MAIN_IN_PROCESSES, MAIN_OUT_PROCESSES } from 'core/models/typeScript/MainProcesses';
import { LoaderService, ProcessStatus } from 'src/app/services/loader.service';

@Component({
  selector: 'app-fuse-bit-card',
  templateUrl: './fuse-bit-card.component.html',
  styleUrls: ['./fuse-bit-card.component.css']
})
export class FuseBitCardComponent implements OnInit {
  microcontroller: AvrMicrocontroller;

  constructor(public dialog: MatDialog, private overlay: Overlay, private microService: MicroService,
    private electronService: ElectronService, private loaderService: LoaderService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    /**
    * Sottoscrizione al cambiamento del micro selezionato
    */
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    });
    /**
    * Sottoscrizione al completamento lettura fuse bit;
    */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.readFusesCompleted, (evt, results) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      this.microcontroller.setFusesReaded(results);
      this.cdr.detectChanges();
    })
  }

  /**
   * Apertura configurazione Fuse bit
   */
  openFuseBitComponent(): void {
    const dialogRef = this.dialog.open(FuseBitComponent, {
      width: "920px",
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      data: this.microcontroller.fuses
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  /**
  * Lettura hardware dei fuse bit
  */
  readHWFuses(fuses: Fuse []) {
    this.loaderService.updateProcess(ProcessStatus.pending);
    console.log(fuses);
    let avrdudeMicroLabel = this.microcontroller.avrLabel;
    let fusesToRead = fuses.map(fuse => {
      return ({ avrdudeFuseType: AvrMicrocontroller.fuseBitTypeToAvrdudeFuseBitType(fuse.type), fuseType: fuse.type });
    });    
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.readFuses, [avrdudeMicroLabel, fusesToRead]);
    
  }
}
