import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';


export default function Produtos() {
    
    const aumentar = (event) => {
        if (event.target.style.width === "106px") {
            event.target.style.width = "53px";
        }
        else {
            event.target.style.width = "106px";
        }
    }
    
    const diminuir = (event) => {
        if (event.target.style.width === "53px") {
            event.target.style.width = "106px";
        }
        else {
            event.target.style.width = "53px";
        }
    }
     
    const [ produtos, setProdutos ] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost:3333/produtos") //"http://localhost/Projeto_Pratico_Banco_Intermediario/Projeto_individual_Banco_Intermediario_Bianca/ClassProdutos.php";
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();   
    }, []); 

    function exibir_todos() {
        let elementos = document.getElementsByClassName('celula');
        for(let i=0; i<elementos.length; i++){
            elementos[i].style="display:inline-block";
        }
    }

    function exibir_categorias(categorias) {
        let elementos = document.getElementsByClassName('celula');
        for(let i = 0; i < elementos.length; i++){
            if (categorias === elementos[i].children[0].id)
                elementos[i].style="display: inline-block";
            else
                elementos[i].style="display:none";
        }
    }
    
    return(
        <div>
            <div className="container-fluid">
                <title>Nossos Produtos</title>

                <h1>Nossos Produtos</h1>
                <hr />

                <h4>Categorias</h4>
                
                <nav className="nav">
                    <ul className="list-group">
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={exibir_todos} href="#">Todos (12)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('Geladeiras')} href="#">Geladeiras (3)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('Fogões')} href="#">Fogões (2)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('Micro-ondas')} href="#">Micro-ondas (3)</button>
                        </li>
                        <li className="list-group-item border-0 p-1"> 
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('Lavadoras')} href="#">Lavadora de roupas (2)</button>
                        </li>
                        <li className="list-group-item border-0 p-1">
                            <button className="list-group-item list-group-item-action border-0 p-1" onClick={()=>exibir_categorias('Lava-louças')} href="#">Lava-louças (2)</button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container pl-5">
                <div className="row">
                    {produtos.map((item) =>{
                        
                        return(
                            <div className='celula'>
                                <div className="pr-3 itens" key={item.idproduto} id={item.categorias}>
                                    <div>
                                        <img id="img" onMouseOver={aumentar}  onMouseOut={diminuir} style={{width:60}} src={require(`./imagem/${item.imagem}`).default} alt={item.nome_produto} />
                                    </div> 
                                    <div className="informacoes_do_produto">
                                        {item.descricao}
                                        <hr/>
                                    </div>
                                    <div className="preco_antigo">
                                        R${item.preco_anterior}
                                    </div>
                                    <div className="preco">
                                        R${item.preco_atual}
                                    </div>
                                </div>
                            </div>
                        )            
                    })}
                </div>
            </div>
        </div>
    )
}
  