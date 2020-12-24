using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using projectTwo.Data;
using projectTwo.DTOs;
using projectTwo.Models;
using Swashbuckle.Swagger;

namespace projectTwo.Services
{
    public class AuthService
    {
        private readonly Context _context;
        private readonly HashThisService _hashThis;
        public AuthService(Context context, HashThisService hashThis)
        {
            _context = context;
            _hashThis = hashThis;
        }
        public JsonResult TheTokenSignIn(string password, int userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("LT69BabyKeyAuthor");
            var hash = _hashThis.GenHashCode(password);
            var userExist = _context.User.Where(x => x.Password == hash && x.EmployeeNumber == userId).Any();
            if (userExist)
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                            new Claim(ClaimTypes.Name, userId.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(120),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var mtoken = GenerateJSONWebToken();
                if (mtoken == null) return new JsonResult("Not Valid User Login");
                return new JsonResult(mtoken);
            }
            return new JsonResult("Not Valid User Login");
        }

        private string GenerateJSONWebToken()
        {
            string key = "LT69BabyKeyAuthor";
            var issuer = "TestForAthentication";

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(issuer,
                issuer,
                null,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public JsonResult TheTokenSignIn2(string password, int userId)
        {
            string key = "LT69Baby_Key_Author";
            var issuer = "TestForAthentication";

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var hash = _hashThis.GenHashCode(password);
            var userExist = _context.User.Where(x => x.Password == hash && x.EmployeeNumber == userId).Any();
            if (userExist)
            {
                var theClaim = new List<Claim>();
                theClaim.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
                theClaim.Add(new Claim("userId", userId.ToString()));
                theClaim.Add(new Claim("password", password));

                var yourSpecialTokenJWT = new JwtSecurityToken(issuer,
                                issuer,
                                theClaim,
                                expires: DateTime.Now.AddDays(2),
                                signingCredentials: credentials);

                var finalJWTTokenGen = new JwtSecurityTokenHandler().WriteToken(yourSpecialTokenJWT);
                return new JsonResult(finalJWTTokenGen);
            }
            return new JsonResult("NotValidUser");


        }
    }
    
}


