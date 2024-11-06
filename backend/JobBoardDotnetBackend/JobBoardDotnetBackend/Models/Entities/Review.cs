using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace JobBoardDotnetBackend.Models.Entities
{
    [Table("Reviews")]
    public class Review : BaseModel
    {
        [PrimaryKey("id")]
        public int Id { get; set; }
        
        [Column("company_id")]
        public required int CompanyID { get; set; }
        
        [Column("created_at")]
        public required DateTime CreatedDate { get; set; }
        
        [Column("review_title")]
        public required string ReviewTitle { get; set; }
        
        [Column("commenter_name")]
        public string? CommenterName { get; set; }
        
        [Column("job_title")]
        public required string JobTitle { get; set; }
        
        [Column("previous_employee")]
        public required bool CurrentEmployee { get; set; }
        
        [Column("pay_score")]
        public required int PayScore { get; set; }
        
        [Column("culture_score")]
        public required int CultureScore { get; set; }
        
        [Column("worklife_score")]
        public required int WorklifeScore { get; set; }
        
        [Column("average_score")]
        public required decimal AverageScore { get; set; }
        
        [Column("job_salary")]
        public required int JobSalary { get; set; }
        
        [Column("review_comments")]
        public required string ReviewComments { get; set; }
    }
}