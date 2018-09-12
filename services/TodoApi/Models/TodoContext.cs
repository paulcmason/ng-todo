using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class HeroContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<Hero> Heroes { get; set; }
    }
}