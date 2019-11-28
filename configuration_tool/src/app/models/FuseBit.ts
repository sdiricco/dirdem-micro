export class FuseBitConfig {
  constructor(public lowFuse?: Fuse, public highFuse?: Fuse, public extendedFuse?: Fuse, public lockibitFuse?: Fuse)
  {

  }
}

class Fuse {
  bit0: boolean;
  bit1: boolean;
  bit2: boolean;
  bit3: boolean;
  bit4: boolean;
  bit5: boolean;
  bit6: boolean;
  bit7: boolean;
}

export enum FusesType {
  LOW,
  HIGH,
  EXTENDED,
  LOCKBIT
}
