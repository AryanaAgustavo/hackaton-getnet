import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function Notification(){
    return(
        <View>
            <TouchableWithoutFeedback>
                <View>
                    <Text style={style.notification}>
                        Sua fatura vai vencer
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const style = StyleSheet.create({
    notification: {
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        backgroundColor: "#DDDDDD",
        padding: 10,
        height: 50,
        borderRadius: 10
    },
});