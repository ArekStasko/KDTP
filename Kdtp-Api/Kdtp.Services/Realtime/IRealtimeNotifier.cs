namespace Kdtp.Services.Realtime;

public interface IRealtimeNotifier
{
    Task PlayerJoinedAsync(
        Guid playerId,
        string username,
        string role,
        CancellationToken cancellationToken = default);
}