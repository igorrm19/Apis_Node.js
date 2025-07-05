const pool = require('../models/db');

exports.criarUsuario = async(req, res) => {
 const {nome, idade} = req.body;

 try{
        const result = await pool.query('INSERT INTO usuarios (nome, idade) VALUES ($1, $2) RETURNING *', [nome, idade]);
        res.json({
         recebido: req.body,
         timestamp: new Date().toISOString()
     });
 
     console.log("dados enviados para o banco de dados", result.rows[0]);
 
     } catch (error) {
         console.error("Erro ao processar a requisição:", error);
         res.status(500).json({ error: "Erro interno do servidor" });
     }

};


exports.listarUsuarios = async(req, res) => {

    try{
        const result = await pool.query('SELECT * FROM usuarios');

        res.json({
            message: "Listar usuarios",
            timestamp: new Date().toDateString(),
            data: result.rows
        });

        console.log("usuarios listados:", result.rows);

    }catch(error){
        console.error("Erro ao listar usuarios:", error);
        res.status(500).json({error: "erro interno do servidor"});
    }
      
   };
   
