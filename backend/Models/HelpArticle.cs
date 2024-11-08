
namespace JobBoardDotnetBackend.Models
{
    public class HelpArticle
    {
        public int Id { get; set; }

        public required DateTime ArticleDate { get; set; }

        public required string ArticleTitle { get; set; }

        public required string ArticleTag { get; set; }

        public required bool ForEmployers { get; set; }
    }
}