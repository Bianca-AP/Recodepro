import React from 'react';

function Lojas(){
    return(
      
        <div className="container-fluid">
            <title>Nossas lojas</title>    
            
            <h1>Nossas lojas</h1>
           

            <hr/>
            <div className="container-fluid">             
                <div className="row">
                    <div className="col">
                        <h3>Rio de Janeiro</h3>
                        <p>Avenida Presidente Vargas, 5000</p>
                        <p>10 &ordm; andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                    </div>

                    <div className="col">
                        <h3>São Paulo</h3>
                        <p>Avenida Paulista, 985</p>
                        <p>3 &ordm; andar</p>
                        <p>Jardins</p>
                        <p>(21) 4444-4444</p>
                    </div>

                    <div className="col">
                        <h3>Santa Catarina</h3>
                        <p>Rua Major Ávila, 370</p>
                        <p>Vila Mariana</p>
                        <p>(47) 5555-5555</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Lojas;