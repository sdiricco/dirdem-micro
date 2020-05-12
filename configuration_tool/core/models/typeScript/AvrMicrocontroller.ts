import { FuseBitLabel, FusesType, Fuse } from './FuseBit';
import { MicroBrandsEnum, MicroFamiliesEnum, MicrocontrollerBase } from './Microcontroller';
import { AvrTechnicalSpecificationCardComponent } from 'src/app/components/avr-technical-specification-card/avr-technical-specification-card.component';
import { ATMEGA32 } from './Microcontrollers/ATmega32';
import { MicrocontrollerPackageEnum } from './MicrocontrollerPins';

export class AvrMicrocontrollerBase extends MicrocontrollerBase {
  avrLabel: string;
  fuses: Fuse[];
}

export class AvrMicrocontroller extends AvrMicrocontrollerBase {
  avrMicrocontrollerBase: AvrMicrocontrollerBase;

  constructor(avrMicrocontrollerBase?: AvrMicrocontrollerBase) {
    super();
    if (avrMicrocontrollerBase) {
      this.avrMicrocontrollerBase = avrMicrocontrollerBase;
    }
  }

  // funzioni

  /**
   * Restituiscre il numero di Pin di un dato Microcontrollore
   * @param microcontrollerPackage Tipo di package per il quale si vuole conoscere il numero di pin
   */
  pinCount(microcontrollerPackage: MicrocontrollerPackageEnum): number {
    let pinConfiguration = this.avrMicrocontrollerBase.microcontrollerPinConfigurations.find(config => {
      return config.microcontrollerPackage == microcontrollerPackage;
    })
    let pc = pinConfiguration.pins.length;
    if (pc == pinConfiguration.defaultPinCount) {
      return pc;
    } else {
      return null;
    }
  };

}


