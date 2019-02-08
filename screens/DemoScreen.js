import React, { Component } from 'react';
import { ImageBackground,Image,View,StatusBar,Platform,Text } from 'react-native';
import { Icon} from 'expo';
import { Container, Header, Content, List, ListItem,Left,Right,Center,Item,Input,Button} from 'native-base';
import { gray } from 'ansi-colors';
const isAndroid = Platform.OS === 'android';
export default class DemoScreen extends Component {

  

  
  render() {
    return (
      <View>
       <StatusBar backgroundColor="blue" barStyle="light-content" /> 

       <View><Text>DemoScreen</Text></View>
      </View>
      
      

      

       )}
  }
  const shadow={shadowOffset: {width: 5, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 8,}