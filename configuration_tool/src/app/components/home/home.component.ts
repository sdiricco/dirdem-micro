import { Component } from "@angular/core";
import { DriverService } from "src/app/services/driver.service";
import { MatDialog } from '@angular/material/dialog';
import { ElectronService } from 'ngx-electron';
import { LoaderService, ProcessStatus } from 'src/app/services/loader.service';
import { MAIN_IN_PROCESSES } from 'core/models/typeScript/MainProcesses';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  microcontroller: AvrMicrocontroller = new AvrMicrocontroller();
  get linkToHexFile(): string {
    return this.driverService.compiledHexFilePath;
  }

  constructor(
    public dialog: MatDialog,
    private driverService: DriverService,
    private electronService: ElectronService,
    private loaderService: LoaderService,
  ) { };

  ngOnInit(): void {
    /**
     * Sottoscrizione al cambiamento del microcontrollore
     */
    this.driverService.microcontrollerSelected.subscribe(micro => {
      this.microcontroller = micro;
    })
  }

  /**
   * Compilazione di un file .C preso localmente dalla propria macchina
   */
  selectAndCompileCProject() {
    this.loaderService.updateProcess(ProcessStatus.pending);
    let microcontrollerName = this.microcontroller.avrMicrocontrollerBase.name;
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.compileCProject, [microcontrollerName]);
  }

  /**
   * Compilazione e flash di un file .C preso localmente dalla propria macchina
   */
  burnCProject() {
    this.loaderService.updateProcess(ProcessStatus.pending);
    let microcontrollerLabel = this.microcontroller.avrLabel;
    let hexFilePath = this.driverService.compiledHexFilePath;
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.burnHexFile, [microcontrollerLabel, hexFilePath]);
  }

  /**
   * Flash del bootloader di Arduino UNO su microcontrollore ATMega328p
   */
  burnArduinoUnoBootloader() {
    this.loaderService.updateProcess(ProcessStatus.pending);
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.burnArduinoUnoBootloader);
  }

}
