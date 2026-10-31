using Kdtp.Services.Services;
using Microsoft.AspNetCore.Mvc;
using savely.Requests;

namespace Kdtp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AnswersController(IAnswerService answerService) : ControllerBase
{
    [HttpPost("answer")]
    public async Task SubmitAnswer(SubmitAnswerRequest request)
        => await answerService.SaveAnswer(request.Answer, request.PlayerId);
}