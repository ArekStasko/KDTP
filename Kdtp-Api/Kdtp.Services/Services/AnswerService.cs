using Kdtp.Domain.Models;
using Kdtp.Domain.Models.Persistance;
using Kdtp.Services.Realtime;

namespace Kdtp.Services.Services;

public class AnswerService(IGameState gameState, IRealtimeNotifier realtimeNotifier) : IAnswerService
{
    public async Task SaveAnswer(Answer answer, Player player)
    {
        bool roundCompleted = false;
        lock (gameState.SyncRoot)
        {
            var playerState = gameState.Players.FirstOrDefault(p => p.Id == player.Id);
            if(playerState == null) throw new NullReferenceException($"Player {player.Id} not found");
            playerState.LastSubmittedAnswer = answer.IsCorrect;
            playerState.HasSubmittedAnswer = true;

            roundCompleted = gameState.Players.All(p => p.HasSubmittedAnswer);

            if (roundCompleted)
                gameState.Players.ForEach(p => p.HasSubmittedAnswer = false);
        }

        if (roundCompleted)
        {
            await realtimeNotifier.PlayerJoinedAsync(
                player.Id,
                player.Username,
                player.Role.ToString());
            return;
        }
        
        await realtimeNotifier.PlayerJoinedAsync(
            player.Id,
            player.Username,
            player.Role.ToString());
    }
}