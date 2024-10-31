namespace JobBoardDotnetBackend.Models.Entities
{
    public class User 
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Location { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
    }
}