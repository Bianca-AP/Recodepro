module.exports = function(){

    this.getConteudo = function (connection, callback){
        connection.query("SELECT * FROM produto",callback);
    }

    return this;
}