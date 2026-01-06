import React from 'react';
import { ErrorLog } from '../types/ErrorLog';

interface ErrorListProps {
    errors: ErrorLog[];
}

const ErrorList: React.FC<ErrorListProps> = ({ errors }) => {
    const getSeverityColor = (severity: string): string => {
        switch (severity) {
            case 'CRITICAL':
                return '#ff4444';
            case 'ERROR':
                return '#ff9944';
            case 'WARNING':
                return '#ffdd44';
            default:
                return '#cccccc';
        }
    };

    if (errors.length === 0) {
        return <p>No errors detected yet. Paste logs and click "Analyze Logs".</p>;
    }

    return (
        <div className="error-list">
            <h3>Detected Errors: {errors.length}</h3>
            <ul>
                {errors.map((err, idx) => (
                    <li
                        key={idx}
                        style={{
                            backgroundColor: getSeverityColor(err.severity),
                            padding: '10px',
                            margin: '5px 0',
                            borderRadius: '5px',
                        }}
                    >
                        <strong>[{err.severity}]</strong> (Line {err.line}): {err.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ErrorList;
