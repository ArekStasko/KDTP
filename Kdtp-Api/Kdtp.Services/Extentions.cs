using Microsoft.Extensions.DependencyInjection;
using Kdtp.Services.NoteService;

namespace Kdtp.Services;

public static class Extentions
{
    public static void ConfigureServices(this IServiceCollection services)
    {
        services.AddScoped<INoteService, NoteService.NoteService>();
    }
}