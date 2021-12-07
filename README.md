# Get Packin'
Backpacker’s gear app that calculates and displays  weight of each item during the packing process and to prevent overpacking and promote organization of essentials.

## Watch the demo in two minutes:
https://www.loom.com/share/ba1679c3a2474039ba5c2ef8dd1a7183

- [Back-end Repo](https://github.com/davidrobertregan/get-packin-api)
- Check out the app on [Netlify](https://get-packin.netlify.app/)

## How I worked on this project
- Brainstormed ideas with [Nick Christensen](https://github.com/nickachristensen)
- Collaborated to create a [project pitch](https://docs.google.com/document/d/1T0DlTqXA3o3Mdvr1SAlwWu4Nb-EzY7bMlrgBX3IOZ1I/edit?usp=sharing) with an MVP, user stories and stretch goals
- Paired programming periodically switching between driver and navigator

## How to navigate this project
- Used JSON.parse to seed data from JSON formatted file in [Rails back-end](https://github.com/davidrobertregan/get-packin-api)
- Created [patch/delete](/my-app/src/GearCard.js) and [create](/my-app/src/AddGearForm.js) fetch requests to persist changes to gear
- Passed down [callback functions](/my-app/src/GearContainer.js) to update the DOM on user gear changes

## Why I built this project this way
- It's hard to weigh a backpack in real life... so we displayed the total pack weight at the top of the page.
- Built out a [Rails back-end](https://github.com/davidrobertregan/get-packin-api) separately after Flatiron Graduation to add user authentication and so users could add/edit their own personal gear.
- Created dynamic sort by category buttons [using map](/my-app/src/SortGear.js) so that if a new category is added it will update the buttons

## If I had more time I would change this: 
- Add a feature where the user could add friends and see their gear
- Restyle without Bootstrap to better hone my styling skills
- I had to change my fetch request urls for production to Netlify. I got everyting to work, but I would like to figure out a better solution to the problem.
