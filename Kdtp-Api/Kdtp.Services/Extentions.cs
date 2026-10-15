using Kdtp.Services.Realtime;
using Kdtp.Services.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Kdtp.Services;

public static class Extentions
{
    public static void ConfigureServices(this IServiceCollection services)
    {
        services.AddSingleton<IRealtimeNotifier, AzureWebPubSubNotifier>();
        services.AddScoped<IGameService, GameService>();
        services.AddScoped<IWebPubSubConnectionService, AzureWebPubSubConnectionService>();
    }
}