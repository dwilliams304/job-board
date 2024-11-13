using JobBoardDotnetBackend.Models;
using JobBoardDotnetBackend.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace JobBoardDotnetBackend.Controllers
{
    public class CompanyController : Controller
    {
        private readonly IMongoCollection<Company>? _companies;

        public CompanyController(MongoDbService mongoDbService)
        {
            _companies = mongoDbService.Database?.GetCollection<Company>("Companies");
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Company?>> GetCompanyById(string id)
        {
            var filter = Builders<Company>.Filter.Eq("Id", id);
            var post = await _companies.Find(filter).FirstOrDefaultAsync();
            return post is null ? NotFound() : Ok(post);
        }
    }
}
