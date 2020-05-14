export class MicrocontrollerPins {
    microcontrollerPackage: MicrocontrollerPackageEnum; 
    defaultPinCount: number;
    pinoutImagesSrc?: string [];
    pins?: Pin [];
}

export enum MicrocontrollerPackageEnum{
    PDIP = "PDIP",
    TQFP = "TQFP",
    MLF = "MLF"
} 

export class Pin {
    number: number;
    pinLabels: PinLabelsEnum [];
    pinType: PinTypesEnum;
    pinPort?: PinPortsEnum;
    pinDisabled?: boolean;
    pinColor?: string;
}
 

export enum PinLabelsEnum {
    PA0 = "PA0",
    PA1 = "PA1",
    PA2 = "PA2",
    PA3 = "PA3",
    PA4 = "PA4",
    PA5 = "PA5",
    PA6 = "PA6",
    PA7 = "PA7",
    PB0 = "PB0",
    PB1 = "PB1",
    PB2 = "PB2",
    PB3 = "PB3",
    PB4 = "PB4",
    PB5 = "PB5",
    PB6 = "PB6",
    PB7 = "PB7",
    PC0 = "PC0",
    PC1 = "PC1",
    PC2 = "PC2",
    PC3 = "PC3",
    PC4 = "PC4",
    PC5 = "PC5",
    PC6 = "PC6",
    PC7 = "PC7",
    PD0 = "PD0",
    PD1 = "PD1",
    PD2 = "PD2",
    PD3 = "PD3",
    PD4 = "PD4",
    PD5 = "PD5",
    PD6 = "PD6",
    PD7 = "PD7",
    ADC0 = "ADC0",
    ADC1 = "ADC1",
    ADC2 = "ADC2",
    ADC3 = "ADC3",
    ADC4 = "ADC4",
    ADC5 = "ADC5",
    ADC6 = "ADC6",
    ADC7 = "ADC7",
    T0 = "T0",
    T1 = "T1",
    INT0 = "INT0",
    INT1 = "INT1",
    INT2 = "INT2",
    AIN0 = "AIN0",
    AIN1 = "AIN1",
    OC0 = "OC0",
    OC1A = "OC1A",
    OC1B = "OC1B",
    OC2 = "OC2",
    ICP1 = "ICP1",
    MOSI = "MOSI",
    MISO = "MISO",
    XCK = "XCK", 
    SCK = "SCK",
    RXD = "RXD",
    TXD = "TXD",
    TDI = "TDI",
    TDO = "TDO",
    TMS = "TMS",
    TCK = "TCK",
    SDA = "SDA",
    SCL = "SCL",
    SS = "SS",
    RESET = "RESET",
    VCC = "VCC",
    GND = "GND",
    AVCC = "AVCC",
    AREF = "AREF",
    XTAL1 = "XTAL1",
    XTAL2 = "XTAL2",
    TOSC2 = "TOSC2",
    TOSC1 = "TOSC1",

    //ATMEGA328P
    PCINT0 = "PCINT0",
    PCINT1 = "PCINT1",
    PCINT2 = "PCINT2",
    PCINT3 = "PCINT3",
    PCINT4 = "PCINT4",
    PCINT5 = "PCINT5",
    PCINT6 = "PCINT6",
    PCINT7 = "PCINT7",
    PCINT8 = "PCINT8",
    PCINT9 = "PCINT9",
    PCINT10 = "PCINT10",
    PCINT11 = "PCINT12",
    PCINT13 = "PCINT13",
    PCINT14 = "PCINT14",
    PCINT15 = "PCINT15",
    PCINT16 = "PCINT16",
    PCINT17 = "PCINT17",
    PCINT18 = "PCINT18",
    PCINT19 = "PCINT19",
    PCINT20 = "PCINT20",
    PCINT21 = "PCINT21",
    PCINT22 = "PCINT22",
    PCINT23 = "PCINT23",
}

export enum PinTypesEnum {
    I = "I",
    O = "O",
    IO = "IO"
}

export enum PinPortsEnum {
    PORTA = "PORTA",
    PORTB = "PORTB",
    PORTC = "PORTC",
    PORTD = "PORTD"
}