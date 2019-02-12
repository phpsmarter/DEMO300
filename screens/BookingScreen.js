import React, { Component } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView,Text,Image,Button} from 'react-native';
import {  Tab, Tabs, TabHeading} from 'native-base';
import { Star } from '../components/Star';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { Header } from '../components/Header';
import {Icon} from 'expo';



export default class DemoScreen extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state= {
// //       page: 2
// //     };
//   };

//  onChangePage=(e,page)=>{
//   e.preventDefault();
//   this.setState({page:page})
//   }
  
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header title="Pizza"/>
        <ImageBackground style={styles.background} source={require('../assets/images/pizza/booking-1.png')}>
        </ImageBackground>
        <View style={styles.bookingTitle}>
         <Icon.Ionicons name="ios-arrow-back" style={{marginRight:130,fontSize:24,fontWeight:'bold'}}></Icon.Ionicons>
         <View>
             <View style={{width:120,alignSelf:'center',marginLeft:-20}}>
              <Text style={{fontSize:24}}>Chicken Supreme</Text>
             </View>
         </View>
         
        </View>
        <View style={{width:'60%'}}>
          <Text style={{textAlign:'center',fontSize:18}}>Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion</Text>
        </View>

        <View style={{marginTop:10,flexDirection:'row'}}>
            <Star rating={4}/>
            <Text style={{marginLeft:20,fontSize:14,color:'rgba(240, 209, 87, 1.000)'}}>4.5</Text>
        </View>
       <View>
       <Tabs>
          <Tab heading={ <TabHeading><Text>Book</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text>Description</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Text>Comments</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>  
      </View> 
    </View>
    )
  }
}


  export const shadow={shadowOffset: {width: 3, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 4,}

  
  export const styles=StyleSheet.create({
     container:{
         alignItems:'center',
     },
     background:{
       backgroundColor:'white',
       width:'100%',
       height:150,
       marginTop:0,
       alignSelf:'center',
       resizeMode:'cover'
     },
     bookingTitle:{
         flexDirection:'row',
         alignItems:'center',
         backgroundColor:'white',
         padding:10,
         alignSelf:'flex-start',
         marginTop:0
     }
     
  })

//card添加阴影的时候，一定要设置背景颜色。