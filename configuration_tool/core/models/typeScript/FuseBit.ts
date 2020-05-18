import { ConverterUtilities } from './Utilities/ConverterUtilities';

export class FuseBase {
  type: FusesTypeEnum;
  defaultBits: FuseBit[];
}

export class Fuse extends FuseBase {
  private _hexValue: string;
  get hexValue(): string { return this._hexValue };

  private _bits: FuseBit[];
  get bits(): FuseBit[] { return this._bits };

  /**
  * Aggiorna l'oggetto fuse attraverso un valore esadecimale
  * @param newHexValue Valore esadeciamale aggiornato
  */
  updateFuseByHexValue(newHexValue: string) {
    this._hexValue = newHexValue;
    let decValue = ConverterUtilities.hexToDec(newHexValue);
    this._bits.forEach(fuseBit => {
      fuseBit.value = ((decValue >> fuseBit.bit) & 1) == 1 ? true : false;
    })
    console.log(this.bits);
  }

  /**
  * Aggiorna l'oggetto fuse attraverso un array di FuseBit
  * @param fuseBitArray Array di FuseBit aggiornato
  */
  updateFuseByFuseBitArray(fuseBitArray: FuseBit[]) {
    this._bits = fuseBitArray;
    this._hexValue = this.fuseBitArrayToHex(fuseBitArray);
  }

  /**
  * Converte un array di FuseBit in una numero esadecimale
  */
  fuseBitArrayToHex(fuseBits: FuseBit[]): string {
    let decValue = this.fuseBitArrayToDec(fuseBits);
    return ConverterUtilities.decToHex(decValue);
  }

  /**
  * Converte un array di 8 bit in un numero intero segna segno (max 255)
  */
  fuseBitArrayToDec(fuseBits: FuseBit[]): number {
    let result = 0;
    fuseBits.forEach(fuseBit => {
      if (fuseBit.value) {
        result += Math.pow(2, fuseBit.bit);
      }
    })
    return result;
  }

  constructor(deafultBits: FuseBit[], fuseType: FusesTypeEnum) {
    super();
    this.updateFuseByFuseBitArray(deafultBits);
    this.type = fuseType;
  }


  /**
  * prop vera quando il fuse bit è stato letto o scritto
  */
  defined?: boolean;
}

export class FuseBit {
  label: FuseBitLabel;
  value: boolean;
  bit: number;
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
