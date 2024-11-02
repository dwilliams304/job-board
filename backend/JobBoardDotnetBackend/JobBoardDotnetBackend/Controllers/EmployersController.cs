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
            var companies = _dbContext.Companies.ToList();

            return Ok(companies);
        }

        [HttpPost]
        public IActionResult AddEmployer(AddCompanyDto addCompanyDto)
        {
            var employer = new Company()
            {
                CompanyName = addCompanyDto.CompanyName,
                CompanyAddress = addCompanyDto.CompanyAddress,
                CompanyEmail = addCompanyDto.CompanyEmail,
                CompanyPhone = addCompanyDto.CompanyPhone,
            };

            _dbContext.Companies.Add(employer);
            _dbContext.SaveChanges();


            return Ok(employer);
        }

    }
}
