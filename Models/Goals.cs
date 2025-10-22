public class Goal
{
    public int UserId { get; set; }
    public string GoalType { get; set; } = "maintain"; // "lose" | "maintain" | "gain"
    public float StartWeight { get; set; }
    public float CurrentWeight { get; set; }
    public float TargetWeight { get; set; }
    public int IntervalWeeks { get; set; } = 0;
    public string Difficulty { get; set; } = "Beginner";
}

public class ProgressDto
{
    public double ProgressPercent { get; set; }
    public string Summary { get; set; } = "";
}
