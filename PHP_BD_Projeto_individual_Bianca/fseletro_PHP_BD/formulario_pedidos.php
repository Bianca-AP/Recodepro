<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Projetar o formulário para envio de pedido</title>
    </head>

    <body style="text-align:center"> 
        <h2> Cadastrar pedidos</h2>

        <form method='post' name='pedidos'> 
            Nome do cliente: <br> 
            <input type="text" name="cliente"><br> 
            Endereço: <br> 
            <input type="text" name="endereço"><br> 
            Telefone: <br> 
            <input type="number" name="telefone"><br> 
            Nome do produto: <br> 
            <select name="nome_produto">
                <option value="">Escolha uma opção</option>
                <option value="Geladeira 1">Geladeira 1</option>
                <option value="Geladeira 2">Geladeira 2</option>
                <option value="Geladeira 3">Geladeira 3</option>
                <option value="Fogão 1">Fogão 1</option>
                <option value="Fogão 2">Fogão 2</option>
                <option value="Micro-ondas 1">Micro-ondas 1</option>
                <option value="Micro-ondas 2">Micro-ondas 2</option>
                <option value="Micro-ondas 3">Micro-ondas 3</option>
                <option value="Lava-louça 1">Lava-louça 1</option>
                <option value="Lava-louça 2">Lava-louça 2</option>
                <option value="Lavadora de roupas 1">Lavadora de roupas 1</option>
                <option value="Lavadora de roupas 2">Lavadora de roupas 2</option>
            </select><br>  
            Valor unitário:<br> 
            <input type="float" name="valor_unitario"><br>
              
            Quantidade:<br> 
            <input type="number" name="quantidade"><br><br>
            
        
            <input type="submit" name="submit" value="Cadastrar pedido"><br><br>
            <input type="reset" name="submit" value="Limpar dados"><br><br> 
        </form> 
        
    
        <?php
            $servername = "localhost"; 
            $username = "root"; 
            $password = ""; 
            $database = "fseletro"; 
            $conn = mysqli_connect($servername, $username, $password, $database); 

            if(isset($_POST['cliente']) && isset($_POST['endereço']) && ($_POST['telefone']!=="") && isset($_POST['nome_produto']) && (($_POST['nome_produto'])!=="") && ($_POST['valor_unitario']!=="") && ($_POST['quantidade']!=="")){ 
                
                $cliente =$_POST['cliente']; 
                $endereço=$_POST['endereço']; 
                $telefone =$_POST['telefone']; 
                $nome_produto =$_POST['nome_produto'];
                $valor_unitario =$_POST['valor_unitario'];  
                $quantidade =$_POST['quantidade']; 
    
                $sql = "insert into pedidos (cliente, endereço, telefone, nome_produto, valor_unitario, quantidade, valor_total) values ('$cliente', '$endereço', '$telefone', '$nome_produto', '$valor_unitario', '$quantidade', $valor_unitario*$quantidade)"; 
                $result = mysqli_query($conn, $sql); 
                
                if($result){ 
                    echo "Dados inseridos com Sucesso!"; 
                }
                else{ 
                    echo "Dados Não Inseridos!";
                } 
                
            }
            else{
                echo "Por favor, preencha todos os campos!";
            } 
            
        ?>  
            <br><br><a href="consultar_produtos.php"> Ir para formulário de consulta de produtos </a>    
    </body>
</html>