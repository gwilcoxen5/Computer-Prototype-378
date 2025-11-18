using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[ApiController]
[Route("api/goals")]
public class GoalsController : ControllerBase
{
    private readonly AppDbContext _db;

    public GoalsController(AppDbContext db)
    {
        _db = db;
    }

    [HttpPost]
    public async Task<IActionResult> CreateOrUpdateGoal(Goal goal)
    {
        var existing = await _db.Goals.FirstOrDefaultAsync(g => g.UserId == goal.UserId);

        if (existing == null)
        {
            _db.Goals.Add(goal);
        }
        else
        {
            existing.GoalType = goal.GoalType;
            existing.StartWeight = goal.StartWeight;
            existing.CurrentWeight = goal.CurrentWeight;
            existing.TargetWeight = goal.TargetWeight;
            existing.IntervalWeeks = goal.IntervalWeeks;
            existing.Difficulty = goal.Difficulty;
        }

        await _db.SaveChangesAsync();
        return Ok(goal);
    }

    [HttpGet("{userId}")]
    public async Task<IActionResult> GetGoal(int userId)
    {
        var goal = await _db.Goals.FirstOrDefaultAsync(g => g.UserId == userId);
        if (goal == null) return NotFound();
        return Ok(goal);
    }

    [HttpGet("{userId}/progress")]
    public async Task<IActionResult> GetProgress(int userId)
    {
        var goal = await _db.Goals.FirstOrDefaultAsync(g => g.UserId == userId);
        if (goal == null) return NotFound();

        double progressPercent = 0;

        if (goal.TargetWeight != goal.StartWeight)
        {
            progressPercent = (goal.CurrentWeight - goal.StartWeight) /
                              (goal.TargetWeight - goal.StartWeight) * 100.0;
        }

        var progress = new ProgressDto
        {
            ProgressPercent = progressPercent,
            Summary = $"Progress: {goal.CurrentWeight} kg out of target {goal.TargetWeight} kg"
        };

        return Ok(progress);
    }
}
