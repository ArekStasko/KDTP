using Kdtp.Domain.Enums;

namespace Kdtp.Domain.Models;

public class Player
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Avatar { get; init; } = string.Empty;
    public string Username { get; set; } = string.Empty;
    public PlayerRole Role { get; set; } = PlayerRole.Player;
    public int Score { get; set; } = 0;
    public bool HasSubmittedAnswer { get; set; }
    public bool LastSubmittedAnswer { get; set; }
}