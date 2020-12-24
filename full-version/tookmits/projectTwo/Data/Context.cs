using Microsoft.EntityFrameworkCore;
using projectTwo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectTwo.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            
        }
        public DbSet<Item> Item { get; set; }
    }


}
