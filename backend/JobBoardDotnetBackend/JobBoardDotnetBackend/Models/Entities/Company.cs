using Postgrest.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobBoardDotnetBackend.Models.Entities
{
    [Table("Companies")]
    public class Company : BaseModel
    {
        public int Id { get; set; }
        public required string CompanyName { get; set; }
        public required string CompanyAddress { get; set; }
        public required string CompanyPhone { get; set; }
        public required string CompanyEmail { get; set; }
    }
}
