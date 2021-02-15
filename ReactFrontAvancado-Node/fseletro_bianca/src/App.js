import React from 'react';
import './App.css';
import {lazy, Suspense} from 'react';
const Header = lazy(() => import('./Codesplitting/Header'));
const Footer = lazy(() => import('./Codesplitting/Footer'));
const Rotas = lazy(() => import('./Codesplitting/Rotas'));

function App() {

    return(
        <div>
            <header >
                <Suspense fallback={ <p className="carregando">Por favor, aguarde! </p> }>
                    <Rotas />
                </Suspense>

                <Suspense fallback= {
                    <div className="carregando" >
                        <img width="60%" src="https://media.giphy.com/media/epsnZQy6ajh0HaM4GS/giphy.gif" alt="Imagem de carregamento"/>
                    </div>
                }>
                    <Header />
                </Suspense>

                <Suspense fallback={ <p className="carregando2">Está quase pronto...</p> }>
                    <Footer />
                </Suspense>'
            </header>
        </div>

    );

}
export default App;



