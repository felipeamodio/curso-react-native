import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

//gerando um numero aleatorio
export default props => {
    //fazendo a formula de delta
    const delta = props.max - props.min + 1
    //formula para gerar um numero aleatorio
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return(
    <Text style={estilo.random}>
        O valor aleatório é {aleatorio}
    </Text>
    )
}