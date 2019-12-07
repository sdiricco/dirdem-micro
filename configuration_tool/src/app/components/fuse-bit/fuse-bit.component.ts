import { Component, Inject } from '@angular/core';
import { Fuse, FuseBit } from 'src/app/models/FuseBit';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ConverterUtilities } from 'src/app/models/Utilities/ConverterUtilities';


@Component({
  selector: 'app-fuse-bit',
  templateUrl: './fuse-bit.component.html',
  styleUrls: ['./fuse-bit.component.css']
})
export class FuseBitComponent {
  columns: FuseTableColumn [] = [];
  displayedColumns: string [] = [];
  dataSource: FuseBit [] [];


  constructor(public dialogRef: MatDialogRef<FuseBitComponent>,
    @Inject(MAT_DIALOG_DATA) public fuses: Fuse[]) {
      // creazione matrice e riempimento dataSource
      const fuseMatrix: FuseBit [] [] = this.fuses.map(fuse => fuse.bits);
      this.dataSource = ConverterUtilities.matrixTranspose(fuseMatrix);
      // mappatura colonne
      this.fuses.forEach(fuse => {
        this.columns.push({columnDef: fuse.type, header: fuse.type});
        this.displayedColumns.push(fuse.type);
      })
  }

  doThis(row) {
    console.log(row);
  }
}


interface FuseTableColumn {
  columnDef: string;
  header: string;
}

interface FusesTableDatasource {
  label1?: string;
  value1?: boolean;
  label2?: string;
  value2?: boolean;
  label3?: string;
  value3?: boolean;
  label4?: string;
  value4?: boolean;
  label5?: string;
  value5?: boolean;
}







