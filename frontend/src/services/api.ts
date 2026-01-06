import axios from 'axios';
import { ErrorLog, AnalyzeRequest } from '../types/ErrorLog';

const API_BASE_URL = 'http://localhost:5000/api';

export const analyzeLogs = async (logText: string): Promise<ErrorLog[]> => {
    const response = await axios.post<ErrorLog[]>(
        `${API_BASE_URL}/loganalyzer/analyze`,
        { logText } as AnalyzeRequest
    );
    return response.data;
};
