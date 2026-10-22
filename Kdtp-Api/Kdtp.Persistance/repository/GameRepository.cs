using Kdtp.Domain.Models;

namespace Kdtp.Persistance.repository;

public class GameRepository(GameDbContext context) : IGameRepository
{
    public async Task<List<QuestionSet>> GetQuestionsSetAsync()
    {
        try
        {
            var questionsSet = new List<QuestionSet>();
            var questions = context.Questions;
            var answers = context.Answers;
            
            foreach (var question in questions)
            {
                var questionSet = new QuestionSet
                {
                    Question = question,
                    Answers = answers.Where(a => a.QuestionId == question.Id).ToList()
                };
                questionsSet.Add(questionSet);
            }

            return questionsSet;
        }
        catch (Exception e)
        {
            throw e;
        }
    }
}