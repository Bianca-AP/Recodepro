module.exports = function(){
  
    this.getConteudo = function (connection, callback){
        connection.query("SELECT * FROM compras limit 1;", callback);
    }

    this.salvarConteudo = function (nome_cliente, endereço, telefone, nome_produto, valor_unitario, quantidade, connection, callback){
        connection.query('INSERT INTO cliente (cliente, endereço, telefone) VALUES (?,?,?)', [nome_cliente, endereço, telefone]);
        connection.query('INSERT INTO pedidos (clientep, nome_produto, valor_unitario, quantidade, valor_total) VALUES (?,?,?,?,?)', [nome_cliente, nome_produto, valor_unitario, quantidade, valor_unitario*quantidade]);
    }

    return this;
}