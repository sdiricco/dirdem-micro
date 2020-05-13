import { Component, OnInit } from '@angular/core';
import { MicroService } from 'src/app/services/micro.service';
import { MatSelectChange } from '@angular/material/select';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { ATMEGA32 } from 'core/models/typeScript/Microcontrollers/ATmega32';

@Component({
  selector: 'app-micro-selector',
  templateUrl: './micro-selector.component.html',
  styleUrls: ['./micro-selector.component.css']
})
export class MicroSelectorComponent implements OnInit {
  microcontrollers: AvrMicrocontroller [];

  constructor(private driverService: MicroService) {
    this.microcontrollers = this.generateMicocontrollersList();
  }

  ngOnInit(): void {
  }

  /**
   * Evento scatenato sulla selezione di un nuovo micro
   */
  onMicroSelected(evt: MatSelectChange):void {
    this.driverService.clearAllConfigurations();
    this.driverService.updateMicrocontroller(evt.value);
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
     * inserimento Atmega328 toDo
     */

     /**
      * restituzione della lista valorizzata con i microcontrollori
      */
     return microcontrollersList;
  }

}
