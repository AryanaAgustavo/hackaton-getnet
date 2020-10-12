import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import EmployeeCard from '../components/EmployeeCard';

export default function EquipeInfo() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Equipes</Text>
            <Text style={style.subtitle}>Informações da Equipe</Text>
            <TouchableHighlight>
                <Text style={style.btn}>Funcionario 1</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={style.btn}>Funcionario 2</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={style.btnDelete}>Apagar Equipe!</Text>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        width: 86,
        fontSize: 22,
        fontFamily: 'Poppins',
        top: 79,
        left: 164

    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins',
        width: 96,
        height: 21,
        left: 37,
        top: 100
    },
    btn: {
        width: 335,
        height: 54,
        backgroundColor: '#B20202',
        borderRadius: 12,
        marginBottom: 20,
        color: "#FFF",
        top: 120,
        fontSize: 12,
        padding: 15,
        left: 39
    },
    btnDelete: {
        width: 335,
        height: 54,
        backgroundColor: '#B20202',
        borderRadius: 12,
        color: "#FFF",
        top: 360,
        fontSize: 12,
        padding: 15,
        left: 39,
    },

})