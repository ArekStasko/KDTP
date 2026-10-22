using Kdtp.Domain.Models.Persistance;

namespace Kdtp.Domain.Models;

public class QuestionSet
{
    public Question Question {get; set;}
    public List<Answer> Answers {get; set;}
}