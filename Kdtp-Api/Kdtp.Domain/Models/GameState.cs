using Kdtp.Domain.Enums;

namespace Kdtp.Domain.Models;

public class GameState : IGameState
{
    public List<Player> Players { get; set; } = [];

    public GameStatus Status { get; set; } = GameStatus.Waiting;
    public ISession Session { get; set; }
    public object SyncRoot { get; } = new();
}