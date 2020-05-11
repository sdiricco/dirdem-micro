import { ElectronicUnit } from './Utilities/ElectronicUtilities';

export class MemorySegment {
    memorySegmentName: MemorySegmentNamesEnum;
    memorySegmentValue: ElectronicUnit;
}

export enum MemorySegmentNamesEnum {
    Flash = "Flash",
    EEPROM = "EEPROM",
    SRAM = "SRAM"
}