<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Consultar e exibir os produtos registrados</title>
    </head>

    <body>
        <h1> Consultar produtos </h1>
        <form method='post' name='consulta'>    
            Nome do produto: <br> 
            <select name="nome_produto">
                <option value="Escolha uma opção">Escolha uma opção</option>
                <option value="Todos">Todos</option>
                <option value="1">Geladeira 1</option>
                <option value="2">Geladeira 2</option>
                <option value="3">Geladeira 3</option>
                <option value="4">Fogão 1</option>
                <option value="5">Fogão 2</option>
                <option value="6">Micro-ondas 1</option>
                <option value="7">Micro-ondas 2</option>
                <option value="8">Micro-ondas 3</option>
                <option value="9">Lava-louça 1</option>
                <option value="10">Lava-louça 2</option>
                <option value="11">Lavadora de roupas 1</option>
                <option value="12">Lavadora de roupas 2</option>
            </select><br>  
            <br><br>
            
            <input type="submit" name="submit" value="Consultar"><br><br>
        </form>
        <?php 
            
            //criando a conexão
            $servername = "localhost"; 
            $username = "root"; 
            $password = ""; 
            $database = "fseletro"; 
            $conn = mysqli_connect ($servername, $username, $password, $database); 

            if(!$conn){ 
                die("A conexão ao BD falhou: " .mysqli_connect_error()); 
            } 
            
            if(isset($_POST['nome_produto']) && (($_POST['nome_produto'])!=="Escolha uma opção")){
                $nome_do_produto=$_POST['nome_produto'];
                if (($_POST['nome_produto'])==="Todos"){
                    $sql = "select nome_produto, descricao, preco_anterior, preco_atual, imagem from produto";
                }
                else{
                    $sql = "select nome_produto, descricao, preco_anterior, preco_atual, imagem from produto where idproduto=$nome_do_produto";     
                }
                $result = mysqli_query($conn, $sql);
                while ($row = mysqli_fetch_assoc($result)){
                    echo $row["nome_produto"].
                    "<br> Descrição: " . $row["descricao"] .
                    "<br> Preço anterior: " . $row["preco_anterior"] .
                    "<br> Preço atual: " . $row["preco_atual"] .
                    "<br> Imagem: " . $row["imagem"] .                 
                    ".<hr>"; 
                } 
                                
            }
            else{
                echo "Escolha uma opção";
            }
            
        ?> 
            <br><br><a href="formulario_pedidos.php"> Ir para formulário de pedidos </a>            
    </body>
</html>
