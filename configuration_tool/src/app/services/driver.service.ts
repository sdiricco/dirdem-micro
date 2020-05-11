import { Injectable } from '@angular/core';
import FileSaver = require('file-saver');
import { GptDriverConfig } from 'core/models/typeScript/GptDriver';
import { MicrocontrollerBase } from 'core/models/typeScript/Microcontroller';
import { Fuse } from 'core/models/typeScript/FuseBit';
import { AvrMicrocontrollerBase } from 'core/models/typeScript/AvrMicrocontroller';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  gptDriverConfiguration: GptDriverConfig [] = [];
  fuseBitConfiguration: Fuse [] = [];
  microcontrollerSelected: AvrMicrocontrollerBase = new AvrMicrocontrollerBase();
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
