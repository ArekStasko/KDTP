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

    [HttpPost("players")]
    public async Task<IActionResult> Join([FromBody] JoinGameRequest request)
    {
        try
        {
            var player = await gameService.JoinAsync(request.Username);

            return Ok(player);
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
        catch (InvalidOperationException ex)
        {
            return Conflict(new { message = ex.Message });
        }
    }
}