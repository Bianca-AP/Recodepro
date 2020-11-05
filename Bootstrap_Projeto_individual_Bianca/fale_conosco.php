<?php
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $database = "fseletro"; 
    $conn = mysqli_connect ($servername, $username, $password, $database); 

    if(!$conn){ 
        die("A conexão ao BD falhou: " .mysqli_connect_error());
    } 

    if (isset($_POST['nome']) && isset($_POST['msg'])){
        $nome=  $_POST['nome'];
        $msg= $_POST['msg'];
        
        
        $sql= "insert into comentario (nome, mensagem) values ('$nome', '$msg')";
        $result = $conn->query($sql);  
    }
?>

<!Doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Contato - Full Stack Eletro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/estilo.css">
    </head>

    <body>       
        <?php include_once('menu.html')?>   
        
        <main class="container-fluid">
            <header>
                <h1>Fale Conosco</h1>
            </header>

            <hr>
            
            <section class="container"> 
                <div class="row">
                    <div class="col pr-5">
                        <img width="40px" src="./imagens/email.jpg" alt="Email">contato@fullstackeletro.com
                    </div>
                    <div class="col pl-5">
                        <img width="40px" src="./imagens/whatsapp.jpg" alt="Whatsapp">(11) 99999-9999
                    </div>
                </div>
            </section>

            <form method="post">
                <section class="container-fluid">
                    <div class="form-group-sm">
                        <label for="seunome">Nome:</label>
                        <input class= "form-control" name="nome" type="text" style="width: 400px" placeholder="Seu nome">
                        <label for="suamensagem">Mensagem:</label>
                        <textarea class= "form-control" name="msg" style="width: 400px" placeholder="Digite sua mensagem"></textarea>
                        <button class="btn btn-primary" type="submit">Enviar</button> <br><br>
                    </div>
                </section>
            </form>

            <?php
                $sql = "select * from comentario"; 
                $result = $conn->query($sql);  

                if ($result->num_rows>0){
                    while($rows=$result->fetch_assoc()){
                        echo "Data: ", $rows['data'], "<br>";
                        echo "Nome: ", $rows['nome'], "<br>";
                        echo "Mensagem: ", $rows['mensagem'], "<br>";
                        echo "<hr>";
                    }       
                } 
                else{
                    echo "Nenhum comentário ainda!";
                }   
            ?>
        </main>

        <footer>
            <p class="nav justify-content-center" id="cor_destaque">Formas de Pagamento:</p>  
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




