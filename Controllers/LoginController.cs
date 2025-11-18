using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _db;

    public UsersController(AppDbContext db)
    {
        _db = db;
    }

    [HttpPost("signup")]
    public async Task<IActionResult> Signup(SignupDto dto)
    {
        bool usernameTaken = await _db.Users.AnyAsync(u => u.Username == dto.Username);
        bool emailTaken = await _db.Users.AnyAsync(u => u.Email == dto.Email);

        if (usernameTaken) return BadRequest("Username already taken.");
        if (emailTaken) return BadRequest("Email already in use.");

        var user = new User
        {
            Username = dto.Username,
            Email = dto.Email,
            Password = dto.Password
        };

        _db.Users.Add(user);
        await _db.SaveChangesAsync();
        return Ok(user);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var user = await _db.Users
            .FirstOrDefaultAsync(u => u.Username == dto.Username && u.Password == dto.Password);

        if (user == null) return Unauthorized("Invalid username or password.");
        return Ok(user);
    }

    [HttpPost("forgot")]
    public async Task<IActionResult> Forgot(ForgotDto dto)
    {
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
        if (user == null) return NotFound("Email not found.");
        return Ok("Reset link sent.");
    }
}
