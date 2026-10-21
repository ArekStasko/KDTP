using Kdtp.Domain.Models.Persistance;
using Microsoft.EntityFrameworkCore;

namespace Kdtp.Persistance;

public class GameDbContext(DbContextOptions<GameDbContext> options) : DbContext(options)
{
    public DbSet<Question> Questions { get; set; }
    public DbSet<Answer> Answers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Question>(e =>
        {
            e.HasKey(x => x.Id);

            e.Property(x => x.Text)
                .IsRequired()
                .HasMaxLength(200);
        });

        modelBuilder.Entity<Answer>(a =>
        {
            a.HasKey(x => x.Id);

            a.Property(x => x.Text)
                .IsRequired()
                .HasMaxLength(200);

            a.HasOne<Question>()
                .WithMany()
                .HasForeignKey(x => x.QuestionId)
                .OnDelete(DeleteBehavior.Cascade);
        });
    }
}