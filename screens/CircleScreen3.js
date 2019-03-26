import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, Animated } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { keyframes, stagger } from "popmotion";

import {
  AnimatedCircularProgress,
  CircularProgress
} from "react-native-circular-progress";

const circleGroups = [
  {
    size: 100,
    tintColor: "rgba(1, 224, 255, 1.000)",
    backgroundColor: "rgba(203, 228, 255, 1.000)",
    width: 15,
    fill: 40
  },
  {
    size: 130,
    tintColor: "rgba(184, 233, 133, 1.000)",
    backgroundColor: "rgba(206, 205, 209, 1.000)",
    width: 15,
    fill: 60
  },
  {
    size: 165,
    tintColor: "rgba(208, 66, 48, 1.000)",
    backgroundColor: "rgba(209, 216, 231, 1.000)",
    width: 15,
    fill: 80
  }
];

const AnimatedCircleGroupItem = props => {
  const { size, tintColor, backgroundColor, width, fill } = { ...props };
  return (
    <AnimatedCircularProgress
      size={size}
      width={width}
      fill={fill}
      tintColor={tintColor}
      onAnimationComplete={() => console.log("onAnimationComplete")}
      backgroundColor={backgroundColor}
      lineCap="round"
      rotation={-30}
      style={{ position: "absolute" }}
    />
  );
};

const CircleGroupItem = props => {
  const { size, tintColor, backgroundColor, width, fill, animated } = {
    ...props
  };
  if (animated) {
    return (
      <AnimatedCircularProgress
        size={size}
        width={width}
        fill={fill}
        tintColor={tintColor}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor={backgroundColor}
        lineCap="round"
        rotation={-30}
        style={{ position: "absolute" }}
      />
    );
  }
  return (
    <CircularProgress
      size={size}
      width={width}
      fill={fill}
      tintColor={tintColor}
      onAnimationComplete={() => console.log("onAnimationComplete")}
      backgroundColor={backgroundColor}
      lineCap="round"
      rotation={-30}
      style={{ position: "absolute" }}
    />
  );
};

export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleGroupdata: circleGroups,
      animated: true
    };
  }

  render() {
    const circlesInformation = this.state.circleGroupdata;
    const animated = this.state.animated;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" />

        {circlesInformation.map((data, index) => {
          return <CircleGroupItem {...data} key={index} animated={animated} />;
        })}
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
