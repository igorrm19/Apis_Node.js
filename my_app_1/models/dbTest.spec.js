const pool = require('./db');
const request = require('supertest');

describe('Testando banco de dados', async() => {
  afterAll(async () => {
    await pool.end();
  });

  test('testando query inserir', async () => {

    const insert = await pool.query('INSERT INTO usuarios (nome, idade) VALUES ($1, $2) RETURNING *', ['Test', 22]);

    expect(insert.rows[0].nome).toBe('Test');
    expect(insert.rows[0].idade).toBe(22);
  });

});