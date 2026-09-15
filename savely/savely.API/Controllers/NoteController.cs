using Microsoft.AspNetCore.Mvc;
using Savely.Domain.Models;
using Savely.Services.NoteService;

namespace savely.Controllers;

[ApiController]
[Route("[controller]")]
public class NoteController(INoteService noteService) : ControllerBase
{

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<Note>))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(Exception))]
    public IActionResult Get()
    {
        var result = noteService.GetNotes();
        return Ok(result);
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Note))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(Exception))]
    public IActionResult Get(int Id)
    {
        var result = noteService.GetNote(Id);
        return Ok(result);
    }
    
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(bool))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(Exception))]
    public IActionResult Post([FromBody] Note note)
    {
        var result = noteService.CreateNote(note);
        return Ok(result);
    }
    
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(bool))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(Exception))]
    public IActionResult Delete(int Id)
    {
        var result = noteService.DeleteNote(Id);
        return Ok(result);
    }
}