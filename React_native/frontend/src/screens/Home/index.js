import React from 'react';
import {Text, Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
// '../../../assets/email.jpg'
export default function Home(props){
    const {navigation} = props;
    return (
        
        <SafeAreaView
            style={styles.box}
            >

            <View style={styles.imgbox}>
                <Image style={styles.img} source={require('../../../assets/logo.png')} />
            </View>
            
            <Text style={styles.title}><b>Páginas da loja Full Stack Eletro:</b></Text>
            <br /> <br /> 

            <TouchableOpacity
               
                title='Ir para Sobre' onPress={()=>navigation.navigate('Sobre')}>
            
                    <Text style={styles.category}>Sobre</Text>
                   
            </TouchableOpacity>
            <br />  <br /> 
            <TouchableOpacity
               
                title='Ir para Login' onPress={()=>navigation.navigate('Login')}>
            
                    <Text style={styles.category}>Login</Text>
            </TouchableOpacity>
            <br />  <br />  
            <TouchableOpacity
            
                title='Ir para Fale_conosco' onPress={()=>navigation.navigate('Fale_conosco')}>
            
                    <Text style={styles.category}>Fale_conosco</Text>
            </TouchableOpacity>

            <br />  <br />  
            <TouchableOpacity
            
                title='Ir para Produtos' onPress={()=>navigation.navigate('Produtos')}>
            
                    <Text style={styles.category}>Produtos</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}
