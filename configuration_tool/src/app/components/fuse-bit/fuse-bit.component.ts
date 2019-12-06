import { Component, OnInit, Inject } from '@angular/core';
import { Fuse, FuseBit } from 'src/app/models/FuseBit';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-fuse-bit',
  templateUrl: './fuse-bit.component.html',
  styleUrls: ['./fuse-bit.component.css']
})
export class FuseBitComponent {
  columns: FuseTableColumn[] = [];
  displayedColumns: string [] = [];
  dataSource: FuseBit [] = [];
  

  constructor(public dialogRef: MatDialogRef<FuseBitComponent>,
    @Inject(MAT_DIALOG_DATA) public fuses: Fuse[]) {
      console.log(this.fuses);

      let row = fuses.filter((_,i) => i % 3 == 0);


      for (let i = 0; i < fuses.length; i++) {
        // iterazione dei singoli fuses passati dall'esterno
        const fuse = fuses[i];
        const column: FuseTableColumn = {columnDef: fuse.type, header: fuse.type};
        this.columns.push(column);

        for (let findex = fuse.bits.length-1; findex >= 0; findex--) {
          const bit = fuse.bits[findex];
          this.dataSource.push(bit);          
        }            

      }
      this.displayedColumns = this.columns.map(x => x.columnDef);
  }

}

interface CustomColumn {

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







