namespace Kdtp.Services.Realtime;

public interface IWebPubSubConnectionService
{
    Task<string> GetClientAccessUrlAsync();
}