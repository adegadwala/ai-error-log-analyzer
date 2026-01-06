using System.Text.RegularExpressions;
using backend.Models;

namespace backend.Services
{
    public interface ILogParserService
    {
        List<ErrorLog> ParseLogs(string logText);
    }
    
    public class LogParserService : ILogParserService
    {
        public List<ErrorLog> ParseLogs(string logText)
        {
            var errors = new List<ErrorLog>();
            var lines = logText.Split('\n');
            
            for (int i = 0; i < lines.Length; i++)
            {
                var line = lines[i];
                string? severity = null;
                
                if (Regex.IsMatch(line, @"\bCRITICAL\b", RegexOptions.IgnoreCase))
                {
                    severity = "CRITICAL";
                }
                else if (Regex.IsMatch(line, @"\bERROR\b", RegexOptions.IgnoreCase))
                {
                    severity = "ERROR";
                }
                else if (Regex.IsMatch(line, @"\bWARNING\b", RegexOptions.IgnoreCase))
                {
                    severity = "WARNING";
                }
                
                if (severity != null)
                {
                    errors.Add(new ErrorLog
                    {
                        Line = i + 1,
                        Message = line.Trim(),
                        Severity = severity
                    });
                }
            }
            
            return errors;
        }
    }
}
