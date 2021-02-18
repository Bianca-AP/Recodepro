import React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';

const produtos = [
  {
    idproduto: 1,
    categorias: 'Geladeiras',
    nome_produto: 'Geladeira 1',
    descricao: 'Geladeira Frost Free Brastemp Side Inverse 540 litros',
    preco_anterior: 6389,
    preco_atual: 5019,
    imagem: './imagem/geladeira2.jpg',
  },
  {
    idproduto: 2,
    categorias: 'Geladeiras',
    nome_produto: 'Geladeira 2',
    descricao: 'Geladeira Frost Free Brastemp Branca 375 litros',
    preco_anterior: 2068.6,
    preco_atual: 1910.9,
    imagem: './imagem/geladeira2.jpg',
  },
  {
    idproduto: 3,
    categorias: 'Geladeiras',
    nome_produto: 'Geladeira 3',
    descricao: 'Geladeira Frost Free Consul Prata 340 litros',
    preco_anterior: 2199.9,
    preco_atual: 2069,
    imagem: './imagem/geladeira3.jpg',
  },
  {
    idproduto: 4,
    categorias: 'Fogões',
    nome_produto: 'Fogão 1',
    descricao: 'Fogão 4 Bocas Consul Inox com Mesa de Vidro',
    preco_anterior: 1209.9,
    preco_atual: 1129,
    imagem: './imagem/fogao1.jpg',
  },
  {
    idproduto: 5,
    categorias: 'Fogões',
    nome_produto: 'Fogão 2',
    descricao: 'Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático',
    preco_anterior: 609.9,
    preco_atual: 519.7,
    imagem: './imagem/fogao2.jpg',
  },
 {
    idproduto: 6,
    categorias: 'Micro-ondas',
    nome_produto: 'Micro-ondas 1',
    descricao: 'Micro-ondas Consul 32 Litros Inox 220V',
    preco_anterior: 580.9,
    preco_atual: 409.88,
    imagem: './imagem/microondas1.jpg',
  },
  {
    idproduto: 7,
    categorias: 'Micro-ondas',
    nome_produto: 'Micro-ondas 2',
    descricao: 'Microondas 25L Espelhado Philco 220V',
    preco_anterior: 508.7,
    preco_atual: 464.53,
    imagem: './imagem/microondas2.jpg',
  },
  {
    idproduto: 8,
    categorias: 'Micro-ondas',
    nome_produto: 'Micro-ondas 3',
    descricao: 'Forno de Microondas Eletrolux 20L Branco',
    preco_anterior: 459.9,
    preco_atual: 436.05,
    imagem: './imagem/microondas3.jpg',
  },
  {
    idproduto: 9,
    categorias: 'Lava-louças',
    nome_produto: 'Lava-louça 1',
    descricao: 'Lava-Louça Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch',
    preco_anterior: 3599,
    preco_atual: 2799.9,
    imagem: './imagem/lavadoralouca1.jpg',
  },
  {
    idproduto: 10,
    categorias: 'Lava-louças',
    nome_produto: 'Lava-louça 2',
    descricao: 'Lava Louça Compacta 8 Serviços Branca 127V Brastemp',
    preco_anterior: 1970.5,
    preco_atual: 1730.61,
    imagem: './imagem/lavadoralouca2.jpg',
  },
  {
    idproduto: 11,
    categorias: 'Lavadoras',
    nome_produto: 'Lavadora de roupas 1',
    descricao: 'Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca',
    preco_anterior: 1699,
    preco_atual: 1214.1,
    imagem: './imagem/maquina1.jpg',
  },
  {
    idproduto: 12,
    categorias: 'Lavadoras',
    nome_produto: 'Lavadora de roupas 2',
    descricao: 'Lavadora de Roupas Philco Inverter 12KG',
    preco_anterior: 2399.9,
    preco_atual: 2179.9,
    imagem: './imagem/maquina2.jpg',
  }
]  
export default function Produtos() {
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
                      </ScrollView>
                    )            
                })}
            </View>
        </View>
      </View>
    )
}
  