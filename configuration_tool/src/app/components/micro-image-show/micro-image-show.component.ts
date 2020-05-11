import { Component, OnInit, Input } from '@angular/core';
import { AvrMicrocontrollerBase } from 'core/models/typeScript/AvrMicrocontroller';
import { MicroPinoutDialogComponent } from '../micro-pinout-dialog/micro-pinout-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-micro-image-show',
  templateUrl: './micro-image-show.component.html',
  styleUrls: ['./micro-image-show.component.css']
})
export class MicroImageShowComponent implements OnInit {
  @Input() microcontroller: AvrMicrocontrollerBase;

  constructor(public dialog: MatDialog, private overlay: Overlay  ) { }

  ngOnInit(): void {
  }

  /**
   * Evento scatenato su click sopra l'immagine
   */
  showPinout() {
    const dialogRef = this.dialog.open(MicroPinoutDialogComponent, {
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      data: this.microcontroller.technicalSpecification
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
