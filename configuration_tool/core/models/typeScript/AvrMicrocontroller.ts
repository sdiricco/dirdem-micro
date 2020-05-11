import { FuseBitLabel, FusesType, Fuse } from './FuseBit';
import { MicroBrand, MicroFamily, MicrocontrollerBase } from './Microcontroller';
import { AvrTechnicalSpecificationCardComponent } from 'src/app/components/avr-technical-specification-card/avr-technical-specification-card.component';
import { ATMEGA32 } from './Microcontrollers/ATmega32';
import { MicrocontrollerPackageEnum } from './MicrocontrollerPins';

export class AvrMicrocontrollerBase extends MicrocontrollerBase {
    avrLabel: string;
    fuses: Fuse [];     
}

export class AvrMicrocontroller extends AvrMicrocontrollerBase {
    avrMicrocontrollerBase: AvrMicrocontrollerBase;
    pinCount(microcontrollerPackage: MicrocontrollerPackageEnum): number 
    { 
        let pinConfiguration = this.avrMicrocontrollerBase.microcontrollerPinConfigurations.find(config => {
            return config.microcontrollerPackage == microcontrollerPackage;
        })
        let pc = this.avrMicrocontrollerBase.microcontrollerPinConfigurations.length;
        if (pc == pinConfiguration.defaultPinCount) {
            return pc;
        } else {
            return null;
        }
    };
    constructor(avrMicrocontrollerBase: AvrMicrocontrollerBase) {
        super();
        this.avrMicrocontrollerBase = avrMicrocontrollerBase;
    }  

}


