using JobBoardDotnetBackend.Models;
using JobBoardDotnetBackend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBoardDotnetBackend.Controllers
{
    [Route("api/[controller]")]
    [Controller]
    public class JobPostController : Controller
    {
        private readonly MongoDbService mongoDbService;

        public JobPostController(MongoDbService mongoDbService)
        {
            this.mongoDbService = mongoDbService;
        }

        [HttpGet]
        public async Task<List<JobPost>> GetPosts()
        {
            return await mongoDbService.GetJobPosts();
        }

        [HttpPost]
        public async Task<IActionResult> CreateNewPost([FromBody] JobPost jobPost)
        {
            await mongoDbService.CreateJobPost(jobPost);
            return Created();
        }

        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdatePost(string id, [FromBody] JobPost jobPost)
        //{

        //}

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeletePost(string id)
        //{

        //}
    }
}
