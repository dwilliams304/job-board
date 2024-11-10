using JobBoardDotnetBackend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace JobBoardDotnetBackend.Services
{
    public class MongoDbService
    {
        private readonly IMongoCollection<Company> _companyCollection;
        private readonly IMongoCollection<JobPost> _jobPostCollection;
        private readonly IMongoCollection<HelpArticle> _helpArticleCollection;
        private readonly IMongoCollection<Review> _reviewsCollection;

        public MongoDbService(IOptions<MongoDbSettings> settings)
        {
            MongoClient client = new MongoClient(settings.Value.ConnectionURI);
        }
    }
}
