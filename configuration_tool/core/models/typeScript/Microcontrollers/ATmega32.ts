import { AvrMicrocontrollerBase } from '../AvrMicrocontroller';
import { MicroBrand, MicroFamily } from '../Microcontroller';
import { ElectronicUnitMeasuresEnum, FrequenciesMeasureUnitEnum, VoltageUnitMeasuresEnum, TemperatureMeasuresEnum, CurrentsMeasureUnitEnum } from '../Utilities/ElectronicUtilities';
import { MicrocontrollerTimerNames } from '../PeripheralFeatures';
import { PinLabelsEnum, MicrocontrollerPackageEnum } from '../MicrocontrollerPins';
import { CommunicationInterfaceNamesEnum, CommunicationInterfaceTypesEnum } from '../CommunicationInterfaces';
import { FusesType as FusesTypeEnum, FuseBitLabel as FuseBitLabelEnum } from '../FuseBit';
import { ClockFrequenciesOscillatorTypeEnum, ClockFrequenciesOscillatorMaterialEnum, PowerConsumptionModeNamesEnum } from '../ElectricalCharateristics';
import { MemorySegmentNamesEnum } from '../MemorySegment';

export const ATMEGA32: AvrMicrocontrollerBase = 
{
    name: "ATmega32",
    brand: MicroBrand.Atmel,
    family: MicroFamily.AVR,
    datasheetUrl: "http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf",
    imagesSrc:
    [
        "assets/images/ATmega32.png"
    ],
    pinoutImagesSrc:
    [
        "assets/images/ATmega32pinout.png",
    ],
    dataBus:
    { 
        value: 8,
        measureUnit: ElectronicUnitMeasuresEnum.Bit 
    },
    memorySegments:
    [
        {
            memorySegmentName: MemorySegmentNamesEnum.Flash,
            memorySegmentValue:
            {
                value: 32,
                measureUnit: ElectronicUnitMeasuresEnum.Kilobytes
            }
        },
        {
            memorySegmentName: MemorySegmentNamesEnum.EEPROM,
            memorySegmentValue:
            {
                value: 1024,
                measureUnit: ElectronicUnitMeasuresEnum.Bytes,
            }
        },
        {
            memorySegmentName: MemorySegmentNamesEnum.SRAM,
            memorySegmentValue:
            {
                value: 2,
                measureUnit: ElectronicUnitMeasuresEnum.Kilobytes
            }
        }
    ],
    electricalCharateristics: 
    {
        clockFrequencyOscillator: 
        [
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 1,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 2,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 4,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 8,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorRange:
                [
                    {
                        frequencyValue: 0.4,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                    {
                        frequencyValue: 0.9,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                ],
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.Ceramic
            },
            {
                clockFrequencyOscillatorRange:
                [
                    {
                        frequencyValue: 0.9,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                    {
                        frequencyValue: 16,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                ],
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.Crystal
            },
            {
                clockFrequencyOscillatorRange:
                [
                    {
                        frequencyValue: 0.9,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                    {
                        frequencyValue: 12,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                ],
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 32.768,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.KHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.Crystal
            },
            {
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
            },
        ],
        operatingVoltages: 
        [
            {
               operatingVoltageValue:
               {
                   value: 5,
                   measureUnit: VoltageUnitMeasuresEnum.V
               },
               operatingVoltageRange:
               [
                   {
                       value: 4.5,
                       measureUnit: VoltageUnitMeasuresEnum.V
                   },
                   {
                       value: 5.5,
                       measureUnit: VoltageUnitMeasuresEnum.V
                   }
               ] 
            }
        ],
        powerConsumption:
        {
            powerConsumptionReference:
            {
                powerConsumptionReferenceFrequency:
                {
                    frequencyValue: 1,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                powerConsumptionReferenceVoltage:
                {
                    value: 5,
                    measureUnit: VoltageUnitMeasuresEnum.V
                },
                powerConsumptionReferenceTemperature:
                {
                    value: 25,
                    measureUnit: TemperatureMeasuresEnum.Celsius
                }
            },
            powerConsumptionMode:
            {
                powerConsumptionModeName: PowerConsumptionModeNamesEnum.Active,
                powerConsumptionModeCurrent:
                {
                    currentValue: 1,
                    currentMeasureUnit: CurrentsMeasureUnitEnum.mA
                }
            }
        }
    },
    microcontrollerPinConfigurations:
    [
        {
            microcontrollerPackage:  MicrocontrollerPackageEnum.PDIP,
            defaultPinCount: 40,
            pins:
            [
                {
                    number: 1,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 2,
                    pinLabels:
                    [
                        PinLabelsEnum.PB1,
                        PinLabelsEnum.T1
                    ]
                },
                {
                    number: 3,
                    pinLabels:
                    [
                        PinLabelsEnum.PB2,
                        PinLabelsEnum.INT2,
                        PinLabelsEnum.AIN0
                    ]
                },
                {
                    number: 4,
                    pinLabels:
                    [
                        PinLabelsEnum.PB3,
                        PinLabelsEnum.OC0,
                        PinLabelsEnum.AIN1
                    ]
                },
                {
                    number: 5,
                    pinLabels:
                    [
                        PinLabelsEnum.PB4,
                        PinLabelsEnum.SS,
                    ]
                },
                {
                    number: 6,
                    pinLabels:
                    [
                        PinLabelsEnum.PB5,
                        PinLabelsEnum.MOSI,
                    ]
                },
                {
                    number: 7,
                    pinLabels:
                    [
                        PinLabelsEnum.PB6,
                        PinLabelsEnum.MISO,
                    ]
                },
                {
                    number: 8,
                    pinLabels:
                    [
                        PinLabelsEnum.PB7,
                        PinLabelsEnum.SCK
                    ]
                },
                {
                    number: 9,
                    pinLabels:
                    [
                        PinLabelsEnum.RESET
                    ]
                },
                {
                    number: 10,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ]
                },
                {
                    number: 11,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ]
                },
                {
                    number: 12,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL2
                    ]
                },
                {
                    number: 13,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL1
                    ]
                },
                {
                    number: 14,
                    pinLabels:
                    [
                        PinLabelsEnum.PD0,
                        PinLabelsEnum.RXD
                    ]
                },
                {
                    number: 15,
                    pinLabels:
                    [
                        PinLabelsEnum.PD1,
                        PinLabelsEnum.TXD
                    ]
                },
                {
                    number: 16,
                    pinLabels:
                    [
                        PinLabelsEnum.PD2,
                        PinLabelsEnum.INT0
                    ]
                },
                {
                    number: 17,
                    pinLabels:
                    [
                        PinLabelsEnum.PD3,
                        PinLabelsEnum.INT1,
                    ]
                },
                {
                    number: 18,
                    pinLabels:
                    [
                        PinLabelsEnum.PD4,
                        PinLabelsEnum.OC1B
                    ]
                },
                {
                    number: 19,
                    pinLabels:
                    [
                        PinLabelsEnum.PD5,
                        PinLabelsEnum.OC1A
                    ]
                },
                {
                    number: 20,
                    pinLabels:
                    [
                        PinLabelsEnum.PD6,
                        PinLabelsEnum.ICP1
                    ]
                },
                {
                    number: 21,
                    pinLabels:
                    [
                        PinLabelsEnum.PD7,
                        PinLabelsEnum.OC2
                    ]
                },
                {
                    number: 22,
                    pinLabels:
                    [
                        PinLabelsEnum.PC0,
                        PinLabelsEnum.SCL
                    ]
                },
                {
                    number: 23,
                    pinLabels:
                    [
                        PinLabelsEnum.PC1,
                        PinLabelsEnum.SDA
                    ]
                },
                {
                    number: 24,
                    pinLabels:
                    [
                        PinLabelsEnum.PC2,
                        PinLabelsEnum.TCK
                    ]
                },
                {
                    number: 25,
                    pinLabels:
                    [
                        PinLabelsEnum.PC3,
                        PinLabelsEnum.TMS
                    ]
                },
                {
                    number: 26,
                    pinLabels:
                    [
                        PinLabelsEnum.PC4,
                        PinLabelsEnum.TDO
                    ]
                },
                {
                    number: 27,
                    pinLabels:
                    [
                        PinLabelsEnum.PC5,
                        PinLabelsEnum.TDI
                    ]
                },
                {
                    number: 28,
                    pinLabels:
                    [
                        PinLabelsEnum.PC6,
                        PinLabelsEnum.TOSC1
                    ]
                },
                {
                    number: 29,
                    pinLabels:
                    [
                        PinLabelsEnum.PC7,
                        PinLabelsEnum.TOSC2
                    ]
                },
                {
                    number: 30,
                    pinLabels:
                    [
                        PinLabelsEnum.AVCC
                    ]
                },
                {
                    number: 31,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ]
                },
                {
                    number: 32,
                    pinLabels:
                    [
                        PinLabelsEnum.AREF
                    ]
                },
                {
                    number: 33,
                    pinLabels:
                    [
                        PinLabelsEnum.PA7,
                        PinLabelsEnum.ADC7
                    ]
                },
                {
                    number: 34,
                    pinLabels:
                    [
                        PinLabelsEnum.PA6,
                        PinLabelsEnum.ADC6
                    ]
                },
                {
                    number: 35,
                    pinLabels:
                    [
                        PinLabelsEnum.PA5,
                        PinLabelsEnum.ADC5
                    ]
                },
                {
                    number: 36,
                    pinLabels:
                    [
                        PinLabelsEnum.PA4,
                        PinLabelsEnum.ADC4
                    ]
                },
                {
                    number: 37,
                    pinLabels:
                    [
                        PinLabelsEnum.PA3,
                        PinLabelsEnum.ADC3
                    ]
                },
                {
                    number: 38,
                    pinLabels:
                    [
                        PinLabelsEnum.PA2,
                        PinLabelsEnum.ADC2
                    ]
                },
                {
                    number: 39,
                    pinLabels:
                    [
                        PinLabelsEnum.PA1,
                        PinLabelsEnum.ADC1
                    ]
                },
                {
                    number: 40,
                    pinLabels:
                    [
                        PinLabelsEnum.PA0,
                        PinLabelsEnum.ADC0
                    ]
                }
            ]
        },
        {
            microcontrollerPackage: MicrocontrollerPackageEnum.TQFP,
            defaultPinCount: 44,
            pins:
            [
                {
                    number: 1,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 2,
                    pinLabels:
                    [
                        PinLabelsEnum.PB1,
                        PinLabelsEnum.T1
                    ]
                },
                {
                    number: 3,
                    pinLabels:
                    [
                        PinLabelsEnum.PB2,
                        PinLabelsEnum.INT2,
                        PinLabelsEnum.AIN0
                    ]
                },
                {
                    number: 4,
                    pinLabels:
                    [
                        PinLabelsEnum.PB3,
                        PinLabelsEnum.OC0,
                        PinLabelsEnum.AIN1
                    ]
                },
                {
                    number: 5,
                    pinLabels:
                    [
                        PinLabelsEnum.PB4,
                        PinLabelsEnum.SS,
                    ]
                },
                {
                    number: 6,
                    pinLabels:
                    [
                        PinLabelsEnum.PB5,
                        PinLabelsEnum.MOSI,
                    ]
                },
                {
                    number: 7,
                    pinLabels:
                    [
                        PinLabelsEnum.PB6,
                        PinLabelsEnum.MISO,
                    ]
                },
                {
                    number: 8,
                    pinLabels:
                    [
                        PinLabelsEnum.PB7,
                        PinLabelsEnum.SCK
                    ]
                },
                {
                    number: 9,
                    pinLabels:
                    [
                        PinLabelsEnum.RESET
                    ]
                },
                {
                    number: 10,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ]
                },
                {
                    number: 11,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ]
                },
                {
                    number: 12,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL2
                    ]
                },
                {
                    number: 13,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL1
                    ]
                },
                {
                    number: 14,
                    pinLabels:
                    [
                        PinLabelsEnum.PD0,
                        PinLabelsEnum.RXD
                    ]
                },
                {
                    number: 15,
                    pinLabels:
                    [
                        PinLabelsEnum.PD1,
                        PinLabelsEnum.TXD
                    ]
                },
                {
                    number: 16,
                    pinLabels:
                    [
                        PinLabelsEnum.PD2,
                        PinLabelsEnum.INT0
                    ]
                },
                {
                    number: 17,
                    pinLabels:
                    [
                        PinLabelsEnum.PD3,
                        PinLabelsEnum.INT1,
                    ]
                },
                {
                    number: 18,
                    pinLabels:
                    [
                        PinLabelsEnum.PD4,
                        PinLabelsEnum.OC1B
                    ]
                },
                {
                    number: 19,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 20,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 21,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 22,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 23,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 24,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 25,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 26,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 27,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 28,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 29,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 30,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 31,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 32,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 33,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 34,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 35,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 36,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 37,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 38,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 39,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 40,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 41,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 42,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 43,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                },
                {
                    number: 44,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ]
                }
            ]
        },
    ],
    peripheralFeatures:
    {
        timers:
        [
            {
                name: MicrocontrollerTimerNames.Timer0,
                widthCounter:
                {
                    value: 8,
                    measureUnit: ElectronicUnitMeasuresEnum.Bit
                }
            },
            {
                name: MicrocontrollerTimerNames.Timer1,
                widthCounter:
                {
                    value: 16,
                    measureUnit: ElectronicUnitMeasuresEnum.Bit
                } 
            },
            {
                name: MicrocontrollerTimerNames.Timer2,
                widthCounter:
                {
                    value: 8,
                    measureUnit: ElectronicUnitMeasuresEnum.Bit
                } 
            },

        ]
    },
    communicationInterfaces:
    [
        {
            name: CommunicationInterfaceNamesEnum.JTAG,
            type: CommunicationInterfaceTypesEnum.Serial
        },
        {
            name: CommunicationInterfaceNamesEnum.ISP,
            type: CommunicationInterfaceTypesEnum.Serial
        },
        {
            name: CommunicationInterfaceNamesEnum.TWI,
            type: CommunicationInterfaceTypesEnum.Serial
        },
        {
            name: CommunicationInterfaceNamesEnum.USART,
            type: CommunicationInterfaceTypesEnum.Serial
        },
    ],
    /**
    Avr Properties
    */
    avrLabel: "m32",
    fuses:
    [
        {
            hexValue: '64',
            type: FusesTypeEnum.LOW,
            bits:
            [
                { label: FuseBitLabelEnum.BODLEVEL, value: false },
                { label: FuseBitLabelEnum.BODEN, value: true },
                { label: FuseBitLabelEnum.SUT1, value: true },
                { label: FuseBitLabelEnum.SUT0, value: false },
                { label: FuseBitLabelEnum.CKSEL3, value: false },
                { label: FuseBitLabelEnum.CKSEL2, value: false },
                { label: FuseBitLabelEnum.CKSEL1, value: true },
                { label: FuseBitLabelEnum.CKSEL0, value: false }                        
            ]
        },
        {
            hexValue: 'DE',
            type: FusesTypeEnum.HIGH,
            bits:
            [
                { label: FuseBitLabelEnum.OCDEN, value: true },
                { label: FuseBitLabelEnum.JTAGEN, value: true },
                { label: FuseBitLabelEnum.SPIEN, value: false },
                { label: FuseBitLabelEnum.CKOPT, value: true },
                { label: FuseBitLabelEnum.EESAVE, value: true },
                { label: FuseBitLabelEnum.BOOTSZ1, value: false },
                { label: FuseBitLabelEnum.BOOTSZ0, value: false },
                { label: FuseBitLabelEnum.BOOTRST, value: true }                        
            ]
        }
    ]
}