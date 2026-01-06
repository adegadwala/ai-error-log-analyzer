export interface ErrorLog {
    line: number;
    message: string;
    severity: 'CRITICAL' | 'ERROR' | 'WARNING';
}

export interface AnalyzeRequest {
    logText: string;
}
