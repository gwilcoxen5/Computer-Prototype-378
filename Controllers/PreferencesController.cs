using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[ApiController]
[Route("api/preferences")]
public class PreferencesController : ControllerBase
{
    private readonly AppDbContext _db;

    public PreferencesController(AppDbContext db)
    {
        _db = db;
    }

    [HttpPost]
    public async Task<IActionResult> SetPreferences(Preferences p)
    {
        var existing = await _db.Preferences.FirstOrDefaultAsync(x => x.UserId == p.UserId);

        if (existing == null)
        {
            _db.Preferences.Add(p);
        }
        else
        {
            existing.Vegetarian = p.Vegetarian;
            existing.Vegan = p.Vegan;
            existing.Allergies = p.Allergies;
        }

        await _db.SaveChangesAsync();
        return Ok(p);
    }

    [HttpGet("{userId}")]
    public async Task<IActionResult> GetPreferences(int userId)
    {
        var pref = await _db.Preferences.FirstOrDefaultAsync(p => p.UserId == userId);
        if (pref == null) return NotFound();
        return Ok(pref);
    }
}
