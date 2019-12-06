import { FuseBitComponent } from '../fuse-bit/fuse-bit.component';
import { Component, OnInit, ViewChild } from "@angular/core";
import { Microcontroller } from "src/app/models/Microcontroller";
import {
  MatDialog,
  MatSlideToggleChange,
  MatSlideToggle
} from "@angular/material";
import { MicroPinoutDialogComponent } from "../micro-pinout-dialog/micro-pinout-dialog.component";
import { GptCfgConfigComponent } from "../gpt-config/gpt-config.component";
import { DriverService } from "src/app/services/driver.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  // proprietà che è vera se è presente almeno una configurazione del gpt (di qualsiasi tipo) nel driverService per abilitazione tasto wizard
  get thereAreGptConfigurations(): boolean {
    if (this.driverService.gptDriverConfigurations.length) {
      return true;
    } else {
      return false;
    }
  }
  get gptConfigurationsLength() {
    return this.driverService.gptDriverConfigurations.length;
  }
  get fuseBitConfiguration() {
    return this.driverService.fuseBitConfiguration;
  }
  // sliders
  @ViewChild("slider1", { static: false }) gptDriverSlider: MatSlideToggle;
  @ViewChild("slider4", { static: false }) fuseBitSlider: MatSlideToggle;
  //
  microcontroller = new Microcontroller();
  microcontrollers: Microcontroller[];
  // configurazioni da inserire nel div html che servirà per scaricare il file .C
  gptConfigurations = this.driverService.gptDriverConfigurations;

  constructor(
    public dialog: MatDialog,
    private driverService: DriverService,
    private toast: ToastrService
  ) {
    this.microcontrollers = Microcontroller.getMicrocontrollers();
  }

  // evento scatenato sulla selezione di un nuovo micro
  onMicroSelected() {
    // il microcontroller viene assegnato con il binding sul template html
    console.log(this.microcontroller);
  }
  // evento scatenato al passagio del mouse sopra l'immagine
  showPinout() {
    const dialogRef = this.dialog.open(MicroPinoutDialogComponent, {
      data: { microcontroller: this.microcontroller }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  // genera il file di configurazione in base ai dati presenti nel driverService
  generateConfig() {
    // file c da scaricare (contenuto dentro il div invisibile)
    let cFile = document.getElementById("cFileToDownload").innerText;
    this.driverService.generateGptConfigFile(cFile);
    this.toast.success("Download success!");
  }

  /*
   * eventi su tasti slider ** isEdit è passato true solo nel caso in cui vine premuto il tasto per la modifica
   */
  // su driver gpt //
  onGptDriverSwitched(evt?: MatSlideToggleChange, isEdit?: boolean) {
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
      this.driverService.gptDriverConfigurations = [];
    }
  }
  // su fuse bit
  onFuseSwitched(evt?: MatSlideToggleChange, isEdit?: boolean) {
    if (isEdit || evt.checked) {
      const dialogRef = this.dialog.open(FuseBitComponent, {
        width: "920px",
        data: this.microcontroller.fuses // passo al dialog le informazioni sui fuse bit
      })
      dialogRef.afterClosed().subscribe(result => {
        if (this.fuseBitConfiguration) {
          // se è stata fatta la configurazione dei fuse bit lascio acceso lo slider
          this.fuseBitSlider.checked = true;
        } else {
          this.fuseBitSlider.checked = false;
        }
      })
      // se lo slider viene spento svuoto le configurazioni dei fuse bit
    } else {
      this.driverService.fuseBitConfiguration = null;
    }
  }
}
