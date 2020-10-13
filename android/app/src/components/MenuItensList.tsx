import React from 'react';
import { Text, StyleSheet, Vibration, View, TouchableHighlight, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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

const Items = ({  }) => (
    <View style={style.containerItens}>
        <TouchableHighlight>
            <View style={style.iconsMenu}>
                <Icon name="facebook" size={24} color="#FFF"/>
            </View>
        </TouchableHighlight>
        <Text> {} </Text>
    </View>
)


export default function MenuItensList() {
    return (
        <View style={style.container}>
            <Image source={{ uri: 'https://img2.gratispng.com/20180702/way/kisspng-house-computer-icons-home-kunal-air-building-house-icons-5b3a96333a7629.5783277015305661952395.jpg' }}
                
            />            
            <FlatList style={style.list}
                data={dataItens}
                keyExtractor={item => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.containerItens}>
                        <TouchableHighlight>
                            <View style={style.iconsMenu}>
                            <Icon name="facebook" size={24} color="#FFF"/>
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