import React, { Component } from 'react'
import { Text, View ,StyleSheet,AsyncStorage,Button} from 'react-native';


export default class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Login',
      };

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
      <View style={styles.container}>
        <Button title="Facebook" onPress={this._signInAsync}></Button>
        <Button title="Twitter" onPress={()=>console.log("login")}></Button>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})