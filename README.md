# Backend and Frontend Setup

Just run `npm install` in each directory (`/client` and `/server`).

# Run Backend

- To automatically restart on changes: `npm run watch`
- To not restart on changes: `npm run start`

> Warning: when running the server on watch any new data you add to the DB will be erased every time a file changes

The server is now running on `http://localhost:3547`

# Run Frontend

Run `npm run start` in `/client`. The client can now be reached at `http://localhost:4536`

# Format

Prettier is setup. If you don't have your editor already setup for prettier you can run below to format the code.

`npx prettier . --write`

# Significant Dependency Docs

Below are docs for some of the significant dependencies currently used in the projects

- [API Documentation](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md)
- [MaterialUI Docs](https://mui.com/material-ui/all-components/)
- [Axios Hooks](https://www.npmjs.com/package/axios-hooks)
