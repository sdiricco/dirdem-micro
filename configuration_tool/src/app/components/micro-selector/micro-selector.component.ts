import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';
import { MatSelectChange } from '@angular/material/select';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';

@Component({
  selector: 'app-micro-selector',
  templateUrl: './micro-selector.component.html',
  styleUrls: ['./micro-selector.component.css']
})
export class MicroSelectorComponent implements OnInit {
  microcontrollers: AvrMicrocontroller[];

  constructor(private driverService: DriverService) {
    this.microcontrollers = AvrMicrocontroller.getAvrMicrocontrollers()
  }

  ngOnInit(): void {
  }

  /**
   * Evento scatenato sulla selezione di un nuovo micro
   */
  onMicroSelected(evt: MatSelectChange):void {
    this.driverService.clearAllConfigurations();
    this.driverService.microcontrollerSelected = evt.value;
  }

}
