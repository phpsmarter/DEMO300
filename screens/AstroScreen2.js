import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  ImageBackground
} from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";
import { Icon } from "native-base";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");

const ImageStyle = {
  width: width,
  height: height,
  resizeMode: "contain",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -45
};

const WheelCenter = styled.View`
  height: 40;
  width: 40;
  border-radius: 20;
  background-color: white;
  position: absolute;
  z-index: 999;
`;

const Wheel = () => {
  return (
    <View
      style={{
        height: 140,
        width: 140,
        borderRadius: 70,
        backgroundColor: "black"
      }}
    >
      <WheelCenter />
    </View>
  );
};

export default class DemoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wheel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
