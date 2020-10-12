import React from 'react';
import { View, Button, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Login(){
    return(
        <View style={style.container}>
        <View style={style.form}>
          <Text style={style.label}>E-mail</Text>
          <TextInput style={style.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}>
          </TextInput>
          <Text style={style.label}>Senha</Text>
          <TextInput style={style.input}
            autoCapitalize="none"
            autoCorrect={false}>
          </TextInput>
        </View>

        <TouchableOpacity style={style.button}>
            <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 8,
    },
    form: {
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      marginTop: 30
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 20,
      fontSize: 16,
      color: '#444',
      height: 44,
      marginBottom: 20,
      borderRadius: 2
    },
    button:{

    }
  });