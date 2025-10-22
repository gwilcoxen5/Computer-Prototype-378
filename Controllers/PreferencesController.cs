using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/preferences")]
public class PreferencesController : ControllerBase
{
    private static List<Preferences> prefs = new();

    [HttpPost]
    public IActionResult SetPreferences(Preferences p)
    {
        prefs.RemoveAll(x => x.UserId == p.UserId);
        prefs.Add(p);
        return Ok(p);
    }

    [HttpGet("{userId}")]
    public IActionResult GetPreferences(int userId)
    {
        var pref = prefs.FirstOrDefault(p => p.UserId == userId);
        return pref != null ? Ok(pref) : NotFound();
    }
}
