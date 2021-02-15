module.exports = function (app){

    
    /* GET New User page. */
    app.get('/fale_conosco', function(req, res) {
        res.render('pages/fale_conosco',  {validacao:{errors:{},}, dados:{}});
    });
    
    
    /* POST to Add User Service */
    app.post('/fale_conosco/enviar', function (req, res) {

        var db = require("../config/db")
        var nome = req.body.nome;
        var mensagem = req.body.mensagem;
        

        var query = db.Mongoose.model('comentario', db.UserSchema, 'comentario');
        var user = new query({ nome: nome, mensagem: mensagem });
        user.save(function (err, results ) {
            if (err) {
                console.log("Error! " + err.message);
                return err;
            }
            else {
                console.log("Post saved");
                
                res.json(results)
            }
        });
    });
}