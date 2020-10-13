import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function Notification(){
    return(
        <View>
            <TouchableWithoutFeedback>
                <View style={style.notification}>
                    <Text style={style.text}>
                        Sua fatura vai vencer
                    </Text>
                    <Text style={style.hour}>14:00</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const style = StyleSheet.create({
    notification: {
        marginTop: 5,
        marginLeft: 39,
        backgroundColor: "#FFF",
        height: 54,
        width:335,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F1F1F1'
    },
    text: {
        fontFamily: 'Poppins',
        marginLeft: 15,
        fontSize: 12,
        color: '#000000'
    },
    hour: {
        fontFamily: 'Poppins',
        color: "#8e0000",
        marginRight: 0,
        marginLeft: 150,
        width: 30,
        height: 18,

    }
});