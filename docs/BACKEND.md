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
---
## Data Models

Here is what the data looks like when returned. This is still being worked on, and can change in the future!

&nbsp;

#### Company

The company object will look like the following:
```
    "_id": "ObjectID", //Primary key
    "name": "string", //Company's name
    "about": "string", //Brief company description
    "address": "string", //Company's primary office address
    "current_employees": Int32, //Rough amount of current employees, generally rounded to nearest hundred
    "email": "string", //Company's primary contact email
    "img": "string", //Company's main logo
    "job_postings": Array[ //An array of job posting objects containing basic job post information
        {
            "id": "ObjectID", //Job's unique object id
            "title": "string", //Job title
            "location": "string", //Job location
            "location_type": "string" //Is it remote, hybrid, or on-site?
        }
    ]
```