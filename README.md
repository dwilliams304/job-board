# React Job Board  

> A fullstack application built with a TypeScript React frontend using TailwindCSS for styling. 

&nbsp;
## Dev Notes

+ This project currently has incomplete documentation as it is actively being worked on, please be patient!
+ All backend related scripts and everything within the backend has been temporarily removed as the backend is switched to .NET (10/24/2024)

&nbsp;
---
## Scripts
Here are some basic scripts that will be useful. Once you cd into the root folder of the project you can do the following:
&nbsp;  
&nbsp;  
&nbsp;  

```
    npm run dev
    npm run dev:fe
```
+ npm run dev -- this will run both the frontend and backend at the same time using _conccurrently_
+ npm run dev:fe -- this will run the frontend only
&nbsp;
>_Note-1: npm run dev:be and related has been re_
>_Note: This will also run for npm run test, with the same formatting_



## To-Do  
#### Backend:
- [ ] Switch backend to .NET
- [ ] Set up basic REST API
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
- [ ] Companies show all reviews/salaries
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