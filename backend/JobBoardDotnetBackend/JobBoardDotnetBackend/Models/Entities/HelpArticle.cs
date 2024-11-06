using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace JobBoardDotnetBackend.Models.Entities
{
    [Table("HelpArticles")]
    public class HelpArticle : BaseModel
    {
        [PrimaryKey("id")]
        public int Id { get; set; }

        [Column("created_at")]
        public required DateTime ArticleDate { get; set; }

        [Column("article_title")]
        public required string ArticleTitle { get; set; }

        [Column("article_tag")]
        public required string ArticleTag { get; set; }

        [Column("for_employers")]
        public required bool ForEmployers { get; set; }
    }
}