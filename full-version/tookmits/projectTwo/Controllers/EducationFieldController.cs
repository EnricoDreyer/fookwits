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
    public class EducationFieldController : ControllerBase
    {

        private readonly Context _context;
        public EducationFieldController(Context context)
        {
            _context = context;
        }

        [HttpGet("getEducationFieldList/{userId}")]
        public ActionResult getEducationFieldList(int userId)
        {
            if (IsSuperAdmin(userId))
            {
                var edu = _context.EducationField.Select(x => new
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList();
                return new JsonResult(edu);
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpGet("getlistbyId/{id}")]
        public async Task<ActionResult<EducationFieldDTO>> getEducationFieldById(int Id)
        {

            var education = await _context.EducationField.FindAsync(Id);
            return new JsonResult(education);
        }
        [HttpPost("saveEdit/{id}")]
        public async Task<ActionResult<EducationFieldDTO>> PostEducationField(EducationFieldDTO educationFieldDTO, int id)
        {
            if (IsSuperAdmin(id))
            {
                if (educationFieldDTO.Id == 0)
                {

                    var educationField = new EducationField
                    {
                        Name = educationFieldDTO.Name
                    };
                    _context.EducationField.Add(educationField);
                    await _context.SaveChangesAsync();
                    return new JsonResult("Added");
                }
                else
                {
                    try
                    {
                        var dbEducationField = _context.EducationField.Find(educationFieldDTO.Id);

                        dbEducationField.Name = educationFieldDTO.Name;

                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!EducationFieldExists(educationFieldDTO.Id))
                            return NotFound();
                        else
                            throw;
                    }
                    return new JsonResult("Updated");
                }
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpDelete("DeleteEducationField/{userId}/{id}")]
        public async Task<ActionResult<DepartmentDTO>> DeleteDepartment(int userId,int id)
        {
            if (IsSuperAdmin(userId))
            {
                var educationField = await _context.EducationField.FindAsync(id);
                if (educationField == null)
                {
                    return NotFound();
                };
                _context.EducationField.Remove(educationField);
                await _context.SaveChangesAsync();

                return new JsonResult("Deleted");
            }

            return new JsonResult("Do not have the right admin privileges");
        }

        private bool EducationFieldExists(int id)
        {
            return _context.EducationField.Any(e => e.Id == id);
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
