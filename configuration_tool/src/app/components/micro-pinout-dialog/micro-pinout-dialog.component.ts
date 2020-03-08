import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Microcontroller } from '../../../../../core/models/typeScript/Microcontroller';

@Component({
  selector: 'app-micro-pinout-dialog',
  templateUrl: './micro-pinout-dialog.component.html',
  styleUrls: ['./micro-pinout-dialog.component.css']
})
export class MicroPinoutDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MicroPinoutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Microcontroller) {}

  ngOnInit() {
    console.log(this.data)
  }

}
