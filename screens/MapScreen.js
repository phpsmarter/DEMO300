import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform
} from "react-native";
import Pulse from "react-native-pulse";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Constants, Location, Permissions, MapView } from "expo";

import { Marker } from "react-native-maps";
const location = { latitude: 23.1066805, longitude: 113.3245904 };

const desc =
  "广州塔（别名：小蛮腰，海心塔，广州新电视塔），于2009年九月建成，包括发射天线在内，广州新电视塔高达600米。 　　广州塔，建于广州市海珠区赤岗塔附近，距离珠江南岸125米，与海心沙岛及珠江新城隔江相望。是一座以观光旅游为主，具有广播电视发射、文化娱乐和城市窗口功能的大型城市基础设施，为2010年在广州召开的第十六届亚洲运动会提供转播服务。该塔由广州建筑和上海建工集团负责施工，已于2009年9月竣工。广州电视观光塔整体高度达到600米，取代加拿大的CN电视塔成为世界第一高自立式电视塔，也成为广州的新地标。其中塔身主体450米(塔顶观光平台最高处454米)，天线桅杆150米，总高度600米。广州塔已于2010年9月29日正式对外开放，10月1日起正式公开售票接待游客。";
const MarkerAtMap = props => {
  return (
    <Marker
      coordinate={props.marker}
      title={props.title}
      description={props.desc}
    >
      <Pulse
        color="orange"
        numPulses={3}
        diameter={100}
        speed={5}
        duration={1000}
      />
    </Marker>
  );
};

export default class DemoScreen extends Component {
  state = {
    coords: location,
    errorMessage: null
  };

  componentWillUpdate() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let coords = await Location.getCurrentPositionAsync({});
    this.setState({ coords });
    console.log(coords);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.coords.latitude,
            longitude: this.state.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MarkerAtMap
            marker={location}
            title={"GuangZhou Tower"}
            desc={desc}
          />
        </MapView>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "red",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  }
});
