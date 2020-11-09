import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';


//usando propriedades com componentes
export default (props) => {
    
    return(
        <Text style={estilo.minmax}>
            O valor {props.max} é maior que o {props.min}
        </Text>
    )
}