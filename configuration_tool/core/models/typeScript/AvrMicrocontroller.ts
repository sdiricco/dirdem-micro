import { FuseBitLabel, FusesType, Fuse } from './FuseBit';
import { MicrocontrollerTimerNames, MicrocontrollerTimer } from './MicrocontrollerTimer';
import { ElectronicUnitMeasures, VoltageUnitMeasures, FrequencyUnitMeasures, OscillatorType, OscillatorMaterial, ElectronicUnit, Voltage, ElectronicOscillator } from './Utilities/ElectronicUtilities';
import { MicroBrand, MicroFamily, Microcontroller } from './Microcontroller';

export class AvrMicrocontroller extends Microcontroller {
    avrLabel: string;
    technicalSpecification: AvrMicrocontrollerTechnicalSpecification;
    fuses: Fuse [];     
    static getAvrMicrocontrollers(): AvrMicrocontroller [] {
        return AVR_MICROS;
    }
}

export class AvrMicrocontrollerTechnicalSpecification {
    pins: number;
    datasheet: string;
    imageSrc: string;
    pinoutImageSrc: string;
    minVoltage: Voltage;
    maxVoltage: Voltage;
    internalOscillator: ElectronicOscillator;
}


export const AVR_MICROS: AvrMicrocontroller [] =
    [
        {
            name: "ATmega328P",
            avrLabel: "m328p",
            brand: MicroBrand.Atmel,
            family: MicroFamily.AVR,

            technicalSpecification: 
            { 
                pins: 28,
                datasheet: "http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf",
                imageSrc: "assets/images/ATmega328P.png",
                pinoutImageSrc: "assets/images/ATmega328Ppinout.png",
                ram: { value: 8, measureUnit: ElectronicUnitMeasures.Kilobytes },
                sram: { value: 2048, measureUnit: ElectronicUnitMeasures.Bytes },
                flash: { value: 32, measureUnit: ElectronicUnitMeasures.Kilobytes },
                eprom: { value: 1024, measureUnit: ElectronicUnitMeasures.Bytes },
                dataBus: { size: 8, measureUnit: ElectronicUnitMeasures.Bit },
                minVoltage: { value: 1.8, measureUnit: VoltageUnitMeasures.V },
                maxVoltage: { value: 5.5, measureUnit: VoltageUnitMeasures.V },
                timers:  
                [
                    {
                        name: MicrocontrollerTimerNames.Timer0,
                        widthCounter: 8
                    },
                    {
                        name: MicrocontrollerTimerNames.Timer1,
                        widthCounter: 16
                    },
                    {
                        name: MicrocontrollerTimerNames.Timer2,
                        widthCounter: 8
                    }
                ],
                internalOscillator: { value: 8, measureUnit: FrequencyUnitMeasures.MHz, type: OscillatorType.Circuit, material: OscillatorMaterial.RC },
            },
            fuses:
                [
                    {
                        hexValue: '62',
                        type: FusesType.LOW,
                        bits:
                            [
                                { label: FuseBitLabel.CKDIV8, value: false },
                                { label: FuseBitLabel.CKOUT, value: true },
                                { label: FuseBitLabel.SUT1, value: true },
                                { label: FuseBitLabel.SUT0, value: false },
                                { label: FuseBitLabel.CKSEL3, value: false },
                                { label: FuseBitLabel.CKSEL2, value: false },
                                { label: FuseBitLabel.CKSEL1, value: true },
                                { label: FuseBitLabel.CKSEL0, value: false }                        
                            ]
                    },
                    {
                        hexValue: 'D9',
                        type: FusesType.HIGH,
                        bits:
                            [
                                { label: FuseBitLabel.RSTDISBL, value: true },
                                { label: FuseBitLabel.DWEN, value: true },
                                { label: FuseBitLabel.SPIEN, value: false },
                                { label: FuseBitLabel.WDTON, value: true },
                                { label: FuseBitLabel.EESAVE, value: true },
                                { label: FuseBitLabel.BOOTSZ1, value: false },
                                { label: FuseBitLabel.BOOTSZ0, value: false },
                                { label: FuseBitLabel.BOOTRST, value: true }                        
                            ]
                    }
                    /*
                    {
                        hexValue: 'FF',
                        type: FusesType.EXTENDED,
                        bits:
                            [
                                { label: FuseBitLabel.Bit7, value: true },
                                { label: FuseBitLabel.Bit6, value: true },
                                { label: FuseBitLabel.Bit5, value: true },
                                { label: FuseBitLabel.Bit4, value: true },
                                { label: FuseBitLabel.Bit3, value: true },
                                { label: FuseBitLabel.BODLEVEL2, value: true },
                                { label: FuseBitLabel.BODLEVEL1, value: true },
                                { label: FuseBitLabel.BODLEVEL0, value: true }                        
                            ]
                    },
                    {
                        hexValue: 'FF',
                        type: FusesType.LOCKBIT,
                        bits:
                            [
                                { label: FuseBitLabel.Bit7, value: true },
                                { label: FuseBitLabel.Bit6, value: true },
                                { label: FuseBitLabel.Bit5, value: true },
                                { label: FuseBitLabel.Bit4, value: true },
                                { label: FuseBitLabel.Bit3, value: true },
                                { label: FuseBitLabel.Bit2, value: true },
                                { label: FuseBitLabel.Bit1, value: true },
                                { label: FuseBitLabel.Bit0, value: true }                         
                            ]
                    } 
                 */                   
                ]
        },
        {
            name: "ATmega32",
            avrLabel: "m32",
            brand: MicroBrand.Atmel,
            family: MicroFamily.AVR,

            technicalSpecification: 
            {
                pins: 40,
                datasheet: "http://ww1.microchip.com/downloads/en/DeviceDoc/doc2503.pdf",
                imageSrc: "assets/images/ATmega32.png",
                pinoutImageSrc: "assets/images/ATmega32pinout.png",
                ram: { value: 8, measureUnit: ElectronicUnitMeasures.Kilobytes },
                sram: { value: 2048, measureUnit: ElectronicUnitMeasures.Bytes },
                flash: { value: 32, measureUnit: ElectronicUnitMeasures.Kilobytes },
                eprom: { value: 1024, measureUnit: ElectronicUnitMeasures.Bytes },
                dataBus: { size: 8, measureUnit: ElectronicUnitMeasures.Bit },
                minVoltage: { value: 2.7, measureUnit: VoltageUnitMeasures.V },
                maxVoltage: { value: 5.5, measureUnit: VoltageUnitMeasures.V },
                timers:  
                [
                    {
                        name: MicrocontrollerTimerNames.Timer0,
                        widthCounter: 8
                    },
                    {
                        name: MicrocontrollerTimerNames.Timer1,
                        widthCounter: 16
                    },
                    {
                        name: MicrocontrollerTimerNames.Timer2,
                        widthCounter: 8
                    }
                ],
                internalOscillator: { value: 8, measureUnit: FrequencyUnitMeasures.MHz, type: OscillatorType.Circuit, material: OscillatorMaterial.RC },
            },
            fuses:
                [
                    {
                        hexValue: '64',
                        type: FusesType.LOW,
                        bits:
                            [
                                { label: FuseBitLabel.BODLEVEL, value: false },
                                { label: FuseBitLabel.BODEN, value: true },
                                { label: FuseBitLabel.SUT1, value: true },
                                { label: FuseBitLabel.SUT0, value: false },
                                { label: FuseBitLabel.CKSEL3, value: false },
                                { label: FuseBitLabel.CKSEL2, value: false },
                                { label: FuseBitLabel.CKSEL1, value: true },
                                { label: FuseBitLabel.CKSEL0, value: false }                        
                            ]
                    },
                    {
                        hexValue: 'DE',
                        type: FusesType.HIGH,
                        bits:
                            [
                                { label: FuseBitLabel.OCDEN, value: true },
                                { label: FuseBitLabel.JTAGEN, value: true },
                                { label: FuseBitLabel.SPIEN, value: false },
                                { label: FuseBitLabel.CKOPT, value: true },
                                { label: FuseBitLabel.EESAVE, value: true },
                                { label: FuseBitLabel.BOOTSZ1, value: false },
                                { label: FuseBitLabel.BOOTSZ0, value: false },
                                { label: FuseBitLabel.BOOTRST, value: true }                        
                            ]
                    }
                    /*
                    {
                        hexValue: 'FF',
                        type: FusesType.LOCKBIT,
                        bits:
                            [
                                { label: FuseBitLabel.Bit7, value: true },
                                { label: FuseBitLabel.Bit6, value: true },
                                { label: FuseBitLabel.Bit5, value: true },
                                { label: FuseBitLabel.Bit4, value: true },
                                { label: FuseBitLabel.Bit3, value: true },
                                { label: FuseBitLabel.Bit2, value: true },
                                { label: FuseBitLabel.Bit1, value: true },
                                { label: FuseBitLabel.Bit0, value: true }                         
                            ]
                    } 
                 */             
                ]
        }
    ]

