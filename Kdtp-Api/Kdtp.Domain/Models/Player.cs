using Kdtp.Domain.Enums;

namespace Kdtp.Domain.Models;

public class Player
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public string Username { get; set; } = string.Empty;
    public PlayerRole Role { get; set; } = PlayerRole.Player;
    public bool HasSubmittedAnswer { get; set; }
}