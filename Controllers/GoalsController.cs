using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/goals")]
public class GoalsController : ControllerBase
{
    private static List<Goal> goals = new();

    [HttpPost]
    public IActionResult CreateGoal(Goal goal)
    {
        goals.Add(goal);
        return Ok(goal);
    }

    [HttpGet("{userId}")]
    public IActionResult GetGoal(int userId)
    {
        var goal = goals.FirstOrDefault(g => g.UserId == userId);
        return goal != null ? Ok(goal) : NotFound();
    }

    [HttpGet("{userId}/progress")]
    public IActionResult GetProgress(int userId)
    {
        var goal = goals.FirstOrDefault(g => g.UserId == userId);
        if (goal == null) return NotFound();

        var progress = new ProgressDto
        {
            ProgressPercent = (goal.CurrentWeight - goal.StartWeight) / (goal.TargetWeight - goal.StartWeight) * 100,
            Summary = $"Progress: {goal.CurrentWeight}kg out of {goal.TargetWeight}kg"
        };
        return Ok(progress);
    }
}
