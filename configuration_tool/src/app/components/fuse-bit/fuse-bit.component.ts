import { Component, OnInit, Inject } from '@angular/core';
import { Fuse } from 'src/app/models/FuseBit';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-fuse-bit',
  templateUrl: './fuse-bit.component.html',
  styleUrls: ['./fuse-bit.component.css']
})
export class FuseBitComponent implements OnInit {
// dentro data ho i valori dei fuse bit passati dall'esterno (in base a che micro è stato scelto)
  constructor(public dialogRef: MatDialogRef<FuseBitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fuse[]) { }

  ngOnInit() {
    console.log(this.data)
  }

}
