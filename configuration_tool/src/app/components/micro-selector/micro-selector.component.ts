import { Component } from '@angular/core';
import { MicroService } from 'src/app/services/micro.service';
import { MatSelectChange } from '@angular/material/select';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { ATMEGA32 } from 'core/models/typeScript/Microcontrollers/ATmega32';
import { ATMEGA328P } from 'core/models/typeScript/Microcontrollers/ATmega328P';

@Component({
  selector: 'app-micro-selector',
  templateUrl: './micro-selector.component.html',
  styleUrls: ['./micro-selector.component.css']
})
export class MicroSelectorComponent {
  microSelected: AvrMicrocontroller;
  microcontrollers: AvrMicrocontroller [];

  constructor(private driverService: MicroService) {
    this.microcontrollers = this.generateMicocontrollersList();
  }

  /**
   * Evento scatenato sulla selezione di un nuovo micro
   */
  onMicroSelectChange(evt): void {
    this.driverService.clearAllConfigurations();
    this.driverService.updateMicrocontroller(this.microSelected);
    this.driverService.updateMicrocontrollerPinConfiguration(this.microSelected.microcontrollerPinConfigurations[0]);
  }

  /**
   * Generazione della lista di tutti i microcontrollori selezionabili
   */
  private generateMicocontrollersList(): AvrMicrocontroller [] {
    let microcontrollersList = [];
    /**
     * inserimento Atmega32
     */
    let atmega32 = new AvrMicrocontroller(ATMEGA32);
    microcontrollersList.push(atmega32);
    /**
     * inserimento Atmega328
     */
    let atmega328p = new AvrMicrocontroller(ATMEGA328P);
    microcontrollersList.push(atmega328p);
     /**
      * restituzione della lista valorizzata con i microcontrollori
      */
     return microcontrollersList;
  }

}
