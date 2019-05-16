using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TvRestAPI.Models;

namespace TvRestAPI.Data
{
    public class ShowDbContext : DbContext
    {
        public ShowDbContext(DbContextOptions<ShowDbContext> options) : base(options) { }
        public DbSet<Show> Shows { get; set; }
        public DbSet<Actor> Actor { get; set; }
    }
}
