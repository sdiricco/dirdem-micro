import { Fuse } from './FuseBit';
import { MicrocontrollerBase } from './Microcontroller';
import { MicrocontrollerPackageEnum, PinTypesEnum } from './MicrocontrollerPins';

export class AvrMicrocontrollerBase extends MicrocontrollerBase {
  avrLabel: string;
  fuses: Fuse[];
}

export class AvrMicrocontroller {
  avrMicrocontrollerBase: AvrMicrocontrollerBase;

  constructor(avrMicrocontrollerBase?: AvrMicrocontrollerBase) {
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

  /**
   * Restituisce il numero delle I/O lines programmabili
   * @param microcontrollerPackage Tipo di package per il quale si vuole conoscere il numero di I/O lines
   */
  programmableIoLines(microcontrollerPackage: MicrocontrollerPackageEnum): number {
    let pinConfiguration = this.avrMicrocontrollerBase.microcontrollerPinConfigurations.find(config => {
      return config.microcontrollerPackage == microcontrollerPackage;
    })
    let ioLines = pinConfiguration.pins.filter(pin => {
      return pin.pinType == PinTypesEnum.IO
    })

    return ioLines.length;
  }

}


