
var mysql = require('mysql');

var connMySQL = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"fseletro_bianca"
    
});

connMySQL.connect(function(err) {
    if (err) {
        console.log("Não Conectado!")
    }else{
        console.log("Conectado!");
    }
});
module.exports = connMySQL;

