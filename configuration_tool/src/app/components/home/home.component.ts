import { FuseBitComponent } from '../fuse-bit/fuse-bit.component';
import { Component, ViewChild } from "@angular/core";
import { Microcontroller } from "../../../../../core/models/typeScript/Microcontroller";
import { MicroPinoutDialogComponent } from "../micro-pinout-dialog/micro-pinout-dialog.component";
import { GptCfgConfigComponent } from "../gpt-config/gpt-config.component";
import { DriverService } from "src/app/services/driver.service";
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ElectronService } from 'ngx-electron';
import { MainProcessMethods } from '../../../../../core/models/typeScript/RenderToMainMethods';
import { MainProcessDataService } from 'src/app/services/main-process-data.service';


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
    private mainProcessDataService: MainProcessDataService,
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
      data: null
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
    this.mainProcessDataService.isPendingProcess = true;
    let microcontrollerName = this.driverService.microcontrollerSelected.name;
    this.electronService.ipcRenderer.send(MainProcessMethods.compileCProject, [microcontrollerName]);
  }

  /**
   * Compilazione e flash di un file .C preso localmente dalla propria macchina
   */
  burnCProject() {
    this.mainProcessDataService.isPendingProcess = true;
    let microcontrollerLabel = this.driverService.microcontrollerSelected.avrLabel;
    let hexFilePath = this.driverService.compiledHexFilePath;
    this.electronService.ipcRenderer.send(MainProcessMethods.burnCProject, [microcontrollerLabel, hexFilePath]);
  }

  /**
   * Flash del bootloader di Arduino UNO su microcontrollore ATMega328p
   */
  burnArduinoUnoBootloader() {
    this.mainProcessDataService.isPendingProcess = true;
    this.electronService.ipcRenderer.send(MainProcessMethods.burnUnoBootloader);
  }

}
