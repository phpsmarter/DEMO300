import React, { Component } from 'react'
import { Text, View ,StyleSheet,AsyncStorage,ImageBackground,StatusBar} from 'react-native';
import {Button} from 'native-base'
import {Icon} from 'expo';

export default class SignInScreen extends Component {
    

    _signInAsync= async ()=>{
        await AsyncStorage.setItem('userToken','abc');
        this.props.navigation.navigate('Home');
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
  render() {
    return (
          <View style={{flex:1}}>
           <StatusBar backgroundColor="blue" barStyle="light-content" /> 
           <ImageBackground source={require('../assets/images/pizza/pizza1.png')} 
            style={styles.bg}>
           <View style={styles.login}>
             <Text style={{fontSize:24,color:'white',fontWeight:'bold'}}>Restaurant</Text> 
             <Text style={{fontSize:20,color:'white'}}>cheeza pizza</Text>
             <Button small danger  style={styles.btn} onPress={this._signInAsync}>
              <Text style={{color:'white',marginRight:20,fontSize:16,fontWeight:'bold'}}>Start Ordering</Text>
              <Icon.Ionicons name="ios-arrow-forward" style={{fontSize:20,color:'white'}}/>
             </Button>
           </View>   
            </ImageBackground>

          </View>
           
    
    )
  }
}

const styles=StyleSheet.create({

     bg:{
        width:'100%',
        height:'100%',
        resizeMode:'center',
        justifyContent:'flex-end',
        alignItems:'flex-start',
     },
     btn:{
      marginTop:20,
      backgroundColor:'red',
      borderRadius:20,
      height:40,
      alignSelf:'center',
      paddingHorizontal:20,
      paddingVertical:2,


     },
     login:{
      height:200,
      width:200,
      borderWidth:0,
      borderColor:'red',
      justifyContent:'center',
      alignItems:'center',

     }
})

