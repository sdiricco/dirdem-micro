export class Microcontroller {
    name: string;
    avrLabel: string;
    brand: MicroBrand;
    family: MicroFamily;
}

export enum MicroFamily {
    AVR = "AVR"
}

export enum MicroBrand {
    Atmel = "Atmel"
}

