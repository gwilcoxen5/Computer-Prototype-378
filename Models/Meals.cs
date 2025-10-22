public class Meal
{
    public string Name { get; set; } = "";
    public int Calories { get; set; }
    public string Recipe { get; set; } = "";

    public bool Vegetarian { get; set; }
    public bool Vegan { get; set; }
    public int Popularity { get; set; } = 0;
}
