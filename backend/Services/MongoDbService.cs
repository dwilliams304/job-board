using JobBoardDotnetBackend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;

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


        public async Task CreateCompany(Company company)
        {
            await _companyCollection.InsertOneAsync(company);
            return;
        }

        #region Job Post Funcs...
        public async Task CreateJobPost(JobPost jobPost)
        {
            await _jobPostCollection.InsertOneAsync(jobPost);
            return;
        }

        public async Task<List<JobPost>> GetJobPosts()
        {
            return await _jobPostCollection.Find(new BsonDocument()).ToListAsync();
        }
        #endregion

        public async Task CreateHelpArticle(HelpArticle helpArticle)
        {
            await _helpArticleCollection.InsertOneAsync(helpArticle);
            return;
        }

        public async Task CreateReview(Review review)
        {
            await _reviewsCollection.InsertOneAsync(review);
            return;
        }
    }
}
