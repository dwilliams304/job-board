using JobBoardDotnetBackend.Models;
using JobBoardDotnetBackend.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using JobBoardDotnetBackend.Contracts;

namespace JobBoardDotnetBackend.Controllers
{

    [Route("api/[controller]")]
    [Controller]
    public class AuthController : Controller
    {
        private readonly IMongoCollection<User>? _users;

        public AuthController(MongoDbService mongoDbService)
        {
            _users = mongoDbService.Database?.GetCollection<User>("Users");
        }

        [HttpPost("login")]
        public async Task<ActionResult<User?>> Login([FromBody] LoginRequest user)
        {
            Console.WriteLine("Login submitted!");
            return NotFound();
        }

        [HttpPost("signup")]
        public async Task<ActionResult<User>> Signup([FromBody] User user)
        {
            Console.WriteLine("Signup submitted!");
            return NotFound();
        }
    }
}
