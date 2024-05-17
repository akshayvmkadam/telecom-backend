import express from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;

// create an instance of express to serve our end points
const app = express();

// To solve cors issue
import cors from 'cors'; 

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// this is where we'll handle our various routes from
import { appRouter } from './routes/routes.js';
appRouter(app);

// finally, launch our server on port 3001.
const server = app.listen(3010, () => {
  console.log('listening on port %s...', server.address().port);
});