import request from 'supertest';
import express from 'express';
import { appRouter } from '../routes/routes.js';
import {describe, test, expect} from '@jest/globals';

const app = new express();
app.use('/', appRouter);

describe('App Routes', function () {

  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(500);
  });
  
  test('responds to /customers', async () => {
    const res = await request(app).get('/customers'); 
    console.log("res", res)
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(500);
    //expect(res.customers.length).toBeGreaterThan(0);
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