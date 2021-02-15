var app = require('./App/config/server');

//var rotaHome = require('./App/routes/home')(app);

//var rotaHome = require('./App/routes/frontProdutos')(app);
//var rotaHome = require('./App/routes/backProdutos')(app);

//var rotaHome = require('./App/routes/backNossas_lojas')(app);

//var rotaHome = require('./App/routes/frontFale_conosco')(app);
//var rotaHome = require('./App/routes/backFale_conosco')(app);

//var rotaHome = require('./App/routes/frontPedidos')(app);
//var rotaHome = require('./App/routes/backPedidos')(app);


app.listen(3333, function(){
    console.log("Servidor rodando com Express!");
});
