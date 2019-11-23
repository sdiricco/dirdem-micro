import { Component, OnInit, ViewChild } from '@angular/core';
import { Microcontroller } from 'src/app/models/Microcontroller';
import { MatDialog, MatSlideToggleChange, MatSlideToggle } from '@angular/material';
import { MicroPinoutDialogComponent } from '../micro-pinout-dialog/micro-pinout-dialog.component';
import { GptCfgConfigComponent } from '../gpt-config/gpt-config.component';
import { DriverService } from 'src/app/services/driver.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // proprietà che è vera se è presente almeno una configurazione (di qualsiasi tipo) nel driverService
  get thereAreConfigurations(): boolean {
    if (this.driverService.gptDriverConfigurations.length) {
      return true;
    } else {
      return false;
    }
  };
  get gptConfigurationsLength() { return this.driverService.gptDriverConfigurations.length }
  // sliders
  @ViewChild('slider1', { static: false }) gptDriverSlider: MatSlideToggle;
  //
  microcontroller = new Microcontroller();
  microcontrollers: Microcontroller[];


  constructor(public dialog: MatDialog, private driverService: DriverService, private toast: ToastrService) {
    this.microcontrollers = Microcontroller.getMicrocontrollers();
  }

  // evento scatenato sulla selezione di un nuovo micro
  onMicroSelected() {
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
    this.driverService.generateGptConfigFile();
    this.toast.success("Download success!");
  }

  /*
   * eventi su tasti slider
   */
  onGptDriverSwitched(evt?: MatSlideToggleChange, isEdit?: boolean) {
    // se lo slider virene acceso
    if (isEdit || evt.checked) {
      const dialogRef = this.dialog.open(GptCfgConfigComponent, {
        width: '920px',
        data: null
      });
      dialogRef.afterClosed().subscribe(result => {
        if (this.gptConfigurationsLength > 0) {
          // se ci sono configurazioni nel driverService lascio abilitato lo slider, altrimenti lo spengo
          this.gptDriverSlider.checked = true
        } else {
          this.gptDriverSlider.checked = false;
        }
      })
    }
    // se lo slider viene spento
    else {
      this.driverService.gptDriverConfigurations = [];
    }
  }
}
