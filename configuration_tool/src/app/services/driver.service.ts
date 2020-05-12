import { Injectable } from '@angular/core';
import FileSaver = require('file-saver');
import { GptDriverConfig } from 'core/models/typeScript/GptDriver';
import { Fuse } from 'core/models/typeScript/FuseBit';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { BehaviorSubject } from 'rxjs';
import { ATMEGA32 } from 'core/models/typeScript/Microcontrollers/ATmega32';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  gptDriverConfiguration: GptDriverConfig [] = [];
  fuseBitConfiguration: Fuse [] = [];
  microcontrollerSelected = new BehaviorSubject<AvrMicrocontroller>(new AvrMicrocontroller());
  compiledHexFilePath: string;

  constructor() { }

  /**
   * svuota tutte le configurazioni
   */
  clearAllConfigurations(): void {
    this.gptDriverConfiguration = [];
    this.fuseBitConfiguration = [];
  }
}
