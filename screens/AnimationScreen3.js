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

export default class DemoScreen extends Component {
  state = {
    animation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    //插值范围
    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(8, 146, 64, 1.000)", "rgba(0, 162, 236, 1.000)"]
    });
    const colorStyles = {
      backgroundColor: colorInterpolation
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, colorStyles]} />
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
    backgroundColor: "gray"
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  }
});

//card添加阴影的时候，一定要设置背景颜色。
