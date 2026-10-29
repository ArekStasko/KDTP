namespace Kdtp.Domain.Models;

public record PlayerScore
{
    public Guid PlayerId { get; set; }
    public int Score { get; set; }
};