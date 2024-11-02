namespace JobBoardDotnetBackend.Models.Entities
{
    public class Company
    {
        public Guid Id { get; set; }
        public required string CompanyName { get; set; }
        public required string CompanyAddress { get; set; }
        public required string CompanyPhone { get; set; }
        public required string CompanyEmail { get; set; }
        public int TotalReviews { get; set; }
        public int ReviewScore { get; set; }
    }
}
