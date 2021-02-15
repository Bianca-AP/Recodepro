import React from 'react';
 
function Footer(){
    
    return(
    <div>
        <p className="nav justify-content-center" id="cor_destaque">Formas de Pagamento:</p>
        <div className="nav justify-content-center"> 
            <img width="30%" src="./imagens/formas_de_pagamento.jpg" alt="Formas de pagamento"/> 
        </div>
        <p className="col text-white text-center bg-danger" id="recodepro">&copy;Recode Pro</p>
    </div>
        
    );
}

export default Footer;
