import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons
        name="ios-arrow-back"
        size={24}
        color="white"
        style={{ alignSelf: "center", marginLeft: 20 }}
      />
      <Text style={{ fontSize: 18 }}>Animation Button Group</Text>
      <MaterialCommunityIcons
        name="dots-horizontal"
        size={24}
        color="rgba(177, 148, 245, 1.000)"
        style={{ alignSelf: "flex-start", marginLeft: 20 }}
      />
    </View>
  );
};

export default class DemoScreen extends Component {
  state = {
    selectedIndex: 0,
    animation: new Animated.Value(0)
  };

  toggleOpen = () => {
    const Value = this._open ? 0 : 1;
    Animated.timing(this.state.animation, {
      toValue: Value,
      duration: 200
    }).start();
    this._open = !this._open;
  };

  render() {
    const reloadStyle = {
      transform: [
        { scale: this.state.animation },
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70]
          })
        }
      ]
    };

    const orderStyle = {
      transform: [
        { scale: this.state.animation },
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140]
          })
        }
      ]
    };
    return (
      <View style={styles.container}>
        <Header />
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.other, orderStyle]}>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={24}
              color="#555"
              style={{
                alignSelf: "flex-start",
                marginLeft: 20
              }}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.other, reloadStyle]}>
            <MaterialCommunityIcons
              name="reload"
              size={24}
              color="#555"
              style={{
                alignSelf: "flex-start",
                marginLeft: 20
              }}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleOpen}>
          <View style={[styles.button, styles.pay]}>
            <Text style={{ color: "white" }}>$5.00</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: 40,
    paddingHorizontal: 10,
    marginTop: 40
  },
  title: {
    width: "90%",
    height: 60,
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start"
  },
  button: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowRadius: 2,
    shadowOffset: { x: 2, y: 2 },
    shadowColor: "#333",
    shadowOpacity: 0.1,
    alignItems: "center",
    justifyContent: "center"
  },
  pay: {
    backgroundColor: "rgba(88, 255, 185, 1.000)"
  }
});
