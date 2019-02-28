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

import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { IconHeader } from "../components/IconHeader";

import ProgressCircle from "react-native-progress-circle";
import * as Progress from "react-native-progress";

const testItems = [
  {
    image: require("../assets/images/bio/dna.png"),
    title: "BIOLOGY",
    activeColor: "rgba(149, 243, 78, 1.000)",
    percent: 80
  },
  {
    image: require("../assets/images/bio/atom.png"),
    title: "PHYSICS",
    activeColor: "rgba(103, 41, 205, 1.000)",
    percent: 60
  },
  {
    image: require("../assets/images/bio/flasks.png"),
    title: "CHEMISTRY",
    activeColor: "rgba(235, 38, 90, 1.000)",
    percent: 90
  }
];
const Circle = props => {
  return (
    <View style={{ marginTop: 20 }}>
      <ProgressCircle
        percent={props.percent ? props.percent : 80}
        radius={props.radius ? props.radius : 80}
        borderWidth={props.borderWidth}
        color={
          props.activeColor ? props.activeColor : "rgba(149, 243, 78, 1.000)"
        }
        shadowColor="rgba(241, 241, 241, 1.000)"
        bgColor="white"
      >
        <Image
          source={
            props.imageurl
              ? props.imageurl
              : require("../assets/images/bio/dna.png")
          }
          style={{ height: 60, width: 60, resizeMode: "center" }}
        />
      </ProgressCircle>
    </View>
  );
};

const TestItem = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        width: "95%",
        height: 160,
        borderWidth: 0,
        borderBottomWidth: 0.25,
        borderColor: "gray",
        alignSelf: "center",
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 8
      }}
    >
      <View style={{ flex: 3 }}>
        <Circle
          percent={70}
          radius={40}
          borderWidth={6}
          imageurl={props.imageurl}
          activeColor={props.activeColor}
          percent={props.percent}
        />
      </View>
      <View style={{ flex: 7, marginLeft: 10 }}>
        <Text style={{ fontSize: 9, color: "rgba(98, 91, 255, 1.000)" }}>
          {props.title ? props.title : "BIOLOGY"}
        </Text>
        <Text style={{ fontSize: 18 }}>
          {props.testnum ? props.testnum : 30} tests completed
        </Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <AntDesign
            name="instagram"
            size={16}
            color="black"
            style={{ alignSelf: "center" }}
          />
          <Text style={{ marginLeft: 10, fontSize: 12 }}>
            Global average :30/50
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <MaterialCommunityIcons
            name="arrow-up-bold-outline"
            size={16}
            color="black"
            style={{ alignSelf: "center" }}
          />
          <Text style={{ marginLeft: 10, fontSize: 12 }}>
            your are performing {props.progress ? props.progress : 80} bettern
            than you peers
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            alignSelf: "flex-start",
            width: 90,
            height: 30,
            borderRadius: 20,
            backgroundColor: "rgba(93, 91, 255, 1.000)",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 5
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>NEW TEST </Text>
        </View>
      </View>
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <IconHeader title="BIOLOGY" right={false} Color={"black"} />
        <View style={{ marginTop: 100, height: 900 }}>
          <ScrollView>
            {testItems.map((testItem, index) => {
              return (
                <TestItem
                  key={index}
                  title={testItem.title}
                  imageurl={testItem.image}
                  activeColor={testItem.activeColor}
                  percent={testItem.percent}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(109, 86, 253, 0)",
    borderWidth: 0,
    borderColor: "red"
  }
});
