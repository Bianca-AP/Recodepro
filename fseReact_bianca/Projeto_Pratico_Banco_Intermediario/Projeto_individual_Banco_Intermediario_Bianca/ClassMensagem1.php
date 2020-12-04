<?php
    require_once "../actions/getRetorno.php";
    

    $result = query('SELECT * FROM comentario');
    $mensagens=[];

    while($row=mysqli_fetch_assoc($result)){
        $mensagens[]=$row;
    }
            
            
    header("Access-Control-Allow-Origin: *");
    //header("Content-type: application/json");
    echo json_encode($mensagens);
    
?>
