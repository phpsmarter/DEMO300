import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  ImageBackground
} from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";
import { Icon } from "native-base";
const { width, height } = Dimensions.get("window");
const slides = [
  {
    key: "somethun",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/images/astro/bg1.png"),
    backgroundColor: "#59b2ab"
  },
  {
    key: "somethun-dos",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/images/astro/bg2.png"),
    backgroundColor: "#febe29"
  },
  {
    key: "somethun1",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/images/astro/bg3.png"),
    backgroundColor: "#22bcb5"
  }
];

const ImageStyle = {
  width: width,
  height: height,
  resizeMode: "contain",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -45
};

const FormItem = props => {
  const { formitem, icon } = { ...props };
  return (
    <View
      style={{
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "rgba(35, 35, 59, 0.8)",
        height: 50,
        width: "84%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        marginBottom: 20
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
          height: 20,
          width: 150,
          borderRightWidth: 1,
          borderRightColor: "rgba(80, 161, 255, 1.000)"
        }}
      >
        <Text
          style={{
            color: "white",
            flex: 1
          }}
        >
          {formitem}
        </Text>
      </View>

      <Text>{icon}</Text>
    </View>
  );
};

const ORC = () => {
  return (
    <View
      style={{
        height: 20,
        flexDirection: "row",
        alingItems: "center",
        justifyContent: "space-around",
        width: "30%",
        alignSelf: "center",
        marginTop: 10
      }}
    >
      <View
        style={{
          alignSelf: "center",
          height: 1,
          backgroundColor: "white",
          flex: 1
        }}
      />
      <Text style={{ fontSize: 10, color: "white", marginHorizontal: 10 }}>
        OR
      </Text>
      <View
        style={{
          alignSelf: "center",
          height: 1,
          backgroundColor: "white",
          flex: 1
        }}
      />
    </View>
  );
};

const LoginFrom = () => {
  return (
    <View style={{ alignSelf: "center", height: 500, width: 360 }}>
      <Image
        source={require("../assets/images/astro/ui-logo.png")}
        style={{ height: 40, width: "100%", resizeMode: "contain" }}
      />
      <View style={{ height: 200, marginTop: 100 }}>
        <FormItem formitem="alan@gmail.com" icon="✅" />
        <FormItem formitem="Your password" icon="SHOW" />
        <BookButton />
        <ORC />
        <FacebookButton />
      </View>

      <View />
    </View>
  );
};

const BookButton = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(157, 112, 255, 1.000)", "rgba(102, 92, 255, 1.000)"]}
      style={{
        padding: 10,
        alignItems: "center",
        borderRadius: 25,
        width: "84%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: 50,

        marginBottom: 3
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 12,
          letterSpacing: 2,
          textAlign: "center"
        }}
      >
        SIGN IN
      </Text>
    </LinearGradient>
  );
};

const FacebookButton = () => {
  return (
    <View
      style={{
        alignSelf: "center",
        width: "84%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 30,
        backgroundColor: "rgba(55, 55, 55, 1.000)"
      }}
    >
      <FacebookIcon />
      <Text style={{ color: "white" }}>CONTINUE WITH FACEBOOK</Text>
    </View>
  );
};

const FacebookIcon = () => {
  return (
    <Icon
      type="FontAwesome"
      style={{ marginRight: 20, color: "white", fontSize: 20 }}
      name="facebook"
    />
  );
};

export default class DemoScreen extends React.Component {
  state = {
    showRealApp: false
  };
  _renderItem = item => {
    return (
      <View style={styles.slide}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text style={styles.title}>{item.title}</Text>
        <ImageBackground style={ImageStyle} source={item.image}>
          <LoginFrom />
        </ImageBackground>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return this.props.navigation.navigate("Home");
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
          dotStyle={{ backgroundColor: "rgba(82, 119, 208, 1.000)" }}
          activeDotStyle={{ backgroundColor: "rgba(234, 74, 82, 1.000)" }}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16
  }
});
