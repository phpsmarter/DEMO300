import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Animated,
  TextInput
} from "react-native";
import { Svg } from "expo";

const { Line } = Svg;

const height = 200;
const { width } = Dimensions.get("window");
const verticalPadding = 5;
const cursorRadius = 10;
const labelWidth = 100;

export default class DemoScreen extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };
  animate = () => {
    Animated.timing(this.state.animation, {
      toValue: 100,
      duration: 1000
    }).start();
  };

  componentDidMount() {
    this.animate();
  }

  render() {
    console.log(this.state.animation);
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Animated.View
            style={{
              alignSelf: "center",
              width: 10,
              height: this.state.animation,
              overflow: "hidden",
              transform: [{ rotate: "180deg" }]
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    marginTop: 60,
    height: 100,
    width: 10,
    transform: [{ rotate: "180deg" }]
  },
  cursor: {
    width: cursorRadius * 2,
    height: cursorRadius * 2,
    borderRadius: cursorRadius,
    borderColor: "#367be2",
    borderWidth: 3,
    backgroundColor: "white"
  },
  label: {
    position: "absolute",
    top: -45,
    left: 0,
    backgroundColor: "lightgray",
    width: labelWidth
  }
});
