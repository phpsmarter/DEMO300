import React from 'react';
import {View,Text,StyleSheet,Image,StatusBar} from 'react-native';
import {Icon} from 'expo';
export default class CouponScreen extends React.Component {
  static navigationOptions = {
    title: 'coupon',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor="blue" barStyle="light-content" />
           <View><Text>Coupon</Text></View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(209, 209, 209, 1.000)',
    alignItems:'center',
    justifyContent:'center',
  },
  card:{
    width:173,
    height:214,
    backgroundColor:'white',
    borderRadius:6

  }
});

const shadow={
  shadowOffset: {width: 5, height: 1},
  shadowOpacity: 0.4,
  shadowRadius: 6,
}