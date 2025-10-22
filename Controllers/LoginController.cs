using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private static List<User> users = new();

    [HttpPost("signup")]
    public IActionResult Signup(SignupDto dto)
    {
        var user = new User { Id = users.Count + 1, Username = dto.Username, Email = dto.Email, Password = dto.Password };
        users.Add(user);
        return Ok(user);
    }

    [HttpPost("login")]
    public IActionResult Login(LoginDto dto)
    {
        var user = users.FirstOrDefault(u => u.Username == dto.Username && u.Password == dto.Password);
        return user != null ? Ok(user) : Unauthorized();
    }

    [HttpPost("forgot")]
    public IActionResult Forgot(ForgotDto dto)
    {
        var user = users.FirstOrDefault(u => u.Email == dto.Email);
        return user != null ? Ok("Reset link sent") : NotFound("Email not found");
    }
}
