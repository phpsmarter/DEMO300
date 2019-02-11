import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { MenuItem } from '../components/MenuItem';



export default class LinksScreen extends React.Component {


  render() {

    const onNavigation=()=>alert("navigate to next pages");
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(255, 167, 38, 0.000)' }}>

        <StatusBar backgroundColor="blue" barStyle="light-content" />

        this.showHeader()
        <ScrollView style={styles.container}>

          <MenuItem picUrl={require('../assets/images/pizza/menupizza.png')} title={'Pizza'} index={0} _onPress={onNavigation} />
          <MenuItem picUrl={require('../assets/images/pizza/menupasta.png')} title={'Pasta'} index={1} />
          <MenuItem picUrl={require('../assets/images/pizza/menusalad.png')} title={'Salad'} index={2} />
          <MenuItem picUrl={require('../assets/images/pizza/menudessert.png')} title={'Dessert'} index={3} />
          <MenuItem picUrl={require('../assets/images/pizza/beverage.png')} title={'Beverage'} index={4} />
        </ScrollView>
      </View>
    );
  }

  showHeader() {
    return <View style={styles.menu}>
      <Image source={require('../assets/images/pizza/leftMenu.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }}></Image>
      <Image source={require('../assets/images/pizza/bag.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }}></Image>
    </View>;
  }
}
 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  menuPic:{
    height:250,
    width:'100%',
    resizeMode:'contain',
  },
  menuBox:{
    flex: 1,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    marginRight:20,
    marginBottom:20

  },
  menuText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
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
    marginTop:20,
    zIndex:999,
    paddingHorizontal:10,
    
  }
});


{/* <ImageBackground source={require('../assets/images/pizza/menupizza.png')} style={[styles.menuPic,{marginTop:-40}]}>
            
            <View style={styles.menuBox}>
             <Text style={styles.menuText}>Pizza</Text>
            </View>
         
          </ImageBackground> 
          <ImageBackground source={require('../assets/images/pizza/menupasta.png')} style={styles.menuPic}>
             <View style={styles.menuBox}>
               <Text style={styles.menuText}>Pasta</Text>
             </View>
          </ImageBackground> 
          <ImageBackground source={require('../assets/images/pizza/menusalad.png')} style={styles.menuPic}>
          <View style={styles.menuBox}>
               <Text style={styles.menuText}>Salad</Text>
             </View>
          </ImageBackground>
          <ImageBackground source={require('../assets/images/pizza/menudessert.png')} style={styles.menuPic}>
             <View style={styles.menuBox}>
               <Text style={styles.menuText}>Dessert</Text>
             </View>
          </ImageBackground>
          <ImageBackground source={require('../assets/images/pizza/beverage.png')} style={styles.menuPic}>
             <View style={styles.menuBox}>
               <Text style={styles.menuText}>Berverage</Text>
             </View>
          </ImageBackground> */}