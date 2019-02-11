import { Image, Text, View } from 'react-native';
import { Star } from './Star';
import { styles, shadow } from '../screens/DemoScreen';
export const ListItem = (props) => {
  return (<View style={[styles.listItem, shadow]}>
    <Image source={props.image} style={{ height: 60, width: 60, resizeMode: 'contain', marginRight: 8 }} />
    <View style={{ flex: 1, alignSelf: 'center' }}>
      <Text style={{ fontSize: 16 }}>{props.title}</Text>
      <Text style={{ fontSize: 12, color: 'gray' }}>{props.subTitle}</Text>
    </View>
    <View style={{ alignItems: 'center', marginRight: 10 }}>
      <Star rating={props.rating} />
      <Text style={{ fontSize: 20, color: 'gray' }}>{props.rating}</Text>
    </View>

  </View>);
};
