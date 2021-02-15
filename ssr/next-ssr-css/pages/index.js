import React from 'react';
import Pagina2 from './components/Pagina2'
import styles from './components/Estilos.module.css';

export default function Home(){
  
    return(
    
    <div>
        <title>Full Stack Eletro</title>
        <div> 
            <h1 className={styles.text}>Seja bem vindo(a) ao Full Stack Eletro!</h1>
            <Pagina2 />
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    </div>
    );
    
}
