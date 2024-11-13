using JobBoardDotnetBackend.Models;
using JobBoardDotnetBackend.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace JobBoardDotnetBackend.Controllers
{
    [Route("api/[controller]")]
    [Controller]
    public class JobPostController : Controller
    {

        private readonly IMongoCollection<JobPost>? _jobPosts;

        public JobPostController(MongoDbService mongoDbService){
            _jobPosts = mongoDbService.Database?.GetCollection<JobPost>("JobPosts");
        }


        [HttpGet]
        public async Task<IEnumerable<JobPost>> GetJobPosts()
        {
            return await _jobPosts.Find(FilterDefinition<JobPost>.Empty).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<JobPost?>> GetPostById(string id)
        {
            var filter = Builders<JobPost>.Filter.Eq("Id", id);
            var post = await _jobPosts.Find(filter).FirstOrDefaultAsync();
            return post is null ? NotFound() : Ok(post);
        }
    }
}
