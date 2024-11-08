
namespace JobBoardDotnetBackend.Models 
{
    public class JobPost
    {
        public int Id { get; set; }
        
        public required int CompanyID { get; set; }
        
        public required DateTime CreatedAt { get; set; }
        
        public required string JobTitle { get; set; }
        
        public required string JobDescription { get; set; }
        
        public required int JobSalary { get; set; }
        
        public required string JobTerm { get; set; }
        
        public required string JobLocation { get; set; }
        
        public required string JobLocationType { get; set; }
        
        public required string JobExperience { get; set; }
    }
}