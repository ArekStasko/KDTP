namespace savely.Requests;

public record SubmitAnswerRequest
{
    public int UserId { get; init; }
    public int QuestionId { get; init; }
    public int AnswerId { get; set; }
}