using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

[ApiController]
[Route("api/meals")]
public class MealsController : ControllerBase
{
    private readonly AppDbContext _db;

    public MealsController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IActionResult> GetMeals(
        [FromQuery] string? plan,
        [FromQuery] string? type)
    {
        IQueryable<Meal> query = _db.Meals;

        if (!string.IsNullOrWhiteSpace(plan))
            query = query.Where(m => m.Plan == plan);

        if (!string.IsNullOrWhiteSpace(type))
            query = query.Where(m => m.Type == type);

        var meals = await query.ToListAsync();
        return Ok(meals);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetMeal(int id)
    {
        var meal = await _db.Meals.FindAsync(id);
        if (meal == null) return NotFound();
        return Ok(meal);
    }

    [HttpPost]
    public async Task<IActionResult> AddMeal(Meal meal)
    {
        _db.Meals.Add(meal);
        await _db.SaveChangesAsync();
        return Ok(meal);
    }
}
