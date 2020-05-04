export class MicrocontrollerPins {
    defaultPinCount: number;
    pins: Pin [];
    get pinCount(): number 
    { 
        let pc = this.pins.length;
        if (pc == this.defaultPinCount ) {
            return pc;
        } else {
            return null;
        }
    };
}

export class Pin {
    number: number;
    labels: PinLabelsEnum [];
    types?: PinTypesEnum [];
    port?: PinPortsEnum;
    disabled?: boolean;
    color?: string;
}

export enum PinLabelsEnum {
    XCK = "XCK", 
    T0 = "T0",
    T1 = "T1",
    INT2 = "INT2",
    AIN0 = "AIN0",
    AIN1 = "AIN1",
    OC0 = "OC0",
    SS = "SS",
    MOSI = "MOSI",
    MISO = "MISO",
    SCK = "SCK",
    RESET = "RESET",
    VCC = "VCC",
    GND = "GND",
    XTAL1 = "XTAL1",
    XTAL2 = "XTAL2",
    RXD = "RXD",
    TXD = "TXD",
    INT0 = "INT0",
    INT1 = "INT1",
    OC1A = "OC1A",
    OC1B = "OC1B",
    OC2 = "OC2",
    ICP1 = "ICP1",
    AREF = "AREF",
    AVCC = "AVCC",
    TOSC2 = "TOSC2",
    TOSC1 = "TOSC1",
    TDI = "TDI",
    TDO = "TDO",
    TMS = "TMS",
    TCK = "TCK",
    SDA = "SDA",
    SCL = "SCL",
    ADC1 = "ADC1",
    ADC2 = "ADC2",
    ADC3 = "ADC3",
    ADC4 = "ADC4",
    ADC5 = "ADC5",
    ADC6 = "ADC6",
    ADC7 = "ADC7",
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