# Backend Documentation

_This is currently incomplete, but will eventually show how the Backend works_

## Tech Used:
- ASP.NET
- MongoDB


&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
## Data Models

How data is stored in the database, and how it is returned are of course going to be different. 

&nbsp;

#### Company

Database:
```javascript
    "_id": ObjectId, //Primary key
    "name": string, //Company's name
    "about": string, //Brief company description
    "address": string, //Company's primary office address
    "current_employees": Int32, //Rough amount of current employees, generally rounded to nearest hundred
    "email": string, //Company's primary contact email
    "img": string, //Company's main logo
    "job_postings": ObjectId[] //An array of objectID's that are link to job postings
    "reviews": ObjectId[] //An array of objectID's that are linked to reviews
```


#### Job Posts

Database:
```javascript
    "_id": ObjectId,
    "company": ObjectId,
    "title": string,
    "location": string,
    "salary": Int32,
    "date_posted": Date,
    "short_description": string,
    "experience": string,
    "location_type": string,
    "term": string
```