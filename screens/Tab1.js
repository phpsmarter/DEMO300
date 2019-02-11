import React, { Component } from 'react'
import { Text, View,ScrollView,StyleSheet,Image,Button} from 'react-native';
import {Content,Picker, Form ,Icon,} from "native-base";

import styled from 'styled-components/native';
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
export default class Tab1 extends Component {
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
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize:18}}>Size</Text>
        <View style={{height:150,width:'100%',flexDirection:'row',justifyContent:'center'}} >
            <BookSizeCard selected={true}/>
            <BookSizeCard selected={false}/>
         </View>
         <View>
          <Text>Quantity</Text>
          <Form style={{height:35,width:'90%',borderRadius:4,borderWidth:1,borderColor:'gray',alignSelf:'center'}}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="pick quantity"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
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

         <View>
           <Text>Style of Cake</Text>
           <View style={{flexDirection:'row',justifyContent:'space-around'}}>
             <Button title="Thick"></Button>
             <Button title="Thin"></Button>
             
           </View>
         </View>
      </ScrollView>
    )
  }
}

const styles=StyleSheet.create({
   bookCard:{
     width:150,
     height:150,
     borderWidth:1,
     borderRadius:6,
     marginHorizontal:10,
     alignItems:'center',
     


   }
})