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

const shadowStyle = {
  shadowOffset: { width: 5, height: 5 },
  shadowOpacity: 0.4,
  shadowRadius: 8,
  shadowColor: "black"
};

const cates = [
  {
    imageUrl: require("../assets/images/upsidedownbluegamer.png"),
    text: "MAGMA RED",
    price: "64.00",
    type: "DUALSHOCK 4",
    bgcColor: "rgba(234, 74, 82, 1.000)",
    btnColor: "rgba(76, 174, 81, 1.000)"
  },
  {
    imageUrl: require("../assets/images/upsidedownbluegamer.png"),
    text: "WAVE BLUE",
    price: "54.00",
    type: "DUALSHOCK 4",
    subtype: "Wireless Controller",
    bgcColor: "rgba(82, 119, 208, 1.000)",
    btnColor: "rgba(76, 174, 81, 1.000)",
    content:
      "The DualShock®4 Wireless Controller for PlayStation®4 defines the next generation of play, combining revolutionary new features with intuitive, precision controls."
  }
];
const MageCard = props => {
  const { imageUrl, text, price, type, subtype, content } = { ...props };
  return (
    <View
      style={[
        {
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
          width: "100%",
          marginTop: -50,
          backgroundColor: "rgba(253, 253, 253, 1.000)"
        }
      ]}
    >
      <Image
        source={imageUrl}
        style={{ width: "100%", height: 250, resizeMode: "contain" }}
      />

      <View style={{ width: "100%", height: 350, marginTop: -60 }}>
        <Text
          style={{
            lineHeight: 85,
            fontSize: 90,
            color: "rgba(221, 228, 247,0.6)"
          }}
        >
          {text}
        </Text>
        <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
          <Text
            style={{
              fontSize: 12,
              color: "rgba(102, 102, 102, 1.000)",
              marginBottom: 5
            }}
          >
            {type}
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>{subtype}</Text>
          <Text styled={{ fontSize: 10 }}>{content}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 10
          }}
        >
          <View
            style={{
              height: 40,
              width: 180,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: cates[1].btnColor,
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

          <Text style={{ fontSize: 24 }}>${price}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 10
        }}
      >
        <Image source={require("../assets/images/small1.png")} />
        <Image source={require("../assets/images/small2.png")} />
        <Image source={require("../assets/images/small3.png")} />
      </View>
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    const data = cates[1];
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
    backgroundColor: "white"
  }
});
