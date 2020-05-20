import { Component, OnInit } from '@angular/core';
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
  microcontrollerPackage: MicrocontrollerPackageEnum;
  flashPackageOutput: boolean = false;
  /**
   * se ritorna nullo il defaultPinCount non corrisponde alla somma dei pin nell'array pins in MicrocontrollerPinConfiguaration
   */
  get microcontrollerPinCount(): number {
    return this.microcontroller.pinCount(this.microcontrollerPackage);
  }

  get microcontrollerIoLines(): number {
    return this.microcontroller.programmableIoLines(this.microcontrollerPackage);
  }

  get operatingVoltagesStringify(): string {
    let orderedvalues = this.microcontroller.electricalCharateristics.operatingVoltageRange.sort((a, b) => {
      return a.value - b.value;
    })
    return `${orderedvalues[0].value} ${orderedvalues[0].measureUnit} - ${orderedvalues[1].value} ${orderedvalues[1].measureUnit}`;
  }

  constructor(private microService: MicroService) { }

  ngOnInit(): void {
    /**
     * Sottoscrizione al cambiamento del microcotrollore selezionato
     */
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    })
    /**
     * Sottoscrizione al cambiamento del package del microcotrollore
     */
    this.microService.microcontrollerPackage.subscribe(microcontrollerPackage => {
      this.microcontrollerPackage = microcontrollerPackage;
      this.fireFlashingPackageOutput();
    })
  }

  /**
   * Scatena il flashing dell'output contenente il package del microcontrollore
   */
  private fireFlashingPackageOutput(): void {
    this.flashPackageOutput = true;
    setTimeout(() => {
      this.flashPackageOutput = false;
    }, 2000);
  }

}
