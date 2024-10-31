using JobBoardDotnetBackend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JobBoardDotnetBackend.Models.DTOs;
using JobBoardDotnetBackend.Models.Entities;

namespace JobBoardDotnetBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployersController : ControllerBase
    {
        private readonly JobBoardDbContext _dbContext;

        public EmployersController(JobBoardDbContext _dbContext)
        {
            this._dbContext = _dbContext;
        }


        [HttpGet]
        public IActionResult GetAllEmployers()
        {
            var employers = _dbContext.Employers.ToList();

            return Ok(employers);
        }

        [HttpPost]
        public IActionResult AddEmployer(AddEmployerDto addEmployerDto)
        {
            var employer = new Employer()
            {
                CompanyName = addEmployerDto.CompanyName,
                CompanyAddress = addEmployerDto.CompanyAddress,
                CompanyEmail = addEmployerDto.CompanyEmail,
                CompanyPhone = addEmployerDto.CompanyPhone,
            };

            _dbContext.Employers.Add(employer);
            _dbContext.SaveChanges();


            return Ok(employer);
        }

    }
}
