using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace JobBoardDotnetBackend.Models
{
    [Table("Companies")]
    public class Company : BaseModel
    {
        [PrimaryKey("id")]
        public int Id { get; set; }
        
        [Column("company_name")]
        public required string CompanyName { get; set; }

        [Column("company_img")]
        public required string CompanyImg { get; set; }

        [Column("company_location")]
        public required string CompanyLocation { get; set; }

        [Column("company_email")]
        public required string CompanyEmail { get; set; }

        [Column("company_about")]
        public string? CompanyAbout { get; set; }
    }
}
