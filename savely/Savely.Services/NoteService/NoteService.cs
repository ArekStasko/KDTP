using Savely.Domain.Models;

namespace Savely.Services.NoteService;

public class NoteService : INoteService
{
    private List<Note> Notes =
    [
        new()
        {
            Id = 0,
            Title = "Note 1",
            Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },

        new()
        {
            Id = 1,
            Title = "Note 2",
            Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },

        new()
        {
            Id = 2,
            Title = "Note 3",
            Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },

        new()
        {
            Id = 3,
            Title = "Note 4",
            Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },

        new()
        {
            Id = 4,
            Title = "Note 5",
            Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }

    ];
    
    public Note GetNote(int id)
    {
        var note = Notes.FirstOrDefault(n => n.Id == id);
        if (note == null) throw new NullReferenceException();
        return note;
    }

    public List<Note> GetNotes()
    {
        return Notes;
    }

    public bool CreateNote(Note note)
    {
        return true;
    }

    public bool DeleteNote(int id)
    {
        return Notes.Any(n => n.Id == id);
    }
}