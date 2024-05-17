// load up our shiny new route for users
import {customerRoutes} from './customers.js';
import { planRoutes } from './plans.js';

export const appRouter = (app) => {
  // added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req, res) => {
    res.send('Welcome to the development api-server');
  });

  // run customers and plans module here to complete the wire up
  customerRoutes(app);
  planRoutes(app);
};
