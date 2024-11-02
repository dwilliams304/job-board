namespace JobBoardDotnetBackend.Models.Entities
{
    public class HelpArticle
    {
        public Guid Id { get; set; }
        public required string ArticleTitle { get; set; }
        public required string ArticleTag { get; set; }
        public required string ArticleDescription { get; set; }
        public required string ArticleDate { get; set; }
    }
}