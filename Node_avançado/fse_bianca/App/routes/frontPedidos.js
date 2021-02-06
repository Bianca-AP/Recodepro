module.exports = function (app){

    app.get('/pedidos', function(req,res){
        var connection = app.app.config.database;

        var query = app.app.models.pedidoModel;
        query.getConteudo(connection, 
            function(error, results, fields){
                console.log(error,results)
                res.render('pages/pedidos', {dados:results});
        });
    });

}