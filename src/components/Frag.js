import React, {Fragment} from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default props => {
    return(
        <React.Fragment>
            <Text style={estilo.principal}>{props.principal}</Text>
            <Text style={estilo.principal}>{props.secundario}</Text>
       </React.Fragment>
    )
}