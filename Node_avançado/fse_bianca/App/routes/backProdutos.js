module.exports = function (app){

    app.get('/bProdutos', function(req,res){
        res.render('pages/produtos');
    });
}