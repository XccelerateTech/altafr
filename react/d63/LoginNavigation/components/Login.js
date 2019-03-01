import React from 'react';
import { Component, View, TextInput, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input:{
        height: 30,
        width: 60,
        marginTop: 40,
        padding: 10,
        fontSize: 16,
        borderWidth: 2,
        borderColor: 'green'
    },
    image:{
        height: 200,
        width: 200
    }
})

export default class Login extends Component {
    onButtonPress=()=>{
        Alert.alert('Button Pressed')
    }

    onChangeUsername=()=>{

    }
    
    onChangePassword=()=>{

    }
    render() {
        return(
        <View>
            <Image style={style.image} source={require('../images/logo.png')}/>
            <TextInput style={styles.input} placeholder="Username"></TextInput>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}></TextInput>
            <Button title="Login" onPress={this.onButtonPress()} style={{height: 50, marginTop: 40}} />
        </View>
        )
    }
}