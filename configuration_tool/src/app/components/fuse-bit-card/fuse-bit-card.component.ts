import { Component, OnInit, Input } from '@angular/core';
import { AvrMicrocontrollerBase, AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { MicrocontrollerBase } from 'core/models/typeScript/Microcontroller';
import { MatDialog } from '@angular/material/dialog';
import { FuseBitComponent } from '../fuse-bit/fuse-bit.component';
import { Overlay } from '@angular/cdk/overlay';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-fuse-bit-card',
  templateUrl: './fuse-bit-card.component.html',
  styleUrls: ['./fuse-bit-card.component.css']
})
export class FuseBitCardComponent implements OnInit {
  microcontroller: AvrMicrocontroller;
  constructor(public dialog: MatDialog, private overlay: Overlay, private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    })
  }

  /**
   * Apertura configurazione Fuse bit
   */
  openFuseBitComponent():void {
    const dialogRef = this.dialog.open(FuseBitComponent, {
      width: "920px",
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      data: this.microcontroller.avrMicrocontrollerBase.fuses
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
}
}
