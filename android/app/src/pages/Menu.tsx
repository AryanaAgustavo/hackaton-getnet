import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight, Text, Button, Modal } from 'react-native';
import Header from '../components/Header';
import Help from '../components/Help';
import MenuItensList from '../components/MenuItensList';
import Notification from '../components/Notification';

export default function Menu() {
    return (
        <View>
            <Header/>
            <MenuItensList/>
            <Text style={style.title}>Notificações</Text>
            <Notification/>
            <Help/>
        </View>
    );
}

const style = StyleSheet.create({
    label: {

    },
    labelName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    title: {
        marginTop: 30,
        marginLeft: 40,
        fontWeight: 'bold',
        width: 88,
        height: 21,
        fontSize: 14,
        marginBottom: 10,
        

    },

    
});