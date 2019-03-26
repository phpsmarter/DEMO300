import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Animated
} from "react-native";

import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  EvilIcons
} from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";
import { LinearGradient } from "expo";
import { Button, Icon } from "native-base";
import Pulse from "react-native-pulse";
const ActiveColor = "rgba(82, 249, 255, 1.000)";
const NormalColor = "rgb(131, 131, 131)";

const Header = () => {
  return (
    <View style={{ width: "95%", alingnSelf: "center" }}>
      <View style={{ height: 15, width: "95%" }}>
        <Text
          style={{
            color: "white",
            marginTop: -110,
            marginBottom: 5,
            textAlign: "center"
          }}
        >
          LOCK/UNLOCK
        </Text>
      </View>

      <View style={styles.header}>
        <Ionicons name="ios-lock" size={24} color={ActiveColor} />

        <Ionicons name="md-battery-full" size={24} color={NormalColor} />

        <Ionicons name="ios-thermometer" size={24} color={NormalColor} />

        <Ionicons name="ios-car" size={24} color={NormalColor} />
      </View>
    </View>
  );
};

const LockImage = props => {
  const locked = props.locked;

  const posY = props.posY;
  const posX = props.posX;

  const imageStyle = {
    width: 50,
    height: 50,
    resizeMode: "center",
    transform: [{ translateX: posX }, { translateY: posY }]
  };
  const transStyle = [{ translateX: posX }, { translateY: posY - 10 }];
  return props.locked ? (
    <Image
      source={{ uri: "http://192.168.1.100:8080/Lock.png" }}
      style={{
        width: 50,
        height: 50,
        resizeMode: "center",
        transform: [{ translateX: posX }, { translateY: posY }]
      }}
    />
  ) : (
    <Pulse
      style={{ transform: transStyle }}
      color="orange"
      numPulses={3}
      diameter={100}
      speed={5}
      duration={1000}
      image={{
        source: {
          uri: "http://192.168.1.100:8080/unlock.png"
        },
        style: {
          position: "absolute",
          width: 40,
          height: 40,
          top: 30,
          left: 30
        }
      }}
    />
  );
};

const LockScreen = () => {
  return (
    <React.Fragment>
      <LockImage key={0} locked={true} posY={20} posX={75} />
      <LockImage key={1} locked={false} posY={180} posX={-120} />
      <LockImage key={2} locked={false} posY={180} posX={120} />
      <LockImage key={3} locked={true} posY={300} posX={75} />
    </React.Fragment>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Header />
        <ImageBackground
          source={require("../assets/images/tesla/Car.png")}
          style={{
            marginTop: -20,
            height: 420,
            width: 200,
            resizeMode: "contain",
            zIndex: 1,
            transform: [{ translateX: 0 }]
          }}
        >
          <LockScreen />
        </ImageBackground>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    marginTop: -40,
    width: "100%",
    height: "120%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "red",
    backgroundColor: "rgba(0, 0, 0, 1.000)"
  },
  header: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 25,
    paddingHorizontal: 10,
    marginTop: -100
  }
});
