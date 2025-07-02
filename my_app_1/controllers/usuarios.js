const pool = require('../models/db');


exports.criarUsuario = async(req, res) => {
 const {nome, idade} = req.body;

 try{
        const result = await pool.query('INSERT INTO usuarios (nome, idade) VALUES ($1, $2) RETURNING *', [nome, idade]);
        res.json({
         recebido: req.body,
         timestamp: new Date().toISOString()
     });
 
     console.log("dados recebidos", result.rows[0]);
 
     } catch (error) {
         console.error("Erro ao processar a requisição:", error);
         res.status(500).json({ error: "Erro interno do servidor" });
     }

};


exports.listarUsuarios = (req, res) => {
      req.body = {
        message: "Listar usuarios",
        timestamp: new Date().toDateString()
    }

    res.json(req.body);
    console.log(req.body)
   };
   

