<?php
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $database = "fseletro"; 
    $conn = mysqli_connect ($servername, $username, $password, $database); 

    if(!$conn){ 
        die("A conexão ao BD falhou: " .mysqli_connect_error()); 
    } 
?>

<!Doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Produtos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/estilo.css">
        <script src="javascript/funcoes.js"></script>
    </head>

    <body>
        <?php include_once('menu.html')?> 
        
        <main class="container-fluid">
            <header>
                <h1>Produtos</h1>
            </header>
            <hr>
            <h3>Categorias</h3>
            
            <nav class="nav mr-3">
                <ul class="col">
                    <li class="nav-item" onclick="exibir_todos()">
                        <a class="nav text-dark" href="#">Todos (12)</a>
                    </li>
                    <li class="nav-item" onclick="exibir_categorias('Geladeiras')">
                        <a class="nav text-dark" href="#">Geladeiras (3)</a>
                    </li>
                    <li class="nav-item" onclick="exibir_categorias('Fogões')">
                        <a class="nav text-dark" href="#">Fogões (2)</a>
                    </li>
                    <li class="nav-item" onclick="exibir_categorias('Micro-ondas')">
                        <a class="nav text-dark" href="#">Micro-ondas (3)</a>
                    </li>
                    <li class="nav-item" onclick="exibir_categorias('Lavadoras')"> 
                        <a class="nav text-dark" href="#">Lavadora de roupas (2)</a>
                    </li>
                    <li class="nav-item" onclick="exibir_categorias('Lava-louças')">
                        <a class="nav text-dark" href="#">Lava-louças (2)</a>
                    </li>
                </ul>
            </nav>
            
            <div class="container pl-5">
                <div class="row">
                    <?php
                        $sql = "select * from produto"; 
                        $result = $conn->query($sql);  

                        if ($result->num_rows>0){
                            while($rows=$result->fetch_assoc()){      
                    ?>         
                    
                    <div class="pr-3 itens"  id=<?php echo $rows["categorias"];?>>
                        <a href="#"><img src=<?php echo $rows["imagem"];?> width="53px" alt=<?php echo $rows["nome_produto"];?> onclick="aumentar(this)"></a>
                        <br>
                        <p class="informacoes_do_produto"><?php echo $rows["descricao"];?></p>
                        <hr>
                        <p class="preco_antigo">R$<?php echo $rows["preco_anterior"];?></p>
                        <p class="preco">R$ <?php echo $rows["preco_atual"];?></p>
                    </div>
                       
                    <?php    
                            }       
                        } 
                        else{
                            echo "Nenhum produto cadastrado!";
                        }   
                    ?>
                </div>
            </div>
        </main>

        <footer>
            <p class="nav justify-content-center " id="cor_destaque">Formas de Pagamento:</p>  
            <div class="nav justify-content-center">
                <img width="30%" src="./imagens/formas_de_pagamento.jpg" alt="Formas de pagamento">
            </div>
            <p class="col text-white text-center bg-danger" id="recodepro">&copy; Recode Pro</p>
        </footer>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    </body>
</html>