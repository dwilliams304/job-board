﻿namespace JobBoardDotnetBackend.Models.DTOs
{
    public class AddEmployerDto
    {
        public required string CompanyName { get; set; }
        public required string CompanyAddress { get; set; }
        public required string CompanyPhone { get; set; }
        public required string CompanyEmail { get; set; }
    }
}
