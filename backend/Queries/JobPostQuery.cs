namespace JobBoardDotnetBackend.Queries
{
    public class JobPostQuery
    {
        public string? Title { get; set; }
        public string? Location { get; set; }
        public string? LocationType { get; set; }
        public string? Experience { get; set; }
        public string? Term { get; set; }

        public int? MinSalary { get; set; }

        public string? PostAge { get; set; }
    }
}
