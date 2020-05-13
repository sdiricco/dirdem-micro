import { Component, OnInit } from '@angular/core';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { MicroPinoutDialogComponent } from '../micro-pinout-dialog/micro-pinout-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { MicroService } from 'src/app/services/micro.service';

@Component({
  selector: 'app-micro-image-show',
  templateUrl: './micro-image-show.component.html',
  styleUrls: ['./micro-image-show.component.css']
})
export class MicroImageShowComponent implements OnInit {
  microcontroller: AvrMicrocontroller;
  get imgSrc():string { return this.microcontroller.avrMicrocontrollerBase.imagesSrc[0] }

  constructor(public dialog: MatDialog, private overlay: Overlay, private microService: MicroService) { }

  ngOnInit(): void {
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    })
  }

  /**
   * Evento scatenato su click sopra l'immagine
   */
  showPinout() {
    const dialogRef = this.dialog.open(MicroPinoutDialogComponent, {
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      data: this.microcontroller
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
