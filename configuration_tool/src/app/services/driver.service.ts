import { Injectable } from '@angular/core';
import { GptDriverConfig } from '../models/GptDriver';
import FileSaver = require('file-saver');

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  /*
   *  GPT DRIVER
   */
  gptDriverConfigurations: GptDriverConfig[] = [];
  // scarica il Gpt_Cfg.C
  generateGptConfigFile(cFile: string) { // da trasformare in promise !!!
    var blob = new Blob([cFile], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "Gpt_Cfg.c");
  }
  /*
   *
   */

  constructor() { }
}
