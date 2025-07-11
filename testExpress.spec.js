const ap = require('./my_app_1/express');
const request = require('supertest');

describe('Testando a API de Usuários', () => {
   test('Teste do get', async () => {

    const response = await request(ap).get('/');

    expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(expect.objectContaining({
         message: expect.any(String),
         timestamp: expect.any(String),
         data: expect.arrayContaining([
               expect.objectContaining({
                  id: expect.any(Number),
                  nome: expect.any(String),
                  idade: expect.any(Number),
               }),
         ]),
      }));
 
   })});
