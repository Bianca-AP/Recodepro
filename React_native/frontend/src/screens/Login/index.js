import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';

import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "bianca@teste.com",
    senha: "1234"
}

function Login({navigation}) {

    function autenticacao() {
        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
            navigation.navigate("Produtos");
        }else {
            Alert.alert("Usuario inválido", "É necessário informar um usuário válido.")
        }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.caixa}>
            <SafeAreaView      
                style={styles.box}>

                <View>
                    <Text style={styles.titulo}><b>Login</b></Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput 
                        placeholder="Digite o email bianca@teste.com" 
                        style={styles.input}
                        value={usuario}
                        onChangeText={(text) => setUsuario(text)}
                    />

                    <TextInput 
                        placeholder="Digite a senha 1234" 
                        style={styles.input} 
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                
    
            </SafeAreaView>
        </View>
    )
}
export default Login;