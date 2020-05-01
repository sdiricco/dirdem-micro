import { Component, OnInit, Input } from '@angular/core';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { Microcontroller } from 'core/models/typeScript/Microcontroller';
import { MatDialog } from '@angular/material/dialog';
import { FuseBitComponent } from '../fuse-bit/fuse-bit.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-fuse-bit-card',
  templateUrl: './fuse-bit-card.component.html',
  styleUrls: ['./fuse-bit-card.component.css']
})
export class FuseBitCardComponent implements OnInit {

  @Input() microcontroller: any;

  constructor(public dialog: MatDialog, private overlay: Overlay) { }

  ngOnInit(): void {
  }

  /**
   * Apertura configurazione Fuse bit
   */
  openFuseBitComponent():void {
    const dialogRef = this.dialog.open(FuseBitComponent, {
      width: "920px",
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      data: this.microcontroller.fuses
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
}
}
