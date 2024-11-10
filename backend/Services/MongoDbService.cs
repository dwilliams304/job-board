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
            MongoClient client = new MongoClient(Environment.GetEnvironmentVariable("MONGO_URI"));
            IMongoDatabase mainDb = client.GetDatabase(settings.Value.DatabaseName);
            _companyCollection = mainDb.GetCollection<Company>(settings.Value.CompanyCollectionName);
            _jobPostCollection = mainDb.GetCollection<JobPost>(settings.Value.JobPostCollectionName);
            _helpArticleCollection = mainDb.GetCollection<HelpArticle>(settings.Value.HelpArticleCollectionName);
            _reviewsCollection = mainDb.GetCollection<Review>(settings.Value.ReviewCollectionName);
        }
    }
}
