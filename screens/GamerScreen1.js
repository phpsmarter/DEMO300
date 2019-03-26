import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  ImageBackground,
  Image
} from "react-native";
import { Button } from "native-base";
const pageArray = [
  {
    title: "Page 1",
    description: "Description 1",
    img: "../assets/images/redgame.png",
    imgStyle: {
      height: 80 * 2.5,
      width: 109 * 2.5
    },
    backgroundColor: "#fa931d",
    fontColor: "#fff",
    level: 10
  },
  {
    title: "Page 2",
    description: "Description 2",
    img: require("../assets/images/bluegamer.png"),
    imgStyle: {
      height: 93 * 2.5,
      width: 103 * 2.5
    },
    backgroundColor: "#a4b602",
    fontColor: "#fff",
    level: 10
  }
];
const shadowStyle = {
  shadowOffset: { width: 5, height: 5 },
  shadowOpacity: 0.4,
  shadowRadius: 8,
  shadowColor: "black"
};

const cates = [
  {
    imageUrl: require("../assets/images/redgame.png"),
    text: "MAGMA RED",
    price: "64.00",
    type: "DUALSHOCK 4",
    bgcColor: "rgba(234, 74, 82, 1.000)",
    btnColor: "rgba(76, 174, 81, 1.000)"
  },
  {
    imageUrl: require("../assets/images/bluegamer.png"),
    text: "WAVE BLUE",
    price: "57.00",
    type: "DUALSHOCK 4",
    bgcColor: "rgba(82, 119, 208, 1.000)",
    btnColor: "rgba(76, 174, 81, 1.000)"
  }
];
const MageCard = props => {
  const { imageUrl, text, price, type } = { ...props };
  return (
    <View
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          height: 400,
          width: 300,
          borderRadius: 10,
          backgroundColor: "rgba(253, 253, 253, 1.000)",
          padding: 10
        },
        shadowStyle
      ]}
    >
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{text}</Text>
      <Text style={{ color: "rgba(135, 135, 135, 1.000)" }}>${price}</Text>
      <Image
        source={imageUrl}
        style={{ width: "100%", height: 200, resizeMode: "cover" }}
      />
      <View
        style={{
          height: 40,
          width: 180,
          borderRadius: 30,
          borderWidth: 2,
          borderColor: cates[0].btnColor,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 15
        }}
      >
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            color: "rgba(76, 174, 81, 1.000)",
            fontWeight: "bold",
            fontSize: 18
          }}
        >
          BUY
        </Text>
      </View>

      <Text style={{ fontSize: 12, color: "rgba(122, 122, 122, 1.000)" }}>
        {type}
      </Text>
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    const data = cates[0];
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <MageCard {...data} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cates[0].bgcColor
  }
});
