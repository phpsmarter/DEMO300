import React, { Component } from 'react';
import { TextInput,ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView,Text,Image,Button,Teaxtarea} from 'react-native';
import {Container,Content,Picker, Form ,Icon,Textarea} from "native-base";

import {Header} from '../components/Header';
import { white } from 'ansi-colors';









export default class DemoScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       addItemsData: addItemsData,
    //       totalPrice:17.02,
    //     };
    //   }
    //   onValueChange(value: string) {
    //     this.setState({
    //       selected: value
    //     });
    //   }

         
    
  
  render(){
     
    return (
    <View style={styles.container}>
         <StatusBar backgroundColor="blue" barStyle="light-content" />
         <Header title="CHECK OUT"/>
         <ImageBackground source={require('../assets/images/pizza/waveheader2.png')} style={styles.background}>
         <View  style={{marginTop:120}}>
             <View style={styles.headContainer}>
               <Text style={styles.color}>Date</Text>
               <Text style={styles.color}>Jul 27,2018</Text>
             </View>
             <View style={styles.headContainer}>
               <Text style={styles.color}> Total Bill</Text>
               <Text style={styles.color}>$ 130.00 </Text>
             </View>
          </View>
        </ImageBackground>
          
        <View style={{backgroundColor:'rgba(247, 247, 247, 1.000)',width:'100%',borderColor:'green',borderWidth:0, height:280}}>
           <View style={styles.contactInfo}>
            <View style={{width:20,height:20,backgroundColor:'rgba(0, 0, 0, 1.000)',
            borderRadius:10,justifyContent:'center',alignItems:'center',marginRight:20}}>
              <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>1</Text>
            </View>
            <Text style={{fontWeight:'bold',fontSize:14,color:'black'}}>
                Contact Info
            </Text>
           </View>  

           <View style={{flexDirection:'row',flexWrap:'wrap',
           height:200,alignItems:'flex-start',justifyContent:'space-around',
           paddingHorizontal:10,marginTop:-20
           
           }}>
                <View style={styles.formItem}>
                 <Text style={{fontSize:12}}>First name</Text>
                 <View style={styles.inputItem}>
                  <TextInput placeholder="First name"></TextInput>
                 </View>
                </View>
               
                <View style={styles.formItem}>
                 <Text style={{fontSize:12,marginTop:5}}>Last name</Text>
                 <View style={styles.inputItem}>
                  <TextInput placeholder="Last name"></TextInput>
                 </View>
                </View>

                <View style={styles.formItem}>
                 <Text style={{fontSize:12}}>Phone</Text>
                 <View style={styles.inputItem}>
                  <TextInput placeholder="Phone"></TextInput>
                 </View>
                </View>

                <View style={styles.formItem}>
                 <Text style={{fontSize:12}}>Email</Text>
                 <View style={styles.inputItem}>
                  <TextInput placeholder="Email"></TextInput>
                 </View>
                </View>
                 
                 <View style={{alingnSelf:'center',marginTop:40,height:50,width:'90%',borderWidth:1,borderColor:'red'}}>
                    <Text>Address</Text>
                     <TextInput placeholder="address"/>
                 </View>
            
        

             </View>  
        </View>

        
              
          
    
        
    </View> 
    
    )
  }
}


  export const shadow={shadowOffset: {width: 3, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 4,}

  
  export const styles=StyleSheet.create({
     contactInfo:{
     padding:5,
     height:30,
     
     flexDirection:'row',
     
     },

     inputItem:
        {marginTop:5,borderColor:'gray',borderWidth:0.6,height:30,width:150,borderRadius:3,alignItems:'flex-start',
        justifyContent:'center',marginBottom:15
     },
     
     color:{
         color:'white',
         fontSize:14,
         

     },
     formItem:{
       height:30,
       width:'40%',
       paddingHorizontal:10,
       paddingVertical:5,
       borderColor:'red',
       borderWidth:0,
       margin:15

     },
     background:{
        width:'100%',
        height:200,
        marginTop:-50,
        alignSelf:'flex-end',
        resizeMode:'center'
      },
      headContainer:{
          height:30,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          padding:5,
          borderTopWidth:0.5,
          borderStyle:'dotted',
          borderColor:'white',

      }
      
  })

//card添加阴影的时候，一定要设置背景颜色。