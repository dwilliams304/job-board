# React Job Board  

> A fullstack application built with a React frontend and an Express/MongoDB backend.  

_Note: This project is still WIP with incompleted documentation. Check back in later!_  

## Scripts
Here are some basic scripts that will be useful. Once you cd into the root folder of the project you can do the following:
&nbsp;  
&nbsp;  
&nbsp;  

```
npm run dev:fe
```
- This will only run the frontend, in case you only want to mess with styling, routing, etc.  
&nbsp;  

```
npm run dev:be
```
- This will only run the server, in case you only want to mess with the API/server.  
&nbsp;  

```
npm run dev
```

- This script uses the npm package _concurrently_ to run both the frontend and backend together, so you can ensure that both the front and the back communicate and work together properly.  
&nbsp;  
&nbsp;  
&nbsp; 

Additionally you can do the same with tests, with the same formatting:
```
npm run test
npm run test:fe
npm run test:be
```
&nbsp;  
&nbsp;  
&nbsp; 


### To-Do  
#### Backend:
- [x] Set up basic server w/ Express
- [x] Connect/create MongoDB database to backend
- [ ] Basic data modelling
- [ ] Server routing
- [ ] Authentication

#### Frontend:
- [x] Scaffold basic Job Board UI
- [x] Create mock data and display it
- [x] Switch styling to Tailwind
- [ ] Connect backend to display actual data
- [ ] Users can expand job post for more details
- [ ] Basic search functionality
- [ ] Set up user/company profile creation pages
- [ ] Allow companies to create job posting

#### Stretch:  
- [x] Convert JavaScript frontend to TypeScript
- [x] Convert backend to TypeScript
- [ ] Set up payment pages for creating job listing (Stripe?)