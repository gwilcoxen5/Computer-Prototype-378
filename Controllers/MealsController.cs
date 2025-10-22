using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/meals")]
public class MealsController : ControllerBase
{
    private static List<Meal> meals = new();

    [HttpPost]
    public IActionResult AddMeal(Meal meal)
    {
        meals.Add(meal);
        return Ok(meal);
    }

    [HttpGet]
    public IActionResult GetMeals([FromQuery] bool? vegetarian, [FromQuery] bool? vegan)
    {
        var result = meals.AsEnumerable();
        if (vegetarian.HasValue) result = result.Where(m => m.Vegetarian == vegetarian.Value);
        if (vegan.HasValue) result = result.Where(m => m.Vegan == vegan.Value);
        return Ok(result);
    }
}
