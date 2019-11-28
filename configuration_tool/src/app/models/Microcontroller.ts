import { ElelectronicMemory, MemoryUnitMeasures, VoltageUnitMeasures, Voltage, FrequencyUnitMeasure, ElectronicOscillator, OscillatorMaterial, OscillatorType } from './ElectronicUtilities';
import { FusesType } from './FuseBit';

export class Microcontroller {
    name: string;
    brand:MicroBrand;
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
    fuses: FusesType [] = [];

    static getMicrocontrollers(): Microcontroller[]{
        return ALL_MICROS;
    }
}

enum MicroFamily {
    AVR = "AVR"
}

enum MicroBrand {
    Atmel = "Atmel"
}

export const ALL_MICROS: Microcontroller[] = [{
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
    maxVoltage: {  value:5.5, measureUnit: VoltageUnitMeasures.V },
    totalTimers: 3,
    internalOscillator: { value: 8, measureUnit: FrequencyUnitMeasure.MHz, type: OscillatorType.Crystal, material: OscillatorMaterial.Quartz  },
    fuses: [FusesType.LOW, FusesType.HIGH, FusesType.EXTENDED, FusesType.LOCKBIT]
}]
