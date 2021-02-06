module.exports = function (app){

    app.get('/nossas_lojas', function(req,res){
        res.render('pages/nossas_lojas');
    });

    
}