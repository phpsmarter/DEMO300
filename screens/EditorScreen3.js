import React, { Component } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView,Text,Image,Button} from 'react-native';
import {Container,Content,Picker, Form ,Icon,Textarea} from "native-base";

import {Header} from '../components/Header';
import { white } from 'ansi-colors';


export default class DemoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: undefined
        };
      }
      onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
  
  render(){
    return (
    <View style={styles.container}>
         <StatusBar backgroundColor="blue" barStyle="light-content" />
         <Header title="Edit Order"/>
         <ImageBackground style={styles.backgroundArc}/>
       
        <View style={{width:'100%'}}>
            <Image 
            style={{marginTop:-160,width:250,height:250,resizeMode:'center',alignSelf:'center'}}
            source={require('../assets/images/pizza/Vegetables.png')}/>
            <Text  style={{textAlign:'center',fontSize:18,marginTop:-50}}>Seafood Pasta</Text>
        </View>

        <View style={{alignItems:'flex-start'}}>
          <Text style={{padding:10,fontSize:18}}>Quantity</Text>
          <View style={{width:'90%',alignItems:'center',heigh:40,justifyContent:'center'}}>
          <Form style={{height:35,width:'90%',borderRadius:4,
          borderWidth:1,borderColor:'gray',alignSelf:'center',
          alignItems:'center',justifyContent:'center'
          }}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="pick quantity"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{height:40}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
            </Form> 
          </View>
          <Text>Other Descripition</Text>
          <View style={{width:'80%',alignSelf:'center',marginLeft:-35}}>
          <Form>
            <Textarea rowSpan={5}  round bordered placeholder="Textarea" />
          </Form>   
          </View>

          <View style={{backgroundColor:'rgba(230, 42, 62, 1.000)',
               borderRadius:20,paddingHorizontal:80,color:'white',
               paddingVertical:5,alignSelf:'center',marginTop:20
              }}>
              <Button title="SAVE" 
               onPress={()=>alert("Pressed!")}/>
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
     container:{
         
     },
     backgroundArc:{
        backgroundColor:'rgba(230, 42, 62, 1.000)',
        width:700,
        height:700,
        borderRadius:350,
        marginTop:-500,
        alignSelf:'center',
      }
      
  })

//card添加阴影的时候，一定要设置背景颜色。