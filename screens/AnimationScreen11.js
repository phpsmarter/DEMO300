import React, { Component } from "react";
import {
  TextInput,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Button,
  Teaxtarea,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { Container, Content, Picker, Form, Icon, Textarea } from "native-base";

import { Header } from "../components/Header";
import { white, gray } from "ansi-colors";
import { Easing } from "react-native-reanimated";

export default class DemoScreen extends Component {
  state = {
    borderAnimation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.timing(this.state.borderAnimation, {
      toValue: 100,
      duration: 1500
    }).start();
  };
  render() {
    const borderAnimationInterpolation = this.state.borderAnimation.interpolate(
      {
        inputRange: [0, 100],
        outputRange: ["2", "100"]
      }
    );

    const borderColorAnimationInterpolation = this.state.borderAnimation.interpolate(
      {
        inputRange: [0, 100],
        outputRange: ["rgba(255, 135, 11, 1.000)", "rgba(255, 135, 11, 0)"]
      }
    );

    const borderStyles = {
      borderWidth: borderAnimationInterpolation,
      borderColor: borderColorAnimationInterpolation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, borderStyles]}>
            <Text style={styles.text}>rotate animation</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 135, 11, 1.000)"
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    borderColor: "rgba(8, 146, 64, 1.000)"
  },

  text: {
    alignSelf: "center",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
