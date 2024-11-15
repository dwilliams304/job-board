using JobBoardDotnetBackend.Models;
using JobBoardDotnetBackend.Queries;
using JobBoardDotnetBackend.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
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
        public async Task<IEnumerable<JobPost>> GetAllJobPosts()
        {
            return await _jobPosts.Find(FilterDefinition<JobPost>.Empty).ToListAsync();
        }

        [HttpGet("filterBy")]
        public async Task<IEnumerable<JobPost>> GetJobPostByQuery([FromBody] JobPostQuery query)
        {
            var filterDefBuilder = Builders<JobPost>.Filter;
            var filter = filterDefBuilder.Empty;

            if(query.Title is not null)
            {
                filter &= filterDefBuilder.Regex("title", new BsonRegularExpression(query.Title, "i"));
            }
            if(query.Location is not null)
            {
                filter &= filterDefBuilder.Regex("location", new BsonRegularExpression(query.Location, "i"));
            }
            if(query.LocationType is not null)
            {
                filter &= filterDefBuilder.Eq("location_type", query.LocationType);
            }
            if(query.Term is not null)
            {
                filter &= filterDefBuilder.Eq("term", query.Term);
            }

            if (query.MinSalary.HasValue)
            {
                filter &= filterDefBuilder.Gt("salary", query.MinSalary);
            }

            if (query.PostAge is not null)
            {
                DateTime cutoffDate = DateTime.Now;

                switch (query.PostAge.ToLower())
                {
                    case "90 days":
                        cutoffDate = DateTime.Now.AddDays(-90);
                        break;
                    case "30 days":
                        cutoffDate = DateTime.Now.AddDays(-30);
                        break;
                    case "7 days":
                        cutoffDate = DateTime.Now.AddDays(-7);
                        break;
                    case "24 hours":
                        cutoffDate = DateTime.Now.AddHours(-24);
                        break;
                    default:
                        // No time frame filter if the input is invalid
                        break;
                }

                filter &= filterDefBuilder.Gt("date_posted", cutoffDate);
            }




            var posts = await _jobPosts.Find(filter).ToListAsync();
            return posts;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<JobPost?>> GetPostById(string id)
        {
            var filter = Builders<JobPost>.Filter.Eq("Id", id);
            var post = await _jobPosts.Find(filter).FirstOrDefaultAsync();
            return post is null ? NotFound() : Ok(post);
        }


        [HttpPost]
        public async Task<ActionResult<JobPost?>> CreateJobPost([FromBody] JobPost jobPost, string companyID)
        {
            jobPost.DatePosted = DateTime.Now;
            jobPost.Company = companyID;


            return Ok();
        }


        [HttpPut]
        public async Task<ActionResult<JobPost>> UpdateJobPost([FromBody] JobPost jobPost, string postId)
        {
            return Ok();
        }
    }
}
