using Kdtp.Services.Realtime;
using Microsoft.AspNetCore.Mvc;

namespace Kdtp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WebPubSubController(IWebPubSubConnectionService connectionService) : ControllerBase
{
    [HttpGet("negotiate")]
    public async Task<IActionResult> Negotiate()
    {
        var url = connectionService.GetClientAccessUrlAsync();
        return Ok(new { url });
    }
}