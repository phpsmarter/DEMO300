import React, { Component } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView,Text,Image,Button} from 'react-native';
import {Container,Content,Picker, Form ,Icon,Textarea} from "native-base";

import {Header} from '../components/Header';
import { white } from 'ansi-colors';
import { Promise } from 'rsvp';

const addItemsData=[
    {food:"Shrimp",price:1.60},
    {food:"Onion",price:0.3},
    {food:"Pineapple",price:0.6},
    {food:"Green pepper",price:0.4},
    {food:"Cheesy mayo sauce",price:1.23},
    {food:"Mozzarella",price:2.5},
    {food:"Carb Stick",price:5.5},
]

const  AddItem=({index,...item})=>{
       const {food,price}=item;
    return (
        <View style={styles.ItemContainer}>
         <Text style={{fontSize:10,color:'gray'}}>{food}</Text>
         <Text style={{fontSize:10,color:'gray'}}>${price}</Text>
        </View>
    )
};


// const getTotalPrice = asnyc (data)=>{
//     const  totalPrice=data.reduce((acc,item)=>{acc+item.price},0)

     
// };





export default class DemoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addItemsData: addItemsData,
          totalPrice:17.02,
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
            style={{marginTop:-140,width:250,height:250,resizeMode:'cover',alignSelf:'center'}}
            source={require('../assets/images/pizza/SeadFoodcurry.png')}/>
            <Text  style={{textAlign:'center',fontSize:18,marginTop:0}}>SEAFOOD CURRY</Text>
        </View>
        <View style={{alignSelf:'center',width:'98%',borderWidth:0.3,borderColor:'pink',height:'50%'}}>
        <Text style={{fontSize:14,padding:5}}>What you add</Text>
        <ScrollView>
          {
            this.state.addItemsData.map((item,index)=>{
                return(
                    <AddItem key={index} index={index} {...item}/>  
                )
            })

          }
          <View style={styles.total}>
          <Text style={{fontSize:12}}>TOTAL</Text>
          <Text style={{fontSize:12,color:'green'}}>${this.state.totalPrice}</Text>
          </View>
        </ScrollView>
        </View>

        
              
          
    
        
    </View> 
    
    )
  }
}


  export const shadow={shadowOffset: {width: 3, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 4,}

  
  export const styles=StyleSheet.create({
     ItemContainer:{
         flexDirection:'row',
         height:30,
         alignItems:'center',
         justifyContent:'space-between',
         borderBottomWidth:0.4,
         borderColor:'rgba(229, 229, 229, 0.4)',
         paddingHorizontal:10,
         paddingVertical:5
         
     },
     backgroundArc:{
        backgroundColor:'rgba(0, 0, 0, 1.000)',
        width:700,
        height:700,
        borderRadius:350,
        marginTop:-500,
        alignSelf:'center',
      },
      total:{
          height:30,
          padding:5,
          borderStyle:'dotted',
          borderTopWidth:0.4,
          borderColor:'rgba(229, 229, 229, 0.4)',
          flexDirection:'row',
          width:'100%',
          justifyContent:'space-between',
          alignItems:'center',
          
      }
      
  })

//card添加阴影的时候，一定要设置背景颜色。