import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, Animated } from "react-native";

import { Icon } from "native-base";
import styled from "styled-components/native";
import { LinearGradient } from "expo";

const StyledListItem = props => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(255, 60, 48, 1.000)", "rgba(255, 149, 80, 1.000)"]}
      style={{
        padding: 10,
        alignItems: "center",
        borderRadius: 8,
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 90,
        alignSelf: "flex-start",
        marginBottom: 3
      }}
    >
      <View style={{ flex: 7 }}>
        <Text style={{ fontSize: 18, color: "white", marginBottom: 10 }}>
          +7 (911) 270-32-43
        </Text>
        <Text style={{ fontSize: 14, color: "rgba(254, 185, 178, 1.000)" }}>
          80.3%
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text
          style={{
            textAlign: "right",
            fontSize: 40,
            color: "white",
            fontWeight: "bold"
          }}
        >
          93
        </Text>
      </View>
    </LinearGradient>
  );
};

const listInfo = [
  {
    tel: "+7 (911) 270-41-57",
    vote: 25,
    complete: 80.3,
    iconcolor: "rgba(21, 132, 255, 1.000)"
  },
  {
    tel: "+7 (911) 270-32-43",
    vote: 93,
    complete: 47.3,
    iconcolor: "rgba(76, 217, 99, 1.000)"
  },
  {
    tel: "+7 (911) 270-37-91",
    vote: 103,
    complete: 50.3,
    iconcolor: "rgba(255, 204, 1, 1.000)"
  }
];
export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" />
        <View
          style={{
            height: 40,
            borderBottomWidth: 0.5,
            borderBottomColor: "rgba(231, 240, 250, 1.000)",
            width: "95%",
            alignSelf: "center",
            alignItems: "flex-start"
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "rgba(21, 132, 255, 1.000)",
              marginBottom: 10
            }}
          >
            Bxo de
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "rgba(163, 207, 255, 1.000)",
              marginBottom: 10
            }}
          >
            24 March 2018-30 march 2018
          </Text>
        </View>
        <View
          style={{
            position: "relative",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30
          }}
        >
          <StyledListItem />
          <StyledListItem />
          <StyledListItem />
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 0,
    borderColor: "red"
    // shadowOffset: { width: 5, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 8
  }
});
