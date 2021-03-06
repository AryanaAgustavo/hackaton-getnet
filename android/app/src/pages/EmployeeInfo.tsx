import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import EmployeeCard from '../components/EmployeeCard';

export default function EmployeeInfo() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Equipes</Text>
            <Text style={style.subtitle}>InformaçõesFuncionário</Text>
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