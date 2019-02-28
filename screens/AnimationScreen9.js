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
    animation: new Animated.Value(0)
  };
  //   startAnimation = () => {
  //     console.log("opacity changed");
  //     Animated.timing(this.state.animation, {
  //       toValue: 0,
  //       duration: 500
  //     }).start();
  //   };
  // FIXME
  //这个地方会自动执行,用ramda柯里化能不能解决问题
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 400
    }).start();
  };
  render() {
    //NOTE  可以同时设置多个属性
    const rotateInterpolation = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });
    const animatedStyles = {
      transform: [{ rotate: rotateInterpolation }]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
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
    backgroundColor: "lightgreen"
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 8
  },

  text: {
    alignSelf: "center",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});

//card添加阴影的时候，一定要设置背景颜色。
