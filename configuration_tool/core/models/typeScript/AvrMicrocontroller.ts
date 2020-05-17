import { Fuse, FusesTypeEnum } from './FuseBit';
import { MicrocontrollerBase } from './Microcontroller';

export class AvrMicrocontrollerBase extends MicrocontrollerBase {
  avrLabel: string;
  fuses: Fuse [] = [];
}


export class AvrMicrocontroller extends AvrMicrocontrollerBase {
  constructor(avrMicrocontrollerBase?: AvrMicrocontrollerBase) {
    if (avrMicrocontrollerBase) {
      super(avrMicrocontrollerBase);
      this.avrLabel = avrMicrocontrollerBase.avrLabel;
      avrMicrocontrollerBase.fuses.forEach(fuse => {
        this.fuses.push(new Fuse(fuse.defaultBits, fuse.type));
      })
    }
  }

  /**
   * Imposta i fuses letti da avrdude dentro ai fuses del microcontrollore
   * @param fusesReaded Fuse bit letti restituiti dalla lettura di Avrdude
   */
  setFusesReaded(fusesReaded: { type: FusesTypeEnum, hexValue: string }[]) {
    fusesReaded.forEach(fr => {
      let hexValueReaded = fr.hexValue.substring(fr.hexValue.indexOf('x') + 1, fr.hexValue.indexOf('\n'));
      let matchingFuse = this.fuses.find(fuse => fuse.type == fr.type);
      matchingFuse.updateFuseByHexValue(hexValueReaded);
    })
  }

  /**
  * Converte il tipo di fuse bit nel tipo di fuse di Avrdude
  */
  static fuseBitTypeToAvrdudeFuseBitType(fuseType: FusesTypeEnum): AvrdudeFuseTypeEnum {
    switch (fuseType) {
      case FusesTypeEnum.LOW:
        return AvrdudeFuseTypeEnum.lfsue;
      case FusesTypeEnum.HIGH:
        return AvrdudeFuseTypeEnum.hfuse;
      case FusesTypeEnum.EXTENDED:
        return AvrdudeFuseTypeEnum.efuse;
      case FusesTypeEnum.LOCKBIT:
        return AvrdudeFuseTypeEnum.lock;
      default:
        break;
    }
  }
}


export enum AvrdudeFuseTypeEnum {
  lfsue = 'lfuse',
  hfuse = 'hfuse',
  efuse = 'efuse',
  lock = 'lock'
}