using JobBoardDotnetBackend.Models;
using JobBoardDotnetBackend.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace JobBoardDotnetBackend.Controllers
{
    [Route("api/[controller]")]
    [Controller]
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
            var pipeline = new[]
            {
                new BsonDocument("$match", new BsonDocument{
                    {"_id", new ObjectId(id) }
                }),
                 new BsonDocument("$lookup", new BsonDocument
                {
                    { "from", "Reviews" },
                    { "localField", "reviews" },
                    { "foreignField", "_id" },
                    { "as", "reviews" }
                }),
                //new BsonDocument("$lookup", new BsonDocument
                //{
                //    { "from", "JobPosts" },
                //    { "localField", "job_posts" },
                //    { "foreignField", "_id" },
                //    { "as", "job_posts" }
                //}),
                new BsonDocument("$project", new BsonDocument
                {
                    { "_id", 1 },
                    { "name", 1 },
                    { "about", 1 },
                    { "address", 1 },
                    { "current_employees", 1 },
                    { "currently_hiring", 1 },
                    { "email", 1 },
                    { "img", 1 },
                    { "phone", 1 },
                    //{ "job_posts", new BsonDocument
                    //{
                    //    { "_id", 1 },
                    //    { "title", 1 },
                    //    { "location", 1 },
                    //    { "location_type", 1 }
                    //}},
                    { "reviews", 1 }
                })
            };

            var company = await _companies.Aggregate<Company>(pipeline).FirstOrDefaultAsync();
            return company is null ? NotFound() : Ok(company);
        }
    }
}
