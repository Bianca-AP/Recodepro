var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fseletro_bianca', {useNewUrlParser: true, useUnifieldTopology: true});

var userSchema = new mongoose.Schema({
    nome: String,
    mensagem: String,
    data: {type: Date, default: new Date()}
    
}, { collection: 'comentario' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }