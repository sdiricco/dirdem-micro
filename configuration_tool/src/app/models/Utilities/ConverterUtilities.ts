export class ConverterUtilities {
    /** converte un numero esadecimale (string) in un numero in base decimale */
    static hexToNumber(hex: string): number {
        return parseInt('0x' + hex);
    }
    /** converte un numero decimale in un numero esadecimale */
    static numberToHex(n: number): string {
        return n.toString(16);
    }
    /** converte un numero base in decimale (max 255  8-bit) in un array di bit */
    static uint8ToBinaryArray(num: number): boolean[] {
        var result = [];
        for (let i = 0; i < 8; i++) {
            result[i] = (num >> i) & 1;
        }
        return result.map(_ => _ == 1 ? true : false);
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
    /** coverte un array di 8 bit in una numero esadecimale */
    static binaryToHex(arr: boolean[]): string {
        let n = this.binaryArraytoUnint8(arr);
        return this.numberToHex(n);
    }
    /** trasposizione di una matrice, le righe diventano colonne e viceversa */
    static matrixTranspose(a: any[][]) {
        // Calculate the width and height of the Array
        var w = a.length || 0;
        var h = a[0] instanceof Array ? a[0].length : 0;

        // In case it is a zero matrix, no transpose routine needed.
        if (h === 0 || w === 0) { return []; }
        /**
         * @var {Number} i Counter
         * @var {Number} j Counter
         * @var {Array} t Transposed data is stored in this array.
         */
        var i, j, t = [];

        // Loop through every item in the outer array (height)
        for (i = 0; i < h; i++) {
            // Insert a new row (array)
            t[i] = [];
            // Loop through every item per item in outer array (width)
            for (j = 0; j < w; j++) {
                // Save transposed data.
                t[i][j] = a[j][i];
            }
        }
        return t;
    }

}
