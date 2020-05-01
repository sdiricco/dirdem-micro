import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AvrMicrocontroller, AvrMicrocontrollerTechnicalSpecification } from 'core/models/typeScript/AvrMicrocontroller';

@Component({
  selector: 'app-micro-pinout-dialog',
  templateUrl: './micro-pinout-dialog.component.html',
  styleUrls: ['./micro-pinout-dialog.component.css']
})
export class MicroPinoutDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MicroPinoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AvrMicrocontrollerTechnicalSpecification) {}

  ngOnInit() {
    console.log(this.data)
  }

}
