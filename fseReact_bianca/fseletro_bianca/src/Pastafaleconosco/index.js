import React from 'react';
import {useState, useEffect} from 'react';  

export default function Fale_conosco(){
  
  const [mensagens, setMensagens ] = useState([]);
  const [render, setRender] = useState(false);
  const [msg, setMsg] = useState(false);
  

  useEffect(() => {
      async function fetchData(){
          const url = "http://localhost/Projeto_Pratico_Banco_Intermediario/Projeto_individual_Banco_Intermediario_Bianca/ClassMensagem1.php";
          const response = await fetch(url);
          setMensagens(await response.json());
      }fetchData();    
  }, [render]);

  
  async function envioMensagem(event) {
      event.preventDefault();
      
      let formData = new FormData(event.target);
      
      const url = "http://localhost/Projeto_Pratico_Banco_Intermediario/Projeto_individual_Banco_Intermediario_Bianca/ClassMensagem.php";

      fetch(url, {
          method: "POST",
          body: formData
      }).then((response) => response.json()).then((dados) => {
          setRender(!render);
          setMsg(dados);

          setTimeout(() => {
            setMsg(false)
          }, 3000);

      });
  }
  
  return(
    
    <div id="fale">
      
      <title>Fale Conosco</title>
      
      <main className="container-fluid">
        <header>
          <h1>Fale Conosco</h1>
        </header>

        <hr/>
        <div>  
          <section className="container"> 
            <div className="row col-lg-8 mx-auto">
                <div className="col pr-5">
                    <img width="40px" src="./imagens/email.jpg" alt="Email"/>contato@fullstackeletro.com
                </div>
                <div className="col pl-5 col-lg-4 mx-auto">
                    <img width="40px" src="./imagens/whatsapp.jpg" alt="Whatsapp"/>(11) 99999-9999
                </div>
            </div>
          </section><br/><br/>
        </div>


        <div>
          <form className="col-lg-8 mx-auto" onSubmit={envioMensagem}>
            <section className="container-fluid">
                <div className="form-group-sm">
                  <label>Nome:</label>
                  <input className= "form-control" name="nome" id="nome" style={{width:'800px'}} type="text" placeholder="Seu nome"/>
                </div>
                <div className="form-group-sm">  
                  <label>Mensagem:</label>
                  <textarea className= "form-control" name="mensagem" id="mensagem" style={{width:'800px'}}  placeholder="Digite sua mensagem"></textarea>
                  <button className="btn btn-primary" style={{width:'800px'}} type="submit">Enviar</button> <br/><br/>
                </div>
            </section>
          </form>  
        </div>
        
        { 
          msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
            Obrigada por sua mensagem!
          </div>
        }

        <div className="col-lg-8 mx-auto">
        <div>
              <div>
                  
                  {mensagens.map((item) =>{
                      return(
          
                          <div key={item.idcoment}>
                              <div>
                                  Data: {item.data}
                              </div>
                              <div>
                                  Nome: {item.nome}
                              </div>
                              <div>
                                  Cliente {item.nome} disse: {item.mensagem}
                              </div><br/><br/>
                          </div>
                      )            
                  })}
              </div><br/><br/>
          </div>
        </div>
    
      </main>
    </div>
  );
}