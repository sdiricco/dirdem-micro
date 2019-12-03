// configurazione che viene valorizzata nel servizio DriverService
export class FuseBitConfig {
  lowFuse?: Fuse;
  highFuse?: Fuse;
  extendedFuse?: Fuse;
  lockbitFuse?: Fuse;
}

export interface Fuse {
  type: FusesType;
  bits: FuseBits;
}

export interface FuseBits {
  bit0: FuseBit;
  bit1: FuseBit;
  bit2: FuseBit;
  bit3: FuseBit;
  bit4: FuseBit;
  bit5: FuseBit;
  bit6: FuseBit;
  bit7: FuseBit;
}

// singolo bit contente il valore (0 o 1) e l'etichetta (nome) del bit stesso es. CKSEL0
interface FuseBit {
  label: FuseBitLabel;
  bitValue: boolean;
}

export enum FusesType {
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
  BODLEVEL0 = "BODLEVEL0",
  BODLEVEL1 = "BODLEVEL1",
  BODLEVEL2 = "BODLEVEL2",
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