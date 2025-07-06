const pool = require('../models/db');

exports.criarUsuario = async(req, res) => {
 const {nome, idade} = req.body;

 try{
        const result = await pool.query('INSERT INTO usuarios (nome, idade) VALUES ($1, $2) RETURNING *', [nome, idade]);
        res.json({
         recebido: req.body,
         timestamp: new Date().toISOString()
     }).status(201);
 
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
        }).status(200);

        console.log("usuarios listados:", result.rows);

    }catch(error){
        console.error("Erro ao listar usuarios:", error);
        res.status(500).json({error: "erro interno do servidor"});
    }
      
   };

   
   exports.ListaDeUsuarioUnico = async(req, res) => {
       const id = req.params.id;
       const name = req.params.name;

       try{
            const resultID = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

            if(resultID.rows.length === 0){
               return res.status(404).json({mensagem: "Usuario não encontrado"});
            }
            res.json({
                message: "Usuário encontrado",
                data: resultID.rows[0],
                timestamp: new Date().toISOString()
            }).status(200);

       }catch(error){
           console.error("Erro interno do servidor: ", error);
           res.status(500).json({error: 'erro interno do servidor'});
       }

   }

   exports.ExcluirUsuario = async(req, res) => {
       const id = req.params.id;

       try {
           const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);

           if (result.rows.length === 0) {
               return res.status(404).json({ message: "Usuário não encontrado" });
           }

           res.json({
               message: "Usuário excluído com sucesso",
               data: result.rows[0],
               timestamp: new Date().toISOString()
           }).status(200);

       } catch (error) {
           console.error("Erro ao excluir usuário:", error);
           res.status(500).json({ error: "Erro interno do servidor" });
       }
   }

   exports.AtualizarUsuario = async(req, res) => {
       const id = req.params.id;
       const { nome, idade } = req.body;

       try {
           const result = await pool.query('UPDATE usuarios SET nome = $1, idade = $2 WHERE id = $3 RETURNING *', [nome, idade, id]);

           if (result.rows.length === 0) {
               return res.status(404).json({ message: "Usuário não encontrado" });
           }

           res.json({
               message: "Usuário atualizado com sucesso",
               data: result.rows[0],
               timestamp: new Date().toISOString()
           }).status(200);

       } catch (error) {
           console.error("Erro ao atualizar usuário:", error);
           res.status(500).json({ error: "Erro interno do servidor" });
       }
   }
