import React from 'react';
import { Text, StyleSheet, Vibration, View, TouchableHighlight, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Award() {
    return (
        <View style={style.container}>
            <View style={style.containerItens}>
                <TouchableHighlight>
                    <View style={style.iconsMenu}>
                        <Text style={style.text}>Ver Prêmio</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={style.containerItens}>
                <TouchableHighlight>
                    <View style={style.iconsMenu}>
                        <Text style={style.text}>Ver Prêmio</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    containerItens: {
        backgroundColor: "#B20202",
        width: 140,
        height: 160,
        marginTop: 240,
        marginLeft: 39,
        alignItems: "center",
        borderRadius: 12
    },
    icons: {
        backgroundColor: "#B20202",
        width: 100,
        height: 100,
    },
    iconsMenu: {
        top: 90,
    },
    text: {
        color: '#FFF',
    }
});