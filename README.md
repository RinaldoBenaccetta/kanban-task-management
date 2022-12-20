# kanban-task-management

## What is it?
It's a Trello-like app. This is a full-stack project based on a Frontend Mentor challenge to learn React and Node.js. Node.js and Mongodb are used to serve the API calls and the app file. React is used for the frontend.

### App features

- Responsiveness with big interface design differences for mobile devices compared to others.
- Dark mode switch toggle, but using browser preferences by default.
- Using a shell script to build both the backend and frontend parts together to be ready for deployment.

## Project infos

### Languages and frameworks used
#### Backend

- Node.js
- Fastify
- MongoDb
- Mongoose

#### Frontend

- React
- Typescript
- React-router
- Redux
- Styled-components

## How to

From the root level of repository :

### Start

#### `npm run setup`
to install dependencies of root, frontend, and backend.

### View on local dev
#### `npm run dev`
View it on `http://localhost:3001`

### Pre-populate database
#### `http://localhost:3001/api/hydrate`
This will create a database named *kanban* and fill it with fake data.

### Build locally
#### `npm run build`
Then view it with `npm run start

### Deployment
First, fill in the values of the following variables in the *deploy.sh* file::
- git_username
- git_repo
- git_production_branch
*No spaces, no apostrophe*

- Then, run the *deploy.sh* script. It will create a new branch in the repository, named using the value provided in *git_production_branch*. The script will then build the app locally and push it to the newly created branch.
- Create 3 environment variables on distant server :
  - DB_HOST
  - DB_USER
  - DB_PASSWORD

To start server, run the following commands:
#### `npm install`
#### `npm run server:start`

Then go to this address in browser :
#### `MY_HOST_ADRESS/api/boards/hydrate`

This will create a database named *kanban* and fill it with fake data.

Make backend ready use environment variables in README.md
