import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    box: {
        flex:1,
        textAlign:'center',
        justifyContent: 'center',
        backgroundImage:'linear-gradient(-30deg,#B22222, #FF8C00)',
    },
    title: {
        color: '#FFFFFF',  
        fontSize: 35
    },
    category: {
        textAlign:'center',
        alignItems: 'center',
        color:'#FFFFFF',
        fontSize: 30
    },
    img:{
        width:320, 
        height:180,
    },
    imgbox:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40,
        marginTop:-20,
    }
})
export default styles;
