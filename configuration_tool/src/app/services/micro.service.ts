import { Injectable } from '@angular/core';
import { GptDriverConfig } from 'core/models/typeScript/GptDriver';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { BehaviorSubject } from 'rxjs';
import { MicrocontrollerPackageEnum, MicrocontrollerPinConfiguaration } from 'core/models/typeScript/MicrocontrollerPins';

@Injectable({
  providedIn: 'root'
})
export class MicroService {
  gptDriverConfiguration: GptDriverConfig [] = [];
  compiledHexFilePath: string;
  microcontrollerSelected = new BehaviorSubject<AvrMicrocontroller>(new AvrMicrocontroller());
  microcontrollerPinConfiguration = new BehaviorSubject<MicrocontrollerPinConfiguaration>(new MicrocontrollerPinConfiguaration());

  /**
   * Svuota tutte le configurazioni - Driver GPT e Fuse bit
   */
  clearAllConfigurations(): void {
    this.gptDriverConfiguration = [];
  }

  /**
   * Aggiorna il valore del microcontrollere selezionato
   */
  updateMicrocontroller(avrMicrocontroller: AvrMicrocontroller): void {
    this.microcontrollerSelected.next(avrMicrocontroller);
  }

  /**
   * Aggiorna il package del microcontrollore
   */
  updateMicrocontrollerPinConfiguration(microcontrollerPinConfiguration: MicrocontrollerPinConfiguaration): void {
    this.microcontrollerPinConfiguration.next(microcontrollerPinConfiguration);
  }
}
