# Fullstack TypeScript/.NET Job Board

A fullstack job listing platform built with React/TypeScript and .NET Core, featuring search, filtering, and dynamic data handling.

## Overview

This project is a full-stack application designed to demonstrate a complete web-dev workflow using modern tech. It includes a React/TypeScript frontend styled with TailwindCSS, and a .NET Core C# backend API, with the goal of providing dynamic job listing and filtering.

This project was built as a challenge to myself to strengthen my skills in the following:
- Full-stack engineering
- TypeScript/static typing in React
- REST Api designed and data management
- MongoDB implementations
- .NET Core/C# in the web dev world
- Responsive UIs with Tailwind

## Tech Stack

This project uses the following technologies:

- Frontend
    - React
    - TypeScript
    - TailwindCSS
- Backend
    - .NET Core
    - C#
    - MongoDB
- Deployment (and CI/CD)
    - Microsoft Azure
    - Vercel


## Features

This project currently has the following features implemented:

- Full job board UI with categorized listings
- Search/filtering UI components (job type, location, date posted, etc)
- TypeScript driven frontend components
- Planned backend support for user accounts and job posting workflows


## Notes

This project was a huge learning experience, as this was my first exposure with TypeScript, TailwindCSS, .NET Core, MongoDB, and Azure. Prior to this project, I had not used TypeScript in any way but I am more familiar/comfortable with statically typed languages (namely C#) and was happy with the switch.

TailwindCSS is super easy to use, and their documentation is very extensive, allowing me to pretty quickly put up nice looking UI components that are also responsive. While I still tend towards vanilla CSS as I love the control I can get, the ease of Tailwind and how quickly it could speed up your development time (once you're comfortable with it) is not lost on me.

Using .NET was pretty different from what I'm used to. I previously had only worked with Express, but I had used C# in other projects (primarily for Unity games I like making) and was happy to be able to use a language I was semi-familiar with at the time.

I also got some exposure with Azure for the first time. Which allowed me to see the process of creating the app from start-to-finish including the final deployment. Of all the steps, this was the step I ran into the most trouble with. Not using any cloud hosting solutions previously, and just trying to jump right into it felt very hard. However, I am happy with the final product. While it may not be the most perfect, it was still a very large challenge to tackle.

## Stretch Goals/Future Improvements

I would like to eventually add a few more features to this project, but it is on hold for now so I can focus on other projects.

- User Profiles including:
    - Profile creation
    - Forgot password steps
    - Multi-resume support (similar to LinkedIn)
- Company Profiles/Mock payment setup for job-posting
    - Job posting creation when logged into company profiles
    - Dynamic rich content for created job-posts
- Working job application submissions including:
    - User resume uploading
    - Job poster defined application questions
    - Job poster defined required questions
    - Company profiles being able to view applications to jobs
