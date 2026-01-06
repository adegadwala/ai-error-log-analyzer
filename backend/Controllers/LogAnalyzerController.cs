using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Services;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogAnalyzerController : ControllerBase
    {
        private readonly ILogParserService _logParser;
        
        public LogAnalyzerController(ILogParserService logParser)
        {
            _logParser = logParser;
        }
        
        [HttpPost("analyze")]
        public ActionResult<List<ErrorLog>> AnalyzeLog([FromBody] AnalyzeRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.LogText))
            {
                return BadRequest("Log text cannot be empty");
            }
            
            var errors = _logParser.ParseLogs(request.LogText);
            return Ok(errors);
        }
    }
}
