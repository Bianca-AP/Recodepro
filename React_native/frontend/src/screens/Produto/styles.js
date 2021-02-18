import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundImage:'linear-gradient(-30deg,#B22222, #FF8C00)',
    },
    prod: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "#FF8C00"
    },
    title:{
        fontSize: 18,
        color:'white',
        alignItems: 'center',
        textAlign:'center'
    },
    nome: {
        paddingTop: 36,
        padding: 4, 
        fontSize: 22,
        color:'white',
        alignItems: 'center',
        textAlign:'center' 
    },
    descricao: {
        padding: 4, 
        fontSize: 18,
        alignItems: 'center',
        color:'black',
    },
    preco: {
        padding: 4, 
        color:'#ff0000',
        fontSize: 20,
        paddingBottom: 36, 
    },
    img:{
        width:100, 
        height:100
    }
})
export default styles;