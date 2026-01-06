import React, { useState } from 'react';
import './App.css';
import LogAnalyzer from './components/LogAnalyzer';
import ErrorList from './components/ErrorList';
import { ErrorLog } from './types/ErrorLog';

function App() {
    const [errors, setErrors] = useState<ErrorLog[]>([]);

    return (
        <div className="App">
            <header>
                <h1>🤖 AI Error Log Analyzer</h1>
                <p>Paste your logs below to detect and categorize errors automatically</p>
            </header>
            <main>
                <LogAnalyzer onAnalyze={setErrors} />
                <ErrorList errors={errors} />
            </main>
        </div>
    );
}

export default App;
