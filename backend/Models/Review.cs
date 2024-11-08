
namespace JobBoardDotnetBackend.Models
{
    public class Review
    {
        public int Id { get; set; }
        
        public required int CompanyID { get; set; }
        
        public required DateTime CreatedDate { get; set; }
        
        public required string ReviewTitle { get; set; }
        
        public string? CommenterName { get; set; }
        
        public required string JobTitle { get; set; }
        
        public required bool CurrentEmployee { get; set; }
        
        public required int PayScore { get; set; }
        
        public required int CultureScore { get; set; }
        
        public required int WorklifeScore { get; set; }
        
        public required decimal AverageScore { get; set; }
        
        public required int JobSalary { get; set; }
        
        public required string ReviewComments { get; set; }
    }
}