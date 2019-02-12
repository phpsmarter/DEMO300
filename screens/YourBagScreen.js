import React, { Component } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView,Text,Image,Button} from 'react-native';
import {  Tab, Tabs, TabHeading} from 'native-base';
import {Icon} from 'expo';
import {Header} from '../components/Header';

const orderItems=[
    
    {title:"Chicken Superme(L)",quantity:'1',image:require('../assets/images/pizza/pizza-order-1.png'),price:'20.34'},
    {title:"Coca-Cola",quantity:'2',image:require('../assets/images/pizza/coke-order.png'),price:'1.12'},
    {title:"SeaFood Pasta(L)",quantity:'1',image:require('../assets/images/pizza/pasta-order.png'),price:'8.70'},

];

const OrderItem=({...props})=>{
    
    const {title,image,quantity,price}={...props};
    
    return(
        <View style={styles.order}>
          <View style={{marginRight:20}}>
             <Image style={{width:60,height:60,resizeMode:'contain',borderWidth:0}} source={image}/>
          </View>  
          <View style={{borderWidth:0,flex:1,alignItems:'flex-start',marginRight:30}}>
              <Text style={{fontSize:18}}>{title}</Text>
              <Text style={{color:'green',fontSize:12}}>{price}</Text>
              <Text style={{fontSize:12,color:'gray'}}>{quantity}</Text>
          </View>   
          <View style={{width:20}}>
              <Icon.Ionicons name="md-close" style={{fontSize:16,color:'rgba(0, 0, 0,0.4)'}}/>
          </View>
        </View>

       
    )  
}

export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state= {
      orders:orderItems
    };
  };

 onChangePage=(e,page)=>{
  e.preventDefault();
  this.setState({page:page})
  }
  
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header title="Your Bag"/>
        <ImageBackground style={styles.backgroundArc}/>
       
        <View style={styles.yourbag}>
           <View style={styles.slug}>
                <Text style={{color:'white'}}>3 Items</Text>
                <Text style={{color:'white'}}>Total Cost $</Text>
                <Text style={{color:'white'}}>30.60</Text>
           </View>
           <View>
            {this.state.orders.map((order,index)=>{
               return( 
               <OrderItem key={index} {...order}/>
            )
            })}
           </View>
           <View>
           <View style={{flexDirection:'row',alignItems:'center',
            justifyContent:'space-between',paddingHorizontal:20,paddingVertical:10}}>
             <Text>TOTAL</Text> 
             <Text style={{color:'green',fontSize:24}}>$30.60</Text> 
             
           </View>
           <ImageBackground 
           
           style={{marginTop:25,alignSelf:'center',width:'100%',height:30,resizeMode:'stretch',zIndex:999}}
           source={require('../assets/images/pizza/wave.png')}/>

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
         alignItems:'center',
     },
     backgroundArc:{
        backgroundColor:'rgba(11, 32, 49, 1.000)',
        width:800,
        height:800,
        borderRadius:400,
        marginTop:-600,
        alignSelf:'center',
      },
      yourbag:{
          marginTop:-100,
          width:'90%',
          borderRadius:6,
          
          shadowOffset: {width:0, height: 0},
          shadowOpacity: 0,
         shadowRadius:1,
         backgroundColor:'white',
         borderBottomWidth:0,
      },
      slug:{
          flexDirection:'row',
          backgroundColor:'rgba(230, 42, 62, 1.000)',
          height:50,
          width:'100%',
          borderRadius:4,
          padding:5,
          alignItems:'center',
          justifyContent:'center',
      },
      order:{
          height:70,
          width:'90%',
          flexDirection:'row',
          borderBottomWidth:0.3,
          borderColor:'gray',
          marginTop:5,
          marginBottom:5,
          marginLeft:5,
          justifyContent:'space-between',
          alignItems:'center',
      }
     
  })

//card添加阴影的时候，一定要设置背景颜色。