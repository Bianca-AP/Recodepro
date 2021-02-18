import React from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity} from 'react-native';

import {useState, useEffect} from 'react';  
import styles from './styles';

export default function Produto() {
    
    const [ produtos, setProdutos ] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost:3333/produtos") //"http://localhost/Projeto_Pratico_Banco_Intermediario/Projeto_individual_Banco_Intermediario_Bianca/ClassProdutos.php";
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();   
    }, []); 

       
    return(
     
        <View style={styles.fundo}>
            <title >Nossos Produtos</title>

            <Text style={styles.title}><h1 >Nossos Produtos</h1></Text>

        <View style={styles.title}>
          <title>Nossos Produtos</title>

            <View>
                {produtos.map((item) =>{
                    
                    return(
                    <ScrollView>
                        <View style={styles.prod} key={item.idproduto} id={item.categorias}>
                            {/* <View>
                              <Image style={styles.img} src={item.imagem} alt={item.nome_produto} />
                            </View>  */}
                            <Text style={styles.nome}>
                                <b>{item.nome_produto}</b> 
                            </Text>
                            <Text style={styles.descricao}>
                                <b>Descrição:</b> {item.descricao}
                            </Text>
                            
                            {/* <Text style={styles.contato}>
                                R${item.preco_anterior}
                            </Text> */}
                            <Text style={styles.preco}>
                              <b>Preço: R${item.preco_atual}</b>
                            </Text>
                        </View>
                        <hr/>
                    </ScrollView>
                    )            
                })}
            </View>
        </View>
      </View>
    )
}
  