using JobBoardDotnetBackend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace JobBoardDotnetBackend.Data
{
    public class JobBoardDbContext : DbContext
    {
        public JobBoardDbContext(DbContextOptions<JobBoardDbContext> options): base(options) 
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<JobPost> JobPosts { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<HelpArticle> HelpArticles { get; set; }
    }
}