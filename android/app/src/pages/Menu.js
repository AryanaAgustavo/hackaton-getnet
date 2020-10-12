import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight, Text, Button, Modal } from 'react-native';
import Header from '../components/Header';
import MenuItensList from '../components/MenuItensList';
import Notification from '../components/Notification';

export default function Menu() {
    return (
        <View>
            <Header/>
            <MenuItensList/>
            <Text style={style.title}>Notificação</Text>
            <Notification/>
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
        padding: 10,
        fontWeight: 'bold',
    },

    
});