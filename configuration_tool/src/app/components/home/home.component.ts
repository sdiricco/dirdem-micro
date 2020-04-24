import { FuseBitComponent } from '../fuse-bit/fuse-bit.component';
import { Component, ViewChild } from "@angular/core";
import { MicroPinoutDialogComponent } from "../micro-pinout-dialog/micro-pinout-dialog.component";
import { GptCfgConfigComponent } from "../gpt-config/gpt-config.component";
import { DriverService } from "src/app/services/driver.service";
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ElectronService } from 'ngx-electron';
import { Overlay } from '@angular/cdk/overlay';
import { LoaderService, ProcessStatus } from 'src/app/services/loader.service';
import { Microcontroller } from 'core/models/typeScript/Microcontroller';
import { MAIN_IN_PROCESSES } from 'core/models/typeScript/MainProcesses';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  get gptConfigurationsLength() {
    return this.driverService.gptDriverConfiguration.length;
  }
  get fuseBitConfigurationLength() {
    return this.driverService.fuseBitConfiguration.length;
  }
  get microcontroller(): Microcontroller {
    return this.driverService.microcontrollerSelected;
  }
  set microcontroller(value: Microcontroller) {
    this.driverService.microcontrollerSelected = value;
  }
  get linkToHexFile(): string {
    return this.driverService.compiledHexFilePath;
  }
  // sliders
  @ViewChild("slider1", { static: false }) gptDriverSlider: MatSlideToggle;
  @ViewChild("slider4", { static: false }) fuseBitSlider: MatSlideToggle;
  //
  microcontrollers: Microcontroller[];
  // configurazioni da inserire nel div html che servirà per scaricare il file .C
  gptConfigurations = this.driverService.gptDriverConfiguration;

  constructor(
    public dialog: MatDialog,
    private driverService: DriverService,
    private electronService: ElectronService,
    private loaderService: LoaderService,
    private overlay: Overlay,
  ) { this.microcontrollers = Microcontroller.getMicrocontrollers() };

  /**
   * Evento scatenato sulla selezione di un nuovo micro
   */
  onMicroSelected(evt: MatSelectChange):void {
    this.driverService.clearAllConfigurations();
    this.driverService.microcontrollerSelected = evt.value;
  }

  /**
   * Evento scatenato al passagio del mouse sopra l'immagine
   */
  showPinout() {
    const dialogRef = this.dialog.open(MicroPinoutDialogComponent, {
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      data: this.microcontroller
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  /**
   * Slider Driver Gpt
   */
  onGptDriverSwitched(evt?: MatSlideToggleChange, isEdit?: boolean):void {
    // se lo slider virene acceso
    if (isEdit || evt.checked) {
      const dialogRef = this.dialog.open(GptCfgConfigComponent, {
        width: "920px",
        scrollStrategy: this.overlay.scrollStrategies.noop(),
        data: null
      });
      dialogRef.afterClosed().subscribe(result => {
        if (this.gptConfigurationsLength > 0) {
          // se ci sono configurazioni nel driverService lascio abilitato lo slider, altrimenti lo spengo
          this.gptDriverSlider.checked = true;
        } else {
          this.gptDriverSlider.checked = false;
        }
      });
    }
    // se lo slider viene spento svuoto le configurazioni del driverGpt
    else {
      this.driverService.gptDriverConfiguration = [];
    }
  }

  /**
   * Slider fuse bit
   */
  onFuseSwitched(evt?: MatSlideToggleChange, isEdit?: boolean):void {
    if (isEdit || evt.checked) {
      const dialogRef = this.dialog.open(FuseBitComponent, {
        width: "920px",
        scrollStrategy: this.overlay.scrollStrategies.noop(),
        data: this.microcontroller.fuses // passo al dialog le informazioni sui fuse bit
      })
      dialogRef.afterClosed().subscribe(result => {
        if (this.fuseBitConfigurationLength) {
          // se è stata fatta la configurazione dei fuse bit lascio acceso lo slider
          this.fuseBitSlider.checked = true;
        } else {
          this.fuseBitSlider.checked = false;
        }
      })
      // se lo slider viene spento svuoto le configurazioni dei fuse bit
    } else {
      this.driverService.fuseBitConfiguration = [];
    }
  }

  /**
   * Compilazione di un file .C preso localmente dalla propria macchina
   */
  selectAndCompileCProject() {
    this.loaderService.updateProcess(ProcessStatus.pending);
    let microcontrollerName = this.driverService.microcontrollerSelected.name;
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.compileCProject, [microcontrollerName]);
  }

  /**
   * Compilazione e flash di un file .C preso localmente dalla propria macchina
   */
  burnCProject() {
    this.loaderService.updateProcess(ProcessStatus.pending);
    let microcontrollerLabel = this.driverService.microcontrollerSelected.avrLabel;
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
