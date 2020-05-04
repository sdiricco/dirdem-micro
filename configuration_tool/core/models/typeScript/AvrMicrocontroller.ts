import { FuseBitLabel, FusesType, Fuse } from './FuseBit';
import { MicroBrand, MicroFamily, Microcontroller } from './Microcontroller';

export class AvrMicrocontroller extends Microcontroller {
    avrLabel: string;
    fuses: Fuse [];     
}


