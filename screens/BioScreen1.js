import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  StatusBar
} from "react-native";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { IconHeader } from "../components/IconHeader";
import {
  SVG,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask
} from "expo";
import ProgressCircle from "react-native-progress-circle";
import * as Progress from "react-native-progress";
const Circle = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <ProgressCircle
        percent={80}
        radius={80}
        borderWidth={12}
        color="rgba(149, 243, 78, 1.000)"
        shadowColor="rgba(96, 76, 229, 1.000)"
        bgColor="rgba(109, 86, 253, 1)"
      >
        <Text style={{ fontWeight: "bold", fontSize: 24, color: "white" }}>
          {"45 / 5"}
        </Text>
        <Text style={{ fontSize: 12, color: "white" }}>{"Well Done"}</Text>
      </ProgressCircle>
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <IconHeader title="BIOLOGY" right={false} />
        <View style={styles.svgContainer}>
          <Circle />
          <View style={{ width: 260, marginTop: 20 }}>
            <Text style={{ textAlign: "center", fontSize: 14, color: "white" }}>
              124 other students have taken this test
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, color: "white" }}>
              You'have scored 4 points
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18, color: "white" }}>
              above the average!
            </Text>
            <View style={{ marginTop: 40, alignItems: "center" }}>
              <Progress.Bar
                progress={0.3}
                width={200}
                color={"white"}
                unfilledColor={"rgba(73, 70, 183, 1.000)"}
                borderWidth={0}
              />
            </View>
          </View>
        </View>
        <View style={{ width: 300, alignItems: "center", marginTop: 30 }}>
          <Text style={{ textAlign: "center" }}>TEST CORRECTION</Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              fontSize: 12,
              color: "gray"
            }}
          >
            you have failed 5 questions.Hear are the correct answers:
          </Text>

          <View
            style={{
              marginTop: 10,
              width: 300,
              height: 60,
              borderRadius: 40,
              backgroundColor: "rgba(93, 91, 255, 1.000)",
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: { width: 5, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 8
            }}
          >
            <Text
              style={{
                paddingHorizontal: 50,
                paddingVertical: 10,
                fontSize: 16,
                color: "white"
              }}
            >
              RUN ANOTHER TEST
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(109, 86, 253, 1.000)",
    borderWidth: 0,
    borderColor: "red",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  },
  svgContainer: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  }
});
