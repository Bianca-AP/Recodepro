const {check, validationResult } = require("express-validator");

module.exports = function (app){

    
    app.get('/fale_conosco', function(req,res){
        res.render('pages/fale_conosco', {validacao:{errors:{},}, dados:{}});
    });
    
    
    app.post('/fale_conosco',[
        check('nome', 'Nome é obrigatório com pelo menos 3 caracteres').exists().isLength({min:3}),
        check('mensagem', 'Mensagem é obrigatória').exists().isLength({min:5}),
    ], function(req,res){

        var conteudo = req.body;
        var errors = validationResult(req);

        if(!errors.isEmpty()){
            res.render("pages/fale_conosco",{validacao:errors, dados: conteudo})
            console.log(errors);
            //return;
        }else{

            var connection = app.app.config.database;
        
            var mensagemModel = app.app.models.mensagemModel;

            mensagemModel.salvarConteudo(conteudo, connection, function(error,results){

            });
            //console.log(conteudo)

            
            mensagemModel.getConteudo(connection, 
                function(error, results, fields){
                    console.log(error,results)
                    res.render('pages/bFale_conosco', {dados:results});
                }
            );
        }
    });

    app.post('/buscarnome', function(req,res){

        var usuario = JSON.stringify(req.body.nome);

        var connection = app.app.config.database;

        var mensagemModel = app.app.models.mensagemModel;

        mensagemModel.getConteudoNome(usuario,connection, function(error, results){
            console.log(error,results, usuario)
            res.render('pages/bFale_conosco',{dados:results});
            }
        );
    });
    
}