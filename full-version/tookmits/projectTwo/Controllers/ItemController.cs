using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using projectTwo.Data;

namespace projectTwo.Controllers
{       
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController : Controller
    {
        private readonly Context _context;
        public ItemController(Context context)
        {
            _context = context;
        }

        [HttpGet("getItemList")]
        public ActionResult getItemList()
        {
            var items = _context.Item.Select(x => new
            {
                Id = x.Id,
                Description = x.Description,
                Price = (double)x.Price
             }).ToList();

             return new JsonResult(items);
            
        }
    }
}
