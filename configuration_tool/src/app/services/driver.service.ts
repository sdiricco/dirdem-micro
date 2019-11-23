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
  // genera il file di testo in base alle configurazioni presenti nella tabella delle configurazioni del gpt driver
  generateGptConfigFile() {

    // iterazione, formattazione e inserimento nel configFile delle singole configurazioni
    var configFile='';
    for (let i = 0; i < this.gptDriverConfigurations.length; i++) {
      const config = this.gptDriverConfigurations[i];
      configFile += 'configSet:' + i + '\n';
      for(var property in config)
      {
        let value = config[property];
        configFile += (property +':'+ value + '\n');
        console.log(configFile);
      }
      configFile += '\n';
    }
    console.log(configFile);
    //generazione e salvataggio file Gpt_Cfg.h
    var blob = new Blob([configFile], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "Gpt_Cfg.txt");
  }
  /*
   *
   */

  constructor() { }
}
