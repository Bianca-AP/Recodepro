module.exports = function (app){

    app.get('/fale_conosco', function(req,res){
        var connection = app.app.config.database;

        var query = app.app.models.mensagemModel;
        query.getConteudo(connection, 
            function(error, results, fields){
                res.json(results)
                //resultsjson = JSON.parse(JSON.stringify(results))
                console.log(error,results)
                //res.render('pages/fale_conosco', {dados:resultsjson});
        });
    });

}
