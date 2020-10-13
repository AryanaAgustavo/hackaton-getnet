import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function CreateTeam() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Vamos abrir uma nova</Text>
            <Text style={style.subtitle}>Equipe?</Text>
            <View >
                <Text style={style.text}>Ao criar uma nova equipe</Text>
                <Text style={style.text}>você pode cadastrar os</Text>
                <Text style={style.text}>funcionarios e tomar</Text>
                <Text style={style.text}>melhores decisões graças</Text>
                <Text style={style.text}>ao nosso algoritimo.</Text>
            </View>

            <View >
                <Text style={style.text2}>Nosso sistema conta com uma tomada</Text>
                <Text style={style.text2}>de decisões que trará soluções para</Text>
                <Text style={style.text2}>cada funcionario individualmente.</Text>
                <Text style={style.text2}>Alem de melhorar o rendimento deles.</Text>
            </View>

            <Text style={style.text3}> Vamos juntos revolucionar! </Text>

            <TouchableHighlight style={style.btnPositive}>
                <Text style={style.btnText}>Vamos lá !</Text>
            </TouchableHighlight>
            <TouchableHighlight style={style.btnNegative}>
                <Text  style={style.btnTextNot}>Não dessa vez</Text>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#B20202',
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        width: 284,
        height: 72,
        top: 80,
        left: 40
    },
    subtitle: {
        fontWeight: "700",
        color: '#FFF',
        fontSize: 24,
        width: 284,
        height: 72,
        top: 40,
        left: 40
    },
    text: {
        fontWeight: "400",
        fontSize: 18,
        left: 174,
        top: 10,
        color: '#FFF',
        fontFamily: "Poppins"
    },
    text2: {
        backgroundColor: '#B20202',
        fontWeight: "400",
        fontSize: 18,
        left: 31,
        top: 30,
        color: '#FFF',
        fontFamily: "Poppins"
    },
    text3: {
        backgroundColor: '#B20202',
        fontWeight: "700",
        fontSize: 24,
        left: 43,
        top: 110,
        color: '#FFF',
        fontFamily: "Poppins"
    },
    btnNegative: {
        alignSelf:'center',
        width: 335,
        height: 54,
        backgroundColor: '#B20202',
        borderRadius: 12,
        color: "#FFF",
        fontSize: 14,
        fontWeight: "700",
        marginTop: 10,
    },
    btnPositive: {
        alignSelf:'center',
        width: 335,
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 12,
        color: "#B20202",
        fontSize: 14,
        fontWeight: "700"
    },
    btnText: {
        color: "#B20202", 
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btnTextNot: {
        color: "#FFF", 
        justifyContent: 'center',
        alignSelf: 'center',
    }
})