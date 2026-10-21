namespace Kdtp.Domain.Models;

public interface ISession
{
    Guid Id { get; }
    DateTime Created { get; }
}