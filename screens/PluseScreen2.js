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
import Pulse from "react-native-pulse";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { keyframes, stagger } from "popmotion";

const COUNT = 5;
const DURATION = 4000;
const intialPhase = { scale: 0, opacity: 1 };
const constructanimations = () =>
  [...Array(COUNT).keys()].map(index => intialPhase);

export default class DemoScreen extends Component {
  state = {
    animations: constructanimations()
  };

  animateCircles = () => {
    const frames = Array(COUNT).fill(
      keyframes({
        values: [intialPhase, { scale: 2, opacity: 0 }],
        duration: DURATION,
        loop: Infinity,
        yoyo: Infinity
      })
    );
    stagger(frames, DURATION / COUNT).start(animations => {
      this.setState({ animations });
    });
  };

  componentDidMount() {
    this.animateCircles();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" />
        {this.state.animations.map(({ opacity, scale }, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.circle,
                {
                  transform: [{ scale }],
                  opacity
                }
              ]}
            />
          );
        })}
        <View style={styles.midcircle}>
          <FontAwesome name="phone" size={30} color="red" style={styles.icon} />
          <Text style={styles.text}>Calling...</Text>
        </View>
      </View>
    );
  }
}
const getCircle = (radius, bgc = "gold") => {
  return {
    backgroundColor: bgc,
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    position: "absolute"
  };
};
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
  },
  circle: {
    ...getCircle(60)
  },
  midcircle: {
    ...getCircle(35),
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color: "red",
    fontSize: 12,
    textAlign: "center"
  }
});
