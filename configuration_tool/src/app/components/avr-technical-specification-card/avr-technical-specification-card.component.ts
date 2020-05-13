import { Component, OnInit, Input } from '@angular/core';
import { MicroService } from 'src/app/services/micro.service';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { MicrocontrollerPackageEnum } from 'core/models/typeScript/MicrocontrollerPins';

@Component({
  selector: 'app-avr-technical-specification-card',
  templateUrl: './avr-technical-specification-card.component.html',
  styleUrls: ['./avr-technical-specification-card.component.css']
})
export class AvrTechnicalSpecificationCardComponent implements OnInit {

  microcontroller: AvrMicrocontroller;
  get microcontrollerPackage(): MicrocontrollerPackageEnum { return this.microService.microcontrollerPackage };
  /**
   * se ritorna nullo il defaultPinCount non corrisponde alla somma dei pin nell'array pins in MicrocontrollerPinConfiguaration
   */
  get microcontrollerPinCount(): number {
    return this.microcontroller.pinCount(this.microService.microcontrollerPackage);
  }

  constructor(private microService: MicroService) { }

  ngOnInit(): void {
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    })
  }


}
