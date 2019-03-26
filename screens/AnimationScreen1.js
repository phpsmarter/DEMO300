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
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { Container, Content, Picker, Form, Icon, Textarea } from "native-base";

import { Header } from "../components/Header";
import { white, gray } from "ansi-colors";

export default class DemoScreen extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       addItemsData: addItemsData,
  //       totalPrice:17.02,
  //     };
  //   }
  //   onValueChange(value: string) {
  //     this.setState({
  //       selected: value
  //     });
  //   }
  state = {
    animation: new Animated.Value(1)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 300
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 300
      }).start();
    });
  };
  render() {
    const animatedStyles = {
      opacity: this.state.animation
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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
