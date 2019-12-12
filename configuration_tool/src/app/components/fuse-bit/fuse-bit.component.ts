import { Component, Inject } from '@angular/core';
import { Fuse, FuseBit, FusesType } from 'src/app/models/FuseBit';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ConverterUtilities } from 'src/app/models/Utilities/ConverterUtilities';
import { DriverService } from 'src/app/services/driver.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-fuse-bit',
  templateUrl: './fuse-bit.component.html',
  styleUrls: ['./fuse-bit.component.css']
})
export class FuseBitComponent {
  columns: FuseTableColumn[] = [];
  displayedColumns: string[] = [];
  dataSource: FuseBit[][] = [];
  get fuseBitConfiguration() { return this.driverService.fuseBitConfiguration };
  set fuseBitConfiguration(value) { this.driverService.fuseBitConfiguration = value };

  constructor(public dialogRef: MatDialogRef<FuseBitComponent>, private driverService: DriverService,
    @Inject(MAT_DIALOG_DATA) public fuses: Fuse[]) {
    // se già presente una configurazione viene caricata dai dati nel servizio
    if (this.fuseBitConfiguration.length) {
      this.dataSource = ConverterUtilities.matrixTranspose(this.fuseBitConfiguration.map(fuse => fuse.bits));
    }
    // altrimenti viene istanziata una nuova configurazioni con i dati di default passati dall'esterno (Microcontroller.ts)
    else {
      this.fuseBitConfiguration = _.cloneDeep(this.fuses);
      const fuseMatrix: FuseBit[][] = this.fuseBitConfiguration.map(fuse => fuse.bits);
      this.dataSource = ConverterUtilities.matrixTranspose(fuseMatrix);
    }
    // mappatura colonne
    this.fuseBitConfiguration.forEach((fuse, i) => {
      let bitValues = fuse.bits.map(_ => _.value)
      let fuseFooter = ConverterUtilities.binaryToHex(bitValues.reverse()); // rivoltati perchè il primo è l'ottavo bit
      this.columns.push({ index: i, columnDef: fuse.type, header: fuse.type, footer: fuseFooter });
      this.displayedColumns.push(fuse.type);
    })
  }

  /**
   * eventi 
   */
  // click su checkbox di una singola cella
  onCellClicked(colName: string, cell: FuseBit) {
    // settaggio del singolo bit direttamente nella configurazione del servizio
    var fuse: Fuse = this.fuseBitConfiguration.find(fuse => fuse.type == colName);
    var bitToSet = fuse.bits.find(bit => bit.label == cell.label);
    bitToSet.value = !bitToSet.value;
  }
  // quando viene impostato il valore esadecimale del byte nel footer della colonna
  onFooterChange(hexNumber: string, fuseType: string) {
    let fuse: Fuse = this.driverService.fuseBitConfiguration.find(fuse => fuse.type == fuseType);
    let newBitsValue = ConverterUtilities.hexToBinaryArray(hexNumber).reverse();
    for (let i = 0; i < fuse.bits.length; i++) {
      var newBitValue = newBitsValue[i];
      fuse.bits[i].value = newBitValue;   // vengono cambiati i singoli bit nella configurazione del driverService   
    }
  }
}


interface FuseTableColumn {
  index: number;
  columnDef: string;
  header: string;     // intestazione della colonna
  footer: string;     // valore esadecimale del byte
}










