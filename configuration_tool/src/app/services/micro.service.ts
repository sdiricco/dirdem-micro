import { Injectable } from '@angular/core';
import { GptDriverConfig } from 'core/models/typeScript/GptDriver';
import { Fuse } from 'core/models/typeScript/FuseBit';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { BehaviorSubject } from 'rxjs';
import { MicrocontrollerPackageEnum } from 'core/models/typeScript/MicrocontrollerPins';

@Injectable({
  providedIn: 'root'
})
export class MicroService {
  gptDriverConfiguration: GptDriverConfig [] = [];
  fuseBitConfiguration: Fuse [] = [];
  microcontrollerSelected = new BehaviorSubject<AvrMicrocontroller>(new AvrMicrocontroller());
  microcontrollerPackage: MicrocontrollerPackageEnum = MicrocontrollerPackageEnum.TQFP;
  compiledHexFilePath: string;

  constructor() { }

  /**
   * Svuota tutte le configurazioni - Driver GPT e Fuse bit
   */
  clearAllConfigurations(): void {
    this.gptDriverConfiguration = [];
    this.fuseBitConfiguration = [];
  }

  /**
   * Aggiorna il valore del microcontrollere selezionato
   */
  updateMicrocontroller(avrMicrocontroller: AvrMicrocontroller) {
    this.microcontrollerSelected.next(avrMicrocontroller);
  }
}
