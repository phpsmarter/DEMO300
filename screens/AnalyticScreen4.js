/**
 * 这里最大的问题就是.右边的Bar,如何和上面的百分比匹配起来,
 * 所有可以参考使用 d3库的 scale方法,实质是做了一个映射
 *
 * **/

import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Animated,
  Image
} from "react-native";

import { Icon } from "native-base";
import styled from "styled-components/native";

const HorizontalBarData = [
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(99, 82, 255, 1.000)",
    rightColor: "rgba(198, 109, 217, 1.000)",
    complete: 50,
    avatarImage: require("../assets/images/avatar1.png")
  },
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(247, 108, 29, 1.000)",
    rightColor: "rgba(251, 183, 97, 1.000)",
    complete: 80,
    avatarImage: require("../assets/images/avatar2.png")
  },
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(247, 190, 27, 1.000)",
    rightColor: "rgba(250, 235, 95, 1.000)",
    complete: 20,
    avatarImage: require("../assets/images/avatar3.png")
  },
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(62, 208, 73, 1.000)",
    rightColor: "rgba(139, 250, 64, 1.000)",
    complete: 60,
    avatarImage: require("../assets/images/avatar1.png")
  },
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(66, 170, 255, 1.000)",
    rightColor: "rgba(1, 208, 255, 1.000)",
    complete: 90,
    avatarImage: require("../assets/images/avatar2.png")
  }
];

const ProgressItem = props => {
  const { name, vote, complete, left, bgcColor, avatarImage } = { ...props };
  return (
    <View
      style={{
        flexDirection: "row",
        height: 110,
        width: "95%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(212, 211, 215, 1.000)"
      }}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <Image
          source={avatarImage}
          style={{
            height: null,
            width: null,

            resizeMode: "contain",
            flex: 1
          }}
        />
      </View>
      <View
        style={{
          alignSelf: "flex-start",
          flex: 9,
          marginTop: 5,
          marginBottom: 5
        }}
      >
        <Text style={{ marginBottom: 5 }}>{name}</Text>
        <Text style={{ fontSize: 12, color: "rgba(172, 172, 175, 1.000)" }}>
          {vote} bcero
        </Text>
        <View
          style={{
            position: "relative",
            height: 20,
            borderWidth: 0,
            borderColor: "red",
            justifyContent: "center",
            marginBottom: 5
          }}
        >
          <View style={{ position: "absolute", width: "100%" }}>
            <View
              style={{
                height: 3,
                backgroundColor: "rgba(200, 199, 204, 1.000)",
                width: "100%"
              }}
            />
          </View>
          <View style={{ position: "absolute" }}>
            <View
              style={{
                height: 3,
                backgroundColor: bgcColor,
                width: complete
              }}
            />
          </View>
          <View style={{ position: "absolute" }}>
            <View
              style={{
                height: 8,
                backgroundColor: bgcColor,
                width: 8,
                borderRadius: 4,
                transform: [{ translateX: complete }]
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 12 }}>{complete}</Text>
          <View>
            <Text style={{ textAlign: "right" }}>{1 - left}</Text>
            <Text style={{ textAlign: "right" }}>({1 - left}%)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const progressBarData = [
  {
    name: "ANTON Tapacob",
    vote: 93,
    complete: 75,
    left: 24,
    bgcColor: "rgba(76, 217, 99, 1.000)",
    avatarImage: require("../assets/images/avatar1.png")
  },
  {
    name: "Ban Tapacob",
    vote: 70,
    complete: 120,
    left: 24,
    bgcColor: "rgba(76, 217, 99, 1.000)",
    avatarImage: require("../assets/images/avatar2.png")
  },
  {
    name: "AH Yank",
    vote: 40,
    complete: 175,
    left: 5,
    bgcColor: "rgba(0, 122, 255, 1.000)",
    avatarImage: require("../assets/images/avatar3.png")
  },
  {
    name: "Ban Tapacob",
    vote: 70,
    complete: 120,
    left: 24,
    bgcColor: "rgba(76, 217, 99, 1.000)",
    avatarImage: require("../assets/images/avatar2.png")
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
            alignItems: "flex-start",
            marginBottom: 10
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
            height: "80%",
            width: "100%",
            borderWidth: 0,
            borderColor: "red"
          }}
        >
          {progressBarData.map((data, index) => {
            return <ProgressItem {...data} key={index} />;
          })}
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
