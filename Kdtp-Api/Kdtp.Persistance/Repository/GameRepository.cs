using Kdtp.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Kdtp.Persistance.repository;

public class GameRepository(GameDbContext context) : IGameRepository
{
    public async Task<List<QuestionSet>> GetQuestionsSetAsync()
    {
        try
        {
            var questionsSet = new List<QuestionSet>();
            var questions = await context.Questions.ToListAsync();
            var answers = await context.Answers.ToListAsync();
            
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