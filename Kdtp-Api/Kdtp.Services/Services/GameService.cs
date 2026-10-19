using Kdtp.Domain.Enums;
using Kdtp.Domain.Models;
using Kdtp.Services.Realtime;

namespace Kdtp.Services.Services;

public class GameService(IGameState gameState, IRealtimeNotifier realtimeNotifier) : IGameService
{
    private readonly object _lock = new();
    
    public IReadOnlyCollection<Player> GetPlayers()
    {
        lock (_lock)
        {
            return gameState.Players
                .Select(ClonePlayer)
                .ToArray();
        }
    }

    public async Task CreateSession()
    {
        lock (gameState.SyncRoot)
        {
            gameState.Session = new Session();
            gameState.Status = GameStatus.InProgress;
        }
        
        await realtimeNotifier.GameStartedAsync(gameState.Session);
    }

    public async Task<Player> JoinAsync(string username)
    {
        if (string.IsNullOrWhiteSpace(username))
        {
            throw new ArgumentNullException(nameof(username));
        }

        username = username.Trim();

        Player player;

        lock (gameState.SyncRoot)
        {
            if (gameState.Players.Count >= 10)
            {
                throw new InvalidOperationException("The game is full");
            }

            if (gameState.Players.Any(
                    p => string.Equals(
                        p.Username,
                        username,
                        StringComparison.OrdinalIgnoreCase)))
            {
                throw new InvalidOperationException(
                    "This username is already taken.");
            }
            
            var role = gameState.Players.Count == 0
                ? PlayerRole.SuperPlayer
                : PlayerRole.Player;
            
            player = new Player
            {
                Username = username,
                Role = role
            };
            
            gameState.Players.Add(player);
        }

        await realtimeNotifier.PlayerJoinedAsync(
            player.Id,
            player.Username,
            player.Role.ToString());

        return ClonePlayer(player);
    }
    
    private static Player ClonePlayer(Player player) => new()
    {
        Id = player.Id,
        Username = player.Username,
        Role = player.Role,
        HasSubmittedAnswer = player.HasSubmittedAnswer
    };
}