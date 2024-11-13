import * as fs from "fs";

//Generate a fake MongoDB style ObjectID
function generateObjectId() {
    return Math.floor(Date.now() / 1000).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
        (Math.random() * 16 | 0).toString(16)
    );
}

// Sample data for Companies
const companyNames = [
    "TechCorp", "HealthPlus", "EduNation", "FinScope", "GreenEnergy",
    "LogiSolutions", "UrbanScape", "AeroDynamics", "DataSense",
    "FoodiesHub", "BuildRight", "SoftWareHouse", "MediConnect",
    "AgriWorld", "CloudNine", "TravelEase", "SmartSecure",
    "EcoLife", "BrightFuture", "InnoVentures"
];

const addresses = [
    "123 Tech St, Silicon Valley, CA", "789 Health Ave, New York, NY",
    "456 Edu Ln, Boston, MA", "101 Fin St, Chicago, IL",
    "102 Green Dr, Austin, TX", "109 Logi Rd, Dallas, TX",
    "203 Urban Rd, Miami, FL", "305 Aero Ln, Denver, CO",
    "444 Data Dr, Seattle, WA", "555 Foodie St, Portland, OR",
    "678 Build Ln, Atlanta, GA", "789 Soft St, Palo Alto, CA",
    "810 Medi St, San Diego, CA", "901 Agri Rd, Orlando, FL",
    "345 Cloud Blvd, San Jose, CA", "999 Travel Rd, Las Vegas, NV",
    "202 Smart St, Phoenix, AZ", "303 Eco Ave, Salt Lake City, UT",
    "404 Bright Rd, Houston, TX", "505 Inno Blvd, Boston, MA"
];

//Generate random company data
const companies = Array.from({ length: 20 }, (_, i) => ({
    _id: generateObjectId(), //use helper function
    name: companyNames[i],
    about: `About ${companyNames[i]}`,
    address: addresses[i],
    current_employees: Math.floor(Math.random() * 1000) + 10,
    currently_hiring: Math.random() > 0.5, //Currently hiring? 50/50 chance (for having a large collection purposes, not actually reflective)
    email: `${companyNames[i].toLowerCase()}@companymail.com`,
    img: 'https://notfound.com/noimageprovided', //Would be a company icon
    phone: `+1-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}` //Generate a random phone number
}));

// Write Companies data to a CSV file
let companiesCsv = "_id,name,about,address,current_employees,currently_hiring,email,img,phone\n";
companies.forEach(company => {
    // Add this data
    companiesCsv += `${company._id},${company.name},${company.about},"${company.address}",${company.current_employees},${company.currently_hiring},${company.email},${company.img},${company.phone}\n`;
});

fs.writeFileSync('companies_collection.csv', companiesCsv); //Create a CSV file with the data
console.log("Companies CSV file created successfully.");

// Sample data for JobPosts
const jobTitles = [
    "Software Engineer", "Frontend Developer", "Backend Developer",
    "Data Scientist", "Product Manager", "DevOps Engineer",
    "Machine Learning Engineer", "Quality Assurance Engineer",
    "Security Analyst", "Technical Support Specialist", "Data Engineer",
    "Cloud Solutions Architect", "Mobile App Developer",
    "Full Stack Developer", "IT Project Manager", "Cybersecurity Specialist",
    "UX/UI Designer", "System Administrator", "Database Administrator",
    "Network Engineer"
];

const locations = [
    "New York, NY", "San Francisco, CA", "Austin, TX", "Seattle, WA",
    "Remote", "Chicago, IL", "Denver, CO", "Boston, MA",
    "Washington, D.C.", "Los Angeles, CA", "Miami, FL", "Atlanta, GA",
    "United States", "Phoenix, AZ", "Dallas, TX", "Salt Lake City, UT",
    "Orlando, FL", "Minneapolis, MN", "Detroit, MI", "Houston, TX"
];

const experiences = ["Intern", "Entry-Level", "Mid-Level", "Senior", "Manager"];
const locationTypes = ["Remote", "Hybrid", "On-Site"];
const terms = ["Full-Time", "Contract", "Part-Time"];
const shortDescriptions = [
    "Join our team to drive innovation.",
    "Looking for a motivated individual.",
    "Contribute to our core products.",
    "Exciting opportunity for growth.",
    "Help us shape the future.",
    "Creative solutions-oriented mindset needed."
];

// Generaterandom JobPost data
const jobPosts = Array.from({ length: 100 }, () => ({
    _id: generateObjectId(),
    company: companies[Math.floor(Math.random() * companies.length)]._id, // Pick a random company from the previous data generated
    title: jobTitles[Math.floor(Math.random() * jobTitles.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    salary: Math.floor(Math.random() * 150000) + 50000,
    date_posted: new Date(Date.now() - Math.floor(Math.random() * 15552000000)).toISOString(),  // Random date in the past 6 months
    short_description: shortDescriptions[Math.floor(Math.random() * shortDescriptions.length)],
    experience: experiences[Math.floor(Math.random() * experiences.length)],
    location_type: locationTypes[Math.floor(Math.random() * locationTypes.length)],
    term: terms[Math.floor(Math.random() * terms.length)]
}));

// Write JobPosts data to CSV
let jobPostsCsv = "_id,company,title,location,salary,date_posted,short_description,experience,location_type,term\n";
jobPosts.forEach(job => {
    // Enclose location with commas in double quotes
    jobPostsCsv += `${job._id},${job.company},${job.title},"${job.location}",${job.salary},${job.date_posted},${job.short_description},${job.experience},${job.location_type},${job.term}\n`;
});

fs.writeFileSync('jobposts_collection.csv', jobPostsCsv);
console.log("JobPosts CSV file created successfully.");
