<!Doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <title>Nossas lojas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/estilo.css">
    </head>

    <body>      
        <?php include_once('menu.html')?> 
        
        <main class="container-fluid">    
            <header>
                <h1>Nossas lojas</h1>
            </header>

            <hr>
            <section class="container-fluid">             
                <div class="row">
                    <div class="col">
                        <h3>Rio de Janeiro</h3>
                        <p>Avenida Presidente Vargas, 5000</p>
                        <p>10 &ordm; andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                    </div>

                    <div class="col">
                        <h3>São Paulo</h3>
                        <p>Avenida Paulista, 985</p>
                        <p>3 &ordm; andar</p>
                        <p>Jardins</p>
                        <p>(21) 4444-4444</p>
                    </div>

                    <div class="col">
                        <h3>Santa Catarina</h3>
                        <p>Rua Major Ávila, 370</p>
                        <p>Vila Mariana</p>
                        <p>(47) 5555-5555</p>
                    </div>
                </div>
            </section>
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