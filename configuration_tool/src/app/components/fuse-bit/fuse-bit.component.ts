import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MicroService } from 'src/app/services/micro.service';
import * as _ from 'lodash';
import { ElectronService } from 'ngx-electron';
import { LoaderService, ProcessStatus } from 'src/app/services/loader.service';
import { MAIN_IN_PROCESSES } from 'core/models/typeScript/MainProcesses';
import { FuseBit, Fuse } from 'core/models/typeScript/FuseBit';
import { ConverterUtilities } from 'core/models/typeScript/Utilities/ConverterUtilities';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';


@Component({
  selector: 'app-fuse-bit',
  templateUrl: './fuse-bit.component.html',
  styleUrls: ['./fuse-bit.component.css']
})
export class FuseBitComponent {
  columns: FuseTableColumn[] = [];
  displayedColumns: string[] = [];
  dataSource: FuseBit[][] = [];
  microcontroller: AvrMicrocontroller;
  fuseBitTempConfig: Fuse[] = [];

  constructor(private electronService: ElectronService, dialogRef: MatDialogRef<FuseBitComponent>,
    private loaderService: LoaderService, private microService: MicroService, private cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public fuses: Fuse[]) {
    // viene istanziata una nuova configurazione copiata con i dati di default passati dall'esterno
    this.fuseBitTempConfig = _.cloneDeep(this.fuses);
    // al posto della funzione reverse dobbiame farne una che inserisce il bit
    const fuseMatrix: FuseBit[][] = this.fuseBitTempConfig.map(fuse => this.orderBitForGUI(fuse.bits));
    this.dataSource = ConverterUtilities.matrixTranspose(fuseMatrix);
    // mappatura colonne
    this.fuseBitTempConfig.forEach((fuse, i) => {
      this.columns.push({ index: i, columnDef: fuse.type, header: fuse.type, footer: fuse.hexValue });
      this.displayedColumns.push(fuse.type);
    })
  }

  /**
   * Ordina i bit dal più significativo al meno siginificativo per la visualizzazione in 
   * interfaccia grafica utilizzata per il datasource della tabella  
   * @param fuseBitArray 
   */
  private orderBitForGUI(fuseBitArray: FuseBit[]) {
    let result = fuseBitArray.sort((a, b) => b.bit - a.bit);
    return result;
  }

  ngOnInit() {
    /**
    * Sottoscrizione al cambiamento del micro selezionato
    */
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    });
  }

  /**
   * Evento scatenato click su checkbox di una singola cella
   */
  onCellClicked(fuseType: string, fuseBit: FuseBit) {
    let fuse: Fuse = this.fuseBitTempConfig.find(fuse => fuse.type == fuseType);
    let bitToSet = fuse.bits.find(bit => bit.label == fuseBit.label);
    bitToSet.value = !bitToSet.value;
    let newHexValue = fuse.fuseBitArrayToHex(fuse.bits);
    fuse.updateFuseByHexValue(newHexValue);    
  }

  /**
   * Evento scatenato quando viene impostato il valore esadecimale del byte nel footer della colonna
   */
  onFooterChange(hexValue: string, fuseType: string) {
    this.fuseBitTempConfig.forEach(fuse => {
      if (fuse.type == fuseType) {
        //fuse.hexValue = hexValue;
        this.cd.detectChanges();
      }
    })

    /*
    let fuseToChange = this.fuseBitTempConfig.find(fuse => fuse.type == fuseType);
    let fuseBitUpdated = ConverterUtilities.hexToBinaryArray(fuseToChange.hexValue);
    fuseBitUpdated.forEach(fuseBit => {
      for (let i = 0; i < fuseToChange.bits.length; i++) {
        const oldFuseBit = fuseToChange.bits[i];
        if (oldFuseBit.bit == fuseBit.bit) {
          fuseBit.label = oldFuseBit.label;
        }        
      }
    })
    */

  }

    /**
   * Flash dei fuse bit nel microcontrollore
   */
   burnFuses() {
    this.loaderService.updateProcess(ProcessStatus.pending);
    let avrdudeMicroLabel = this.microcontroller.avrLabel;
    let fusesToBurn = this.fuseBitTempConfig.map(fuse => {
      return ({ avrdudeFuseType: AvrMicrocontroller.fuseBitTypeToAvrdudeFuseBitType(fuse.type), hexValue: `0x${fuse.hexValue}` });
    });      
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.burnFuses, [avrdudeMicroLabel, fusesToBurn]);
  };


}


interface FuseTableColumn {
  index: number;
  columnDef: string;
  header: string;     // intestazione della colonna
  footer: string;     // valore esadecimale del byte
}












