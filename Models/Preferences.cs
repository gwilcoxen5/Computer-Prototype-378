using System.ComponentModel.DataAnnotations;

public class Preferences
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public bool Vegetarian { get; set; }
    public bool Vegan { get; set; }
    public string Allergies { get; set; } = "";
}
