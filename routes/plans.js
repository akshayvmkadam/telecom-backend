import { readFile, writeFile } from "../utils/index.js";

export const planRoutes = (app) => {

  // READ all plans
  app.get('/plans', (req, res) => {
    readFile((data) => {
      res.send(data["plans"]);
    }, true);
  });


};
