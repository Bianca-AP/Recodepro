module.exports = function (app){

    app.get('/produtos', function(req,res){ //http://localhost:3333/produtos
        var connection = app.app.config.database;

        var query = app.app.models.produtoModel;
        query.getConteudo(connection, 
            function(error, results, fields){ 

                res.json(results)
                
                //resultsjson = JSON.parse(JSON.stringify(results))
                console.log(error,results)
                //res.render('pages/produtos', {dados:resultsjson});
                
        });
    });

}
