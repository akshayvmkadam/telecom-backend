import { readFile, writeFile } from "../utils/index.js";

export const customerRoutes = (app) => {

  // READ
  app.get('/customers', (req, res) => {
    readFile((data) => {
      res.send(data["customers"]);
    }, true);
  });

  // READ specific customer
  app.get('/customer/:id', (req, res) => {
    readFile((data) => {
      res.send(data.customers.filter(cust => cust.name === req.params.id));
    }, true);
  });

  // CREATE
  app.post('/customers', (req, res) => {
    readFile((data) => {
      // Note: this needs to be more robust for production use.
      // e.g. use a UUID or some kind of GUID for a unique ID value.
      const newcustomerId = Date.now().toString();

      // add the new user
      data[newcustomerId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('new user added');
      });
    }, true);
  });

  // UPDATE
  app.put('/customer/:id', (req, res) => {
    readFile((data) => {
      // add the new user
      data["customers"].push(req.body);

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(req.body);
      });
    }, true);
  });

  // UPDATE a plan
  app.put('/customer/:name/plan/:id', (req, res) => {
    readFile((data) => {
      // add the new user
      data["customers"].map((i) => {
        if(i.name === req.body.name){
          return { 
            i: {
              ...i,
              "plan":{...data}
            }
        }
      }
    });

    console.log(data);

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(req.body);
      });
    }, true);
  });

  // DELETE
  app.delete('/customers/:id', (req, res) => {
    readFile((data) => {
      // add the new user
      const customerId = req.params['id'];
      delete data[customerId];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`customers id:${customerId} removed`);
      });
    }, true);
  });

};
