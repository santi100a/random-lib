var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./core", "./random", "./random-date", "./random-dates", "./random-float", "./random-floats", "./random-from-array", "./random-integers", "./random-letter", "./random-letters", "./random-lower", "./random-lowers", "./random-upper", "./random-uppers", "./random-boolean", "./random-phrase", "./random-uuid", "./random-hex-color", "./random"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    __exportStar(require("./core"), exports);
    __exportStar(require("./random"), exports);
    __exportStar(require("./random-date"), exports);
    __exportStar(require("./random-dates"), exports);
    __exportStar(require("./random-float"), exports);
    __exportStar(require("./random-floats"), exports);
    __exportStar(require("./random-from-array"), exports);
    __exportStar(require("./random-integers"), exports);
    __exportStar(require("./random-letter"), exports);
    __exportStar(require("./random-letters"), exports);
    __exportStar(require("./random-lower"), exports);
    __exportStar(require("./random-lowers"), exports);
    __exportStar(require("./random-upper"), exports);
    __exportStar(require("./random-uppers"), exports);
    __exportStar(require("./random-boolean"), exports);
    __exportStar(require("./random-phrase"), exports);
    __exportStar(require("./random-uuid"), exports);
    __exportStar(require("./random-hex-color"), exports);
    var random_1 = require("./random");
    __createBinding(exports, random_1, "random", "default");
});
