using Microsoft.Extensions.DependencyInjection;
using Savely.Services.NoteService;

namespace Savely.Services;

public static class Extentions
{
    public static void ConfigureServices(this IServiceCollection services)
    {
        services.AddScoped<INoteService, NoteService.NoteService>();
    }
}