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
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class JobRoleController : ControllerBase
    {

        private readonly Context _context;
        
        public JobRoleController(Context context)
        {
            _context = context;
        }

        [HttpGet("getJobRoleList/{userId}")]
        public ActionResult getJobRoleList(int userId)
        {
            if (IsSuperAdmin(userId))
            {
                var jobRoles = _context.JobRole.ToList();
                return new JsonResult(jobRoles);
            }

            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpGet("getlistbyId/{userId}/{id}")]
        public async Task<ActionResult<JobRoleDTO>> getDepartmentById(int userId,int Id)
        {
            if (IsSuperAdmin(userId))
            {
                var jobRole = await _context.JobRole.FindAsync(Id);
                return new JsonResult(jobRole);
            }

            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpPost("saveEdit/userId")]
        public async Task<ActionResult<DepartmentDTO>> Post(JobRoleDTO jobRoleDTO, int userId)
        {
            if (IsSuperAdmin(userId))
            {
                if (jobRoleDTO.Id == 0)
                {

                    var jobRole = new JobRole
                    {
                        Name = jobRoleDTO.Name
                    };
                    _context.JobRole.Add(jobRole);
                    await _context.SaveChangesAsync();
                    return NoContent();
                }
                else
                {
                    try
                    {
                        var dbJobRole = _context.JobRole.Find(jobRoleDTO.Id);

                        dbJobRole.Name = jobRoleDTO.Name;

                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!JobRoleExists(jobRoleDTO.Id))
                            return NotFound();
                        else
                            throw;
                    }

                }

                return new JsonResult("Updated");
            }

            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpDelete("DeleteJobRole/{userId}/{id}")]
        public async Task<ActionResult<JobRoleDTO>> DeleteJobRole(int userId,int id)
        {
            if (IsSuperAdmin(userId))
            {
                var jobRole = await _context.JobRole.FindAsync(id);
                if (jobRole == null)
                {
                    return NotFound();
                };
                _context.JobRole.Remove(jobRole);
                await _context.SaveChangesAsync();

                return new JsonResult("Deleted");
            }

            return new JsonResult("Do not have the right admin privileges");

        }

        private bool JobRoleExists(int id)
        {
            return _context.JobRole.Any(e => e.Id == id);
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
