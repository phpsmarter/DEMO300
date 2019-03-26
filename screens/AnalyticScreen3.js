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
        alignItems: "center",

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

const HorizontalBarData = [
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(99, 82, 255, 1.000)",
    rightColor: "rgba(198, 109, 217, 1.000)",
    complete: 50
  },
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(247, 108, 29, 1.000)",
    rightColor: "rgba(251, 183, 97, 1.000)",
    complete: 80
  },
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(247, 190, 27, 1.000)",
    rightColor: "rgba(250, 235, 95, 1.000)",
    complete: 20
  },
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(62, 208, 73, 1.000)",
    rightColor: "rgba(139, 250, 64, 1.000)",
    complete: 60
  },
  {
    tel: "8 (921) 270-41-91",
    leftColor: "rgba(66, 170, 255, 1.000)",
    rightColor: "rgba(1, 208, 255, 1.000)",
    complete: 90
  }
];

const StyleText = props => {
  const { tel, complete, leftColor, rightColor } = { ...props };
  const scale = 2.1;
  let scaleComplte = scale * complete;
  return (
    <View style={{ flexDirection: "row", height: 40 }}>
      <Text>{tel}</Text>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[leftColor, rightColor]}
        style={{
          alignItems: "center",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          width: scaleComplte,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 10,
          alignSelf: "flex-start",
          marginLeft: 25,
          marginBottom: 20
        }}
      />
    </View>
  );
};

const StyleLinearGradient = props => {
  const { tel, complete, leftColor, rightColor } = { ...props };
  const scale = 2.1;
  let scaleComplte = scale * complete;
  return (
    <View style={{ flexDirection: "row", height: 40 }}>
      <Text>{tel}</Text>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[leftColor, rightColor]}
        style={{
          alignItems: "center",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          width: scaleComplte,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 10,
          alignSelf: "flex-start",
          marginLeft: 25,
          marginBottom: 20
        }}
      />
    </View>
  );
};
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
            width: "95%",

            borderWidth: 0,
            borderColor: "blue",
            alignSelf: "center",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 4,
              borderWidth: 0,
              borderColor: "red",
              marginTop: 50
            }}
          >
            {HorizontalBarData.map((data, index) => {
              return <StyleLinearGradient {...data} key={index} />;
            })}
          </View>

          <View style={{ flex: 6, height: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 20
              }}
            >
              <Text style={{ color: "rgba(138, 138, 143, 1.000)" }}>0%</Text>

              <Text style={{ color: "rgba(138, 138, 143, 1.000)" }}>50%</Text>
              <Text style={{ color: "rgba(138, 138, 143, 1.000)" }}>100%</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                flex: 6,
                borderWidth: 0,
                borderColor: "ocean",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: "90%",
                  borderLeftWidth: 1,
                  borderLeftColor: "rgba(233, 233, 233, 1.000)",
                  borderRightWidth: 1,
                  borderRightColor: "rgba(233, 233, 233, 1.000)"
                }}
              />
              <View
                style={{
                  flex: 1,
                  height: "90%",
                  borderRightWidth: 1,
                  borderRightColor: "rgba(233, 233, 233, 1.000)"
                }}
              />
            </View>
          </View>
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
