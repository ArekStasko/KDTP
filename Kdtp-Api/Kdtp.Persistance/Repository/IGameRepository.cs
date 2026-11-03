using Kdtp.Domain.Models;

namespace Kdtp.Persistance.repository;

public interface IGameRepository
{
    public Task<List<QuestionSet>> GetQuestionsSetAsync();
}