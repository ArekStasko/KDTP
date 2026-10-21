using Kdtp.Domain.Models;

namespace Kdtp.Services.Realtime;

public interface IRealtimeNotifier
{
    Task PlayerJoinedAsync(
        Guid playerId,
        string username,
        string role,
        CancellationToken cancellationToken = default);
    
    Task GameStartedAsync(
        ISession session,
        CancellationToken cancellationToken = default);
}