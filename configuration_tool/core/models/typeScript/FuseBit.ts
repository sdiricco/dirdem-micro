import { ConverterUtilities } from './Utilities/ConverterUtilities'

export class Fuse {
  //hexValue: string;
  get hexValue(): string {
    let result = 0;

    for (let i = this.bits.length-1 ; i >= 0; i--) {
      const bit = this.bits[i];
      let bitValue: number;
      bit.value? bitValue = 1 : bitValue = 0;
      result += (bitValue)*Math.pow(2, i);     
    }
    return ConverterUtilities.numberToHex(result)
  }
  set hexValue(hexValue) {
    this.hexValue = hexValue;
  } 
  type: FusesTypeEnum;
  bits: FuseBit [];
}

export interface FuseBit {
  label: FuseBitLabel;
  value: boolean;
}

export enum FusesTypeEnum {
  LOW = "LOW",
  HIGH = "HIGH",
  EXTENDED = "EXTENDED",
  LOCKBIT = "LOCKBIT"
}

export enum FuseBitLabel {
  CKSEL0 = "CKSEL0",
  CKSEL1 = "CKSEL1",
  CKSEL2 = "CKSEL2",
  CKSEL3 = "CKSEL3",
  SUT0 = "SUT0",
  SUT1 = "SUT1",
  CKOUT = "CKOUT",
  BOOTRST = "BOOTRST",
  BOOTSZ0 = "BOOTSZ0",
  BOOTSZ1 = "BOOTSZ1",
  EESAVE = "EESAVE",
  WDTON = "WDTON",
  SPIEN = "SPIEN",
  DWEN = "DWEN",
  CKDIV8 = "CKDIV8",
  BODLEVEL = "BODLEVEL",
  BODLEVEL0 = "BODLEVEL0",
  BODLEVEL1 = "BODLEVEL1",
  BODLEVEL2 = "BODLEVEL2",
  BODEN = "BODEN",
  OCDEN = "OCDEN",
  JTAGEN = "JTAGEN",
  CKOPT = "CKOPT", 
  RSTDISBL = "RSTDISBL",
  Bit0 = "Bit0",
  Bit1 = "Bit1",
  Bit2 = "Bit2",
  Bit3 = "Bit3",
  Bit4 = "Bit4",
  Bit5 = "Bit5",
  Bit6 = "Bit6",
  Bit7 = "Bit7"
}