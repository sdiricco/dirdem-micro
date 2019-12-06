export class ByteConverterUtilities {
    /** converte un numero esadecimale (string) in un numero in base decimale */
    static hexToNumber(hex: string): number {
        return parseInt('0x' + hex);
    }
    /** converte un numero base in decimale (max 255  8-bit) in un array di bit */ 
    static uint8ToBinaryArray(num: number): boolean[] {
        var result = [];
        for (let i = 0; i < 8; i++) {
            result[i] = (num >> i) & 1;
        }
        return result.map(_ => _ == 1? true : false);
    }
    /** converte un array di 8 bit in un numero intero segna segno (max 255) */
    static binaryArraytoUnint8(arr: boolean[]): number {
        var result = 0;
        for (let i = 0; i < 8; i++) {
            if (arr[i] == true) {
                result += Math.pow(2, i);
            }   
            else {
                null;
            }         
        }
        return result;
    }
    /** converte un numero esadecimale (stringa  max FF) in un array di bit */
    static hexToBinaryArray(hex: string): boolean[] {
        var result = [];
        let decNum = this.hexToNumber(hex);
        result = this.uint8ToBinaryArray(decNum);
        return result;
    }
}