module.exports = function (app){
    app.get('/retornar', function(req, res) {
        var db = require("../config/db")
        var query = db.Mongoose.model('comentario', db.UserSchema, 'comentario');
        query.find({}).lean().exec(
            function (error, results) {
                res.json(results)
        });
    });
}