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
    title: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    texttitle: {
        fontSize: 40,
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center' 
    },
    box: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FF8C00"
    },
    contato: {
        color:'#FFFFFF',
        fontSize: 20
    },
    category: {
        fontSize: 20, 
        marginLeft: 20, 
        color:'white' 
    },
    name: {
        width: "100%", 
        padding: 14, 
        borderRadius: 15,
        backgroundColor: "white"
    },
    coment: {
        borderRadius: 25, 
        backgroundColor: "white",  
        width: "100%", 
        paddingBottom: 55, 
        paddingTop:14,
        paddingLeft:14,
    },
    btn:{
        borderRadius: 25, 
        padding: 12, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#FF8C00"
    },
    send:{
        fontSize: 20,
        color:'white'
    },
    mensage: {
        marginBottom: -20,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor: "#FF8C00"
    },
    msg: {
        fontSize: 25, 
        alignItems: 'center', 
        color:'white' 
    },
    msgtext: {
        color: "white",
        fontSize: 18,
        textAlign:'center',
    },
    img:{
        width:30, 
        height:30,
    },
})
export default styles;