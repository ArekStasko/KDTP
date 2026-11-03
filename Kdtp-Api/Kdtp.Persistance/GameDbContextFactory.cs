using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Kdtp.Persistance;

public class GameDbContextFactory : IDesignTimeDbContextFactory<GameDbContext>
{
    public GameDbContext CreateDbContext(string[] args)
    {
        var options = new DbContextOptionsBuilder<GameDbContext>()
            .UseSqlServer(
                "Server=tcp:kdtp.database.windows.net,1433;Database=kdtp-db;Authentication=Active Directory Default;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;")
            .Options;
        
        return new GameDbContext(options);
    }
}