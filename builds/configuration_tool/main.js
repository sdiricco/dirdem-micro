(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../core/models/typeScript/FuseBit.ts":
/*!********************************************!*\
  !*** ../core/models/typeScript/FuseBit.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../core/models/typeScript/node_modules/tslib/tslib.es6.js");
var Fuse = /** @class */ (function () {
    function Fuse() {
    }
    return Fuse;
}());
exports.Fuse = Fuse;
var FusesType;
(function (FusesType) {
    FusesType["LOW"] = "LOW";
    FusesType["HIGH"] = "HIGH";
    FusesType["EXTENDED"] = "EXTENDED";
    FusesType["LOCKBIT"] = "LOCKBIT";
})(FusesType = exports.FusesType || (exports.FusesType = {}));
var FuseBitLabel;
(function (FuseBitLabel) {
    FuseBitLabel["CKSEL0"] = "CKSEL0";
    FuseBitLabel["CKSEL1"] = "CKSEL1";
    FuseBitLabel["CKSEL2"] = "CKSEL2";
    FuseBitLabel["CKSEL3"] = "CKSEL3";
    FuseBitLabel["SUT0"] = "SUT0";
    FuseBitLabel["SUT1"] = "SUT1";
    FuseBitLabel["CKOUT"] = "CKOUT";
    FuseBitLabel["BOOTRST"] = "BOOTRST";
    FuseBitLabel["BOOTSZ0"] = "BOOTSZ0";
    FuseBitLabel["BOOTSZ1"] = "BOOTSZ1";
    FuseBitLabel["EESAVE"] = "EESAVE";
    FuseBitLabel["WDTON"] = "WDTON";
    FuseBitLabel["SPIEN"] = "SPIEN";
    FuseBitLabel["DWEN"] = "DWEN";
    FuseBitLabel["CKDIV8"] = "CKDIV8";
    FuseBitLabel["BODLEVEL0"] = "BODLEVEL0";
    FuseBitLabel["BODLEVEL1"] = "BODLEVEL1";
    FuseBitLabel["BODLEVEL2"] = "BODLEVEL2";
    FuseBitLabel["RSTDISBL"] = "RSTDISBL";
    FuseBitLabel["Bit0"] = "Bit0";
    FuseBitLabel["Bit1"] = "Bit1";
    FuseBitLabel["Bit2"] = "Bit2";
    FuseBitLabel["Bit3"] = "Bit3";
    FuseBitLabel["Bit4"] = "Bit4";
    FuseBitLabel["Bit5"] = "Bit5";
    FuseBitLabel["Bit6"] = "Bit6";
    FuseBitLabel["Bit7"] = "Bit7";
})(FuseBitLabel = exports.FuseBitLabel || (exports.FuseBitLabel = {}));


/***/ }),

