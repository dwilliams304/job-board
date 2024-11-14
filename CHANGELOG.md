# Changelog

Here is where you can see all the changes made for thie job board!
This will include general bug fixes, feature releases, etc...

## v0.0

Start project
&nbsp;

## v0.1 (Oct. 24, 2024)

This will be the first 'official' version release of the TypeScript job board.
+ Add more installation scripts from project root
+ Update README and Frontend DOCS
+ Routes/dynamic routing working working for: 
    + Job board
    + Job posts
    + Company pages
    + Login/signup forms
    + Privacy/T&C
    + Help
    + (Catch-all) Not Found
+ Company pages/job pages display dynamic data
+ Job boards display dynamic data
+ Company pages will list all jobs associated with their company ID
+ General clean up on functions/types

&nbsp;

## v0.101 (Oct. 29, 2024)

(minor update, no features)
+ Change project structure
    + Move /packages/frontent -> /client
    + Move /packages/backend -> /backend
    + Delete /packages
+ Start switch to ASP.NET backend
+ Remove npm package _concurrently_ from root
+ Move npm package _ts.node_ to devDependencies
+ Change npm scripts in root to match new project structure

&nbsp;

## v0.2 (Nov. 13, 2024)

These are primarily backend focused changes.

Backend:
+ Change backend to utilize MongoDB instead of Supabase
+ Backend connected to MongoDB
+ Add controller for JobPosts, Companies
+ JobPosts can be queried by specific id, or certain filters
+ Companies can be queried by specific ID
+ Data modelling mostly done for most backend things

Frontend:
+ Button components are a little bit more dynamic and can take additional settings through props
+ Mock Create Job Posting page
+ Semi-working Rich Text editor
+ Company pages will take in url search params instead of using local state
+ Job searching adds url search params instead of using local state (semi-working with dummy data)

Misc:
+ Add a data generator for creating mock Company and Job Posting data
    + This can be found in: "./client/src/data/generatedData"
    + Will write 20 companies and 100 job posts into a CSV file
+ General cleanup on backend/frontend deps