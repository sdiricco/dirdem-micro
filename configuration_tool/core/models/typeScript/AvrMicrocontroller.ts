import { Fuse } from './FuseBit';
import { MicrocontrollerBase } from './Microcontroller';

export class AvrMicrocontrollerBase extends MicrocontrollerBase {
  avrLabel: string;
  fuses: Fuse[];
}


export class AvrMicrocontroller extends AvrMicrocontrollerBase {
  constructor(avrMicrocontrollerBase?: AvrMicrocontrollerBase) {
    if (avrMicrocontrollerBase) {
      super(avrMicrocontrollerBase);
      this.avrLabel  = avrMicrocontrollerBase.avrLabel;
      this.fuses = avrMicrocontrollerBase.fuses;
    }
  }
}


export enum AvrdudeFuseTypeEnum {
  lfsue = 'lfuse',
  hfuse = 'hfuse',
  efuse = 'efuse',
  lock = 'lock'
}