export interface CommunicationInterface {
    name: CommunicationInterfaceNamesEnum;
    type: CommunicationInterfaceTypesEnum;
}

export enum CommunicationInterfaceNamesEnum {
    JTAG = "JTAG",
    ISP = "ISP",
    TWI = "TWI",
    USART = "USART",
    SPI = "SPI"
}

export enum CommunicationInterfaceTypesEnum {
    Serial = "Serial"
}