import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { createStylerFactory } from "stylefire";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Cards = [{ name: 1 }];

const Card = () => {
  return (
    <View
      style={{
        top: "25%",
        left: "25%",
        position: "absolute",
        height: 150,
        width: 150,
        borderRadius: 12,
        backgroundColor: "rgba(30, 215, 165, 1.000)",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        shadowColor: "green"
      }}
    >
      <Text>cards</Text>
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
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
