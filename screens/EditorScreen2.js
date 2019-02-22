import React, { Component } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView,Text,Image,Button} from 'react-native';
import {  Tab, Tabs, TabHeading} from 'native-base';
import {Icon} from 'expo';
import {Header} from '../components/Header';
const berverageItems=[
    
    {title:"Coca-Cola",quantity:'1',image:require('../assets/images/pizza/coca-cola-can.png')},
    {title:"pepsi",quantity:'1',image:require('../assets/images/pizza/Pepsi-can.png')},
    {title:"Fanta",quantity:'1',image:require('../assets/images/pizza/fanta-can.png')},
    {title:"Sprite",quantity:'1',image:require('../assets/images/pizza/sprite-can.png')},
    {title:"Soda",quantity:'1',image:require('../assets/images/pizza/soda-can.png')},
    {title:"Lemon Tea",quantity:'1',image:require('../assets/images/pizza/lemon-can.png')},
    {title:"Peach Tea",quantity:'1',image:require('../assets/images/pizza/peach-can.png')},
    {title:"Deep Blue",quantity:'1',image:require('../assets/images/pizza/deepbule-can.png')},
    {title:"Fruit Juice",quantity:'1',image:require('../assets/images/pizza/juice-can.png')},
];

const Badge=()=>{
    return (
        <Image style={{height:16,height:16,resizeMode:'contain',alignSelf:'flex-end',
        alignItems:'flex-end',justifyContent:'flex-end'}}
         source={require('../assets/images/pizza/booking-active.png')}/>
    )
}
const BerverageItem=({...props})=>{
    const {title,image,selectedIndex,selfIndex}={...props};
    //alert(selfIndex);
    const borderColor=selectedIndex===selfIndex?{borderColor:'red'}:{borderColor:'gray'}
    return (
       
            <View style={[styles.berverageItem,borderColor]} >
            
             <Image  style={{width:30,height:50,resizeMode:'contain'}}source={image}/>
             <Text style={{fontSize:12}} onPress={(selfIndex)=>{props.changePage(selfIndex)}}>{title}</Text>
           
            </View>
        

        
        
    )
}


export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state= {
      berverages:berverageItems,
      selectedBerverageIndex:3,
    };
  };

 onChangePage=(e,index)=>{
  e.preventDefault();
  this.setState({selectedBerverageIndex:index})
  }
  
  render(){
    return (
    <View style={styles.container}>
         <StatusBar backgroundColor="blue" barStyle="light-content" />
         <Header title="Edit Order"/>
         <ImageBackground style={styles.backgroundArc}/>
       
        <View style={{width:'100%'}}>
            <Image 
            style={{marginTop:-120,width:96,height:200,resizeMode:'cover',alignSelf:'center'}}
            source={require('../assets/images/pizza/coca-cola-can-11528338672hisnq7j6xh.png')}/>
            <Text  style={{textAlign:'center',fontSize:18,marginTop:15}}>Coca-Cola</Text>
            
             {/* <Text>Types of Beverage</Text>   */}
            <View style={styles.typeContainer}>
                          {this.state.berverages.map((berverage,index)=>{
                              return (
                               <BerverageItem selfIndex={index} selectedIndex={this.state.selectedBerverageIndex}
                               key={index} {...berverage}
                               changePage={(e)=>this.onChangePage(e,index)}
                               />
                              )
                          })}
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
        backgroundColor:'rgba(230, 42, 62, 1.000)',
        width:700,
        height:700,
        borderRadius:350,
        marginTop:-500,
        alignSelf:'center',
      },
      typeContainer:{
          marginTop:5,
          width:'90%',
          alignSelf:'center',
          padding:10,
          height:300,
          flexDirection:'row',
          flexWrap:"wrap",

      },

      berverageItem:{
          
          height:80,
          width:80,
          margin:10,
          borderColor:'gray',
          borderWidth:0.3,
          borderRadius:6,
          alignItems:'center',
          justifyContent:'center',

      }
  })

//card添加阴影的时候，一定要设置背景颜色。