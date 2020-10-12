import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function Help(){
    return (
        <View style={style.container}>
            <Text style={style.title}>Precisa de Ajuda?</Text>
            <TouchableHighlight style={style.btnTitle}>
                <Text style={style.btn}>Falar com consultor Sebrae.</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={style.btn}>Falar com consultor GetNet.</Text>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        left: 39,
        width: 335,
        height: 163,
        top: 35
    },
    title: {
        width: 130,
        height: 21,
        left: 1,
        fontFamily: 'Poppins',
        bottom: 15,
    },
    btnTitle: {
        alignItems: 'center',
        alignContent: 'center'
    },
    btn: {
        width: 335,
        height: 54,
        backgroundColor: '#B20202',
        borderRadius: 12,
        marginBottom: 10,
        color: "#FFF",
        fontSize: 12,
        padding: 15
    }
});