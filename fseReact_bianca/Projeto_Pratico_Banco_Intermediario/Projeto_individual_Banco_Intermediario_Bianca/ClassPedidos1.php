<?php
    require_once "../actions/getRetorno.php";
        
    $result = query('SELECT cliente, endereço, telefone, nome_produto, valor_unitario, quantidade, valor_total FROM fseletro_bianca.cliente
	inner join pedidos on clientep=cliente
    order by idpedidos desc limit 1');
    $pc=[];

    while($row=mysqli_fetch_assoc($result)){
        $pc[]=$row;
    }
            
            
    header("Access-Control-Allow-Origin: *");
    //header("Content-type: application/json");
    echo json_encode($pc);
    
?>
