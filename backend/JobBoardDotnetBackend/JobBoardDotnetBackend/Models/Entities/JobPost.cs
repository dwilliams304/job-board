using Postgrest.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobBoardDotnetBackend.Models.Entities 
{
    [Table("JobPosts")]
    public class JobPost : BaseModel
    {
        public int Id { get; set; }
        public required int CompanyID { get; set; }
        public required string JobTitle { get; set; }
        public required string ShortDescription { get; set; }
        public required int JobSalary { get; set; }
        public required string JobTerm { get; set; }
        public required string JobLocation { get; set; }
        public required string LocationType { get; set; }
    }
}