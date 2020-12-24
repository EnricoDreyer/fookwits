using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using projectTwo.Data;
using projectTwo.DTOs;
using projectTwo.Models;
using Swashbuckle.Swagger;
using projectTwo.Services;

namespace projectTwo.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {

        private readonly Context _context;
        private readonly AuthService _author;
        private readonly HashThisService _hashThis;
        public UserController(Context context, AuthService author, HashThisService hashThis)
        {
            _context = context;
            _author = author;
            _hashThis = hashThis;

        }
        
        [HttpGet("getUserList/{userId}")]
        public ActionResult getUserList(int userId)
        {
            if(IsSuperAdmin(userId))
            { 
                var users = _context.User
                     .Select(x => new
                     {
                         EmployeeNumber = x.EmployeeNumber,
                         Age = x.Age,
                         Attrition = x.Attrition,
                         DailyRate = x.DailyRate,
                         DistanceFromHome = x.DistanceFromHome,
                         Education = x.Education,
                         EmployeeCount = x.EmployeeCount,
                         EnvironmentSatisfaction = x.EnvironmentSatisfaction,
                         Gender = x.Gender,
                         HourlyRate = x.HourlyRate,
                         JobInvolvement = x.JobInvolvement,
                         JobSatisfaction = x.JobSatisfaction,
                         MaritalStatus = x.MaritalStatus,
                         MonthlyIncome = x.MonthlyIncome,
                         MonthlyRate = x.MonthlyRate,
                         NumCompaniesWorked = x.NumCompaniesWorked,
                         Over18 = x.Over18,
                         OverTime = x.OverTime,
                         PercentSalaryHike = x.PercentSalaryHike,
                         PerformanceRating = x.PerformanceRating,
                         RelationshipSatisfaction = x.RelationshipSatisfaction,
                         StandardHours = x.StandardHours,
                         StockOptionLevel = x.StockOptionLevel,
                         TotalWorkingYears = x.TotalWorkingYears,
                         TrainingTimesLastYear = x.TrainingTimesLastYear,
                         WorkLifeBalance = x.WorkLifeBalance,
                         JobLevel = x.JobLevel,
                         YearsAtCompany = x.YearsAtCompany,
                         YearsInCurrentRole = x.YearsInCurrentRole,
                         YearsSinceLastPromotion = x.YearsSinceLastPromotion,
                         YearsWithCurrManager = x.YearsWithCurrManager,
                         BusinessTravelId = x.BusinessTravelId,
                         DepartmentId = x.DepartmentId,
                         EducationFieldId = x.EducationFieldId,
                         JobRoleId = x.JobRoleId,
                         Password = x.Password
                     });
                return new JsonResult(users);
            }
            var user = _context.User.Where(x => x.EmployeeNumber == userId)
                .Select(x => new
                {
                    EmployeeNumber = x.EmployeeNumber,
                    Age = x.Age,
                    Attrition = x.Attrition,
                    DailyRate = x.DailyRate,
                    DistanceFromHome = x.DistanceFromHome,
                    Education = x.Education,
                    EmployeeCount = x.EmployeeCount,
                    EnvironmentSatisfaction = x.EnvironmentSatisfaction,
                    Gender = x.Gender,
                    HourlyRate = x.HourlyRate,
                    JobInvolvement = x.JobInvolvement,
                    JobSatisfaction = x.JobSatisfaction,
                    MaritalStatus = x.MaritalStatus,
                    MonthlyIncome = x.MonthlyIncome,
                    MonthlyRate = x.MonthlyRate,
                    NumCompaniesWorked = x.NumCompaniesWorked,
                    Over18 = x.Over18,
                    OverTime = x.OverTime,
                    PercentSalaryHike = x.PercentSalaryHike,
                    PerformanceRating = x.PerformanceRating,
                    RelationshipSatisfaction = x.RelationshipSatisfaction,
                    StandardHours = x.StandardHours,
                    StockOptionLevel = x.StockOptionLevel,
                    TotalWorkingYears = x.TotalWorkingYears,
                    TrainingTimesLastYear = x.TrainingTimesLastYear,
                    WorkLifeBalance = x.WorkLifeBalance,
                    JobLevel = x.JobLevel,
                    YearsAtCompany = x.YearsAtCompany,
                    YearsInCurrentRole = x.YearsInCurrentRole,
                    YearsSinceLastPromotion = x.YearsSinceLastPromotion,
                    YearsWithCurrManager = x.YearsWithCurrManager,
                    BusinessTravelId = x.BusinessTravelId,
                    DepartmentId = x.DepartmentId,
                    EducationFieldId = x.EducationFieldId,
                    JobRoleId = x.JobRoleId,
                    Password = x.Password
                });
                return new JsonResult(user);
        }

