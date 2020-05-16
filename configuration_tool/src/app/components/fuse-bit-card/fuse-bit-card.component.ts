import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AvrMicrocontroller, AvrdudeFuseTypeEnum } from 'core/models/typeScript/AvrMicrocontroller';
import { MatDialog } from '@angular/material/dialog';
import { FuseBitComponent } from '../fuse-bit/fuse-bit.component';
import { Overlay } from '@angular/cdk/overlay';
import { MicroService } from 'src/app/services/micro.service';
import { Fuse, FusesTypeEnum } from 'core/models/typeScript/FuseBit';
import { ElectronService } from 'ngx-electron';
import { MAIN_IN_PROCESSES, MAIN_OUT_PROCESSES } from 'core/models/typeScript/MainProcesses';
import { ConverterUtilities } from 'core/models/typeScript/Utilities/ConverterUtilities';
import { LoaderService, ProcessStatus } from 'src/app/services/loader.service';

@Component({
  selector: 'app-fuse-bit-card',
  templateUrl: './fuse-bit-card.component.html',
  styleUrls: ['./fuse-bit-card.component.css']
})
export class FuseBitCardComponent implements OnInit {
  microcontroller: AvrMicrocontroller;

  fusesReaded: { value: string, type: FusesTypeEnum }[] = [];

  /*
  lowFuseReaded: { value:string, type: FusesTypeEnum };
  highFuseReaded: { value: string, type: FusesTypeEnum };
  extendedFusesReaded: { value: string, type: FusesTypeEnum };
  lockFuseReaded: { value: string, type: FusesTypeEnum };
  */

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
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.readFuseCompleted, (evt, arg) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      let stdout = arg.stdout;
      let stderr = arg.stderr;
      let fuseType = arg.fuseType;
      if (stdout && fuseType) {
        let fuse = this.fusesReaded.find(fuseReaded => fuseReaded.type == fuseType);
        if (fuse) {
          let fuseIndex = this.fusesReaded.indexOf(fuse);
          this.fusesReaded.splice(fuseIndex, 1);
          this.fusesReaded.push({ value: stdout, type: fuseType });
        } else {
          this.fusesReaded.push({ value: stdout, type: fuseType });
        }
      }
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
  * Lettura singolo fuse bit
  */
  readFuse(fuse: Fuse) {
    this.loaderService.updateProcess(ProcessStatus.pending);
    let avrdudeMicroLabel = this.microcontroller.avrLabel;
    let avrdudeFuseType = ConverterUtilities.fuseBitTypeToAvrdudeFuseBitType(fuse.type);
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.readFuse, [avrdudeMicroLabel, avrdudeFuseType, fuse.type]);
  }
}
