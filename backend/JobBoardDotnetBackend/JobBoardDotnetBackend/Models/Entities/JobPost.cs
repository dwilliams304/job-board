namespace JobBoardDotnetBackend.Models.Entities 
{
    public class JobPost
    {
        public Guid Id { get; set; }
        public required Guid CompanyID { get; set; }
        public required string JobTitle { get; set; }
        public required string ShortDescription { get; set; }
        public required int JobSalary { get; set; }
        public required string JobTerm { get; set; }
        public required string JobLocation { get; set; }
        public required string LocationType { get; set; }
    }
}