        [HttpPost("saveEdit/{id}")]
        public async Task<ActionResult<UserDTO>> Post(UserDTO usersDTO, int id)
        {
            if (IsSuperAdmin(id))
            {
                var user = new User
                {
                    EmployeeNumber = usersDTO.EmployeeNumber,
                    Age = usersDTO.Age,
                    Attrition = usersDTO.Attrition,
                    DailyRate = usersDTO.DailyRate,
                    DistanceFromHome = usersDTO.DistanceFromHome,
                    Education = usersDTO.Education,
                    EmployeeCount = usersDTO.EmployeeCount,
                    EnvironmentSatisfaction = usersDTO.EnvironmentSatisfaction,
                    Gender = usersDTO.Gender,
                    HourlyRate = usersDTO.HourlyRate,
                    JobInvolvement = usersDTO.JobInvolvement,
                    JobSatisfaction = usersDTO.JobSatisfaction,
                    MaritalStatus = usersDTO.MaritalStatus,
                    MonthlyIncome = usersDTO.MonthlyIncome,
                    MonthlyRate = usersDTO.MonthlyRate,
                    NumCompaniesWorked = usersDTO.NumCompaniesWorked,
                    Over18 = usersDTO.Over18,
                    OverTime = usersDTO.OverTime,
                    PercentSalaryHike = usersDTO.PercentSalaryHike,
                    PerformanceRating = usersDTO.PerformanceRating,
                    RelationshipSatisfaction = usersDTO.RelationshipSatisfaction,
                    StandardHours = usersDTO.StandardHours,
                    StockOptionLevel = usersDTO.StockOptionLevel,
                    TotalWorkingYears = usersDTO.TotalWorkingYears,
                    TrainingTimesLastYear = usersDTO.TrainingTimesLastYear,
                    WorkLifeBalance = usersDTO.WorkLifeBalance,
                    JobLevel = usersDTO.JobLevel,
                    YearsAtCompany = usersDTO.YearsAtCompany,
                    YearsInCurrentRole = usersDTO.YearsInCurrentRole,
                    YearsSinceLastPromotion = usersDTO.YearsSinceLastPromotion,
                    YearsWithCurrManager = usersDTO.YearsWithCurrManager,
                    BusinessTravelId = usersDTO.BusinessTravelId,
                    DepartmentId = usersDTO.DepartmentId,
                    EducationFieldId = usersDTO.EducationFieldId,
                    JobRoleId = usersDTO.JobRoleId,
                    Password = getTheHashKey(usersDTO.Password)
                };
                try 
                { 
                    _context.User.Add(user);
                    await _context.SaveChangesAsync();
                }catch(Exception e)
                {
                    return new JsonResult(e);
                }
                return new JsonResult("Added User successfully");
            }

            return new JsonResult("Do not have the right admin privileges");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<UserDTO>> PUT(UserDTO usersDTO, int id)
        { 
            if(IsSuperAdmin(id))
            {
                try
                {
                    var dbUser = _context.User.Find(usersDTO.EmployeeNumber);

                    dbUser.Age = usersDTO.Age;
                    dbUser.Attrition = usersDTO.Attrition;
                    dbUser.DailyRate = usersDTO.DailyRate;
                    dbUser.DistanceFromHome = usersDTO.DistanceFromHome;
                    dbUser.Education = usersDTO.Education;
                    dbUser.EmployeeCount = usersDTO.EmployeeCount;
                    dbUser.EnvironmentSatisfaction = usersDTO.EnvironmentSatisfaction;
                    dbUser.Gender = usersDTO.Gender;
                    dbUser.HourlyRate = usersDTO.HourlyRate;
                    dbUser.JobInvolvement = usersDTO.JobInvolvement;
                    dbUser.JobSatisfaction = usersDTO.JobSatisfaction;
                    dbUser.MaritalStatus = usersDTO.MaritalStatus;
                    dbUser.MonthlyIncome = usersDTO.MonthlyIncome;
                    dbUser.MonthlyRate = usersDTO.MonthlyRate;
                    dbUser.NumCompaniesWorked = usersDTO.NumCompaniesWorked;
                    dbUser.Over18 = usersDTO.Over18;
                    dbUser.OverTime = usersDTO.OverTime;
                    dbUser.PercentSalaryHike = usersDTO.PercentSalaryHike;
                    dbUser.PerformanceRating = usersDTO.PerformanceRating;
                    dbUser.RelationshipSatisfaction = usersDTO.RelationshipSatisfaction;
                    dbUser.StandardHours = usersDTO.StandardHours;
                    dbUser.StockOptionLevel = usersDTO.StockOptionLevel;
                    dbUser.TotalWorkingYears = usersDTO.TotalWorkingYears;
                    dbUser.TrainingTimesLastYear = usersDTO.TrainingTimesLastYear;
                    dbUser.WorkLifeBalance = usersDTO.WorkLifeBalance;
                    dbUser.JobLevel = usersDTO.JobLevel;
                    dbUser.YearsAtCompany = usersDTO.YearsAtCompany;
                    dbUser.YearsInCurrentRole = usersDTO.YearsInCurrentRole;
                    dbUser.YearsSinceLastPromotion = usersDTO.YearsSinceLastPromotion;
                    dbUser.YearsWithCurrManager = usersDTO.YearsWithCurrManager;
                    dbUser.BusinessTravelId = usersDTO.BusinessTravelId;
                    dbUser.DepartmentId = usersDTO.DepartmentId;
                    dbUser.EducationFieldId = usersDTO.EducationFieldId;
                    dbUser.JobRoleId = usersDTO.JobRoleId;

                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return new JsonResult("Unsuccesful");
                }
                return new JsonResult("Edit User successfully");
            }
            return new JsonResult("Do not have the right admin privileges");
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<JobRoleDTO>> DeleteUser(int id)
        {
            var user =  _context.User.Where(x => x.EmployeeNumber == id).Single();
            if (user == null)
            {
                return NotFound();
            };
            _context.User.Remove(user);
            await _context.SaveChangesAsync();
            return new JsonResult("User Removed");
        }

        private bool IsSuperAdmin(int userId)
        {
            var a = _context.JobRole
                .Where(x => x.Name == "Admin")
                .Select(x => new { Id = x.Id})
                .Single();
           return _context.User
                .Where(x => x.EmployeeNumber == userId && x.JobRoleId == a.Id)
                .Any();
        }
        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.EmployeeNumber == id);
        }
        private string getTheHashKey(string password)
        {
            return _hashThis.GenHashCode(password);
        }
        [HttpGet("getUserSignInAuthInfo/{password}/{userId}")]
        [AllowAnonymous]
        public ActionResult GetUserSignInAuthInfo(string password, int userId)
        {
            return _author.TheTokenSignIn(password, userId);
        }
    }
}
