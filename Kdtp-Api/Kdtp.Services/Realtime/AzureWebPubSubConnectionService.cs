using Azure.Messaging.WebPubSub;
using Microsoft.Extensions.Configuration;

namespace Kdtp.Services.Realtime;

public class AzureWebPubSubConnectionService : IWebPubSubConnectionService
{
    private readonly WebPubSubServiceClient _client;
    
    public AzureWebPubSubConnectionService(IConfiguration configuration)
    {
        var connectionString =
            configuration["AzureWebPubSub:ConnectionString"];

        if (string.IsNullOrWhiteSpace(connectionString))
        {
            throw new InvalidOperationException(
                "Azure Web PubSub connection string is not configured.");
        }

        _client = new WebPubSubServiceClient(
            connectionString,
            "kdtp_game");
    }
    
    public async Task<string> GetClientAccessUrlAsync()
    {
        var result = await _client.GetClientAccessUriAsync();
        return result.AbsoluteUri;
    }
}