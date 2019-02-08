import React, { Component } from 'react';
import { ImageBackground,Image,View,StatusBar,Platform,Text } from 'react-native';
import { Icon} from 'expo';
import { Container, Header, Content, List, ListItem,Left,Right,Center,Item,Input,Button} from 'native-base';
import { gray } from 'ansi-colors';
const isAndroid = Platform.OS === 'android';
export default class DemoScreen extends Component {

  

  
  render() {
    return (
      <View>
       <StatusBar backgroundColor="blue" barStyle="light-content" /> 

     
     <Container >
      
      <ImageBackground source={require('../assets/images/amazon/bg.png')} style={{width:'100%', height: 300,resizeMode:'contain'}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
         <Head/> 
         <View style={{ height:40,marginTop:5, width:'90%',alignSelf:'center', justifyContent: 'flex-start' }}>
              <Item style={{ height:40,backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 30 }}>
                  
                  <Input placeholder="What are you looking for ?"  style={{fontSize:12}}/>
                  <Icon.Ionicons name="md-search" style={{ fontSize: 16, paddingTop: 5 }} />
              </Item>

        </View>

        <View style={{justifyContent:'space-between',width:'50%',height:120,borderWidth:0,borderColor:'yellow',marginTop:30, paddingLeft:10}}>
            <Text style={{color:'gray',fontSize:14}}>new</Text>
            <Text style={{color:'rgba(0, 175, 255, 1.000)',fontSize:24}}>echo plus</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'gray',fontSize:12,marginRight:10}}>just</Text>
            <Text style={{color:'white',fontSize:20}}>89</Text>
            <Text style={{color:'white',fontSize:12,marginTop:-2}}>,99€</Text>
            </View>
            <Button small light style={{paddingHorizontal:20}}><Text>discover</Text></Button>
        </View>

        
      </ImageBackground>

      <View style={{width:'100%',height:'50%',backgroundColor:'rgba(209, 209, 209, 0.2)'}}>
          <View style={[{ alignSelf:'center',flexDirection:'row', justifyContent:'space-between', alignItems:'center'
          ,width:'80%',backgroundColor:'white',borderRadius:4,marginTop:-20,
          height:60,zIndex:999,paddingHorizontal:10},shadow]}>
              <Image source={require('../assets/images/amazon/group6.png')} 
              style={{width:30,height:30, resizeMode:'cover'}}/>
              <View>
                <Text style={{fontSize:12, color:'gray'}}>Shipping address</Text>
                <Text style={{fontSize:16}}>King Street,London,UK</Text>
              </View>
              <Icon.Ionicons name="ios-switch" style={{fontSize:16,alignItems:'center'}}/>
        
            </View>

            <View>
                <View style={{ marginVertical: 10, width: '80%', alignSelf: 'center' }}>
                  <Text >Feature today</Text>
                </View>
              
              <View style={[{backgroundColor:'wihte',
                   backgroundColor:'white',height:200,width:'80%',alignSelf:'center',borderRadius:6
            },shadow]}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/images/amazon/img.png')} style={{ marginLeft: 10, width: 80, borderRadius: 6, resizeMode: 'contain' }} />
                <Image source={require('../assets/images/amazon/img2.png')} style={{ marginLeft: 10, width: 80, borderRadius: 6, resizeMode: 'contain' }} />
                  <View style={{ justifyContent: 'center', alingItems:'center', marginLeft: 40,alignSelf:'center' }}>
                    <Text style={{ fontSize: 12, color: 'gray' }}>save</Text>
                    <Text style={{ fontSize: 16, color: 'rgba(255, 167, 38, 1.000)' }}>25%</Text>
                  </View>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
               <View style={{marginLeft:10}}>
                    <Text style={{fontSize:16}}>iPhone XS  256GB</Text>
                    <Text style={{fontSize:14,color:'blue'}}>859,00€ Orignial price:<Text style={{fontSize:12,color:'gray',
                      textDecorationLine:'line-through'}}>1059.00€</Text></Text>
               </View>

               <View> 
               <Icon.Ionicons name="ios-arrow-round-forward" style={{ fontSize: 24, paddingTop: 5 }} />
               </View>
               </View>
               
               
              
             <View>
                  
                </View>

                
              </View>
              
            </View>
      </View>

      </Container>

      </View>
     
     
        
     
    );
  }
}

const Head=()=>{
       return( <Header style={{flexDirection:'row', borderBottomWidth:0,justifyContent:'space-between',backgroundColor:'rgba(23, 23, 23, 0)'}}>
         
         <Icon.Ionicons
         size={26}
         style={{color:'white' }}
         name={'md-menu'}
         ></Icon.Ionicons>
         
        
         <Image source={require('../assets/images/amazon/logo.png')} style={{marginTop:10,height:20,width:80,resizeMode:'contain'}}/>
      

      
       
      
       <Icon.Ionicons
         size={26}
         style={{color:'white' }}
         name={'md-cart'}
         ></Icon.Ionicons>
      

      </Header> 

      

       )}

  const shadow={shadowOffset: {width: 5, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 8,}