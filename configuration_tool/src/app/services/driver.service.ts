import { Injectable } from '@angular/core';
import { GptDriverConfig } from '../../../../core/models/typeScript/GptDriver';
import FileSaver = require('file-saver');
import { Fuse } from '../../../../core/models/typeScript/FuseBit';
import { Microcontroller } from '../../../../core/models/typeScript/Microcontroller';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  gptDriverConfiguration: GptDriverConfig [] = [];
  fuseBitConfiguration: Fuse [] = [];
  microcontrollerSelected: Microcontroller = new Microcontroller;

  constructor() { }

  /**
   * svuota tutte le configurazioni
   */ 
  clearAllConfigurations(): void {
    this.gptDriverConfiguration = [];
    this.fuseBitConfiguration = [];
  }
}
