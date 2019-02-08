import React, { Component } from 'react'
import { Text, View,ActivityIndicator,StatusBar,StyleSheet, AsyncStorage} from 'react-native'

export default class LoadingScreen extends Component {
    componentDidMount() {
        this._bootstrapAsync();
      }
    
      _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        let initialRouteName = userToken ? 'App' : 'Auth';
        this.props.navigation.navigate(initialRouteName);
      };
    
      render() {
        return (
          <View style={styles.container}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      });