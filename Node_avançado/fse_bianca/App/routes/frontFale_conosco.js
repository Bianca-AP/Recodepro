module.exports = function (app){

    app.get('/fale_conosco', function(req,res){
        var connection = app.app.config.database;

        var query = app.app.models.mensagemModel;
        query.getConteudo(connection, 
            function(error, results, fields){
                console.log(error,results)
                res.render('pages/fale_conosco', {dados:results});
        });
    });

}
