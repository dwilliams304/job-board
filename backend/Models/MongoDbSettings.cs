namespace JobBoardDotnetBackend.Models
{
    public class MongoDbSettings
    {

        public string ConnectionURI { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string CompanyCollectionName { get; set; } = null!;
        public string JobPostCollectionName { get; set; } = null!;
        public string HelpArticleCollectionName { get; set; } = null!;
        public string ReviewCollectionName { get; set; } = null!;
    }
}
