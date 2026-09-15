using Savely.Domain.Models;

namespace Savely.Services.NoteService;

public interface INoteService
{
    Note GetNote(int id);
    List<Note> GetNotes();
    bool CreateNote(Note note);
    bool DeleteNote(int id);
}