import React from 'react';
import './App.css';
import {Footer, Header} from './Footer';
import Rotas from './Rotas';
import {BrowserRouter} from 'react-router-dom';



function App() {
    
    return(
        
        <BrowserRouter>
            <div>
                <Header />
                <Rotas />
                <Footer/>
            </div>
        </BrowserRouter>
            
    );
   
}
export default App;
