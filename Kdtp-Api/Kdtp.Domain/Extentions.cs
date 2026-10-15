using Kdtp.Domain.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Kdtp.Domain;

public static class Extentions
{
    public static void ConfigureDomain(this IServiceCollection services)
    {
        services.AddSingleton<GameState>();

        services.AddSingleton<IGameState>(
            sp => sp.GetRequiredService<GameState>());
    }
}