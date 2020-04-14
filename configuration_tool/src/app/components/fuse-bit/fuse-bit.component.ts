import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Fuse, FuseBit, FusesType } from '../../../../../core/models/typeScript/FuseBit';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConverterUtilities } from '../../../../../core/models/typeScript/Utilities/ConverterUtilities';
import { DriverService } from 'src/app/services/driver.service';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { ElectronService } from 'ngx-electron';
import { ScriptMethods } from '../../../../../core/models/typeScript/RenderToMainMethods';

@Component({
  selector: 'app-fuse-bit',
  templateUrl: './fuse-bit.component.html',
  styleUrls: ['./fuse-bit.component.css']
})
export class FuseBitComponent {
  columns: FuseTableColumn[] = [];
  displayedColumns: string[] = [];
  dataSource: FuseBit[][] = [];

  constructor(private electronService: ElectronService, dialogRef: MatDialogRef<FuseBitComponent>,  
    private driverService: DriverService, private cd: ChangeDetectorRef, private toastr: ToastrService, 
    @Inject(MAT_DIALOG_DATA) public fuses: Fuse[]) {
    // se già presente una configurazione viene caricata dai dati nel servizio
    if (this.driverService.fuseBitConfiguration.length) {
      this.dataSource = ConverterUtilities.matrixTranspose(this.driverService.fuseBitConfiguration.map(fuse => fuse.bits));
    }
    // altrimenti viene istanziata una nuova configurazioni con i dati di default passati dall'esterno (Microcontroller.ts)
    else {
      this.driverService.fuseBitConfiguration = _.cloneDeep(this.fuses);
      const fuseMatrix: FuseBit[][] = this.driverService.fuseBitConfiguration.map(fuse => fuse.bits);
      this.dataSource = ConverterUtilities.matrixTranspose(fuseMatrix);
    }
    // mappatura colonne
    this.driverService.fuseBitConfiguration.forEach((fuse, i) => {
      this.columns.push({ index: i, columnDef: fuse.type, header: fuse.type, footer: fuse.hexValue });
      this.displayedColumns.push(fuse.type);
    })
  }

  /**
   * Setta i fuse bit sul microcontrollore
   */
  setFuses() { 
    let microLabel = this.driverService.microcontrollerSelected.avrLabel;
    let programmer = 'usbasp';
    let lowFuse = '0x' + this.driverService.fuseBitConfiguration.find(fuse => fuse.type == FusesType.LOW).hexValue;
    let highFuse = '0x' +this.driverService.fuseBitConfiguration.find(fuse => fuse.type == FusesType.HIGH).hexValue;

    let params = [microLabel, programmer, lowFuse, highFuse];    
    
    this.electronService.ipcRenderer.send(ScriptMethods.burnFuses, params);
  };

  /**
   * Evento scatenato click su checkbox di una singola cella
   */
  onCellClicked(fuseType: string, cell: FuseBit) {
    // settaggio del singolo bit direttamente nella configurazione del servizio
    var fuse: Fuse = this.driverService.fuseBitConfiguration.find(fuse => fuse.type == fuseType);
    var bitToSet = fuse.bits.find(bit => bit.label == cell.label);
    bitToSet.value = !bitToSet.value;
    fuse.hexValue = ConverterUtilities.binaryToHex((fuse.bits.map(bit => bit.value)).reverse());
    // svuotamento colonne
    this.columns = [];
    this.displayedColumns = [];
    this.cd.detectChanges();
    // nuovo riempimento per visualizzazione su interfaccia
    this.driverService.fuseBitConfiguration.forEach((fuse, i) => {
      this.columns.push({ index: i, columnDef: fuse.type, header: fuse.type, footer: fuse.hexValue });
      this.displayedColumns.push(fuse.type);
    })
  }

  /**
   * Evento scatenato quando viene impostato il valore esadecimale del byte nel footer della colonna
   */
  onFooterChange(hexNumber: string, fuseType: string) {
    let newBitsValue = ConverterUtilities.hexToBinaryArray(hexNumber).reverse();
    let fuse: Fuse = this.driverService.fuseBitConfiguration.find(fuse => fuse.type == fuseType);
    fuse.hexValue = hexNumber;
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












