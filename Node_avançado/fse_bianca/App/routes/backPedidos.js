const {check, validationResult } = require("express-validator");
module.exports = function (app){

    app.get('/pedidos', function(req,res){
        res.render('pages/pedidos', {validacao:{errors:{},}, dados:{}});
    });

    app.post('/pedidos',[
        check('cliente', 'Nome é obrigatório com pelo menos 3 caracteres').exists().isLength({min:3}),
        check('endereço', 'Endereço é obrigatório com pelo menos 3 caracteres').exists().isLength({min:3}),
        check('telefone', 'Telefone é obrigatório no formato (xx) xxxxx-xxxx').exists().isLength({min:12}),
        check('nome_produto', 'Escolha um produto da lista').exists().isLength({min:3}),
        check('valor_unitario', 'Valor unitário do produto é obrigatório (ex: 1258.60)').exists().isLength({min:4}),
        check('quantidade', 'Quantidade é obrigatória').exists().isLength({min:1}),
    ], function(req,res){

      
        var cliente = req.body.cliente;
        var endereço = req.body.endereço;
        var telefone = req.body.telefone;
        var nome_produto = req.body.nome_produto;
        var valor_unitario = req.body.valor_unitario;
        var quantidade = req.body.quantidade;


        var connection = app.app.config.database;
        var errors = validationResult(req);

        if(!errors.isEmpty()){
            res.render("pages/pedidos",{validacao:errors, dados: cliente,endereço,telefone,nome_produto,valor_unitario,quantidade})
            console.log(errors);
            //return;
        }else{
            var pedidoModel = app.app.models.pedidoModel;

            pedidoModel.salvarConteudo(cliente, endereço, telefone, nome_produto, valor_unitario, quantidade, connection, function(error,results){

            });
            
            pedidoModel.getConteudo(connection, 
                function(error, results, fields){
                    console.log(error,results)
                    res.render('pages/bPedidos', {dados:results});
                }
            );
        }
    });
}

