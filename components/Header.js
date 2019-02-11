import React from 'react';

import { Image, Text, View } from 'react-native';
import { styles } from '../screens/DemoScreen';
export const Header = (props) => {
  return (<View style={styles.menu}>
    <Image source={require('../assets/images/pizza/leftMenu.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }}></Image>
    <Text style={styles.menuText}>{props.title}</Text>
    <Image source={require('../assets/images/pizza/bag.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }}></Image>
  </View>);
};