/***/ "../core/models/typeScript/GptDriver.ts":
/*!**********************************************!*\
  !*** ../core/models/typeScript/GptDriver.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../core/models/typeScript/node_modules/tslib/tslib.es6.js");
var GptDriverConfig = /** @class */ (function () {
    function GptDriverConfig() {
    }
    return GptDriverConfig;
}());
exports.GptDriverConfig = GptDriverConfig;
var ATmega328Values = /** @class */ (function () {
    function ATmega328Values() {
    }
    Object.defineProperty(ATmega328Values.prototype, "gptChannelIdValues", {
        get: function () { return [0, 1, 2]; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ATmega328Values.prototype, "gptContainerHwChannelValues", {
        get: function () { return ['TMR0', 'TMR1', 'TMR2']; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ATmega328Values.prototype, "gptContainerClockReferenceValues", {
        get: function () { return ['SYS_CLK', 'EXT_CLK']; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ATmega328Values.prototype, "gptClockPrescalerValues", {
        get: function () { return [0, 8, 64, 256, 1024]; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ATmega328Values.prototype, "gptChannelTickValues", {
        get: function () { return [255, 65535]; },
        enumerable: true,
        configurable: true
    });
    ;
    return ATmega328Values;
}());
exports.ATmega328Values = ATmega328Values;


/***/ }),

/***/ "../core/models/typeScript/Microcontroller.ts":
/*!****************************************************!*\
  !*** ../core/models/typeScript/Microcontroller.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../core/models/typeScript/node_modules/tslib/tslib.es6.js");
var ElectronicUtilities_1 = __webpack_require__(/*! ./Utilities/ElectronicUtilities */ "../core/models/typeScript/Utilities/ElectronicUtilities.ts");
var FuseBit_1 = __webpack_require__(/*! ./FuseBit */ "../core/models/typeScript/FuseBit.ts");
var Microcontroller = /** @class */ (function () {
    function Microcontroller() {
    }
    Microcontroller.getMicrocontrollers = function () {
        return exports.ALL_MICROS;
    };
    return Microcontroller;
}());
exports.Microcontroller = Microcontroller;
var MicroFamily;
(function (MicroFamily) {
    MicroFamily["AVR"] = "AVR";
})(MicroFamily || (MicroFamily = {}));
var MicroBrand;
(function (MicroBrand) {
    MicroBrand["Atmel"] = "Atmel";
})(MicroBrand || (MicroBrand = {}));
exports.ALL_MICROS = [
    {
        name: "ATMega328p",
        brand: MicroBrand.Atmel,
        family: MicroFamily.AVR,
        pins: 28,
        datasheet: "http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf",
        imageSrc: "assets/images/ATMega328.png",
        pinoutImageSrc: "assets/images/ATMega328pinout.png",
        ram: { size: 8, measureUnit: ElectronicUtilities_1.MemoryUnitMeasures.Kilobytes },
        sram: { size: 2048, measureUnit: ElectronicUtilities_1.MemoryUnitMeasures.Bytes },
        flash: { size: 32, measureUnit: ElectronicUtilities_1.MemoryUnitMeasures.Kilobytes },
        eprom: { size: 1024, measureUnit: ElectronicUtilities_1.MemoryUnitMeasures.Bytes },
        dataBus: { size: 8, measureUnit: ElectronicUtilities_1.MemoryUnitMeasures.Bit },
        minVoltage: { value: 1.8, measureUnit: ElectronicUtilities_1.VoltageUnitMeasures.V },
        maxVoltage: { value: 5.5, measureUnit: ElectronicUtilities_1.VoltageUnitMeasures.V },
        totalTimers: 3,
        internalOscillator: { value: 8, measureUnit: ElectronicUtilities_1.FrequencyUnitMeasure.MHz, type: ElectronicUtilities_1.OscillatorType.Crystal, material: ElectronicUtilities_1.OscillatorMaterial.Quartz },
        fuses: [
            {
                hexValue: '62',
                type: FuseBit_1.FusesType.LOW,
                bits: [
                    { label: FuseBit_1.FuseBitLabel.CKDIV8, value: false },
                    { label: FuseBit_1.FuseBitLabel.CKOUT, value: true },
                    { label: FuseBit_1.FuseBitLabel.SUT1, value: true },
                    { label: FuseBit_1.FuseBitLabel.SUT0, value: false },
                    { label: FuseBit_1.FuseBitLabel.CKSEL3, value: false },
                    { label: FuseBit_1.FuseBitLabel.CKSEL2, value: false },
                    { label: FuseBit_1.FuseBitLabel.CKSEL1, value: true },
                    { label: FuseBit_1.FuseBitLabel.CKSEL0, value: false }
                ]
            },
            {
                hexValue: 'D9',
                type: FuseBit_1.FusesType.HIGH,
                bits: [
                    { label: FuseBit_1.FuseBitLabel.RSTDISBL, value: true },
                    { label: FuseBit_1.FuseBitLabel.DWEN, value: true },
                    { label: FuseBit_1.FuseBitLabel.SPIEN, value: false },
                    { label: FuseBit_1.FuseBitLabel.WDTON, value: true },
                    { label: FuseBit_1.FuseBitLabel.EESAVE, value: true },
                    { label: FuseBit_1.FuseBitLabel.BOOTSZ1, value: false },
                    { label: FuseBit_1.FuseBitLabel.BOOTSZ0, value: false },
                    { label: FuseBit_1.FuseBitLabel.BOOTRST, value: true }
                ]
            },
            {
                hexValue: 'FF',
                type: FuseBit_1.FusesType.EXTENDED,
                bits: [
                    { label: FuseBit_1.FuseBitLabel.Bit7, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit6, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit5, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit4, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit3, value: true },
                    { label: FuseBit_1.FuseBitLabel.BODLEVEL2, value: true },
                    { label: FuseBit_1.FuseBitLabel.BODLEVEL1, value: true },
                    { label: FuseBit_1.FuseBitLabel.BODLEVEL0, value: true }
                ]
            },
            {
                hexValue: 'FF',
                type: FuseBit_1.FusesType.LOCKBIT,
                bits: [
                    { label: FuseBit_1.FuseBitLabel.Bit7, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit6, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit5, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit4, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit3, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit2, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit1, value: true },
                    { label: FuseBit_1.FuseBitLabel.Bit0, value: true }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "../core/models/typeScript/Utilities/ConverterUtilities.ts":
/*!*****************************************************************!*\
  !*** ../core/models/typeScript/Utilities/ConverterUtilities.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../core/models/typeScript/node_modules/tslib/tslib.es6.js");
var ConverterUtilities = /** @class */ (function () {
    function ConverterUtilities() {
    }
    /** converte un numero esadecimale (string) in un numero in base decimale */
    ConverterUtilities.hexToNumber = function (hex) {
        return parseInt('0x' + hex);
    };
    /** converte un numero decimale in un numero esadecimale */
    ConverterUtilities.numberToHex = function (n) {
        return n.toString(16).toUpperCase();
    };
    /** converte un numero base in decimale (max 255  8-bit) in un array di bit */
    ConverterUtilities.uint8ToBinaryArray = function (num) {
        var result = [];
        for (var i = 0; i < 8; i++) {
            result[i] = (num >> i) & 1;
        }
        return result.map(function (_) { return _ == 1 ? true : false; });
    };
    /** converte un array di 8 bit in un numero intero segna segno (max 255) */
    ConverterUtilities.binaryArraytoUnint8 = function (arr) {
        var result = 0;
        for (var i = 0; i < 8; i++) {
            if (arr[i] == true) {
                result += Math.pow(2, i);
            }
            else {
                null;
            }
        }
        return result;
    };
    /** converte un numero esadecimale (stringa  max FF) in un array di bit */
    ConverterUtilities.hexToBinaryArray = function (hex) {
        var result = [];
        var decNum = this.hexToNumber(hex);
        result = this.uint8ToBinaryArray(decNum);
        return result;
    };
    /** coverte un array di 8 bit in una numero esadecimale */
    ConverterUtilities.binaryToHex = function (arr) {
        var n = this.binaryArraytoUnint8(arr);
        return this.numberToHex(n);
    };
    /** trasposizione di una matrice, le righe diventano colonne e viceversa */
    ConverterUtilities.matrixTranspose = function (a) {
        // Calculate the width and height of the Array
        var w = a.length || 0;
        var h = a[0] instanceof Array ? a[0].length : 0;
        // In case it is a zero matrix, no transpose routine needed.
        if (h === 0 || w === 0) {
            return [];
        }
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
    };
    return ConverterUtilities;
}());
exports.ConverterUtilities = ConverterUtilities;


/***/ }),

/***/ "../core/models/typeScript/Utilities/ElectronicUtilities.ts":
/*!******************************************************************!*\
  !*** ../core/models/typeScript/Utilities/ElectronicUtilities.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../core/models/typeScript/node_modules/tslib/tslib.es6.js");
var MemoryUnitMeasures;
(function (MemoryUnitMeasures) {
    MemoryUnitMeasures["Bit"] = "Bit";
    MemoryUnitMeasures["Bytes"] = "Bytes";
    MemoryUnitMeasures["Kilobytes"] = "Kilobytes";
    MemoryUnitMeasures["Megabytes"] = "Megabytes";
    MemoryUnitMeasures["Gigabytes"] = "Gigabytes";
})(MemoryUnitMeasures = exports.MemoryUnitMeasures || (exports.MemoryUnitMeasures = {}));
var VoltageUnitMeasures;
(function (VoltageUnitMeasures) {
    VoltageUnitMeasures["uV"] = "uV";
    VoltageUnitMeasures["mV"] = "mV";
    VoltageUnitMeasures["V"] = "V";
    VoltageUnitMeasures["KV"] = "KV";
})(VoltageUnitMeasures = exports.VoltageUnitMeasures || (exports.VoltageUnitMeasures = {}));
var FrequencyUnitMeasure;
(function (FrequencyUnitMeasure) {
    FrequencyUnitMeasure["Hz"] = "Hz";
    FrequencyUnitMeasure["KHz"] = "KHz";
    FrequencyUnitMeasure["MHz"] = "MHz";
    FrequencyUnitMeasure["GHz"] = "GHz";
})(FrequencyUnitMeasure = exports.FrequencyUnitMeasure || (exports.FrequencyUnitMeasure = {}));
var OscillatorType;
(function (OscillatorType) {
    OscillatorType["Crystal"] = "Crystal";
    OscillatorType["Circuit"] = "Circuit";
})(OscillatorType = exports.OscillatorType || (exports.OscillatorType = {}));
var OscillatorMaterial;
(function (OscillatorMaterial) {
    OscillatorMaterial["Quartz"] = "Quartz";
    OscillatorMaterial["Ceramic"] = "Ceramic";
})(OscillatorMaterial = exports.OscillatorMaterial || (exports.OscillatorMaterial = {}));


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-home></app-home>\n<!--gpt-cfg></gpt-cfg-->\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fuse-bit/fuse-bit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fuse-bit/fuse-bit.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"legendRow\"> <span> Remember: </span> <mat-checkbox [checked]=\"true\"> = 0 (programmed)</mat-checkbox> <mat-checkbox [checked]=\"false\"> = 1 (unprogrammed) </mat-checkbox> </div>\n\n<table mat-table #table [dataSource]=\"dataSource\" id=\"fuseTable\" *ngIf=\"displayedColumns.length\">\n\n  <ng-container *ngFor=\"let column of columns;\" [cdkColumnDef]=\"column.columnDef\">\n    <!-- header -->\n    <td mat-header-cell *cdkHeaderCellDef [ngClass]=\"column.index == 0? 'rowPadding' : 'noRowPadding'\">\n      {{ column.header }} </td>\n    <!-- celle -->\n    <td mat-cell *cdkCellDef=\"let row\">\n      <mat-checkbox [checked]=\"!row[column.index].value\" (change)=\"onCellClicked(column.columnDef, row[column.index])\">\n        {{ row[column.index].label }} </mat-checkbox>\n    </td>\n    <!-- footer -->\n    <td mat-footer-cell *matFooterCellDef class=\"footerCells\">\n      <div class=\"flexDisplay\"> 0X<input matInput [(ngModel)]=\"column.footer\"\n          (ngModelChange)=\"onFooterChange($event, column.header)\"> </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"bolder\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"bolder\"></tr>\n\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gpt-config/gpt-config.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gpt-config/gpt-config.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"mainTitle\" class=\"colorText\">GPT Driver configuration</h1>\n<div id=\"configContainer\">\n  <div>\n    <mat-form-field class=\"configWidth\" appearance=\"outline\">\n      <mat-label> Channel ID</mat-label>\n      <mat-select [(value)]=\"config.gptChannelID\" #select1>\n        <mat-option *ngFor=\"let channelId of atMega328values.gptChannelIdValues\" [value]=\"channelId\">\n          {{ channelId }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"configWidth\" appearance=\"outline\">\n      <mat-label>HW Channel</mat-label>\n      <mat-select [(value)]=\"config.gptContainerHwChannel\" (selectionChange)=\"onHwSelectionChange($event)\" #select2>\n        <mat-option *ngFor=\"let hwChannel of atMega328values.gptContainerHwChannelValues\" [value]=\"hwChannel\">\n          {{ hwChannel }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field class=\"configWidth\" appearance=\"outline\">\n      <mat-label>Clock reference</mat-label>\n      <mat-select [(value)]=\"config.gptContainerClockReference\" #select3>\n        <mat-option *ngFor=\"let clockReference of atMega328values.gptContainerClockReferenceValues\"\n          [value]=\"clockReference\">\n          {{ clockReference }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"configWidth\" appearance=\"outline\">\n        <mat-label>Clock prescaler</mat-label>\n        <mat-select [(value)]=\"config.gptClockPrescaler\" #select4>\n          <mat-option *ngFor=\"let clockPrescaler of atMega328values.gptClockPrescalerValues\"\n            [value]=\"clockPrescaler\">\n            {{ clockPrescaler }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n  </div>\n\n  <div>\n    <mat-form-field class=\"configWidth\" appearance=\"outline\">\n      <!--mat-label>Tick Value Max</mat-label-->\n      <input matInput placeholder=\"Tick Value Max\" [(ngModel)]=\"config.gptChannelTickValueMax\" class=\"colorText\" readonly>\n    </mat-form-field>\n\n    <mat-form-field class=\"configWidth\" appearance=\"outline\">\n      <input matInput placeholder=\"Notification\" [(ngModel)]=\"config.gptNotification\" maxlength=\"30\"\n        (keydown)=\"onGptNotificationKeydown($event)\">\n    </mat-form-field>\n\n  </div>\n\n  <div>\n    <button mat-raised-button color=\"primary\" class=\"configButtons\" (click)=\"addConfig(config)\"\n      [disabled]=\"select1.empty || select2.empty || select3.empty || select4.empty\">Add</button>\n  </div>\n</div>\n\n\n<!--- tabella per visualizzazione delle istanze di configurazione -->\n<table mat-table [dataSource]=\"configurations\" id=\"configsTable\" *ngIf=\"enableTable\">\n\n  <!-- gptChannelID Column -->\n  <ng-container matColumnDef=\"gptChannelID\">\n    <th mat-header-cell *matHeaderCellDef> Channel ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{ element.gptChannelID }} </td>\n  </ng-container>\n\n  <!-- gptContainerHwChannel Column -->\n  <ng-container matColumnDef=\"gptContainerHwChannel\">\n    <th mat-header-cell *matHeaderCellDef> HW channel </th>\n    <td mat-cell *matCellDef=\"let element\"> {{ element.gptContainerHwChannel }} </td>\n  </ng-container>\n\n  <!-- gptContainerClockReference Column -->\n  <ng-container matColumnDef=\"gptContainerClockReference\">\n    <th mat-header-cell *matHeaderCellDef> Clock reference </th>\n    <td mat-cell *matCellDef=\"let element\"> {{ element.gptContainerClockReference }} </td>\n  </ng-container>\n\n  <!-- gptClockPrescaler Column -->\n  <ng-container matColumnDef=\"gptClockPrescaler\">\n    <th mat-header-cell *matHeaderCellDef> Clock prescaler </th>\n    <td mat-cell *matCellDef=\"let element\"> {{ element.gptClockPrescaler }} </td>\n  </ng-container>\n\n  <!-- gptChannelTickValueMax Column -->\n  <ng-container matColumnDef=\"gptChannelTickValueMax\">\n    <th mat-header-cell *matHeaderCellDef> Tick value max </th>\n    <td mat-cell *matCellDef=\"let element\"> {{ element.gptChannelTickValueMax }} </td>\n  </ng-container>\n\n  <!-- gptNotification Column -->\n  <ng-container matColumnDef=\"gptNotification\">\n    <th mat-header-cell *matHeaderCellDef> Notification </th>\n    <td mat-cell *matCellDef=\"let element\"> {{ element.gptNotification }} </td>\n  </ng-container>\n\n  <!-- deleteRow Column -->\n  <ng-container matColumnDef=\"deleteRow\">\n    <th mat-header-cell *matHeaderCellDef> Delete </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-icon color=\"warn\" class=\"pointer\" (click)=\"deleteConfig(element)\"> clear </mat-icon>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"titleBar\">\n    <div id=\"leftSideBar\" class=\"d-none d-sm-flex\">\n        <div>\n            <img src=\"assets/images/microWhite.png\" id=\"logoImage\">\n        </div>\n    </div>\n    <div id=\"mainTitle\" class=\"colorTextLight centerText\">DIRDEM MONGOL DRIVER</div>\n    <div id=\"rightSideBar\" class=\"d-none d-sm-flex\">\n        <span id=\"versionSpan\" class=\"colorTextLight\">Version 0.0.0</span>\n    </div>\n</div>\n\n<div id=\"microSelection\">\n    <h5 class=\"colorText centerText\">Please select one device to start</h5>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Microcontroller</mat-label>\n        <mat-select [(value)]=\"microcontroller\" (selectionChange)=\"onMicroSelected($event)\">\n            <mat-option *ngFor=\"let micro of microcontrollers\" [value]=\"micro\">\n                {{ micro.name }}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n</div>\n\n<!--div che compare solo dopo aver selezionato il microcontrollore-->\n<div *ngIf=\"microcontroller.name\" class=\"row d-flex\" id=\"microContainer\">\n    <div class=\"col-xl-1 verticalColSpacing\"></div>\n    <div class=\"col-xl-3\">\n        <mat-card class=\"backgroundLightPrimary infoCards\">\n            <div class=\"cardTitle\">Technical specifications </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Name:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.name }} </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Family:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.family }} </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Brand:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.brand }} </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Datasheet:</div><a class=\"col-7 colorAccent\"\n                    href=\"{{ microcontroller.datasheet }}\">-> Official datasheet</a>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Pins:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.pins }} </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Total timers:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.totalTimers }} </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Data bus:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.dataBus.size }}\n                    {{ microcontroller.dataBus.measureUnit}} </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Eprom:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.eprom.size }} {{ microcontroller.eprom.measureUnit}}\n                </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Flash:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.flash.size }} {{ microcontroller.flash.measureUnit}}\n                </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Ram:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.ram.size }} {{ microcontroller.ram.measureUnit}}\n                </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> SRam:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.sram.size }} {{ microcontroller.sram.measureUnit}}\n                </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Internal oscillator:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.internalOscillator.value }}\n                    {{ microcontroller.internalOscillator.measureUnit}}\n                    {{ microcontroller.internalOscillator.material }} {{ microcontroller.internalOscillator.type}}\n                </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Min voltage:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.minVoltage.value }}\n                    {{ microcontroller.minVoltage.measureUnit }} </div>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-5\"> Max voltage:</div>\n                <div class=\"col-7 colorPrimary\"> {{ microcontroller.maxVoltage.value }}\n                    {{ microcontroller.maxVoltage.measureUnit }} </div>\n            </div>\n        </mat-card>\n    </div>\n    <div class=\"col-xl-1 verticalColSpacing\"></div>\n    <div class=\"col-xl-2 d-flex align-items-center justify-content-center\">\n        <img src=\"{{ microcontroller.imageSrc }}\" alt=\"{{ microcontroller.name }}\" (click)=\"showPinout()\"\n            class=\"pointer\" matTooltip=\"Show pinout\" id=\"microImage\">\n    </div>\n    <div class=\"col-xl-1 verticalColSpacing\"></div>\n    <div class=\"col-xl-2 d-flex flex-column justify-content-between\">\n        <mat-card class=\"backgroundLightPrimary infoCards\">\n            <div class=\"cardTitle\">Drivers </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-8\" [ngClass]=\"slider1.checked? 'colorAccent' : 'colorText'\"> GPT driver</div>\n                <div class=\"col-2\">\n                    <mat-slide-toggle #slider1 (change)=\"onGptDriverSwitched($event)\"></mat-slide-toggle>\n                </div>\n                <button mat-icon-button class=\"col-2\" [disabled]=\"!slider1.checked\" matTooltip=\"Edit\"\n                    (click)=\"onGptDriverSwitched(null, true)\">\n                    <mat-icon [ngClass]=\"slider1.checked? 'colorAccent' : 'colorText'\">edit</mat-icon>\n                </button>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-8\" [ngClass]=\"slider2.checked? 'colorAccent' : 'colorText'\"> PWM</div>\n                <div class=\"col-2\">\n                    <mat-slide-toggle #slider2></mat-slide-toggle>\n                </div>\n                <button mat-icon-button class=\"col-2\" [disabled]=\"!slider2.checked\" matTooltip=\"Edit\">\n                    <mat-icon [ngClass]=\"slider2.checked? 'colorAccent' : 'colorText'\">edit</mat-icon>\n                </button>\n            </div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-8\" [ngClass]=\"slider3.checked? 'colorAccent' : 'colorText'\"> Input / output</div>\n                <div class=\"col-2\">\n                    <mat-slide-toggle #slider3></mat-slide-toggle>\n                </div>\n                <button mat-icon-button class=\"col-2\" [disabled]=\"!slider3.checked\" matTooltip=\"Edit\">\n                    <mat-icon [ngClass]=\"slider3.checked? 'colorAccent' : 'colorText'\">edit</mat-icon>\n                </button>\n            </div>\n        </mat-card>\n        <mat-card class=\"backgroundLightPrimary infoCards\">\n            <div class=\"cardTitle\">Fuses</div>\n            <div class=\"row d-flex align-items-center\">\n                <div class=\"col-8\" [ngClass]=\"slider4.checked? 'colorAccent' : 'colorText'\"> <div *ngFor=\"let fuse of microcontroller.fuses\"> {{ fuse.type }} </div> </div>\n                <div class=\"col-2\">\n                    <mat-slide-toggle #slider4 (change)=\"onFuseSwitched($event)\"></mat-slide-toggle>\n                </div>\n                <button mat-icon-button class=\"col-2\" [disabled]=\"!slider4.checked\" matTooltip=\"Edit\"\n                (click)=\"onFuseSwitched(null, true)\">\n                    <mat-icon [ngClass]=\"slider4.checked? 'colorAccent' : 'colorText'\">edit</mat-icon>\n                </button>\n            </div>\n        </mat-card>\n    </div>\n    <div class=\"col-xl-2\"></div>\n\n    <div id=\"generateConfigButtonDiv\">\n        <button mat-raised-button color=\"accent\" (click)=\"generateGptFile()\" [disabled]=\"!thereAreGptConfigurations\" matTooltip=\"Generate configuration\">Mongol it!</button>\n    </div>\n</div>\n\n<!-- div contentente il file C da scaricare -->\n<div id=\"cFileToDownload\">\n      /*\n      File: Gpt_Cfg.c\n      */\n\n      /**************************************** INCLUDE FILES ****************************************/\n      #include \"Arduino.h\"\n      #include \"Gpt_Cfg.h\"\n      /***********************************************************************************************/\n\n      #define CONFIGURED_CHANNELS 3\n\n      ConfigPtr Cfg[CONFIGURED_CHANNELS] =\n      {{ '{' }}\n    <div *ngFor=\"let config of gptConfigurations; last as isLast\">\n\n        {{'{'}}\n          {{ config.gptChannelID }},\n          {{ config.gptContainerHwChannel }},\n          {{ config.gptContainerClockReference }},\n          {{ config.gptClockPrescaler }},\n          {{ config.gptChannelTickValueMax }},\n          \"{{ config.gptNotification }}\"\n        {{'}'}} <span *ngIf=\"!isLast\">,</span>\n      </div>\n      {{ '}' }}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"{{ data.pinoutImageSrc }}\" alt=\"{{ data.name }}\">\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'driver-config';
    }
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var forms_2 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var home_component_1 = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var micro_pinout_dialog_component_1 = __webpack_require__(/*! ./components/micro-pinout-dialog/micro-pinout-dialog.component */ "./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.ts");
var fuse_bit_component_1 = __webpack_require__(/*! ./components/fuse-bit/fuse-bit.component */ "./src/app/components/fuse-bit/fuse-bit.component.ts");
var gpt_config_component_1 = __webpack_require__(/*! ./components/gpt-config/gpt-config.component */ "./src/app/components/gpt-config/gpt-config.component.ts");
var material_module_1 = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                gpt_config_component_1.GptCfgConfigComponent,
                home_component_1.HomeComponent,
                micro_pinout_dialog_component_1.MicroPinoutDialogComponent,
                fuse_bit_component_1.FuseBitComponent
            ],
            entryComponents: [
                micro_pinout_dialog_component_1.MicroPinoutDialogComponent,
                gpt_config_component_1.GptCfgConfigComponent,
                fuse_bit_component_1.FuseBitComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                material_module_1.MaterialModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                ngx_toastr_1.ToastrModule,
                ngx_toastr_1.ToastrModule.forRoot() // ToastrModule added
            ],
            providers: [http_1.HttpClientModule],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/fuse-bit/fuse-bit.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/fuse-bit/fuse-bit.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#legendRow {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start;\r\n    justify-content: space-around;\r\n    opacity: 0.6;\r\n    font-style: italic;\r\n}\r\n\r\n#fuseTable {\r\n    width: 100%;\r\n}\r\n\r\n.rowPadding {\r\n    padding-left: 24px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mdXNlLWJpdC9mdXNlLWJpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnVzZS1iaXQvZnVzZS1iaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsZWdlbmRSb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbiNmdXNlVGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3dQYWRkaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/fuse-bit/fuse-bit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/fuse-bit/fuse-bit.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ConverterUtilities_1 = __webpack_require__(/*! ../../../../../core/models/typeScript/Utilities/ConverterUtilities */ "../core/models/typeScript/Utilities/ConverterUtilities.ts");
var driver_service_1 = __webpack_require__(/*! src/app/services/driver.service */ "./src/app/services/driver.service.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var FuseBitComponent = /** @class */ (function () {
    function FuseBitComponent(dialogRef, driverService, cd, toastr, fuses) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.driverService = driverService;
        this.cd = cd;
        this.toastr = toastr;
        this.fuses = fuses;
        this.columns = [];
        this.displayedColumns = [];
        this.dataSource = [];
        // se già presente una configurazione viene caricata dai dati nel servizio
        if (this.driverService.fuseBitConfiguration.length) {
            this.dataSource = ConverterUtilities_1.ConverterUtilities.matrixTranspose(this.driverService.fuseBitConfiguration.map(function (fuse) { return fuse.bits; }));
        }
        // altrimenti viene istanziata una nuova configurazioni con i dati di default passati dall'esterno (Microcontroller.ts)
        else {
            this.driverService.fuseBitConfiguration = _.cloneDeep(this.fuses);
            var fuseMatrix = this.driverService.fuseBitConfiguration.map(function (fuse) { return fuse.bits; });
            this.dataSource = ConverterUtilities_1.ConverterUtilities.matrixTranspose(fuseMatrix);
        }
        // mappatura colonne
        this.driverService.fuseBitConfiguration.forEach(function (fuse, i) {
            _this.columns.push({ index: i, columnDef: fuse.type, header: fuse.type, footer: fuse.hexValue });
            _this.displayedColumns.push(fuse.type);
        });
    }
    /**
     * eventi
     */
    // click su checkbox di una singola cella
    FuseBitComponent.prototype.onCellClicked = function (fuseType, cell) {
        var _this = this;
        // settaggio del singolo bit direttamente nella configurazione del servizio
        var fuse = this.driverService.fuseBitConfiguration.find(function (fuse) { return fuse.type == fuseType; });
        var bitToSet = fuse.bits.find(function (bit) { return bit.label == cell.label; });
        bitToSet.value = !bitToSet.value;
        fuse.hexValue = ConverterUtilities_1.ConverterUtilities.binaryToHex((fuse.bits.map(function (bit) { return bit.value; })).reverse());
        // svuotamento colonne
        this.columns = [];
        this.displayedColumns = [];
        this.cd.detectChanges();
        // nuovo riempimento per visualizzazione su interfaccia
        this.driverService.fuseBitConfiguration.forEach(function (fuse, i) {
            _this.columns.push({ index: i, columnDef: fuse.type, header: fuse.type, footer: fuse.hexValue });
            _this.displayedColumns.push(fuse.type);
        });
    };
    // quando viene impostato il valore esadecimale del byte nel footer della colonna
    FuseBitComponent.prototype.onFooterChange = function (hexNumber, fuseType) {
        var newBitsValue = ConverterUtilities_1.ConverterUtilities.hexToBinaryArray(hexNumber).reverse();
        var fuse = this.driverService.fuseBitConfiguration.find(function (fuse) { return fuse.type == fuseType; });
        fuse.hexValue = hexNumber;
        for (var i = 0; i < fuse.bits.length; i++) {
            var newBitValue = newBitsValue[i];
            fuse.bits[i].value = newBitValue; // vengono cambiati i singoli bit nella configurazione del driverService         
        }
    };
    FuseBitComponent.ctorParameters = function () { return [
        { type: material_1.MatDialogRef },
        { type: driver_service_1.DriverService },
        { type: core_1.ChangeDetectorRef },
        { type: ngx_toastr_1.ToastrService },
        { type: Array, decorators: [{ type: core_1.Inject, args: [material_1.MAT_DIALOG_DATA,] }] }
    ]; };
    FuseBitComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-fuse-bit',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./fuse-bit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fuse-bit/fuse-bit.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./fuse-bit.component.css */ "./src/app/components/fuse-bit/fuse-bit.component.css")).default]
        }),
        tslib_1.__param(4, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [material_1.MatDialogRef, driver_service_1.DriverService, core_1.ChangeDetectorRef,
            ngx_toastr_1.ToastrService, Array])
    ], FuseBitComponent);
    return FuseBitComponent;
}());
exports.FuseBitComponent = FuseBitComponent;


