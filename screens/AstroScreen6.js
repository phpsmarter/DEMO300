import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";
import { Icon } from "native-base";
import styled from "styled-components/native";
import { Svg } from "expo";
const { width, height } = Dimensions.get("window");

const ImageStyle = {
  width: 120,
  height: 120,
  resizeMode: "contain",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute"
};

const ImageStyle2 = {
  top: -80,
  width: 120,
  height: 120,
  resizeMode: "contain",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  zIndex: -99
};

const Wheel = () => {
  return (
    <TouchableWithoutFeedback>
      <Animated.Image
        source={require("../assets/images/astro/knob.png")}
        style={ImageStyle}
      />
    </TouchableWithoutFeedback>
  );
};
//FIXME   这个地方想法有问题, 把图片拿出来,点击的时候动画旋转图片, AstroScreen4里实现
//FIXME   这里使用旋转图片的方法
export default class ScrollWheel extends React.Component {
  state = {
    animation: new Animated.Value(0),
    rotateIndex: 0,
    rotateDeg: "90deg"
  };
  rotateWheel = () => {
    Animated.timing(this.state.animation, {
      toValue: this.state.rotateIndex++,
      duration: 600
    }).start();
    this.setState({ rotateIndex: this.state.rotateIndex++ });
    this.props.changeRotateIndex(this.state.rotateIndex);
  };

  render() {
    const rotateStyle = {
      transform: [
        {
          rotate: this.state.animation.interpolate({
            inputRange: [0, 1, 2, 3, 4],
            outputRange: ["0deg", "90deg", "180deg", "270deg", "360deg"]
          })
        }
      ]
    };
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TouchableWithoutFeedback onPress={this.rotateWheel}>
          <Animated.Image
            source={require("../assets/images/astro/knob.png")}
            style={[ImageStyle, rotateStyle]}
          />
        </TouchableWithoutFeedback>
        <Image
          source={require("../assets/images/astro/purplecircle.png")}
          style={ImageStyle2}
        />
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
