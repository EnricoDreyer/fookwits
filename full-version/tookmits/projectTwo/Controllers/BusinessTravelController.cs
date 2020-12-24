using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using projectTwo.Data;
using projectTwo.DTOs;
using projectTwo.Models;

namespace projectTwo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BusinessTravelController : ControllerBase
    {

        private readonly Context _context;
        public BusinessTravelController(Context context)
        {
            _context = context;
        }

        [HttpGet("getBusinessTravelList/{userId}")]
        public ActionResult getBusinessTravel(int userId)
        {
            if (IsSuperAdmin(userId))
            {
                var travel = _context.BusinessTravel.Select(x => new
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList();
                return new JsonResult(travel);
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpGet("getBusinessTravelById/{userId}")]
        public ActionResult getBusinessTravelById(int userId)
        {
            if (IsSuperAdmin(userId))
            {
                var travel = _context.BusinessTravel.Where(x => x.Id == userId).Select(x => new
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList();
                return new JsonResult(travel);
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpPost("saveEdit/{userId}")]
        public async Task<ActionResult<BusinessTravelDTO>> PostBusinessTravel(BusinessTravelDTO businessTravelDTO, int userId)
        {
            if (IsSuperAdmin(userId))
            {
                if (businessTravelDTO.Id == 0)
                {

                    var bussinessTravel = new BusinessTravel
                    {
                        Name = businessTravelDTO.Name
                    };
                    _context.BusinessTravel.Add(bussinessTravel);
                    await _context.SaveChangesAsync();

                    return new JsonResult("Added");
                }
                else
                {
                    try
                    {
                        var dbBussinessTravel = _context.BusinessTravel.Find(businessTravelDTO.Id);

                        dbBussinessTravel.Name = businessTravelDTO.Name;

                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!BusinessTravelExists(businessTravelDTO.Id))
                            return NotFound();
                        else
                            throw;
                    }
                    return new JsonResult("Updated");
                }
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpDelete("DeleteBusinessTravel/{userId}/{id}")]
        public async Task<ActionResult<BusinessTravelDTO>> DeleteBusinessTravel(int userId, int id)
        {
            if (IsSuperAdmin(userId))
            {
                var users = _context.User.Where(x => x.BusinessTravelId == id);
                var bussinessTravel = await _context.BusinessTravel.FindAsync(id);
                if (bussinessTravel == null && !users.Any())
                {
                    return NotFound();
                };

                foreach (var user in users)
                {
                    user.BusinessTravelId = null;
                }

                _context.BusinessTravel.Remove(bussinessTravel);
                await _context.SaveChangesAsync();

                return new JsonResult("Deleted");
            }

            return new JsonResult("Do not have the right admin privileges");
        }

        private bool BusinessTravelExists(int id)
        {
            return _context.BusinessTravel.Any(e => e.Id == id);
        }
        private bool IsSuperAdmin(int userId)
        {
            var a = _context.JobRole
                .Where(x => x.Name == "Admin")
                .Select(x => new { Id = x.Id })
                .Single();
            return _context.User
                 .Where(x => x.EmployeeNumber == userId && x.JobRoleId == a.Id)
                 .Any();
        }

    }
}
