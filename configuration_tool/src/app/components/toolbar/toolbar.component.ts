import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { LoaderService } from 'src/app/services/loader.service';
import { MAIN_IN_PROCESSES } from 'core/models/typeScript/MainProcesses';
import { MicroService } from 'src/app/services/micro.service';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { MicrocontrollerNamesEnum } from 'core/models/typeScript/Microcontroller';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  microcontroller: AvrMicrocontroller;
  get linkToHexFile(): string {
    return this.microService.compiledHexFilePath;
  }
  get atmega328Name(): string {
    return MicrocontrollerNamesEnum.ATmega328P;
  }

  constructor(private electronService: ElectronService, private loaderService: LoaderService, private microService: MicroService) { }

  ngOnInit(): void {
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    })
  }

  /**
  * Compilazione di un file .C preso localmente dalla propria macchina
  */
  selectAndCompileCProject(): void {
    this.loaderService.show();
    let microcontrollerName = this.microcontroller.name;
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.compileCProject, [microcontrollerName]);
  }

  /**
   * Compilazione e flash di un file .C preso localmente dalla propria macchina
   */
  burnCProject(): void {
    this.loaderService.show();
    let avrdudeMicroLabel = this.microcontroller.avrLabel;
    let hexFilePath = this.microService.compiledHexFilePath;
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.burnHexFile, [avrdudeMicroLabel, hexFilePath]);
  }

  /**
   * Flash del bootloader di Arduino UNO su microcontrollore ATMega328p
   */
  burnArduinoUnoBootloader(): void {
    this.loaderService.show();
    let avrdudeMicroLabel = this.microService.microcontrollerSelected.getValue().avrLabel;
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.burnArduinoUnoBootloader, [avrdudeMicroLabel]);
  }

}
