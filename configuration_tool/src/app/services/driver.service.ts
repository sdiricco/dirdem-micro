import { Injectable } from '@angular/core';
import FileSaver = require('file-saver');
import { GptDriverConfig } from 'core/models/typeScript/GptDriver';
import { Microcontroller } from 'core/models/typeScript/Microcontroller';
import { Fuse } from 'core/models/typeScript/FuseBit';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  gptDriverConfiguration: GptDriverConfig [] = [];
  fuseBitConfiguration: Fuse [] = [];
  microcontrollerSelected: Microcontroller = new Microcontroller;
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
