# React Job Board  

The React Job Board is a mock job-board website that uses React (using TypeScript) and TailwindCSS for the frontend, and uses .NET/C# for the backend. 
This Job Board will be fully functional, allowing for users to login to employer/job seeker accounts, create an employer/job seeker account, apply to jobs, and create job posts.

&nbsp;

## Purpose

This project is not for commercial/public use. This is simply as a personal challenge to create a fully functional full-stack application using TypeScript, and .NET Core. I wanted to learn tech that I have previously not used like TypeScript. While I have familiarity with JavaScript and more statically typed languages (C#), I have not previously used TypeScript extensively, and have never used C# in a web development environment. 


&nbsp;
## Dev Notes

+ This project currently has incomplete documentation as it is actively being worked on, please be patient!
+ A lot of the frontend data is being pulled from hard-coded .ts files within ./client/data -- this is temporary and will be switched over to using the .NET backend when it is finished. Many models are incomplete and are purely for testing purposes and to show data being displayed (somewhat) dynamically
+ Users can not currently sign in or create accounts. This is intentional
+ Reviews tied to companies are not currently functional, and companies are no longer showing a review score - currently this is WIP



&nbsp;
---
## To-Do  
#### Backend:
- [x] Switch backend to .NET
- [x] Set up basic REST API
- [ ] User sign in persistence
- [ ] User authentication and roles
- [ ] Users can create profiles
- [ ] Link jobs -> companies
- [ ] Link reviews -> companies

#### Frontend:
- [x] Scaffold basic Job Board UI
- [x] Create mock data and display it
- [x] Switch styling to Tailwind
- [x] Users can click on job posts to see more details
    - [ ] Make job description dynamic
    - [ ] Users can report and share job postings
- [x] Users can click on company pages from either job posts or job pages to see more
- [x] Company pages show dynamic data for company name, description
- [x] Company pages show all job postings from specific company
- [x] Companies show all reviews
- [ ] Users can make a profile (job seeker OR employer)
- [ ] Users can sign in to profile and see profile page
- [ ] Users can apply to a job post
- [ ] Users on company profiles can create a job post
- [ ] Users can leave reviews for companies
- [ ] Job posts show number of successful applicants (f)

#### Stretch:  
- [x] Convert JavaScript frontend to TypeScript
- [x] Convert backend to TypeScript
- [ ] Set up better data sorting/fetching for jobs, companies, reviews, etc...
- [ ] Company pages can have admins for recruiters to post jobs
- [ ] Set up way to create help articles dynamically
- [ ] Set up payment pages for creating job listing (Stripe?)