using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("config")]
public class Meal
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = "";

    [Column("dietary")]
    public string Dietary { get; set; } = "";

    [Column("ingredients")]
    public string Ingredients { get; set; } = "";

    [Column("plan")]
    public string Plan { get; set; } = "";

    [Column("type")]
    public string Type { get; set; } = "";
}
