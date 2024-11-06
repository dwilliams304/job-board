using Postgrest.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobBoardDotnetBackend.Models.Entities
{
    [Table("HelpArticles")]
    public class HelpArticle : BaseModel
    {
        public int Id { get; set; }
        public required string ArticleTitle { get; set; }
        public required string ArticleTag { get; set; }
        public required string ArticleDescription { get; set; }
        public required string ArticleDate { get; set; }
    }
}