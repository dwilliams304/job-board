using JobBoardDotnetBackend.Models;
using JobBoardDotnetBackend.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace JobBoardDotnetBackend.Controllers
{
    [Route("api/[controller]")]
    [Controller]
    public class HelpArticleController : Controller
    {

        private readonly IMongoCollection<HelpArticle>? _helpArticles;

        public HelpArticleController(MongoDbService mongoDbService)
        {
            _helpArticles = mongoDbService.Database?.GetCollection<HelpArticle>("HelpArticles");
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<HelpArticle?>> GetHelpArticleById(string id)
        {
            var filter = Builders<HelpArticle>.Filter.Eq("Id", id);
            var post = await _helpArticles.Find(filter).FirstOrDefaultAsync();
            return post is null ? NotFound() : Ok(post);
        }
    }
}
