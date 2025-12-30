import React, { useState } from 'react';
import { analyzeLogs } from '../services/api';
import { ErrorLog } from '../types/ErrorLog';

interface LogAnalyzerProps {
    onAnalyze: (errors: ErrorLog[]) => void;
}

const LogAnalyzer: React.FC<LogAnalyzerProps> = ({ onAnalyze }) => {
    const [logText, setLogText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = async () => {
        if (!logText.trim()) {
            setError('Please enter some log text');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const results = await analyzeLogs(logText);
            onAnalyze(results);
        } catch (err) {
            setError('Failed to analyze logs. Make sure the backend is running.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="log-analyzer">
            <textarea
                rows={12}
                cols={80}
                value={logText}
                onChange={(e) => setLogText(e.target.value)}
                placeholder="Paste your application logs here..."
                disabled={loading}
            />
            <br />
            <button onClick={handleAnalyze} disabled={loading}>
                {loading ? 'Analyzing...' : 'Analyze Logs'}
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default LogAnalyzer;
