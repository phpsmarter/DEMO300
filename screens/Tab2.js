import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Tab2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Description </Text>
        <Text style={styles.description}>
        Our Real Special marinara sauce with fresh tomatoes baked on our signature thin crust, baked to a perfect crisp. We create food we’re proud to serve and deliver it fast, with a smile.
        </Text>
        <Text style={styles.description}>
        Classic marinara sauce, authentic old-world pepperoni, all-natural Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned pork and beef. Best an our Hand Tossed crust. With more than 50 years of experience under our belts, we understand how to best serve our customers through tried and true service principles. Instead of following trends, we set them. We create food we’re proud to serve and deliver it fast, with a smile.
        </Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    alignItems:'flex-start',
    justifyContent:'center',
    width:300,padding:20},

   title:{
     color:'rgba(228, 41, 61, 1.000)',
     fontSize:20,
     marginBottom:10,
   },
   description:{
     fontSize:12,
     color:'gray'
   }

})