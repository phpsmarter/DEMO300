import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/model.png")}
          style={{ height: "100%", width: "100%", resizeMode: "center" }}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(239, 79, 117,0.48)",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                marginTop: -50,
                height: 120,
                width: 291,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "rgba(239, 79, 117, 1.000)",
                borderWidth: 0.8
              }}
            >
              <View
                style={{
                  width: 183,
                  height: 35,
                  backgroundColor: "rgba(239, 79, 117, 1.000)",
                  position: "absolute",
                  top: -10,
                  left: "20%"
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 24, textAlign: "center" }}
                >
                  Welcome
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    width: "90%",
                    height: 100,
                    alignSelf: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(239, 79, 117, 1.000)",
                      textAlign: "center",
                      fontSize: 12
                    }}
                  >
                    Sign up for free to browse the latest in fashion, save
                    styles, shop the styles you dig and more.
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                height: 50,
                width: "88%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20
              }}
            >
              <View
                style={{
                  height: 50,
                  width: 129,
                  backgroundColor: "rgba(239, 79, 117, 1.000)",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Sign UP</Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: 129,
                  backgroundColor: "rgba(239, 79, 117, 1.000)",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
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
