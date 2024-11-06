using Postgrest.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobBoardDotnetBackend.Models.Entities
{
    [Table("Reviews")]
    public class Review : BaseModel
    {
        public int Id { get; set; }
        public required int CompanyID { get; set; }
        public required string ReviewTitle { get; set; }
        public required string JobTitle { get; set; }
        public required bool CurrentEmployee { get; set; }
        public required int PayScore { get; set; }
        public required int CultureScore { get; set; }
        public required int WorklifeScore { get; set; }
        public string? CommenterName { get; set; }
        public required string ReviewComments { get; set; }
    }
}