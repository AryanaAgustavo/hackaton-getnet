import React from 'react';
import { Text, StyleSheet, Vibration, View, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function MenuItensList() {
    return (
        <View style={style.container}>
            <TouchableHighlight>
                <TouchableOpacity></TouchableOpacity>
                    <View style={style.btnMenus}>
                        <Text> Empresa </Text>
                    </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View style={style.btnMenus}>
                    <Text> Caixa </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={style.btnMenus}>
                <View >
                    <Text> Funcionários </Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    btnMenus: {
        backgroundColor: "#B20202",
        width: 140,
        height: 160,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        alignItems: "center",
        padding: 10,
        borderRadius: 12
    }
});