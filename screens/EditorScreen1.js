import React, { Component } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView,Text,Image,Button} from 'react-native';
import {  Tab, Tabs, TabHeading} from 'native-base';
import {Icon} from 'expo';
import {Header} from '../components/Header';



const BookSizeCard=(props)=>{
    let  url=props.selected?
         require('../assets/images/pizza/booking-2.png')
         :require('../assets/images/pizza/booking-3.png')
    let  bColor=props.selected?{borderColor:'red'}:{borderColor:'gray'};
       return(
         <View style={[styles.bookCard,bColor]}>
           <Image source={url} style={[{marginTop:10,height:80,width:80,resizeMode:'contain'}]}/>
           <View style={{marginTop:10}}>
            <Text style={{textAlign:'center'}}>Size L</Text>
            <View style={{flexDirection:'row'}}>
            <Text>(8 Slices)</Text>
            <Text> $ 17.23</Text>
            </View>
    
          </View>
          { props.selected&&<Image source={require('../assets/images/pizza/booking-active.png')} 
             style={{height:20,width:20,resizeMode:'cover',marginTop:-140,marginLeft:140}}/>}
          
          
         </View>
       )
    }


export default class DemoScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state= {
//       orders:orderItems
//     };
//   };

//  onChangePage=(e,page)=>{
//   e.preventDefault();
//   this.setState({page:page})
//   }
  
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header title="Edit Order"/>
        <ImageBackground style={styles.backgroundArc}/>
       
        <View style={{width:'100%'}}>
            <Image 
            style={{marginTop:-120,width:210,height:210,resizeMode:'cover',alignSelf:'center'}}
            source={require('../assets/images/pizza/editor-1.png')}/>
            <Text  style={{textAlign:'center',fontSize:18,marginTop:10}}>Chicken Supereme</Text>
            <View>
                        <Text style={{padding:10,textAlign:'left',fontSize:13,marginTop:10}}>Size</Text>
                        <ScrollView>
                        <View style={{height:150,width:'100%',flexDirection:'row',justifyContent:'center'}} >
                            <BookSizeCard selected={true}/>
                            <BookSizeCard selected={false}/>
                        </View>

                        <View style={{height:150,width:'100%',flexDirection:'row',justifyContent:'center'}} >
                            <BookSizeCard selected={true}/>
                            <BookSizeCard selected={false}/>
                        </View>

                        

                        </ScrollView>
                        
            
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
      bookCard:{
        width:150,
        height:150,
        borderWidth:1,
        borderRadius:6,
        marginHorizontal:10,
        alignItems:'center',
       },
  })

//card添加阴影的时候，一定要设置背景颜色。