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
            var pipeline = new[]
            {
                //Match the company field (containing an objectId), to the
                //_id field of the company in the Companies collection
                new BsonDocument("$lookup", new BsonDocument
                {
                    { "from", "Companies" },
                    { "localField", "company" },
                    { "foreignField", "_id" },
                    { "as", "company_details" }
                }),
                new BsonDocument("$unwind", "$company_details"),
                new BsonDocument("$project", new BsonDocument
                {
                    { "_id", 1 },
                    { "title", 1 },
                    { "short_description", 1 },
                    { "salary", 1 },
                    { "term", 1 },
                    { "location", 1 },
                    { "experience", 1 },
                    { "date_posted", 1 },
                    { "company", new BsonDocument
                    {
                        //Match this data to the fields we need
                        { "_id", "$company_details._id" },
                        { "name", "$company_details.name" },
                        { "img", "$company_details.img" }
                    }
                    },
                    { "employer_questions", 1 }
                })
            };
            //Join the documents following the pipeline created
            return await _jobPosts.Aggregate<JobPost>(pipeline).ToListAsync();
        }

        [HttpGet("filterBy")]
        public async Task<IEnumerable<JobPost>> GetJobPostByQuery(JobPostQuery query)
        {
            var filterDefBuilder = Builders<JobPost>.Filter;
            var filter = filterDefBuilder.Empty;

            var pipeline = new List<BsonDocument>();

            if(query.Title is not null)
            {
                //filter &= filterDefBuilder.Regex("title", new BsonRegularExpression(query.Title, "i"));
                pipeline.Add(new BsonDocument("$match", new BsonDocument("title",
                    new BsonDocument("$regex", query.Title).Add("$options", "i"))));
            }
            if(query.Location is not null)
            {
                //filter &= filterDefBuilder.Regex("location", new BsonRegularExpression(query.Location, "i"));
                var locationFilter = new BsonDocument("$or", new BsonArray
                {
                    new BsonDocument("location.city",
                        new BsonDocument("$regex", query.Location).Add("$options", "i")),
                    new BsonDocument("location.state",
                        new BsonDocument("$regex", query.Location).Add("$options", "i")),
                    new BsonDocument("location.country",
                        new BsonDocument("$regex", query.Location).Add("$options", "i")),
                    new BsonDocument("location.postalCode",
                        new BsonDocument("$regex", query.Location).Add("$options", "i"))
                });
                pipeline.Add(new BsonDocument("$match", locationFilter));
            }
            if(query.LocationType is not null)
            {
                //filter &= filterDefBuilder.Eq("location_type", query.LocationType);
                pipeline.Add(new BsonDocument("$match", new BsonDocument("location.location_type", query.LocationType)));
            }
            if(query.Term is not null)
            {
                //filter &= filterDefBuilder.Eq("term", query.Term);
                pipeline.Add(new BsonDocument("$match", new BsonDocument("term", query.Term)));
            }if(query.Experience is not null)
            {
                //filter &= filterDefBuilder.Eq("term", query.Term);
                pipeline.Add(new BsonDocument("$match", new BsonDocument("experience", query.Experience)));
            }

            if (query.MinSalary.HasValue)
            {
                //filter &= filterDefBuilder.Gt("salary", query.MinSalary);
                pipeline.Add(new BsonDocument("$match", new BsonDocument("salary",
                    new BsonDocument("$gte", query.MinSalary.Value))));
            }

            if (query.PostAge is not null)
            {
                DateTime cutoffDate = DateTime.Now;

                switch (query.PostAge.ToLower())
                {
                    case "90":
                        cutoffDate = DateTime.Now.AddDays(-90);
                        break;
                    case "30":
                        cutoffDate = DateTime.Now.AddDays(-30);
                        break;
                    case "7":
                        cutoffDate = DateTime.Now.AddDays(-7);
                        break;
                    case "24":
                        cutoffDate = DateTime.Now.AddHours(-24);
                        break;
                    default:
                        // No time frame filter if the input is invalid
                        cutoffDate = DateTime.MinValue;
                        break;
                }

                //filter &= filterDefBuilder.Gt("date_posted", cutoffDate);
                if (cutoffDate > DateTime.MinValue)
                {
                    pipeline.Add(new BsonDocument("$match", new BsonDocument("date_posted",
                        new BsonDocument("$gte", cutoffDate))));
                }
            }

            pipeline.Add(new BsonDocument("$lookup", new BsonDocument
            {
                { "from", "Companies" },
                { "localField", "company" },
                { "foreignField", "_id" },
                { "as", "company_details" }
            }));
            pipeline.Add(new BsonDocument("$unwind", "$company_details"));
            pipeline.Add(new BsonDocument("$project", new BsonDocument
            {
                { "_id", 1 },
                { "title", 1 },
                { "short_description", 1 },
                { "salary", 1 },
                { "term", 1 },
                { "location", 1 },
                { "location_type", 1 },
                { "experience", 1 },
                { "date_posted", 1 },
                { "company", new BsonDocument
                {
                    { "_id", "$company_details._id" },
                    { "name", "$company_details.name" },
                    { "img", "$company_details.img" }
                }
                }
            }));



            var posts = await _jobPosts.Aggregate<JobPost>(pipeline).ToListAsync();
            return posts;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<JobPost>> GetPostById(string id)
        {
            var pipeline = new[]
            {
                new BsonDocument("$match", new BsonDocument{
                    {"_id", new ObjectId(id) } 
                }),
                new BsonDocument("$lookup", new BsonDocument
                {
                    { "from", "Companies" },
                    { "localField", "company" },
                    { "foreignField", "_id" },
                    { "as", "company_details" }
                }),
                new BsonDocument("$unwind", "$company_details"),
                new BsonDocument("$project", new BsonDocument
                {
                    { "_id", 1 },
                    { "title", 1 },
                    { "short_description", 1 },
                    { "salary", 1 },
                    { "term", 1 },
                    { "location", 1 },
                    { "location_type", 1 },
                    { "experience", 1 },
                    { "date_posted", 1 },
                    { "company", new BsonDocument
                    {
                        { "_id", "$company_details._id" },
                        { "name", "$company_details.name" },
                        { "img", "$company_details.img" }
                    }
                    },
                    { "employer_questions", 1 }
                })
            };

            var post = await _jobPosts.Aggregate<JobPost>(pipeline).FirstOrDefaultAsync();

            //return Ok(post);
            return post is null ? NotFound() : Ok(post);
        }


        //[HttpPost]
        //public async Task<ActionResult<JobPost?>> CreateJobPost([FromBody] JobPost jobPost, string companyID)
        //{
        //    jobPost.DatePosted = DateTime.Now;
        //    jobPost.Company = companyID;


        //    return Ok();
        //}


        //[HttpPut]
        //public async Task<ActionResult<JobPost>> UpdateJobPost([FromBody] JobPost jobPost, string postId)
        //{
        //    return Ok();
        //}
    }
}
