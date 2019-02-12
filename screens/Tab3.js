import React, { Component } from 'react'
import { Text, View,StyleSheet,Image} from 'react-native'
import {Avatar} from 'native-base';
import {Star} from '../components/Star';
const CommentItem=(props)=>{
  return(
    <View style={styles.CommentItem}>
    
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{flexDirection:'row'}}>
                  <Image style={styles.avatar}
                  source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}/>    
                  <View style={{marginLeft:10}}>
                    <Text>Delicious!</Text>
                    <Star rating={3}/>
                  </View>
            </View>
            
            
            
            
            <View style={{alingSelf:'start'}}>
              <Text style={{fontSize:12,color:'gray'}}>23</Text>
              <Text style={{fontSize:12,color:'gray'}}> Mathul</Text>
          </View>  
           
      </View>

    <View style={{width:'80%',padding:5,alignSelf:'center'}}>
        <Text style={{fontSize:10}}>
       it’s a very delicious pizza! And I expect to try more in the next time!
       </Text>
     </View>

      
          
       
    

    
  </View>
  )
}
export default class Tab3 extends Component {
  render() {
    return (
      <View style={styles.conainer}>
         <CommentItem key={1}></CommentItem>
         <CommentItem key={2}></CommentItem>
         <CommentItem key={3}></CommentItem>
         <CommentItem key={4}></CommentItem>
         <View style={{position:'absolute',
           width:40,height:40,backgroundColor:'red',
            borderRadius:20,marginTop:270,marginLeft:310,alignItems:'center',
            justifyContent:'center'
             }}>
            <Text style={{fontSize:32,color:'white',marginTop:-6,marginLeft:2,}}>+</Text>
          </View>

       </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    padding:10,
    height:200,
    width:'100%',
    backgroundColor:'rgba(250, 250, 250, 1.000)',
    

  },
  avatar:{
    width:30,
    height:30,
    borderRadius:15,
    resizeMode:'contain'
  },
  CommentItem:{
    
    width:'90%',
    borderRadius:6,
    backgroundColor:'white',
    shadowOffset: {width: 3, height: 1},
    shadowOpacity: 0.2,
    shadowRadius:4,
    height:85,
    alignSelf:'center',
    marginTop:10,
    padding:10,
    
  }
})