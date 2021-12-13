# Project 4 Documentation
## By: Nathan Noack

## Introduction
**[See working site here!](https://git-committed.netlify.app/)**\
This is a full-stack (React/Python/Masonite/Postgre SQL) app implementing CRUD functionality.\
The main goal of this app is to provide some self-guidance & organization when a web developer is honed in on the job hunt. Based on a regular 40-hr workweek (of course more effort is always better!), this sort of "single source of truth" guides the user to whatever notes/resources they wish to add throughout their daily journey. A typical 8-hr day is broken up as shown below.\
\
How to split your time:
 - 25% Projects/New Tech: What projects can you contribute to your portfolio that fit the market and what you'd like to do? What new technology would you enjoy learning?
 - 25% Networking: As of 2021, the vast majority of jobs are found through networking referrals, so don't be afraid to make some friends and learn some new things!
 - 25% Coding Challenges: Practice keeping your code DRY and stretching your muscles. Learn how to keep your code efficient but more importantly, readable and organized.
 - 25% Job Applications: You won't get a job out of thin air! Apply to positions for which you're at least 60% qualified. Apply to companies that EXCITE you and align with your personality and your goals.

Big shoutout to [Alex Merced](https://meet.alexmercedcoder.com/) for breaking down this advice and for guiding us at General Assembly along the way.\
**[See backend repo here](https://github.com/underdoggum/gitcommitted_backend)**



## Technologies Used
#### Core
 - HTML5
 - CSS3
 - JavaScript ES6
 - Python

#### Libraries / Techniques
 - React Routing
 - MaterialUI framework (mobile-first, responsive, trendy look & feel)
 - Frontend deployed with Netlify
 - Postgre SQL as the database
 - Masonite as the ORM framework


## User Stories
 - Overall, the job-hunting web developer should be able to view their current time block to see what they should be doing during the hour
 - They should be able to click on a link that takes them to a page with all their reminders
 - On their reminders page, they should be able to see a list of reminders, create new reminders, update them, and delete them
 - They should also be able to click on a "Useful Tips" button that persists across all pages for a helpful reminder of what to do outside of their working time


## Route Table
| Path            | HTTP Verb | Purpose                                                 |
|:---------------:|:---------:|:-------------------------------------------------------:|
| /               | GET       | Show Welcome page                                       |
| /timeblocks     | GET       | Show All timeblock categories                           |
| /timeblocks/:id | GET       | Show a single timeblock category and matching reminders |
| /new/:id        | POST      | Show a Form to create a specific reminder               |
| /edit/:id       | PUT       | Show a Form to update a specific reminder               |



## Challenges
 - Problem: I kept receiving a "Cannot read properties of undefined" error page when refreshing "timeblocks/:id"
   Solution: include "timeblock", "timeblocks", and "reminders" cases when conditionally rendering data, else render "Loading..."
 - Problem: JavaScript Dates were difficult to populate every minute
   Solution: useState and useEffect on a ```new Date()``` object and use the ```.getHour()``` function to retrieve the current hour to conditionally render styling of the current timeslot
 - Problem: As the app grew in complexity, the wireframe needed to be updated to reflect these changes, but organization of props/data flow remained difficult


## Known Bugs
 - Upon form submission, update route can't route straight back to the relevant time block (formData.category becomes "NaN")
 - Currently no "catch-all" 404 page for inappropriate routes


## Extra Features for the Future:
 - More detailed layout as sketched out in [Miro board mockup](https://miro.com/app/board/uXjVObip9M8=/?invite_link_id=290878936725)
 - Incorporate flash card practice
 - A dashboard layout may be more visually appealing
 - Ability to fully update the timeblocks instead of the static ones pre-determined
 - More organized control of reminders (e.g. ability to add helpful URLs)
 - Ability to "star" most important reminders
 - Twitch API to send text messages every morning for the most important reminders (free up to 35 msgs/day as of Dec. 2021)
 - Implementation of [FullCalendarJS](https://fullcalendar.io/docs/react) ??
 - Google drive API integration for Applications portion