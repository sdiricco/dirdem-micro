import { ElelectronicMemory, MemoryUnitMeasures, VoltageUnitMeasures, Voltage, FrequencyUnitMeasure, ElectronicOscillator, OscillatorMaterial, OscillatorType } from './ElectronicUtilities';
import { FusesType, Fuse, FuseBits, FuseBitLabel } from './FuseBit';

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
    fuses: Fuse[];

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
                type: FusesType.LOW,
                bits:
                {
                    bit0: { label: FuseBitLabel.CKSEL0, bitValue: false },
                    bit1: { label: FuseBitLabel.CKSEL1, bitValue: false },
                    bit2: { label: FuseBitLabel.CKSEL2, bitValue: false },
                    bit3: { label: FuseBitLabel.CKSEL3, bitValue: false },
                    bit4: { label: FuseBitLabel.SUT0, bitValue: false },
                    bit5: { label: FuseBitLabel.SUT1, bitValue: false },
                    bit6: { label: FuseBitLabel.CKOUT, bitValue: false },
                    bit7: { label: FuseBitLabel.CKDIV8, bitValue: false }
                }
            },
            {
                type: FusesType.HIGH,
                bits:
                {
                    bit0: { label: FuseBitLabel.BOOTRST, bitValue: false },
                    bit1: { label: FuseBitLabel.BOOTSZ0, bitValue: false },
                    bit2: { label: FuseBitLabel.BOOTSZ1, bitValue: false },
                    bit3: { label: FuseBitLabel.EESAVE, bitValue: false },
                    bit4: { label: FuseBitLabel.WDTON, bitValue: false },
                    bit5: { label: FuseBitLabel.SPIEN, bitValue: false },
                    bit6: { label: FuseBitLabel.DWEN, bitValue: false },
                    bit7: { label: FuseBitLabel.RSTDISBL, bitValue: false }
                }
            },
            {
                type: FusesType.EXTENDED,
                bits:
                {
                    bit0: { label: FuseBitLabel.BODLEVEL0, bitValue: false },
                    bit1: { label: FuseBitLabel.BODLEVEL1, bitValue: false },
                    bit2: { label: FuseBitLabel.BODLEVEL2, bitValue: false },
                    bit3: { label: FuseBitLabel.Bit3, bitValue: false },
                    bit4: { label: FuseBitLabel.Bit4, bitValue: false },
                    bit5: { label: FuseBitLabel.Bit5, bitValue: false },
                    bit6: { label: FuseBitLabel.Bit6, bitValue: false },
                    bit7: { label: FuseBitLabel.Bit7, bitValue: false }
                }
            },
            {
                type: FusesType.LOCKBIT,
                bits:
                {
                    bit0: { label: FuseBitLabel.Bit0, bitValue: false },
                    bit1: { label: FuseBitLabel.Bit1, bitValue: false },
                    bit2: { label: FuseBitLabel.Bit2, bitValue: false },
                    bit3: { label: FuseBitLabel.Bit3, bitValue: false },
                    bit4: { label: FuseBitLabel.Bit4, bitValue: false },
                    bit5: { label: FuseBitLabel.Bit5, bitValue: false },
                    bit6: { label: FuseBitLabel.Bit6, bitValue: false },
                    bit7: { label: FuseBitLabel.Bit7, bitValue: false }
                }
            }
        ]
    }
]
