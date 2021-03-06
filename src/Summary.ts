import { MatchData } from "./DataMatch";

export interface Analyzer {
    run(matcher: MatchData[]): string;
}


export interface OutputTarget {
    print(report: string): void;
}

export class Summary{
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }
    
    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}