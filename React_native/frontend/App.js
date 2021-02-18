import React from 'react';
// import { View, StatusBar} from 'react-native';
import {NavigationContainer}  from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

// import Routes from './src/routes';
import Home from './src/screens/Home';
import Sobre from './src/screens/Sobre';
import Login from './src/screens/Login';
import Fale_conosco from './src/screens/Fale_conosco';
import Produtos from './src/screens/Produtos';
// import Produtos from './src/screens/Produtos';


const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} option={{title:'Home'}}/>
        <Stack.Screen name="Sobre" component={Sobre} option={{title:'Sobre'}}/>
        <Stack.Screen name="Login" component={Login} option={{title:'Login'}}/>
        <Stack.Screen name="Fale_conosco" component={Fale_conosco} option={{title:'Fale_conosco'}}/> 
        {/* <Stack.Screen name="Produto" component={Produto} option={{title:'Produto'}}/> */}
        <Stack.Screen name="Produtos" component={Produtos} option={{title:'Produtos'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

