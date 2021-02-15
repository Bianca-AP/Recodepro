module.exports = function (app){

    
    //app.get('/bFale_conosco', function(req,res){
      //  res.render('pages/fale_conosco');
    //});
    
    
    app.post('/fale_conosco/enviar', function(req,res){ //mesmo nome do action do formulario
        
        var conteudo = req.body;
        //console.log(app);
        var connection = app.app.config.database;
      
        var mensagemModel = app.app.models.mensagemModel;

        mensagemModel.salvarConteudo(conteudo, connection, function(error,results){

        });
        //console.log(conteudo)

        
        mensagemModel.getConteudo(connection, 
            function(error, results, fields){
                res.json(results)
                //resultsjson = JSON.parse(JSON.stringify(results))
                console.log(error,results)
                //res.render('pages/fale_conosco', {dados:resultsjson});
            }
        );
    });
    
}