using Kdtp.Domain.Models;

namespace Kdtp.Services.Services;

public interface IGameService
{
    IReadOnlyCollection<Player> GetPlayers();
    Task<Player> JoinAsync(string username);
}