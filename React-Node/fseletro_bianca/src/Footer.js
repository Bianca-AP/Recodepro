import React from 'react';
/*import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';*/
 
export function Footer(){
    
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
  
export function Header(){
    
    return(
        
        <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-danger">
        
            <a className="navbar-brand text-center text-white" href="Home">Full Stack<br />Eletro</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="collapseNavbar">
                <ul className="nav">
                    <li className="nav-item display-flex">
                        <a className="nav-link active text-white display-flex justify-content-end" href="/Produtos">Nossos produtos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white display-flex justify-content-end" href="/Lojas">Nossas lojas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white display-flex justify-content-end" href="/Fale_conosco">Fale conosco</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white display-flex justify-content-end" href="/Pedidos">Faça seu pedido</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}



