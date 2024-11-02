namespace JobBoardDotnetBackend.Models.DTOs
{
    public class AddUserDto
    {
        public required string Name { get; set; }
        public required string Location { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
    }
}