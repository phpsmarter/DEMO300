import React from 'React';
import { ImageBackground, View, Text } from 'react-native';
import { styles } from '../screens/LinksScreen';
// 
export const MenuItem = (props) => {
  return (<ImageBackground source={props.picUrl} style={[styles.menuPic, props.index == 0 ? { marginTop: -40 } : null]}>

    <View style={styles.menuBox}>
      <Text style={styles.menuText} onPress={props. _onPress}>{props.title}</Text>
    </View>
  </ImageBackground>);
};
