import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { MatchResult } from './MatchResults';
import { MatchReader } from './MatchReader';
import { CsvReader } from './CsvReader';

const csvReader = new CsvReader('football.csv')
const matchReader = new MatchReader(csvReader)

matchReader.load()

const summary = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport
)

summary.buildAndPrintReport(matchReader.matches)