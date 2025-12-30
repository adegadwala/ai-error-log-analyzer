# 🤖 AI Error Log Analyzer

A full-stack application for analyzing and categorizing error logs automatically using regex-based pattern matching.

## 🚀 Tech Stack

- **Backend**: ASP.NET Core 8.0 (C#)
- **Frontend**: React with TypeScript
- **API Communication**: Axios

## 📋 Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v14 or higher)
- Git

## 🛠️ Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Restore dependencies:
```bash
dotnet restore
```

3. Run the backend:
```bash
dotnet run
```

Backend will start on: **http://localhost:5000**

### Frontend Setup

1. Navigate to the frontend folder (in a new terminal):
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will start on: **http://localhost:3000**

## 🧪 Testing the Application

Use this sample log data to test:

```
2025-12-30 10:15:23 [INFO] Application started successfully
2025-12-30 10:15:45 [WARNING] Database connection pool is 80% full
2025-12-30 10:16:12 [ERROR] Failed to process user request: timeout
2025-12-30 10:16:45 [CRITICAL] System out of memory
2025-12-30 10:17:00 [INFO] Attempting recovery
2025-12-30 10:17:15 [ERROR] Recovery failed: connection refused
2025-12-30 10:18:00 [WARNING] High CPU usage detected: 95%
```

## 📊 Features

- ✅ Regex-based error detection
- ✅ Severity classification (CRITICAL, ERROR, WARNING)
- ✅ Color-coded error display
- ✅ Line number tracking
- ✅ Real-time analysis
- ✅ Clean, responsive UI

## 🎯 API Endpoints

### POST /api/loganalyzer/analyze
Analyzes log text and returns detected errors.

**Request Body:**
```json
{
  "logText": "your log content here"
}
```

**Response:**
```json
[
  {
    "line": 3,
    "message": "2025-12-30 10:16:12 [ERROR] Failed to process user request",
    "severity": "ERROR"
  }
]
```

## 🔮 Future Enhancements

- File upload support
- ML-based classification
- Database persistence
- Real-time log streaming
- Export to CSV/JSON
- User authentication

## 📝 License

MIT License
