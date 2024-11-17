# Frontend Documentation

_This is currently incomplete, but will eventually show how the Frontend works_
---
## Tech Used:
- React (TypeScript)
- TailwindCSS

&nbsp;
&nbsp;
&nbsp;

## Job Board
This is how we currently use the main job board page and how most components work.
&nbsp;
The Job Board has a few components to get it working.
It brings in the following components:
+ JobPost
    + This shows the Job Post card, which is clickable and requires a few props to display its data
+ FiltersPopup
    + This is the side menu that appears when clicking the 'All Filters' button
    + _Note_: This is currently non functional
+ SearchBar
    + This will be used to search for jobs based off of certain search params
    + _Note_: This is currently non functional

&nbsp;
&nbsp;
&nbsp;

### Job Posts
Job posts will take a Job object of type 'Job' to get their data displaying properly.

Here is what props we require _(currently)_:
```javascript
{
    "jobID": typeof(string),
    "jobTitle": typeof(string),
    "company": typeof(Company),
    "experienceLevel": typeof(string(restrictions: "Intern" | "Entry-Level" | "Mid-Level" | "Senior" | "Manager")),
    "location": typeof(string),
    "onSite": typeof(string(restrictions: "On-Site" | "Hybrid" | "Remote")),
    "salary": typeof(number),
    "averageHours": typeof(number),
    "shortDescription": typeof(string)
}
```
Notes:
+ Currently the location string is un-restricted, meaning that anything could be put here - need to fix
+ The averageHours is going to be changed to job-term, meaning it will be of a certain string type - "Full-Time", "Part-Time", "Contract"
+ jobTitle & shortDescription are not restricted in length, min OR max - need to fix