/***/ }),

/***/ "./src/app/components/gpt-config/gpt-config.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/gpt-config/gpt-config.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".configWidth {\n    width: 200px;\n}\n\n.configButtons {\n    margin-top: 20px;\n    margin-bottom: 50px;\n}\n\n#configContainer >* {\n    width: 70%;\n    margin: auto;\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n#mainTitle {\n    margin: auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    -webkit-margin-before: 10px;\n            margin-block-start: 10px;\n    -webkit-margin-after: 50px;\n            margin-block-end: 50px;\n}\n\n#configsTable {\n    width: 90%;\n    margin: auto;\n}\n\n#setConfigsDiv {\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncHQtY29uZmlnL2dwdC1jb25maWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDBCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncHQtY29uZmlnL2dwdC1jb25maWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maWdXaWR0aCB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4uY29uZmlnQnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4jY29uZmlnQ29udGFpbmVyID4qIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNtYWluVGl0bGUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxMHB4O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDUwcHg7XG59XG5cbiNjb25maWdzVGFibGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jc2V0Q29uZmlnc0RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/gpt-config/gpt-config.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/gpt-config/gpt-config.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var GptDriver_1 = __webpack_require__(/*! ../../../../../core/models/typeScript/GptDriver */ "../core/models/typeScript/GptDriver.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var driver_service_1 = __webpack_require__(/*! src/app/services/driver.service */ "./src/app/services/driver.service.ts");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var GptCfgConfigComponent = /** @class */ (function () {
    function GptCfgConfigComponent(driverService, toastr, cdRef, dialogRef, data) {
        this.driverService = driverService;
        this.toastr = toastr;
        this.cdRef = cdRef;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = [
            "gptChannelID",
            "gptContainerHwChannel",
            "gptContainerClockReference",
            "gptClockPrescaler",
            "gptChannelTickValueMax",
            "gptNotification",
            "deleteRow"
        ];
        this.atMega328values = new GptDriver_1.ATmega328Values(); // per la visualizzazione dei menu a tendina
        this.config = new GptDriver_1.GptDriverConfig(); // singola configurazione
        this.configurations = this.driverService.gptDriverConfiguration;
    }
    Object.defineProperty(GptCfgConfigComponent.prototype, "enableTable", {
        get: function () {
            return this.configurations.length == 0 ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    GptCfgConfigComponent.prototype.ngAfterViewInit = function () {
        this._refreshDropDownAndTable();
        this.cdRef.detectChanges();
    };
    /**************************
     * funzioni pubbliche
     **************************/
    // aggiunge una nuova configurazione (nuova riga in tabella)
    GptCfgConfigComponent.prototype.addConfig = function (config) {
        // inserimento nell'array delle configurazioni
        var result = Object.assign({}, config);
        this.driverService.gptDriverConfiguration.push(result);
        this._refreshDropDownAndTable();
    };
    // cancella una configurazione (tasto X sulla tabella)
    GptCfgConfigComponent.prototype.deleteConfig = function (config) {
        // rimozione configuraione dall'array configurazioni
        var element = this.driverService.gptDriverConfiguration.find(function (_) { return _.gptContainerHwChannel == config.gptContainerHwChannel; });
        var configIndex = this.driverService.gptDriverConfiguration.indexOf(element);
        this.driverService.gptDriverConfiguration.splice(configIndex, 1);
        this._refreshDropDownAndTable();
    };
    // sull'inserimento delle notification api (area di testo) per controllo caratteri
    GptCfgConfigComponent.prototype.onGptNotificationKeydown = function (evt) {
        var keyPressed = evt.key;
        if (DENIED_CHARS.includes(keyPressed)) {
            this.toastr.warning("carattere " + keyPressed + " non permesso");
            return false;
        }
        else {
            return true;
        }
    };
    // scatenata quando cambia il valore della select del'hw channel - settaggio automatico del thick value max
    GptCfgConfigComponent.prototype.onHwSelectionChange = function (evt) {
        if (evt.value == this.atMega328values.gptContainerHwChannelValues[1]) {
            this.config.gptChannelTickValueMax = this.atMega328values.gptChannelTickValues[1];
        }
        else {
            this.config.gptChannelTickValueMax = this.atMega328values.gptChannelTickValues[0];
        }
    };
    // quando viene chiuso il popup per click esterno al componente
    GptCfgConfigComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /**************************
     * funzioni private
     **************************/
    // abilitazione/disabilitazione matSelect (dropdown) hwChannel e channelId e rendering della tabella
    GptCfgConfigComponent.prototype._refreshDropDownAndTable = function () {
        var _this = this;
        this.configurations = this.driverService.gptDriverConfiguration;
        this.configurations = this.configurations.slice();
        this.channelIdDropDown.options.forEach(function (chId) {
            chId.disabled = _this.driverService.gptDriverConfiguration.find(function (config) {
                return config.gptChannelID == chId.value;
            });
        });
        this.hwChannelDropDown.options.forEach(function (chHw) {
            chHw.disabled = _this.driverService.gptDriverConfiguration.find(function (config) {
                return config.gptContainerHwChannel == chHw.value;
            });
        });
        this.hwChannelDropDown.value = null;
        this.channelIdDropDown.value = null;
    };
    GptCfgConfigComponent.ctorParameters = function () { return [
        { type: driver_service_1.DriverService },
        { type: ngx_toastr_1.ToastrService },
        { type: core_2.ChangeDetectorRef },
        { type: material_1.MatDialogRef },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [material_1.MAT_DIALOG_DATA,] }] }
    ]; };
    tslib_1.__decorate([
        core_1.ViewChild("select1", { static: false }),
        tslib_1.__metadata("design:type", material_1.MatSelect)
    ], GptCfgConfigComponent.prototype, "channelIdDropDown", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("select2", { static: false }),
        tslib_1.__metadata("design:type", material_1.MatSelect)
    ], GptCfgConfigComponent.prototype, "hwChannelDropDown", void 0);
    GptCfgConfigComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "gpt-cfg",
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./gpt-config.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gpt-config/gpt-config.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./gpt-config.component.css */ "./src/app/components/gpt-config/gpt-config.component.css")).default]
        }),
        tslib_1.__param(4, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [driver_service_1.DriverService,
            ngx_toastr_1.ToastrService,
            core_2.ChangeDetectorRef,
            material_1.MatDialogRef, Object])
    ], GptCfgConfigComponent);
    return GptCfgConfigComponent;
}());
exports.GptCfgConfigComponent = GptCfgConfigComponent;
/****************************
 * costanti
 ****************************/
