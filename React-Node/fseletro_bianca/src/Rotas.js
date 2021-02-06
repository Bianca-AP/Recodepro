import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Fale_conosco from './Pastafaleconosco';
import Lojas from './Pastalojas';
import Produtos from '../src/pages';
import Pedidos from './Pastapedidos'; 

function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Fale_conosco" exact component={Fale_conosco}/>
                <Route path="/Lojas" exact component={Lojas}/>
                <Route path="/Produtos" exact component={Produtos}/>
                <Route path="/Pedidos" exact component={Pedidos}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Rotas;

