import React from 'react';
import { Text, StyleSheet, Vibration, View, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const dataItens = [
    {
        icon: 'home',
        title: 'Empresa'
    },
    {
        icon: 'star',
        title: 'Conquistas'
    },
    {
        icon: 'people',
        title: 'Equipe'
    }
];

const Items = ({title}) => (
    <View style={style.containerItens}>
        <TouchableHighlight>
            <View style={style.iconsMenu}>
                {/* <Icon name="home" style={style.icons} /> */}
            </View>
        </TouchableHighlight>
        <Text> {title} </Text>
    </View>
)


export default function MenuItensList() {
    return (
        <View style={style.container}>
            <FlatList style={style.list}
                data={dataItens}
                keyExtractor={item => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.containerItens}>
                        <TouchableHighlight>
                            <View style={style.iconsMenu}>
                                <Icon name={item.icon} style={style.icons} />
                            </View>
                        </TouchableHighlight>
                        <Text style={style.titleMenu}> {item.title} </Text>
                    </View>
            )} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    list: {

    },
    containerItens: {
        backgroundColor: "#B20202",
        width: 140,
        height: 160,
        marginTop: 30,
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
    },
    titleMenu: {
        color: "#FFF",
        fontSize: 14,
        width: 63,
        height: 21
    }
});