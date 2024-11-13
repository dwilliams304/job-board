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
            MongoClient client = new MongoClient(settings.Value.ConnectionURI);
            IMongoDatabase mainDb = client.GetDatabase(settings.Value.DatabaseName);
            _companyCollection = mainDb.GetCollection<Company>(settings.Value.CompanyCollectionName);
            _jobPostCollection = mainDb.GetCollection<JobPost>(settings.Value.JobPostCollectionName);
            _helpArticleCollection = mainDb.GetCollection<HelpArticle>(settings.Value.HelpArticleCollectionName);
            _reviewsCollection = mainDb.GetCollection<Review>(settings.Value.ReviewCollectionName);
        }

        #region Company Funcs...
        public async Task CreateCompany(Company company)
        {
            await _companyCollection.InsertOneAsync(company);
            return;
        }
        #endregion

        #region Job Post Funcs...
        public async Task CreateJobPost(JobPost jobPost)
        {
            //jobPost.DatePosted = DateTime.Now;
            await _jobPostCollection.InsertOneAsync(jobPost);
            return;
        }

        public async Task<JobPost> GetJobPostById(string id)
        {
            FilterDefinition<JobPost> filter = Builders<JobPost>.Filter.Eq("Id", id);
            var post = await _jobPostCollection.Find(filter).FirstOrDefaultAsync();
            return post;
        }


        public async Task<List<JobPost>> GetJobPosts()
        {
            var posts = await _jobPostCollection.Find(new BsonDocument()).ToListAsync();
            return posts;
        }
        #endregion

        #region Help Article Funcs...
        public async Task CreateHelpArticle(HelpArticle helpArticle)
        {
            await _helpArticleCollection.InsertOneAsync(helpArticle);
            return;
        }
        #endregion

        #region Review Funcs...
        public async Task CreateReview(Review review)
        {
            await _reviewsCollection.InsertOneAsync(review);
            return;
        }
        #endregion
    }
}
