using Kdtp.Domain.Models;
using Kdtp.Domain.Models.Persistance;
using Kdtp.Services.Realtime;

namespace Kdtp.Services.Services;

public class AnswerService(IGameState gameState, IRealtimeNotifier realtimeNotifier) : IAnswerService
{
    public async Task SaveAnswer(Answer answer, Player player)
    {
        bool roundCompleted;
        List<PlayerScore> playerScores = new List<PlayerScore>();
        lock (gameState.SyncRoot)
        {
            var playerState = gameState.Players.FirstOrDefault(p => p.Id == player.Id);
            if(playerState == null) throw new NullReferenceException($"Player {player.Id} not found");
            playerState.LastSubmittedAnswer = answer.IsCorrect;
            playerState.HasSubmittedAnswer = true;

            roundCompleted = gameState.Players.All(p => p.HasSubmittedAnswer);

            if (roundCompleted)
            {
                var correctAnswers = gameState.Players.Count(p => p.LastSubmittedAnswer);
                var singlePoints = 1000 / correctAnswers;
                gameState.Players.ForEach(p =>
                {
                    playerScores.Add(new PlayerScore()
                    {
                        PlayerId = p.Id,
                        Score = p.LastSubmittedAnswer ? singlePoints : 0
                    });
                    p.HasSubmittedAnswer = false;
                });
            }
        }
        
        if (roundCompleted)
        {
            await realtimeNotifier.RoundCompleted(playerScores);
            return;
        }

        await realtimeNotifier.PlayerSubmit(player.Id);
    }
}