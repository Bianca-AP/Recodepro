module.exports = function (app){

    //app.get('/bPedidos', function(req,res){
        //res.render('pages/pedidos');
    //});

    app.post('/pedidos/enviar', function(req,res){ //mesmo nome da action
        
        var nome_cliente = req.body.cliente;
        var endereço = req.body.endereço;
        var telefone = req.body.telefone;
        var nome_produto = req.body.nome_produto;
        var valor_unitario = req.body.valor_unitario;
        var quantidade = req.body.quantidade;

        var connection = app.app.config.database;
      
        var pedidoModel = app.app.models.pedidoModel;

        pedidoModel.salvarConteudo(nome_cliente, endereço, telefone, nome_produto, valor_unitario, quantidade, connection, function(error,results){
        
        });
        
        pedidoModel.getConteudo(connection, 
            function(error, results, fields){
                res.json(results)
                //resultsjson = JSON.parse(JSON.stringify(results))
                console.log(error,results)
                //res.render('pages/fale_conosco', {dados:resultsjson});
            }
        );
    });
}