using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using System.Linq;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=local.db"));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();

    if (!db.Meals.Any())
    {
        db.Meals.AddRange(
            // BREAKFAST
            new Meal { Name = "Protein Oatmeal Bowl", Dietary = "550 Cal, high protein, contains dairy, contains gluten", Ingredients = "rolled_oats milk whey_protein banana peanut_butter chia_seeds cinnamon", Plan = "gain", Type = "breakfast" },
            new Meal { Name = "Greek Yogurt Parfait", Dietary = "420 Cal, high protein, contains dairy, contains gluten", Ingredients = "greek_yogurt granola strawberries blueberries honey", Plan = "maintain", Type = "breakfast" },
            new Meal { Name = "Veggie Egg Scramble", Dietary = "300 Cal, low calorie, contains eggs, gluten-free", Ingredients = "eggs spinach tomato onion bell_pepper olive_oil", Plan = "loss", Type = "breakfast" },
            new Meal { Name = "Peanut Butter Banana Toast", Dietary = "480 Cal, contains nuts, contains gluten", Ingredients = "whole_wheat_bread peanut_butter banana chia_seeds", Plan = "gain", Type = "breakfast" },
            new Meal { Name = "Berry Smoothie Bowl", Dietary = "380 Cal, contains dairy, gluten-free", Ingredients = "frozen_berries banana greek_yogurt milk granola", Plan = "maintain", Type = "breakfast" },
            new Meal { Name = "Turkey Egg Breakfast Burrito", Dietary = "620 Cal, high protein, contains dairy, contains gluten", Ingredients = "tortilla egg turkey_sausage cheddar_cheese peppers onion salsa", Plan = "gain", Type = "breakfast" },
            new Meal { Name = "Avocado Egg Toast", Dietary = "430 Cal, contains eggs, contains gluten", Ingredients = "whole_grain_bread avocado egg_every_style cherry_tomatoes", Plan = "maintain", Type = "breakfast" },
            new Meal { Name = "Cottage Cheese Fruit Plate", Dietary = "320 Cal, high protein, contains dairy, gluten-free", Ingredients = "cottage_cheese pineapple grapes strawberries almonds", Plan = "loss", Type = "breakfast" },
            new Meal { Name = "Chia Seed Pudding", Dietary = "290 Cal, dairy-free option, gluten-free", Ingredients = "chia_seeds almond_milk maple_syrup berries", Plan = "loss", Type = "breakfast" },
            new Meal { Name = "Protein Pancakes", Dietary = "650 Cal, high protein, contains dairy, contains gluten", Ingredients = "protein_pancake_mix milk egg banana peanut_butter syrup", Plan = "gain", Type = "breakfast" },
            new Meal { Name = "Overnight Oats", Dietary = "400 Cal, contains dairy, contains gluten", Ingredients = "rolled_oats milk chia_seeds blueberries honey", Plan = "maintain", Type = "breakfast" },
            new Meal { Name = "Tofu Veggie Scramble", Dietary = "310 Cal, vegan, dairy-free, gluten-free", Ingredients = "firm_tofu spinach mushrooms peppers turmeric olive_oil", Plan = "loss", Type = "breakfast" },
            new Meal { Name = "Breakfast Rice Bowl", Dietary = "560 Cal, high carb, contains eggs, gluten-free", Ingredients = "white_rice eggs soy_sauce green_onion sesame_oil avocado", Plan = "gain", Type = "breakfast" },
            new Meal { Name = "High Fiber Cereal with Milk", Dietary = "360 Cal, contains dairy, contains gluten", Ingredients = "high_fiber_cereal milk sliced_banana", Plan = "maintain", Type = "breakfast" },
            new Meal { Name = "Berry Protein Smoothie", Dietary = "320 Cal, high protein, gluten-free", Ingredients = "protein_powder frozen_berries spinach banana almond_milk", Plan = "loss", Type = "breakfast" },
            new Meal { Name = "Breakfast Bagel Sandwich", Dietary = "700 Cal, high calorie, contains dairy, contains gluten", Ingredients = "bagel egg cheddar_cheese turkey_bacon tomato", Plan = "gain", Type = "breakfast" },
            new Meal { Name = "Breakfast Quinoa Bowl", Dietary = "410 Cal, high fiber, gluten-free", Ingredients = "quinoa almond_milk berries walnuts honey", Plan = "maintain", Type = "breakfast" },
            new Meal { Name = "Egg White Veggie Omelet", Dietary = "280 Cal, low fat, contains eggs, gluten-free", Ingredients = "egg_whites spinach tomato onion mushrooms", Plan = "loss", Type = "breakfast" },
            new Meal { Name = "Almond Butter Toast", Dietary = "350 Cal, contains nuts, contains gluten", Ingredients = "whole_grain_bread almond_butter sliced_strawberries", Plan = "maintain", Type = "breakfast" },
            new Meal { Name = "Light Breakfast Burrito", Dietary = "380 Cal, moderate protein, contains gluten", Ingredients = "small_tortilla egg_whites black_beans salsa spinach", Plan = "loss", Type = "breakfast" },

            // LUNCH
            new Meal { Name = "Grilled Chicken Rice Bowl", Dietary = "750 Cal, high protein, gluten-free", Ingredients = "grilled_chicken brown_rice black_beans corn salsa avocado", Plan = "gain", Type = "lunch" },
            new Meal { Name = "Turkey Avocado Sandwich", Dietary = "520 Cal, contains gluten, contains dairy", Ingredients = "whole_wheat_bread turkey_breast avocado lettuce tomato swiss_cheese", Plan = "maintain", Type = "lunch" },
            new Meal { Name = "Lentil Veggie Soup", Dietary = "350 Cal, high fiber, vegan, gluten-free", Ingredients = "lentils carrots celery tomato_broth spinach herbs", Plan = "loss", Type = "lunch" },
            new Meal { Name = "Beef Burrito Bowl", Dietary = "900 Cal, high calorie, gluten-free", Ingredients = "ground_beef rice pinto_beans cheddar_cheese salsa sour_cream lettuce", Plan = "gain", Type = "lunch" },
            new Meal { Name = "Chickpea Power Salad", Dietary = "420 Cal, vegetarian, high fiber, gluten-free", Ingredients = "chickpeas cucumber tomato red_onion feta_cheese olive_oil", Plan = "maintain", Type = "lunch" },
            new Meal { Name = "Tuna Lettuce Wraps", Dietary = "360 Cal, high protein, dairy-free, gluten-free", Ingredients = "tuna lettuce_cups celery light_mayo mustard pickles", Plan = "loss", Type = "lunch" },
            new Meal { Name = "Salmon Grain Bowl", Dietary = "700 Cal, high omega_3, gluten-free", Ingredients = "baked_salmon quinoa roasted_broccoli olive_oil lemon", Plan = "gain", Type = "lunch" },
            new Meal { Name = "Chicken Caesar Wrap", Dietary = "550 Cal, contains dairy, contains gluten", Ingredients = "tortilla grilled_chicken romaine caesar_dressing parmesan", Plan = "maintain", Type = "lunch" },
            new Meal { Name = "Veggie Hummus Wrap", Dietary = "370 Cal, vegetarian, dairy-free", Ingredients = "tortilla hummus cucumber carrot spinach bell_pepper", Plan = "loss", Type = "lunch" },
            new Meal { Name = "Steak Quinoa Bowl", Dietary = "820 Cal, high protein, gluten-free", Ingredients = "grilled_steak quinoa roasted_sweet_potato spinach olive_oil", Plan = "gain", Type = "lunch" },
            new Meal { Name = "Poke Style Rice Bowl", Dietary = "650 Cal, contains fish, gluten-free", Ingredients = "sushi_rice raw_salmon edamame cucumber avocado soy_sauce", Plan = "maintain", Type = "lunch" },
            new Meal { Name = "Black Bean Taco Plate", Dietary = "400 Cal, vegetarian, gluten-free", Ingredients = "corn_tortillas black_beans lettuce salsa avocado", Plan = "loss", Type = "lunch" },
            new Meal { Name = "Chicken Pasta Primavera", Dietary = "780 Cal, high carb, contains gluten, contains dairy", Ingredients = "penne_pasta grilled_chicken mixed_veggies olive_oil parmesan", Plan = "gain", Type = "lunch" },
            new Meal { Name = "Greek Chicken Salad", Dietary = "480 Cal, high protein, gluten-free", Ingredients = "grilled_chicken romaine cucumber tomato olives feta_cheese vinaigrette", Plan = "maintain", Type = "lunch" },
            new Meal { Name = "Zucchini Noodle Marinara", Dietary = "330 Cal, low carb, gluten-free, dairy-free", Ingredients = "zucchini_noodles marinara_sauce mushrooms spinach", Plan = "loss", Type = "lunch" },
            new Meal { Name = "Turkey Chili", Dietary = "560 Cal, high protein, gluten-free", Ingredients = "ground_turkey beans tomato onion chili_spices", Plan = "maintain", Type = "lunch" },
            new Meal { Name = "Soba Noodle Stir Fry", Dietary = "690 Cal, contains gluten, high carb", Ingredients = "soba_noodles chicken_mixed_veggies soy_sauce sesame_seeds", Plan = "gain", Type = "lunch" },
            new Meal { Name = "Sushi Lunch Plate", Dietary = "500 Cal, contains fish, contains gluten", Ingredients = "sushi_rolls soy_sauce pickled_ginger cucumber_salad", Plan = "maintain", Type = "lunch" },
            new Meal { Name = "Grilled Shrimp Salad", Dietary = "390 Cal, high protein, gluten-free", Ingredients = "grilled_shrimp mixed_greens cherry_tomatoes avocado vinaigrette", Plan = "loss", Type = "lunch" },
            new Meal { Name = "Baked Falafel Bowl", Dietary = "480 Cal, vegetarian, high fiber", Ingredients = "baked_falafel brown_rice cucumber tomato hummus tahini", Plan = "maintain", Type = "lunch" },

            // DINNER
            new Meal { Name = "Baked Salmon with Quinoa", Dietary = "780 Cal, high protein, gluten-free", Ingredients = "baked_salmon quinoa roasted_asparagus olive_oil lemon", Plan = "gain", Type = "dinner" },
            new Meal { Name = "Grilled Chicken Sweet Potato Plate", Dietary = "620 Cal, balanced, gluten-free", Ingredients = "grilled_chicken sweet_potato green_beans olive_oil", Plan = "maintain", Type = "dinner" },
            new Meal { Name = "Veggie Tofu Stir Fry", Dietary = "380 Cal, vegan, gluten-free", Ingredients = "tofu broccoli peppers snap_peas carrots soy_sauce", Plan = "loss", Type = "dinner" },
            new Meal { Name = "Beef Stir Fry with Rice", Dietary = "850 Cal, high calorie, gluten-free", Ingredients = "beef_strips white_rice bell_peppers onion stir_fry_sauce", Plan = "gain", Type = "dinner" },
            new Meal { Name = "Turkey Meatballs with Pasta", Dietary = "700 Cal, contains gluten, contains dairy", Ingredients = "spaghetti turkey_meatballs marinara_sauce parmesan", Plan = "maintain", Type = "dinner" },
            new Meal { Name = "Zucchini Noodle Turkey Marinara", Dietary = "420 Cal, low carb, gluten-free", Ingredients = "zucchini_noodles turkey_meat_sauce parmesan", Plan = "loss", Type = "dinner" },
            new Meal { Name = "Chicken Fajita Plate", Dietary = "760 Cal, high protein, contains gluten", Ingredients = "tortillas chicken_breast peppers onion salsa sour_cream", Plan = "gain", Type = "dinner" },
            new Meal { Name = "Shrimp Brown Rice Bowl", Dietary = "600 Cal, high protein, gluten-free", Ingredients = "shrimp brown_rice broccoli carrots teriyaki_sauce", Plan = "maintain", Type = "dinner" },
            new Meal { Name = "Cauliflower Rice Chicken Bowl", Dietary = "390 Cal, low carb, gluten-free", Ingredients = "cauliflower_rice grilled_chicken spinach salsa avocado", Plan = "loss", Type = "dinner" },
            new Meal { Name = "Steak Potato Plate", Dietary = "900 Cal, high calorie, gluten-free", Ingredients = "sirloin_steak baked_potato butter green_beans", Plan = "gain", Type = "dinner" },
            new Meal { Name = "Baked Cod with Couscous", Dietary = "560 Cal, contains gluten, high protein", Ingredients = "baked_cod couscous roasted_zucchini lemon", Plan = "maintain", Type = "dinner" },
            new Meal { Name = "Lentil Vegetable Stew", Dietary = "360 Cal, vegan, high fiber, gluten-free", Ingredients = "lentils carrots potatoes tomato_spinach broth", Plan = "loss", Type = "dinner" },
            new Meal { Name = "Chicken Curry with Rice", Dietary = "820 Cal, high calorie, contains dairy", Ingredients = "chicken_thighs curry_sauce coconut_milk white_rice peas", Plan = "gain", Type = "dinner" },
            new Meal { Name = "Greek Turkey Bowl", Dietary = "580 Cal, balanced macros, gluten-free", Ingredients = "ground_turkey brown_rice cucumber tomato olives tzatziki", Plan = "maintain", Type = "dinner" },
            new Meal { Name = "Veggie Black Bean Chili", Dietary = "400 Cal, vegetarian, high fiber, gluten-free", Ingredients = "black_beans tomato onion peppers chili_spices corn", Plan = "loss", Type = "dinner" },
            new Meal { Name = "Pork Tenderloin with Rice", Dietary = "780 Cal, high protein, gluten-free", Ingredients = "pork_tenderloin white_rice roasted_carrots olive_oil", Plan = "gain", Type = "dinner" },
            new Meal { Name = "Stuffed Bell Peppers", Dietary = "520 Cal, balanced, gluten-free", Ingredients = "bell_peppers ground_turkey brown_rice tomato_sauce cheese", Plan = "maintain", Type = "dinner" },
            new Meal { Name = "Grilled Fish Tacos", Dietary = "430 Cal, contains gluten, contains fish", Ingredients = "corn_tortillas grilled_white_fish cabbage_slaw salsa", Plan = "loss", Type = "dinner" },
            new Meal { Name = "Chicken Alfredo Pasta", Dietary = "900 Cal, very high calorie, contains dairy, contains gluten", Ingredients = "fettuccine_pasta chicken_breast alfredo_sauce parmesan", Plan = "gain", Type = "dinner" },
            new Meal { Name = "Veggie Pesto Pasta", Dietary = "540 Cal, vegetarian, contains gluten, contains dairy", Ingredients = "penne_pasta pesto cherry_tomatoes spinach parmesan", Plan = "maintain", Type = "dinner" }
            new Meal { Name = "Brownies", Dietary = "450 Cal, not dairy-free, not egg-free", Ingredients = "eggs milk chocolate flour oil butter", Plan = "gain", Type = "dinner" }
            new Meal { Name = "Apple", Dietary = "950 cal, organic", Ingredients = "apple", Plan = "maintain", Type = "lunch" }
        );

        db.SaveChanges();
    }
}

app.UseCors();

app.MapControllers();

app.Run();
