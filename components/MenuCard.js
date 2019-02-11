import { ImageBackground, Text, View } from 'react-native';
import { styles } from '../screens/DemoScreen';
import { MenuIcon } from "./MenuIcon";
export const MenuCard = (props) => {
  return (<ImageBackground style={{
    flex: 1, height: '100%', width: '100%',
    resizeMode: 'center', alignItems: 'center', borderRadius: 6, marginRight: 30
  }} source={props.image}>
    <View style={styles.carsoulCard}>
      <View style={styles.carsoulLeft}>
        <Text style={{ fontSize: 18 }}>Seafood pesto</Text>
        <View stlye={{ flexDirection: 'row', borderWidth: 1, borderColor: 'blue', height: 50 }}>
          <View style={styles.reviewUp}>
            <View>
              {props.children}
            </View>
            <Text style={{ fontSize: 10, color: 'gray' }}>4.5</Text>
            <Text style={{ fontSize: 10, color: 'gray' }}>(378 review)</Text>
          </View>
          <View style={styles.reviewDown}>
            <MenuIcon name="anchor" size={12} color="gray" />
            <MenuIcon name="clock" size={12} color="gray" />
            <Text style={{ fontSize: 10, color: 'gray' }}>20 minutes</Text>
          </View>
        </View>
      </View>
      <View style={styles.carsoulRight}>
        <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontSize: 14 }}>ORDER NOW!</Text>
      </View>
    </View>
  </ImageBackground>);
};
