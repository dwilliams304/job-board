using Microsoft.EntityFrameworkCore;

namespace JobBoardDotnetBackend.Data {
    public class JobBoardContext : DbContext {
        public JobBoardContext(DbContextOptions<JobBoardContext> options): base(options) {
            
        }
    }
}