import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

//exportando direto
export default function Comp(){
    return <Text style={estilo.txt}>Camila Sepúlveda</Text>
}

//exportando depois
function Comp1(){
    return<Text style={estilo.txt}>Tony Sepúlveda Amódio</Text>
}

function Comp2(){
    return <Text style={estilo.txt}>Família feliz</Text>
}

export {Comp1, Comp2};