var DENIED_CHARS = '\\<>"°£$%&/)(=^*§#]|[?!@,';


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardTitle {\r\n    font-size: 17px;\r\n    font-weight: 700 !important;\r\n    text-align: center !important;\r\n    margin-bottom: 15px !important;\r\n}\r\n\r\n#titleBar {\r\n    height: 90px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background-color: var(--primary);\r\n}\r\n\r\n#logoImage {\r\n    width: 50px;\r\n    margin-left: 15px;\r\n}\r\n\r\n#mainTitle {\r\n    font-size: 40px;\r\n    -webkit-box-flex: 2;\r\n            flex: 2;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n#rightSideBar {\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n\r\n#leftSideBar {\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n#versionSpan{\r\n    font-size: 12px;\r\n    margin-right: 15px;\r\n}\r\n\r\n#microSelection {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n#microContainer {\r\n    padding: 20px;\r\n}\r\n\r\n.infoCards {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    min-width: 280px;\r\n    z-index: 1;\r\n}\r\n\r\n#microImage:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n#generateConfigButtonDiv {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-top: 5%;\r\n}\r\n\r\n#cFileToDownload {\r\n  display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBTztZQUFQLE9BQU87SUFDUCxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQU87WUFBUCxPQUFPO0lBQ1Asb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFPO1lBQVAsT0FBTztJQUNQLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHVCQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiN0aXRsZUJhciB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4jbG9nb0ltYWdlIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbiNtYWluVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZmxleDogMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3JpZ2h0U2lkZUJhciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbiNsZWZ0U2lkZUJhciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuI3ZlcnNpb25TcGFue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4jbWljcm9TZWxlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuI21pY3JvQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvQ2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuI21pY3JvSW1hZ2U6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4jZ2VuZXJhdGVDb25maWdCdXR0b25EaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuI2NGaWxlVG9Eb3dubG9hZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var fuse_bit_component_1 = __webpack_require__(/*! ../fuse-bit/fuse-bit.component */ "./src/app/components/fuse-bit/fuse-bit.component.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var Microcontroller_1 = __webpack_require__(/*! ../../../../../core/models/typeScript/Microcontroller */ "../core/models/typeScript/Microcontroller.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var micro_pinout_dialog_component_1 = __webpack_require__(/*! ../micro-pinout-dialog/micro-pinout-dialog.component */ "./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.ts");
var gpt_config_component_1 = __webpack_require__(/*! ../gpt-config/gpt-config.component */ "./src/app/components/gpt-config/gpt-config.component.ts");
var driver_service_1 = __webpack_require__(/*! src/app/services/driver.service */ "./src/app/services/driver.service.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, driverService, toast) {
        this.dialog = dialog;
        this.driverService = driverService;
        this.toast = toast;
        //
        this.microcontroller = new Microcontroller_1.Microcontroller();
        // configurazioni da inserire nel div html che servirà per scaricare il file .C
        this.gptConfigurations = this.driverService.gptDriverConfiguration;
        this.microcontrollers = Microcontroller_1.Microcontroller.getMicrocontrollers();
    }
    Object.defineProperty(HomeComponent.prototype, "thereAreGptConfigurations", {
        // proprietà che è vera se è presente almeno una configurazione del gpt (di qualsiasi tipo) nel driverService per abilitazione tasto wizard
        get: function () {
            if (this.driverService.gptDriverConfiguration.length) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "gptConfigurationsLength", {
        get: function () {
            return this.driverService.gptDriverConfiguration.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "fuseBitConfigurationLength", {
        get: function () {
            return this.driverService.fuseBitConfiguration.length;
        },
        enumerable: true,
        configurable: true
    });
    ;
    // evento scatenato sulla selezione di un nuovo micro
    HomeComponent.prototype.onMicroSelected = function (evt) {
        this.driverService.clearAllConfigurations();
        // il microcontroller viene assegnato con il binding sul template html
        console.log(evt, this.microcontroller);
    };
    // evento scatenato al passagio del mouse sopra l'immagine
    HomeComponent.prototype.showPinout = function () {
        var dialogRef = this.dialog.open(micro_pinout_dialog_component_1.MicroPinoutDialogComponent, {
            data: this.microcontroller
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    // genera il file di configurazione in base ai dati presenti nel driverService
    HomeComponent.prototype.generateGptFile = function () {
        // file c da scaricare (contenuto dentro il div invisibile)
        var cFile = document.getElementById("cFileToDownload").innerText;
        this.driverService.generateGptConfigFile(cFile);
        this.toast.success("Download success!");
    };
    /*
     * eventi su tasti slider ** isEdit è passato true solo nel caso in cui vine premuto il tasto per la modifica
     */
    // su driver gpt //
    HomeComponent.prototype.onGptDriverSwitched = function (evt, isEdit) {
        var _this = this;
        // se lo slider virene acceso
        if (isEdit || evt.checked) {
            var dialogRef = this.dialog.open(gpt_config_component_1.GptCfgConfigComponent, {
                width: "920px",
                data: null
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (_this.gptConfigurationsLength > 0) {
                    // se ci sono configurazioni nel driverService lascio abilitato lo slider, altrimenti lo spengo
                    _this.gptDriverSlider.checked = true;
                }
                else {
                    _this.gptDriverSlider.checked = false;
                }
            });
        }
        // se lo slider viene spento svuoto le configurazioni del driverGpt
        else {
            this.driverService.gptDriverConfiguration = [];
        }
    };
    // su fuse bit
    HomeComponent.prototype.onFuseSwitched = function (evt, isEdit) {
        var _this = this;
        if (isEdit || evt.checked) {
            var dialogRef = this.dialog.open(fuse_bit_component_1.FuseBitComponent, {
                width: "920px",
                data: this.microcontroller.fuses // passo al dialog le informazioni sui fuse bit
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (_this.fuseBitConfigurationLength) {
                    // se è stata fatta la configurazione dei fuse bit lascio acceso lo slider
                    _this.fuseBitSlider.checked = true;
                }
                else {
                    _this.fuseBitSlider.checked = false;
                }
            });
            // se lo slider viene spento svuoto le configurazioni dei fuse bit
        }
        else {
            this.driverService.fuseBitConfiguration = [];
            // console.log(this.driverService.fuseBitConfiguration);
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: material_1.MatDialog },
        { type: driver_service_1.DriverService },
        { type: ngx_toastr_1.ToastrService }
    ]; };
    tslib_1.__decorate([
        core_1.ViewChild("slider1", { static: false }),
        tslib_1.__metadata("design:type", material_1.MatSlideToggle)
    ], HomeComponent.prototype, "gptDriverSlider", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("slider4", { static: false }),
        tslib_1.__metadata("design:type", material_1.MatSlideToggle)
    ], HomeComponent.prototype, "fuseBitSlider", void 0);
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-home",
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        }),
        tslib_1.__metadata("design:paramtypes", [material_1.MatDialog,
            driver_service_1.DriverService,
            ngx_toastr_1.ToastrService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWljcm8tcGlub3V0LWRpYWxvZy9taWNyby1waW5vdXQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var Microcontroller_1 = __webpack_require__(/*! ../../../../../core/models/typeScript/Microcontroller */ "../core/models/typeScript/Microcontroller.ts");
var MicroPinoutDialogComponent = /** @class */ (function () {
    function MicroPinoutDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MicroPinoutDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    MicroPinoutDialogComponent.ctorParameters = function () { return [
        { type: material_1.MatDialogRef },
        { type: Microcontroller_1.Microcontroller, decorators: [{ type: core_1.Inject, args: [material_1.MAT_DIALOG_DATA,] }] }
    ]; };
    MicroPinoutDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-micro-pinout-dialog',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./micro-pinout-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./micro-pinout-dialog.component.css */ "./src/app/components/micro-pinout-dialog/micro-pinout-dialog.component.css")).default]
        }),
        tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [material_1.MatDialogRef,
            Microcontroller_1.Microcontroller])
    ], MicroPinoutDialogComponent);
    return MicroPinoutDialogComponent;
}());
exports.MicroPinoutDialogComponent = MicroPinoutDialogComponent;


