import { Injectable } from '@angular/core';
import { GptDriverConfig } from '../../../../core/models/typeScript/GptDriver';
import FileSaver = require('file-saver');
import { Fuse } from '../../../../core/models/typeScript/FuseBit';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  /*
   *  GPT DRIVER
   */
  gptDriverConfiguration: GptDriverConfig [] = [];
  fuseBitConfiguration: Fuse [] = [];

  constructor() { }

  // scarica il Gpt_Cfg.C
  generateGptConfigFile(cFile: string): void { // da trasformare in promise !!!
    var blob = new Blob([cFile], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "Gpt_Cfg.c");
  }

  // svuota tutte le configurazioni
  clearAllConfigurations(): void {
    this.gptDriverConfiguration = [];
    this.fuseBitConfiguration = [];
  }
}
