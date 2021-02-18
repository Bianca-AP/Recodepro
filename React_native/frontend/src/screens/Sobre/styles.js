import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    },
    box:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage:'linear-gradient(-30deg,#B22222, #FF8C00)',
    },
    text: {
        marginLeft:10, 
        color: '#FFFFFF', 
        alignItems:'center', 
        textAlign:'center', 
        fontSize: 40
    }
})
export default styles;