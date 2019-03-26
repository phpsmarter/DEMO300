import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Button
} from "react-native";
import { Icon } from "native-base";
import { LinearGradient } from "expo";
const Introduction = () => {
  return (
    <View
      style={{
        marginTop: 300,
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
        Find new friends nearyby
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "white",
          lineHeight: 20
        }}
      >
        With milions of users all over the world, we gives you the ability to
        connect with people no matter where you are.
      </Text>
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
          backgroundColor: "white",
          borderRadius: 20,
          color: "red"
        }}
      >
        <Button
          color="red"
          onPress={() => console.log("pressed")}
          title={"Login"}
        />
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["rgba(245, 75, 100, 1.000)", "rgba(247, 131, 98, 1.000)"]}
        style={{
          marginTop: 10,
          alignSelf: "center",
          paddingVertical: 5,
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
          title={"Sign Up"}
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

const IconGroup = () => {
  return (
    <View
      style={{
        marginTop: 80,
        height: 40,
        width: 300,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <MyIcon type="FontAwesome" name="facebook" color="white" />
      <MyIcon type="FontAwesome" name="twitter" color="white" />
      <MyIcon type="FontAwesome" name="google-plus" color="white" />
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/zingo/login_bg.png")}
          style={{ width: "101%", height: "100%" }}
        >
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <Introduction />
          <LoginBtnGroup />

          <Text
            style={{
              marginTop: 10,
              color: "white",
              textAlign: "center",
              fontSize: 12
            }}
          >
            Or you can login
          </Text>

          <IconGroup />
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
