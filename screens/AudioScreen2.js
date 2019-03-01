import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar
} from "react-native";

import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import Pulse from "react-native-pulse";

export default class DemoScreen extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       selectedIndex: 3
  //     };
  //   }

  //   onChange = (e, index) => {
  //     e.preventDefault();
  //     this.setState({ selectedIndex: index });
  //   };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" />
        <View style={styles.header}>
          <Ionicons
            name="ios-arrow-round-back"
            size={24}
            color="black"
            style={{ alignSelf: "flex-start", marginLeft: 20 }}
          />
          <View />
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
            style={{ alignSelf: "flex-start", marginLeft: 20 }}
          />
        </View>
        <View style={styles.title}>
          <Text style={{ fontSize: 14, color: "gray" }}>Overview</Text>
          <Text style={{ fontSize: 28 }}>Audio Q2 2.0 TDI</Text>
        </View>
        <View style={styles.bestCard}>
          <View>
            <Text style={{ fontSize: 12, color: "rgba(0, 219, 114, 1.000)" }}>
              Best deal
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>Audio Downtown</Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>Boston</Text>
          </View>
          <View>
            <ImageBackground
              source={require("../assets/images/Audiocar/map.png")}
              style={{
                height: 80,
                width: 80,
                resizeMode: "contain",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Pulse
                color="orange"
                numPulses={2}
                diameter={40}
                speed={20}
                duration={1000}
              >
                {/* <Image
                  source={require("../assets/images/Audiocar/arrow.png")}
                  style={{ height: 40, width: 40, resizeMode: "contain" }}
                /> */}
              </Pulse>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.carsDetail}>
          <View>
            <Image
              source={require("../assets/images/Audiocar/Audio2.png")}
              style={{ width: 250, height: "100%", resizeMode: "contain" }}
            />
            <View
              style={{
                flexDirection: "row",
                justifycontent: "space-between",
                paddingHorizontal: 20,
                width: "100%",
                height: 60,
                borderWidth: 0,
                borderColor: "red"
              }}
            >
              <View style={{ width: 80 }}>
                <Text style={{ fontSize: 10, color: "gray" }}>Power</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>147 bhp</Text>
              </View>
              <View style={{ width: 80 }}>
                <Text style={{ fontSize: 10, color: "gray" }}>0-60 MPH</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>7.8 sec</Text>
              </View>
              <View style={{ width: 80 }}>
                <Text style={{ fontSize: 10, color: "gray" }}>TOP SPEED</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>131 mph</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 100,
            height: 40,
            width: "90%",
            backgroundColor: "rgba(254, 183, 0, 1.000)",
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>All Specs</Text>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 0,
    borderColor: "red",
    backgroundColor: "rgba(242, 242, 242, 1.000)"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: 40,
    paddingHorizontal: 10
  },
  title: {
    width: "90%",
    height: 60,
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start"
  },
  bestCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "red",
    marginTop: 30,
    paddingHorizontal: 10,
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  carsDetail: {
    alignSelf: "center",
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 10,
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  }
});
