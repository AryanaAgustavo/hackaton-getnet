import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image } from 'react-native';

export default function EmployeeCard() {
    return (
        <View>
            <TouchableHighlight>
                <Text style={style.card}></Text>
            </TouchableHighlight>
            <View style={style.container}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png' }}
                    style={style.img}
                />
                <View>
                    <Text style={style.labelName}>Equipe</Text>
                    <Text style={style.labelName}>nome da empresa</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        width: 335,
        height: 146,
        top: 124,
        left: 39,
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 15
    },
    img: {
        height: 80,
        width: 80,
        left:60,
        top:12,
        borderRadius: 400,
    },
    container: {
        flexDirection: 'row',
    },
    labelName: {
        fontFamily: 'Poppins',
        fontSize: 14,
    }
});