module.exports = function (app){

    app.get('/pedidos', function(req,res){
        var connection = app.app.config.database;

        var query = app.app.models.pedidoModel;
        query.getConteudo(connection, 
            function(error, results, fields){
                res.json(results)
                //resultsjson = JSON.parse(JSON.stringify(results))
                console.log(error,results)
                //res.render('pages/pedidos', {dados:resultsjson});
        });
    });

}