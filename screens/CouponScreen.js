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
            <View style={[styles.card,shadow]}>
            <Image source={require('../assets/images/coupon/logo.png')} style={{height:124,width:'100%',resizeMode:'center'}}/>
            <Image source={require('../assets/images/coupon/background.png')} style={{height:21,width:'100%',resizeMode:'contain'}}/>
            <Text style={{paddingHorizontal:10,fontSize:18}}>40% Off </Text>
            <Text style={{paddingHorizontal:10,fontSize:18}}>Beverge,Get Free</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'
            ,paddingHorizontal:10,paddingVertical:5}}>
              <View style={{flexDirection:'row'}}>
              <Icon.Feather name="navigation" style={{color:'rgba(0, 175, 255, 1.000)', fontSize: 12, paddingTop: 5 }} />
              <Text style={{marginLeft:5,marginTop:2,color:'gray',fontSize:12}}>0.8 KM</Text>
              </View>
              <Icon.Feather name="heart" style={{ fontSize: 16, paddingTop: 5 ,color:'gray'}} />
            </View>
           </View>
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