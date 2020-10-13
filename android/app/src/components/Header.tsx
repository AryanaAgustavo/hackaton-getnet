import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function Header() {
    return (
        <View style={style.container}>
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png' }}
                style={style.img}
            />
            <View>
                <Text style={style.labelName}>Olá,</Text>
                <Text style={style.labelName}>Aryana</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    img: {
        marginTop: 66,
        marginLeft: 54,
        height: 100,
        width: 100,
        borderRadius: 400,
    },
    container: {
        flexDirection: 'row',
    },
    labelName: {
        fontFamily: 'Poppins',
        fontSize: 32,
        top: 75,
        left: 15,
    }
})