import { ElelectronicMemory, MemoryUnitMeasures, VoltageUnitMeasures, Voltage, FrequencyUnitMeasure, ElectronicOscillator, OscillatorMaterial, OscillatorType } from './Utilities/ElectronicUtilities';
import { FusesType, Fuse, FuseBitLabel } from './FuseBit';

export class Microcontroller {
    name: string;
    brand: MicroBrand;
    family: MicroFamily;
    pins: number;
    datasheet: string;
    imageSrc: string;
    pinoutImageSrc: string;
    ram: ElelectronicMemory;
    sram: ElelectronicMemory;
    flash: ElelectronicMemory;
    eprom: ElelectronicMemory;
    dataBus: ElelectronicMemory;
    minVoltage: Voltage;
    maxVoltage: Voltage;
    totalTimers: number;
    internalOscillator: ElectronicOscillator;
    fuses: Fuse[];                              // dall'ultimo al primo

    static getMicrocontrollers(): Microcontroller[] {
        return ALL_MICROS;
    }
}

enum MicroFamily {
    AVR = "AVR"
}

enum MicroBrand {
    Atmel = "Atmel"
}

export const ALL_MICROS: Microcontroller[] =
    [
        {
            name: "ATMega328p",
            brand: MicroBrand.Atmel,
            family: MicroFamily.AVR,
            pins: 28,
            datasheet: "http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf",
            imageSrc: "assets/images/ATMega328.png",
            pinoutImageSrc: "assets/images/ATMega328pinout.png",
            ram: { size: 8, measureUnit: MemoryUnitMeasures.Kilobytes },
            sram: { size: 2048, measureUnit: MemoryUnitMeasures.Bytes },
            flash: { size: 32, measureUnit: MemoryUnitMeasures.Kilobytes },
            eprom: { size: 1024, measureUnit: MemoryUnitMeasures.Bytes },
            dataBus: { size: 8, measureUnit: MemoryUnitMeasures.Bit },
            minVoltage: { value: 1.8, measureUnit: VoltageUnitMeasures.V },
            maxVoltage: { value: 5.5, measureUnit: VoltageUnitMeasures.V },
            totalTimers: 3,
            internalOscillator: { value: 8, measureUnit: FrequencyUnitMeasure.MHz, type: OscillatorType.Crystal, material: OscillatorMaterial.Quartz },
            fuses:
                [
                    {
                        hexValue: '0',
                        type: FusesType.LOW,
                        bits:
                            [
                                { label: FuseBitLabel.CKDIV8, value: false },
                                { label: FuseBitLabel.CKOUT, value: false },
                                { label: FuseBitLabel.SUT1, value: false },
                                { label: FuseBitLabel.SUT0, value: false },
                                { label: FuseBitLabel.CKSEL3, value: false },
                                { label: FuseBitLabel.CKSEL2, value: false },
                                { label: FuseBitLabel.CKSEL1, value: false },
                                { label: FuseBitLabel.CKSEL0, value: false }                        
                            ]
                    },
                    {
                        hexValue: '0',
                        type: FusesType.HIGH,
                        bits:
                            [
                                { label: FuseBitLabel.RSTDISBL, value: false },
                                { label: FuseBitLabel.DWEN, value: false },
                                { label: FuseBitLabel.SPIEN, value: false },
                                { label: FuseBitLabel.WDTON, value: false },
                                { label: FuseBitLabel.EESAVE, value: false },
                                { label: FuseBitLabel.BOOTSZ1, value: false },
                                { label: FuseBitLabel.BOOTSZ0, value: false },
                                { label: FuseBitLabel.BOOTRST, value: false }                        
                            ]
                    },
                    {
                        hexValue: '0',
                        type: FusesType.EXTENDED,
                        bits:
                            [
                                { label: FuseBitLabel.Bit7, value: false },
                                { label: FuseBitLabel.Bit6, value: false },
                                { label: FuseBitLabel.Bit5, value: false },
                                { label: FuseBitLabel.Bit4, value: false },
                                { label: FuseBitLabel.Bit3, value: false },
                                { label: FuseBitLabel.BODLEVEL2, value: false },
                                { label: FuseBitLabel.BODLEVEL1, value: false },
                                { label: FuseBitLabel.BODLEVEL0, value: false }                        
                            ]
                    },
                    {
                        hexValue: '0',
                        type: FusesType.LOCKBIT,
                        bits:
                            [
                                { label: FuseBitLabel.Bit7, value: false },
                                { label: FuseBitLabel.Bit6, value: false },
                                { label: FuseBitLabel.Bit5, value: false },
                                { label: FuseBitLabel.Bit4, value: false },
                                { label: FuseBitLabel.Bit3, value: false },
                                { label: FuseBitLabel.Bit2, value: false },
                                { label: FuseBitLabel.Bit1, value: false },
                                { label: FuseBitLabel.Bit0, value: false }                         
                            ]
                    }                    
                ]
        }
    ]
