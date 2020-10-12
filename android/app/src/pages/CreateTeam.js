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

            <TouchableHighlight>
                <Text style={style.btnPositive}>Vamos lá !</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={style.btnNegative}>Não dessa vez</Text>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#B20202',
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        width: 284,
        height: 72,
        top: 131,
        left: 40
    },
    subtitle: {
        fontWeight: "700",
        color: '#FFF',
        fontSize: 24,
        width: 284,
        height: 72,
        top: 92,
        left: 40
    },
    text: {
        fontWeight: "400",
        fontSize: 18,
        left: 174,
        top: 60,
        color: '#FFF',
        fontFamily: "Poppins"
    },
    text2: {
        backgroundColor: '#B20202',
        fontWeight: "400",
        fontSize: 18,
        left: 31,
        top: 80,
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
        width: 335,
        height: 54,
        backgroundColor: '#B20202',
        borderRadius: 12,
        color: "#FFF",
        fontSize: 14,
        fontWeight: "700",
    },
    btnPositive: {
        width: 335,
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 12,
        color: "#B20202",
        fontSize: 14,
        fontWeight: "700"

    }

})