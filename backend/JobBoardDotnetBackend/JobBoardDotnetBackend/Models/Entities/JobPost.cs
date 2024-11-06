using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace JobBoardDotnetBackend.Models.Entities 
{
    [Table("JobPosts")]
    public class JobPost : BaseModel
    {
        [PrimaryKey("id")]
        public int Id { get; set; }
        
        [Column("company_id")]
        public required int CompanyID { get; set; }
        
        [Column("created_at")]
        public required DateTime CreatedAt { get; set; }
        
        [Column("job_title")]
        public required string JobTitle { get; set; }
        
        [Column("job_description")]
        public required string JobDescription { get; set; }
        
        [Column("job_salary")]
        public required int JobSalary { get; set; }
        
        [Column("job_term")]
        public required string JobTerm { get; set; }
        
        [Column("job_location")]
        public required string JobLocation { get; set; }
        
        [Column("job_location_type")]
        public required string JobLocationType { get; set; }
        
        [Column("job_experience")]
        public required string JobExperience { get; set; }
    }
}