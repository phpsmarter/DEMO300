import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, Animated } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { keyframes, stagger } from "popmotion";

import {
  AnimatedCircularProgress,
  CircularProgress
} from "react-native-circular-progress";

const circleGroups = [{}];

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" />
        <AnimatedCircularProgress
          size={135}
          width={15}
          fill={80}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="rgba(203, 228, 255, 1.000)"
          lineCap="round"
          rotation={-30}
          style={{ position: "absolute" }}
        />

        <AnimatedCircularProgress
          size={165}
          width={15}
          fill={40}
          tintColor="rgba(184, 233, 133, 1.000)"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="rgba(72, 132, 237, 1.000)"
          lineCap="round"
          rotation={-30}
          style={{ position: "absolute" }}
        />

        <AnimatedCircularProgress
          size={100}
          width={15}
          fill={40}
          tintColor="rgba(208, 66, 48, 1.000)"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="rgba(254, 183, 0, 1.000)"
          lineCap="round"
          rotation={-30}
          style={{ position: "absolute" }}
        />
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
