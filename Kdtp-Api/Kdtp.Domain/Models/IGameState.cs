using Kdtp.Domain.Enums;

namespace Kdtp.Domain.Models;

public interface IGameState
{
    List<Player> Players { get; set; }

    GameStatus Status { get; set; }

    public ISession Session { get; set; }
    
    object SyncRoot { get; }
}