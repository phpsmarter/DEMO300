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

import { FontAwesome } from "@expo/vector-icons";
import { keyframes, stagger } from "popmotion";

const COUNT = 5;
const DURATION = 4000;
const intialPhase = { scale: 0, opacity: 1 };
const constructanimations = (count = COUNT, initPhase = intialPhase) =>
  [...Array(count).keys()].map(index => initPhase);

export class Pulse extends Component {
  state = {
    animations: constructanimations(this.props.count),
    icon: this.props.icon ? this.props.icon : "phone",
    text: this.props.text ? this.props.text : "Calling...",
    count: this.props.count ? this.props.count : COUNT,
    intialPhase: this.props.initialPhase
      ? this.props.initialPhase
      : intialPhase,
    duration: this.props.duration ? this.props.duration : DURATION,
    radius: this.props.radius ? this.props.radius : 50,
    midradius: this.props.midradius ? this.props.midradius : 50
  };

  animateCircles = () => {
    const frames = Array(this.state.count).fill(
      keyframes({
        values: [this.state.intialPhase, { scale: 2, opacity: 0 }],
        duration: this.state.duration,
        loop: Infinity,
        yoyo: Infinity
      })
    );
    stagger(frames, this.state.duration / this.state.count).start(
      animations => {
        this.setState({ animations });
      }
    );
  };

  componentDidMount() {
    this.animateCircles();
  }

  render() {
    const customecircleStyles = (radius = 50, bgc = "gold") => {
      return {
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: bgc
      };
    };
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
                },
                customecircleStyles(this.state.radius)
              ]}
            />
          );
        })}
        <View
          style={[styles.midcircle, customecircleStyles(this.state.midradius)]}
        >
          <FontAwesome
            name={this.state.icon}
            size={30}
            color="red"
            style={styles.icon}
          />
          <Text style={styles.text}>{this.state.text}</Text>
        </View>
      </View>
    );
  }
}

export default class PulseScreen4 extends Component {
  render() {
    return (
      <Pulse
        icon={"plane"}
        count={8}
        duration={4000}
        radius={50}
        midradius={30}
      />
    );
  }
}

const getCircle = (radius, bgc = "gold") => {
  return {
    backgroundColor: bgc,

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
    ...getCircle()
  },
  midcircle: {
    ...getCircle(),
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
