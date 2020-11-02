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
        <link rel="stylesheet" href="./css/estilo.css">
        <script src="javascript/funcoes.js"></script>
    </head>

    <body>
        <?php include_once('menu.html')?> 
        
        <main>
            <header>
                <h1>Produtos</h1>
            </header>
            <hr>
            
            <section class="categoria">
                <h3>Categorias</h3>
                    <ul>
                        <li onclick="exibir_todos()"><a href="#">Todos (12)</a></li>
                        <li onclick="exibir_categorias('Geladeiras')"><a href="#">Geladeiras (3)</a></li>
                        <li onclick="exibir_categorias('Fogões')"><a href="#">Fogões (2)</a></li>
                        <li onclick="exibir_categorias('Micro-ondas')"><a href="#">Micro-ondas (3)</a></li>
                        <li onclick="exibir_categorias('Lavadoras')"><a href="#">Lavadora de roupas (2)</a></li>
                        <li onclick="exibir_categorias('Lava-louças')"><a href="#">Lava-louças (2)</a></li>
                    </ul>
            </section>
            
            <section class="tabela">
                <?php
                    $sql = "select * from produto"; 
                    $result = $conn->query($sql);  

                    if ($result->num_rows>0){
                        while($rows=$result->fetch_assoc()){
                        
                ?>        
                    <div class="itens" id=<?php echo $rows["categorias"];?>>
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
            </section>
          
            <br><br><br><br><br><br>
            <br><br>
        </main>

        <footer class="rodape">
            <p id="cor_destaque">Formas de Pagamento:</p>
            <img width="30%" src="./imagens/formas_de_pagamento.jpg" alt="Formas de pagamento"> 
            <p id="recodepro">&copy; Recode Pro</p>
        </footer>
    </body>
</html>