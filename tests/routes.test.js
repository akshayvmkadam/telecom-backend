import request from 'supertest';
import express from 'express';
import router from '../routes/main.js';

const app = new express();
app.use('/', router);

describe('Customer Routes', function () {

  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('welcome to the development api-server');
  });
  
  test('responds to /customers', async () => {
    const res = await request(app).get('/customers'); 
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.customers).toBeTruthty(true);
  });

  test('responds to /customer/aks', async () => {
    const res = await request(app).get('/customers/:name'); 
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res[0].name).toEqual('aks');
  });

  test('responds to /plans', async () => {
    const res = await request(app).get('/plans'); 
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res[0].id).toEqual(1);
  });

});