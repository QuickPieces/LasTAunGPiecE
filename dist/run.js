"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var twinties_core_1 = __importDefault(require("./twinties_core"));
var aung_pao_find_last_missing_piece_1 = __importDefault(require("./aung-pao-find-last-missing-piece"));
(function () {
    if (!process.argv[2])
        return console.log('[USAGE]: ts-node run.ts [CODE-WITH-MISSING-1-OR-2-ALPHABET] [1/2 <refer to the missing number of code>]');
    var MISSING_CODE = process.argv[2], NUMBER_OF_ALPHA_THAT_MISSING = parseInt(process.argv[3]) ? parseInt(process.argv[3]) : 1; // default 1
    if (NUMBER_OF_ALPHA_THAT_MISSING === 1) {
        aung_pao_find_last_missing_piece_1.default(MISSING_CODE);
    }
    else if (NUMBER_OF_ALPHA_THAT_MISSING === 2) {
        twinties_core_1.default(MISSING_CODE);
    }
    else {
        return console.log('ONLY 2 CASES POSSIBLE <1/2>');
    }
})();
