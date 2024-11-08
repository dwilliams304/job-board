
namespace JobBoardDotnetBackend.Models
{
    public class Company
    {
        public int Id { get; set; }
        
        public required string CompanyName { get; set; }

        public required string CompanyImg { get; set; }

        public required string CompanyLocation { get; set; }

        public required string CompanyEmail { get; set; }

        public string? CompanyAbout { get; set; }
    }
}
