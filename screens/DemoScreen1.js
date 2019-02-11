import React, { Component } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, View,ScrollView,Text,Image,Button} from 'react-native';
import { Star } from '../components/Star';
import { MenuCard } from '../components/MenuCard';
import { ListItem } from '../components/ListItem';
import { Header } from '../components/Header';
const cards=[1,2,3,4,5];

const listItemCards=[
    {image: require('../assets/images/pizza/pizza-1.png'), title:"Superme Special",SizeL:18.3,
    SizeM:14.6,starCount:3.5, Reviews:378},
    {image: require('../assets/images/pizza/pizza-2.png'), title:"Superme Special",SizeL:18.3,
    SizeM:14.6,starCount:3.5, Reviews:378},
    {image: require('../assets/images/pizza/pizza-3.png'), title:"Superme Special",SizeL:18.3,
    SizeM:14.6,starCount:3.5, Reviews:378},
    {image: require('../assets/images/pizza/pizza-4.png'), title:"Superme Special",SizeL:18.3,
    SizeM:14.6,starCount:3.5, Reviews:378}
    
  ]

pages=[1,2,3,4,5];

const PizzaCard=(props)=>{

  return(
    <View style={[styles.pizzaItem,shadow]}>
        <Image source={props.image}
         style={{height:'50%',width:'100%',resizeMode:'contain'}}
        />
        <Text style={{alignSelf:'center',fontSize:18,width:'60%',textAlign:'center'}}>{props.title}</Text>
        <View style={{alignSelf:'center',marginTop:3}}>
          <Star rating={props.rating}/>
        </View>
        <View style={{alignSelf:'center'}}>
          <Text style={{fontSize:12,color:'gray'}}>({props.reviews}) Reviews</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:2}}>
         <Text style={{fontSize:12}}>Size L</Text>
         <Text style={{fontSize:12}}>${props.sizeL}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={{fontSize:12}}>Size M</Text>
          <Text style={{fontSize:12}}>${props.sizeM}</Text>
        </View>
        
        
    </View>
  )

}

const Page=(props)=>{
  
  let index=props.indicator
  let page=props.page;
  let bgc= page===index?{backgroundColor:'red'}:{backgroundColor:'gray'};
  return(
  
     <View key={1} style={[styles.pageNumber,bgc]} >
        <Text  onPress={(page)=>{props.changePage(page)}}>
        {page}
        </Text>
     </View>
  )
}
export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state= {
      page: 2
    };
  };

 onChangePage=(e,page)=>{
  e.preventDefault();
  this.setState({page:page})
  }
  
  render(){
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header title="Pizza"/>
        <ImageBackground style={styles.backgroundArc}>
        </ImageBackground>
      <View style={styles.container}>
            {
               listItemCards.map((card,index)=>{
                 return(
                  <PizzaCard key={index}  image={card.image} title={card.title} 
                   rating={card.starCount} 
                   reviews={card.Reviews}
                   sizeL={card.SizeL}
                   sizeM={card.SizeM}
                   />
                 )
               })

            }
              
                  
            <View style={styles.paging}>
              {
               cards.map((index)=>{
                 return (
                   <Page key={index} page={index} indicator={this.state.page} changePage={(e)=>this.onChangePage(e,index)}/>
                 )
               })

              }
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
    },
    container:{
      marginTop:-230,
      width:'100%',
      flex:1,
      flexDirection:'row',
      flexWrap:"wrap",
      justifyContent:'space-around',
      backgroundColor:'rgba(209, 209, 209, 1.000)'
      
    },
    pizzaItem:{
      width:'45%',
      height:240,
      borderRadius:6,
      borderWidth:0,
      borderColor:'blue',
      marginHorizontal:6,
      marginVertical:8,
      backgroundColor:'white',
      
    },
    paging:{
      flexDirection:'row',
      height:30,
      padding:5,
      width:'60%',
      borderColor:'red',
      borderWidth:0,
      justifyContent:'space-around'
    },
    pageNumber:{
       width:30,
       height:30,
       alignSelf:'center',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:4
    }
  })

//card添加阴影的时候，一定要设置背景颜色。