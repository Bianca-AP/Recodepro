module.exports = function(){

    this.getConteudo = function (connection, callback){
        connection.query("SELECT * FROM comentario",callback);
    }

    this.salvarConteudo = function (conteudo, connection, callback){
        connection.query('insert into comentario set ?', conteudo);
    }
    
    this.getConteudoNome = function (nome, connection, callback){
        connection.query("SELECT * FROM comentario WHERE nome = "+nome,callback); 
    }
    
    return this;
}
