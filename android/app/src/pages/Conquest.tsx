import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Award from '../components/Award';

export default function Conquest() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Conquistas</Text>
            <Text style={style.score}>500/1000</Text>
            <Text style={style.scoreText}>GetCoins</Text>
            <Text style={style.subtitle}> Conquistas</Text>
            
            <Award/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        fontSize: 22,
        top: 79,
        left: 155
    },
    subtitle: {
        top: 210,
        left: 43,
        fontSize: 14,
    },
    score: {
        fontSize: 22,
        fontWeight: 'bold',
        top: 180,
        left: 155,
        color: '#B20202',
    },
    scoreText: {
        fontSize: 22,
        top: 180,
        left: 159,
    }

})