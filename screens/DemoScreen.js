import React, { Component } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView} from 'react-native';
import { Star } from '../components/Star';
import { MenuCard } from '../components/MenuCard';
import { ListItem } from '../components/ListItem';
import { Header } from '../components/Header';


const listItemCards=[
    {image: require('../assets/images/pizza/pizza1.png'),starCount:3.5},
    
  ]
export default class DemoScreen extends Component {
  
  render(){
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header title="Pizza"/>
        <ImageBackground style={styles.backgroundArc}>
        </ImageBackground>
        <ScrollView style={styles.carsoul} horizontal={true} >
              <MenuCard image={card1.image}>
                <Star rating={4.5}/>
              </MenuCard>
              <MenuCard image={card2.image}>
                 <Star rating={5}/>
              </MenuCard>
              <MenuCard image={card1.image}>
              <Star rating={3}/>
              </MenuCard>
        </ScrollView>

        <ScrollView style={styles.menuList}>
          {listItemCards.map(((item,index)=>{
            return(
              <ListItem key={index} image={item.image} title={item.title} subTitle={item.subTitle} rating={item.starCount}/>
            )
          }))}
        </ScrollView>
      </View>
    )
  }
}
  export const shadow={shadowOffset: {width: 3, height: 1},
                shadowOpacity: 0.2,
                shadowRadius: 4,}

  export const styles=StyleSheet.create({
     backgroundArc:{
       backgroundColor:'rgba(11, 32, 49, 1.000)',
       width:700,
       height:700,
       borderRadius:350,
       marginTop:-400,
       alignSelf:'center',
     },
     menu:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      position:'absolute',
      width:'100%',
      height:40,
      borderColor:'red',
      borderWidth:0,
      backgroundColor:'rgba(255, 167, 38, 0)',
      marginTop:30,
      zIndex:999,
      paddingHorizontal:10,
      
    },
    menuText:{
      color:'white',
      fontSize:24,

    },
    carsoul:{
      width:'200%',
      height:300,
      
      borderWidth:0,
      borderColor:'green',
      alignSelf:'center',
      marginTop:-200,

    },
    carsoulCard:{
      width:'100%',
      height:80,
      alignSelf:'center',
      borderWidth:2,
      borderColor:'rgba(209, 209, 209, 0.2)',
      marginTop:190,
      borderRadius:8,
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'center',
      
      
    },
    carsoulLeft:{
      flex:7,
      backgroundColor:'white',
      height:'100%',
      padding:4,
      borderTopLeftRadius:8,
      borderBottomLeftRadius:8
      
      

    },
    carsoulRight:{
      backgroundColor:'red',
      flex:3,
      height:'100%',
      justifyContent:'center',
      borderTopRightRadius:8,
      borderBottomRightRadius:8
      
    },
    reviewUp:{
      marginTop:5,
      flexDirection:'row',
      justifyContent:'space-around'
    
    },
    reviewDown:{
      marginTop:5,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },

    menuList:{
      height:300,
      width:'100%',
      
    },

    listItem: {
      width: '85%',
      height: 80,
      borderWidth: 0,
      borderColor: 'red',
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      alignSelf: 'center',
      backgroundColor: 'white',
    }
  })

//card添加阴影的时候，一定要设置背景颜色。