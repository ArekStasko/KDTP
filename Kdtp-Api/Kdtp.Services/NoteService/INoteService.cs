using Kdtp.Domain.Models;

namespace Kdtp.Services.NoteService;

public interface INoteService
{
    Note GetNote(int id);
    List<Note> GetNotes();
    bool CreateNote(Note note);
    bool DeleteNote(int id);
}