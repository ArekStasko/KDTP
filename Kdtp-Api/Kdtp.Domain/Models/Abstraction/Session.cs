namespace Kdtp.Domain.Models;

public class Session : ISession
{
    public Guid Id { get; } = Guid.NewGuid();
    public DateTime Created { get; } = DateTime.UtcNow;
}