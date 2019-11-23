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
    var configFile =
      '/* file Gpt_Cfg auto-generated with Dirdem Micro Wizard software tool*/\n\
      #define CONFIGURED_CHANNELS 2\n\
      #include "Arduino.h"\n\
      #include "Gpt_Cfg.h1"\n\
      \n\
      typedef struct GptConfig{\n\
      uint8_t GptChannelID;\n\
      GptContainerHwChannel GptHwChannel;\n\
      GptContainerClockReference GptClockReference;\n\
      uint32_t GptChannelTickValueMax;\n\
      char GptNotification[30];\n\
      bool GptEnableDisableNotificationApi;\n\
      } ConfigPtr;\n\
      \n\
      Cfg[CONFIGURED_CHANNELS] = \n\
      {';

    // rimozione delle "" dalle proprietà
    configFile = configFile.replace(/\"([^(\")"]+)\":/g, "$1:");
    // rimozione degli spazi a inizio delle linee
    configFile = configFile.replace(/^ +/gm, '');
    // spazio di indentazione
    var indentSpace = '    ';

    // iterazione, formattazione e inserimento nel configFile delle singole configurazioni
    for (let i = 0; i < this.gptDriverConfigurations.length; i++) {
      const element = this.gptDriverConfigurations[i];
      //let result = JSON.stringify(element);
      i == this.gptDriverConfigurations.length - 1 ?
        configFile = configFile + '\n' + indentSpace +
        '{' + element.gptChannelID + ', ' +
        element.gptContainerHwChannel + ', ' +
        element.gptContainerClockReference + ', ' +
        element.gptClockPrescaler + ', ' +
        element.gptChannelTickValueMax + ', ' +
        '"' + element.gptNotification + '"}'
        :
        configFile = configFile + '\n' + indentSpace +
        '{' + element.gptChannelID + ', ' +
        element.gptContainerHwChannel + ', ' +
        element.gptContainerClockReference + ', ' +
        element.gptClockPrescaler + ', ' +
        element.gptChannelTickValueMax + ', ' +
        '"' + element.gptNotification + '"},'
    }
    configFile = configFile + '\n' + '};';
    //generazione e salvataggio file Gpt_Cfg.h
    var blob = new Blob([configFile], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "Gpt_Cfg.cpp");
  }
  /*
   *
   */

  constructor() { }
}
