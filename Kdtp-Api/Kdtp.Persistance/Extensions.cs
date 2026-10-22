using Kdtp.Persistance.repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Kdtp.Persistance;

public static class Extensions
{
    public static void AddPersistance(this IServiceCollection services, string? connectionString)
    {
        if(connectionString == null) throw new NullReferenceException("Connection string is null");
        
        services.AddDbContext<GameDbContext>(options =>
            options.UseSqlServer(connectionString)
        );
        services.AddScoped<IGameRepository, GameRepository>();
    }
}