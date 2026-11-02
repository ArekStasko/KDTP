using Kdtp.Domain.Models.Persistance;

namespace savely.Requests;

public record SubmitAnswerRequest
{
    public Guid PlayerId { get; init; }
    public Answer Answer { get; set; }
}