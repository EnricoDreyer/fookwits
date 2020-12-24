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
    public class DepartmentController : ControllerBase
    {

        private readonly Context _context;
        public DepartmentController(Context context)
        {
            _context = context;
        }

        [HttpGet("getDepartmentList/{userId}")]
        public ActionResult getDepartmentList(int userId)
        {
            if (IsSuperAdmin(userId))
            {
                var department = _context.Department.Select(x => new
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList();
                return new JsonResult(department);
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpGet("getlistbyId/{id}")]
        public ActionResult getDepartmentById(int id)
        {
            if (IsSuperAdmin(id))
            {
                var department = _context.Department.Where(x => x.Id == id).Select(x => new
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList();
                return new JsonResult(department);
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpPost("saveEdit/{id}")]
        public async Task<ActionResult<DepartmentDTO>> PostDepartment(DepartmentDTO departmentDTO, int id)
        {
            if (IsSuperAdmin(id))
            {
                if (departmentDTO.Id == 0)
                {

                    var deparment = new Department
                    {
                        Name = departmentDTO.Name
                    };
                    _context.Department.Add(deparment);
                    await _context.SaveChangesAsync();
                    return new JsonResult("Added");
                }
                else
                {
                    try
                    {
                        var dbDepartment = _context.Department.Find(departmentDTO.Id);

                        dbDepartment.Name = departmentDTO.Name;

                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!DepartmentExists(departmentDTO.Id))
                            return NotFound();
                        else
                            throw;
                    }
                    return new JsonResult("Updated");
                }
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<DepartmentDTO>> DeleteDepartment(int id)
        {
            if (IsSuperAdmin(id))
            {
                var department = await _context.Department.FindAsync(id);
                if (department == null)
                {
                    return NotFound();
                };
                _context.Department.Remove(department);
                await _context.SaveChangesAsync();
                return new JsonResult("Removed");
            }
            return new JsonResult("Do not have the right admin privileges");
        }

        private bool DepartmentExists(int id)
        {
            return _context.Department.Any(e => e.Id == id);
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
