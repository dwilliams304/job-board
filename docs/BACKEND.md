# Backend Documentation

_This is currently incomplete, but will eventually show how the Backend works_

## Tech Used:
- .NET Core
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
```

When retrieving the job company's data we want to change the data's shape so that _job postings_ is not just an array of ObjectID's and instead would look more like this:
```javascript
    "_id": ObjectId,
    ...,
    "job_postings": [
        {
            "job_id": ObjectId,
            "job_title": string,
            "job_location": string,
            "job_location_type": string
        },
        {
            ...
        }
    ]
```


#### Job Posts

Database:
```javascript
    "_id": ObjectId, //Primary key
    "company": ObjectId, //The posting company's id
    "title": string,
    "location": string, 
    "salary": Int32,
    "date_posted": Date, //Uses .NET/C# DateTime.Now()
    "short_description": string,
    "experience": string, //Experience level needed for job, i.e Entry-Level, Mid-Level, etc...
    "location_type": string, //If the job is remote, hybrid, or on-site
    "term": string //Is the job Full-Time, Part-Time, or Contract
```

When a Job Post is added into the database, the Company's id who is creating the post is automatically attached to the _company_ property, as a job post can only be made when signed into a company account. 