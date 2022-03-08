"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvReader_1 = require("./CsvReader");
const reader = new CsvReader_1.CsvReader('football.csv');
reader.read();
let manUnitedWins = 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log(`Manchester won ${manUnitedWins} games`);
