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
#### `http://localhost:3001/api/prepopulate`
This will create a database named *kanban* and fill it with fake data.

### Build locally
#### `npm run build`
Then view it with `npm run start`
