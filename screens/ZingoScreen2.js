import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput
} from "react-native";
import { Icon } from "native-base";
import { LinearGradient } from "expo";
const Introduction = () => {
  return (
    <View
      style={{
        marginTop: 30,
        width: "80%",
        paddingHorizontal: 20,
        alignSelf: "center"
      }}
    >
      <Text
        style={{
          lineHeight: 30,
          fontSize: 32,
          color: "white",
          marginBottom: 10,
          fontWeight: "bold"
        }}
      >
        Welcome back
      </Text>
      <Text style={{ fontSize: 14, color: "white" }}>Login to you account</Text>
    </View>
  );
};

const LoginBtnGroup = () => {
  return (
    <View style={{ width: "80%", alignSelf: "center", marginTop: 20 }}>
      <View
        style={{
          alignSelf: "center",
          height: 40,
          width: 250,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 20,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingHorizontal: 10,
          color: "white",
          marginBottom: 10
        }}
      >
        <TextInput placeholder="Email" placeholderTextColor="white" />
      </View>

      <View
        style={{
          alignSelf: "center",
          height: 40,
          width: 250,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 20,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingHorizontal: 10,
          marginBottom: 10
        }}
      >
        <TextInput placeholder="Password" placeholderTextColor="white" />
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["rgba(245, 75, 100, 1.000)", "rgba(247, 131, 98, 1.000)"]}
        style={{
          marginTop: 40,
          alignSelf: "center",

          paddingHorizontal: 15,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          width: 250,
          height: 40
        }}
      >
        <Button
          color="white"
          title={"Login"}
          onPress={() => console.log("pressed")}
        />
      </LinearGradient>
    </View>
  );
};

const MyIcon = props => {
  const { type, name, color } = { ...props };
  return (
    <Icon
      type={type}
      style={{
        color: color,
        fontSize: 24,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20
      }}
      name={name}
    />
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/zingo/login.png")}
          style={{
            width: "101%",
            height: "100%",
            backgroundColor: "rgba(36, 42, 55, 0.42)"
          }}
        >
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <View style={{ marginTop: 40 }}>
            <MyIcon type="Ionicons" name="md-arrow-back" color="white" />
          </View>
          <Introduction />
          <LoginBtnGroup />

          <Text
            style={{
              marginTop: 100,
              textAlign: "center",
              fontSize: 16,
              color: "white"
            }}
          >
            Forget your password?
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
