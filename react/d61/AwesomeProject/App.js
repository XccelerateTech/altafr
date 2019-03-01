/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Button, TextInput, FlatList, Image, Platform, Linking, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      text: '',
      isActive: true,
    }
  }

  callURL (){
    const url = 'https://www.facebook.com'
Linking.canOpenURL(url).then(supported => {
  if (!supported) {
    console.log('Can\'t handle url: ' + url);
  } else {
    return Linking.openURL(url);
  }
}).catch(err => console.error('An error occurred', err));
  }
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>I Am Edited Now</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={()=>{Alert.alert('You Pressed Me')}}>
        <View>
          <Image style={{width:50,height:50}} source={require('./youtube-play.png')} />
        </View>
        </TouchableOpacity>
        <TextInput
        style={{height:40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text)=> this.setState({text})} 
        value={this.state.text}/>
        <Text style={[styles.welcome, this.state.isActive && styles.highlight]}> {this.state.text} </Text>
        <Button title="Find a face"
        onPress={()=>{this.callURL()}}>
        </Button>

        <FlatList style={{height: 150}}
  data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/> 
{/* <View style={{
  height: 800,
  width: 400,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View> */}


 <ScrollView>
  <Text style={{fontSize: 50}}>I am the old logo</Text>
  <Image style={{height:50, width:50}} source={require('./img/logo.png')} />
  <Text style={{fontSize: 50}}>I am the old logo</Text>
  <Image style={{height:50, width:50}} source={require('./img/logo.png')} />
  <Text style={{fontSize: 50}}>I am the old logo</Text>
  <Image style={{height:50, width:50}} source={require('./img/logo.png')} />
  <Text style={{fontSize: 50}}>I am the old logo</Text>
  <Image style={{height:50, width:50}} source={require('./img/logo.png')} />
  <Text style={{fontSize: 50}}>I am the old logo</Text>
  <Image style={{height:50, width:50}} source={require('./img/logo.png')} />
  <Text style={{fontSize: 50}}>I am the old logo</Text>
  <Image style={{height:50, width:50}} source={require('./img/logo.png')} />
</ScrollView> 


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  highlight: {
    color: 'red'
  }
});
