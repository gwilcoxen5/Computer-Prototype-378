using System.ComponentModel.DataAnnotations;

public class Goal
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public string GoalType { get; set; } = "maintain";
    public float StartWeight { get; set; }
    public float CurrentWeight { get; set; }
    public float TargetWeight { get; set; }
    public int IntervalWeeks { get; set; }
    public string Difficulty { get; set; } = "Beginner";
}

public class ProgressDto
{
    public double ProgressPercent { get; set; }
    public string Summary { get; set; } = "";
}
