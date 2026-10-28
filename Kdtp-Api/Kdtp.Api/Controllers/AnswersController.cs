using Microsoft.AspNetCore.Mvc;
using savely.Requests;

namespace Kdtp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnswersController : ControllerBase
{
    [HttpPost("answer")]
    public async Task<IActionResult> SubmitAnswer(SubmitAnswerRequest request)
    {
        
    }
}