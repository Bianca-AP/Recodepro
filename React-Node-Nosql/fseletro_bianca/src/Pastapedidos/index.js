import React from 'react';
import { useState, useEffect } from 'react';
import App from '../reduxs/retorno';

export default function Pedidos() {

    const [pedidosc, setPedidosc] = useState([]);
    const [render, setRender] = useState(false);
    const [elementos, setElementos] = useState(false);
    const [cliente, setCliente] = useState('');
    const [endereço, setEndereço] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nome_produto, setNome_produto] = useState('');
    const [valor_unitario, setValor_unitario] = useState('');
    const [quantidade, setQuantidade] = useState('');

    
    useEffect(() => {
        async function fetchData(){
            const url = "http://localhost:3333/pedidos"; //"http://localhost/Projeto_Pratico_Banco_Intermediario/Projeto_individual_Banco_Intermediario_Bianca/ClassPedidos.php";
            const response = await fetch(url);
            setPedidosc(await response.json());
        }fetchData();    
    }, [render]);

    async function controleEnvio(event) {
        event.preventDefault();

        const data ={
    
            cliente: cliente,
            endereço: endereço,
            telefone: telefone,
            nome_produto:  nome_produto,
            valor_unitario: valor_unitario,
            quantidade: quantidade,
            
        }

        const url =   "http://localhost:3333/pedidos/enviar"; //"http://localhost/Projeto_Pratico_Banco_Intermediario/Projeto_individual_Banco_Intermediario_Bianca/ClassPedidos1.php";

        fetch(url, {
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:  JSON.stringify(data)
        }).then((response) => response.json()).then((dados) => {
            setElementos(dados);
        });
        setRender(!render);
        setTimeout(() => {
            setElementos(false);
            setRender(true);
        }, 1500);

        setCliente('');
        setEndereço('');
        setTelefone('');
        setNome_produto('');
        setValor_unitario('');
        setQuantidade('');
        
        
    }
    

    return (
        
        <div className="container-fluid" >
            <title>Faça seu pedido</title>
            <h1>Cadastrar pedidos</h1>
            <hr />
            <div className="row col-lg-4 mx-auto">
                <App />
            </div> 
            <div className="col-lg-8 mx-auto">
                <form method='post' onSubmit={controleEnvio}> 
                    <section className="container-fluid">
                        <div className="form-group-sm">
                            <label>Nome do cliente:</label> 
                            <input className="form-control" type="text" name="cliente"  value={cliente} onChange={event => setCliente(event.target.value)}  placeholder="Digite seu nome"/>
                        </div>
                        <div className="form-group-sm"> 
                            <label>Endereço:</label> 
                            <input className="form-control" type="text" name="endereço" value={endereço} onChange={event => setEndereço(event.target.value)} placeholder="Digite seu endereço"/>
                        </div>
                        <div className="form-group-sm"> 
                            <label>Telefone:</label> 
                            <input className="form-control" type="text" name="telefone" value={telefone} onChange={event => setTelefone(event.target.value)}  placeholder="Digite seu telefone"/>
                        </div>
                        <div className="form-group-sm"> 
                            <label>Nome do produto:</label> <br/>
                            <select className="col-lg-12" name="nome_produto" value={nome_produto} onChange={event => setNome_produto(event.target.value)} >
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
                            </select><br/> 
                        </div>
                        <div className="form-group-sm">   
                            <label>Valor unitário:</label> 
                            <input className="form-control" type="float" name="valor_unitario" value={valor_unitario} onChange={event => setValor_unitario(event.target.value)}  placeholder="Digite um valor em reais"/>  
                        </div>
                        <div className="form-group-sm"> 
                            <label>Quantidade: </label> 
                            <input className="form-control" type="number" name="quantidade" value={quantidade} onChange={event => setQuantidade(event.target.value)}  placeholder="Digite um número inteiro"/>
                        </div>
                        <div className="form-group-sm"> 
                            <button className="col-lg-12 btn btn-success" type="submit">Cadastrar pedido</button><br/><br/> 
                            <button className="col-lg-12 btn btn-info" type="reset">Limpar dados</button><br/><br/>   
                        </div>
                    </section>
                </form> 
            

                { 
                elementos && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                    Obrigada por seu pedido!
                </div>
                }


                <div className="col-lg-8 mx-auto">
                    <div>
                        <div>
                            {pedidosc.map((item) =>{
                                    return(
                        
                                        <div className="col-lg-12" key={item.idcliente}>
                                            <div>
                                                <hr/><hr/>
                                                    O cliente {item.cliente} realizou uma compra de: R$ {item.valor_total}
                                                <hr/><hr/>
                                            </div><br/><br/>
                                        </div>
                                    )            
                            })}
                        </div><br/><br/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}






