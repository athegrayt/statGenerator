import {CsvReader} from './CsvReader'

const reader = new CsvReader('football.csv');

reader.read()

let manUnitedWins = 0

enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
}
	
for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === 'H') {
		manUnitedWins++
	}
	else if (match[2] === 'Man United' && match[5] === 'A') {
		manUnitedWins++
	}
}

console.log(`Manchester won ${manUnitedWins} games`)

