import { ElectronicUnit } from './Utilities/ElectronicUtilities';

export interface MemorySegment {
    memorySegmentName: MemorySegmentNamesEnum;
    memorySegmentValue: ElectronicUnit;
}

export enum MemorySegmentNamesEnum {
    Flash = "Flash",
    EEPROM = "EEPROM",
    SRAM = "SRAM"
}