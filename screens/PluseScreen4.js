import React, { Component } from "react";
import {
  Text,
  Image,
  View,
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
const Icon = props => {
  const iconName = props.icon;
  const iconText = props.text;
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FontAwesome name={iconName} size={30} color="red" style={styles.icon} />
      <Text style={styles.text}>{iconText}</Text>
    </View>
  );
};

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
    midradius: this.props.midradius ? this.props.midradius : 50,
    scale: this.props.scale ? this.props.scale : 2,
    outerBgc: this.props.outerBgc ? this.props.outerBgc : "gold",
    innerBgc: this.props.innerBgc ? this.props.innerBgc : "gold"
  };

  animateCircles = () => {
    const frames = Array(this.state.count).fill(
      keyframes({
        values: [
          this.state.intialPhase,
          { scale: this.state.scale, opacity: 0 }
        ],
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
                customecircleStyles(this.state.radius, this.state.outerBgc)
              ]}
            />
          );
        })}
        <View
          style={[
            styles.midcircle,
            customecircleStyles(this.state.midradius, this.state.innerBgc)
          ]}
        >
          {this.props.icon ? (
            <Icon icon={this.props.icon} text={this.props.text} />
          ) : (
            (this.props.uri && (
              <Image
                source={{ uri: this.props.uri }}
                style={customecircleStyles(this.state.midradius)}
              />
            )) ||
            (this.props.localImage && (
              <Image
                source={this.props.localImage}
                style={customecircleStyles(this.state.midradius)}
              />
            ))
          )}
        </View>
      </View>
    );
  }
}

export default class PulseScreen4 extends Component {
  render() {
    return (
      <Pulse
        count={8}
        icon={"phone"}
        text={"Calling..."}
        duration={4000}
        radius={40}
        midradius={30}
        scale={2}
        // uri={"http://192.168.1.100:8080/tesla/unlock.png"}
        localImage={require("../assets/images/tesla/unlock.png")}
        outerBgc={"green"}
        innerBgc={"gold"}
      />
    );
  }
}

const getCircle = (radius, bgc = "gold", inner = "true") => {
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
