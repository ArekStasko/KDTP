using Kdtp.Services.Services;
using Microsoft.AspNetCore.Mvc;
using savely.Requests;

namespace Kdtp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GameController(IGameService gameService) : ControllerBase
{
    [HttpGet("players")]
    public IActionResult GetPlayers()
    {
        var players = gameService.GetPlayers();
        return Ok(players);
    }
    
    [HttpGet("questions-set")]
    public async Task<IActionResult> GetQuestionsSet()
    {
        var questionsSet = await gameService.GetQuestionSetsAsync();
        return Ok(questionsSet);
    }

    [HttpPost("players")]
    public async Task<IActionResult> Join([FromBody] JoinGameRequest request)
    {
        var player = await gameService.JoinAsync(request.Username);
        return Ok(player);
    }
    
    [HttpPost("session")]
    public async Task CreateSession()
        => await gameService.CreateSession();
}