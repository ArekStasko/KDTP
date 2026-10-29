using Kdtp.Domain.Models;
using Kdtp.Domain.Models.Persistance;

namespace Kdtp.Services.Services;

public interface IAnswerService
{
    public Task SaveAnswer(Answer answer, Player user);
}