using Azure.Core;
using Azure.Messaging.WebPubSub;
using Microsoft.Extensions.Configuration;

namespace Kdtp.Services.Realtime;

public class AzureWebPubSubNotifier : IRealtimeNotifier
{
    private readonly WebPubSubServiceClient _client;

    public AzureWebPubSubNotifier(IConfiguration configuration)
    {
        var connectionString = configuration[
            "AzureWebPubSub:ConnectionString"];

        if (string.IsNullOrWhiteSpace(connectionString))
        {
            throw new InvalidOperationException(
                "Azure Web PubSub connection string is not configured.");
        }

        _client = new WebPubSubServiceClient(
            connectionString,
            "kdtp_game");
    }

    public async Task PlayerJoinedAsync(
        Guid playerId,
        string username,
        string role,
        CancellationToken cancellationToken = default)
    {
        var message = new
        {
            type = "PlayerJoined",
            player = new
            {
                id = playerId,
                username,
                role
            }
        };

        await _client.SendToAllAsync(
            BinaryData.FromObjectAsJson(message),
            ContentType.ApplicationJson
            );
    }
}