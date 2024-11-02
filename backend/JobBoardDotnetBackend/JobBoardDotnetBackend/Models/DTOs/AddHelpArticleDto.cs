namespace JobBoardDotnetBackend.Models.DTOs
{
    public class AddHelpArticleDto
    {
        public required string ArticleTitle { get; set; }
        public required string ArticleTag { get; set; }
        public required string ArticleDescription { get; set; }
        public required string ArticleDate { get; set; }
    }
}