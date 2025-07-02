const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  user: process.env.User,
  host: process.env.host,
  database: process.env.Database,
  password: process.env.Password,
  port: process.env.Port,
});


pool.connect().then(() => console.log('Sucesso ao estabelecer conexão com o banco de dados')).catch((err) => console.error('Erro ao tentar conectar ao banco de dados', err));


module.exports = pool;