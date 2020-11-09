import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import Comp,{Comp1, Comp2} from './src/components/Multi';
//import MinMax from './src/components/MinMax';
//import Aleatorio from './src/components/Aleatorio';
//import Frag from './src/components/Frag';
import Botao from './src/components/Botao';
import Contador from './src/components/Contador';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Text style={styles.apresentation}>Hello World</Text>
      <Text style={styles.named}>A project by Felipe Alves Amodio</Text> 
      <MinMax min={30} max={200}/> 
      <Aleatorio min={1} max={100}/>
      /*<Comp />
      <Comp1 />
      <Comp2 /> 
      <Frag principal="Cadastro de produto"
            secundario="Produto"
                      />
                      */}
      <Botao />
      <Contador inicial={100} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  apresentation: {
    fontSize: 40,
    fontWeight: "bold",
  },
  named: {
    marginTop: 3,
  }
});