/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var select_1 = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
var checkbox_1 = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var tooltip_1 = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var slide_toggle_1 = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
var table_2 = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                icon_1.MatIconModule,
                dialog_1.MatDialogModule,
                material_1.MatFormFieldModule,
                input_1.MatInputModule,
                checkbox_1.MatCheckboxModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                slide_toggle_1.MatSlideToggleModule,
                card_1.MatCardModule,
                table_1.MatTableModule,
                tooltip_1.MatTooltipModule,
                table_2.CdkTableModule
            ],
            exports: [
                common_1.CommonModule,
                icon_1.MatIconModule,
                dialog_1.MatDialogModule,
                material_1.MatFormFieldModule,
                input_1.MatInputModule,
                checkbox_1.MatCheckboxModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                slide_toggle_1.MatSlideToggleModule,
                card_1.MatCardModule,
                table_1.MatTableModule,
                tooltip_1.MatTooltipModule,
                table_2.CdkTableModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "./src/app/services/driver.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/driver.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var DriverService = /** @class */ (function () {
    function DriverService() {
        /*
         *  GPT DRIVER
         */
        this.gptDriverConfiguration = [];
        this.fuseBitConfiguration = [];
    }
    // scarica il Gpt_Cfg.C
    DriverService.prototype.generateGptConfigFile = function (cFile) {
        var blob = new Blob([cFile], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "Gpt_Cfg.c");
    };
    // svuota tutte le configurazioni
    DriverService.prototype.clearAllConfigurations = function () {
        this.gptDriverConfiguration = [];
        this.fuseBitConfiguration = [];
    };
    DriverService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DriverService);
    return DriverService;
}());
exports.DriverService = DriverService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\sorgenti\dirdem-micro.git\trunk\configuration_tool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map