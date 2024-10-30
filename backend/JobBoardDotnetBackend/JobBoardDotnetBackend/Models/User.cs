namespace JobBoardDotnetBackend.Models {
    public class User {
        public Guid id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public required bool IsCompany { get; set; }
    }
}