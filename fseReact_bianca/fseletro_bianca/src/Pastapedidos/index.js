import { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';

export default function Pedidos() {

    const [pedidosc, setPedidosc] = useState([]);
    const [render, setRender] = useState(false);
    const [elementos, setElementos] = useState(false);
    
    useEffect(() => {
        async function fetchData(){
            const url = "http://localhost/Projeto_Pratico_Banco_Intermediario/Projeto_individual_Banco_Intermediario_Bianca/ClassPedidos1.php";
            const response = await fetch(url);
            setPedidosc(await response.json());
        }fetchData();    
    }, [render]);

    async function controleEnvio(event) {
        event.preventDefault();
        

        let formData = new FormData(event.target);
        
        const url = "http://localhost/Projeto_Pratico_Banco_Intermediario/Projeto_individual_Banco_Intermediario_Bianca/ClassPedidos.php";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setElementos(dados);
            setTimeout(() => {
                setElementos(false)
              }, 3000);
            
        });
    } 

    return (
        
        <div>
            <title>Faça seu Pedido</title>
            <h1>Cadastrar pedidos</h1>
            <hr/>

            <div className="col-lg-8 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <Form.Group>
                        <Form.Label>Nome do cliente</Form.Label>
                        <Form.Control type="text" name="cliente" id="cliente" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control type="text" name="endereço" id="endereço" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control type="text" name="telefone" id="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nome do produto:</Form.Label><br/>
                        <select className="col-lg" name="nome_produto" id="nome_produto">
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
                        </select><br/><br/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control type="text" name="valor_unitario" id="valor_unitario" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control type="number" name="quantidade" id="quantidade" />
                    </Form.Group>
            

                    <Button className="col-lg" variant="primary" name='concluir' type="submit">
                        Concluir Pedido
                    </Button><br/><br/>
                </Form>
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
                                                <hr/>
                                                <hr/>
                                                Sr(a) {item.cliente}, o valor total da sua compra foi de: R$ {item.valor_total}
                                                <hr/>
                                                <hr/>
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
