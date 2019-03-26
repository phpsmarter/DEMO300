import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Animated
} from "react-native";

import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  EvilIcons
} from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";
import { LinearGradient } from "expo";
import { Button, Icon } from "native-base";
import Pulse from "react-native-pulse";
const ActiveColor = "rgba(82, 249, 255, 1.000)";
const NormalColor = "rgb(131, 131, 131)";

const pressureDatas = [
  { psi: 23.6, temp: 56, pressure: "low", pos: "front" },
  { psi: 35.0, temp: 41, pressure: "norm", pos: "front" },
  { psi: 34.6, temp: 41, pressure: "norm", pos: "back" },
  { psi: 34.8, temp: 42, pressure: "norm", pos: "back" }
];

const Header = () => {
  return (
    <View style={{ width: "95%", alingnSelf: "center" }}>
      <View style={{ height: 15, width: "95%" }}>
        <Text
          style={{
            color: "white",
            marginTop: -110,
            marginBottom: 5,
            textAlign: "center"
          }}
        >
          LOCK/UNLOCK
        </Text>
      </View>

      <View style={styles.header}>
        <Ionicons name="ios-lock" size={24} color={ActiveColor} />

        <Ionicons name="md-battery-full" size={24} color={NormalColor} />

        <Ionicons name="ios-thermometer" size={24} color={NormalColor} />

        <Ionicons name="ios-car" size={24} color={NormalColor} />
      </View>
    </View>
  );
};

const LockImage = props => {
  const locked = props.locked;
  const unlocked = !props.locked;
  const posY = props.posY;
  const posX = props.posX;
  const pic = props.locked
    ? require("../assets/images/tesla/Lock.png")
    : "http://192.168.1.100:8080/unlock.png";
  const imageStyle = {
    width: 50,
    height: 50,
    resizeMode: "center",
    transform: [{ translateX: posX }, { translateY: posY }]
  };
  const transStyle = [{ translateX: posX }, { translateY: posY - 10 }];
  return locked ? (
    <Image
      source={require("../assets/images/tesla/Lock.png")}
      style={{
        width: 50,
        height: 50,
        resizeMode: "center",
        transform: [{ translateX: posX }, { translateY: posY }]
      }}
    />
  ) : (
    <Pulse
      style={{ transforom: transStyle }}
      color="orange"
      numPulses={3}
      diameter={100}
      speed={5}
      duration={1000}
      image={{
        style: imageStyle,
        source: { uri: "http://192.168.1.100:8080/unlock.png" }
      }}
    />
  );
};

const LockScreen = () => (
  <React.Fragment>
    <LockImage key={0} locked={true} posY={20} posX={75} />
    <LockImage key={1} locked={false} posY={150} posX={-100} />
    <LockImage key={2} locked={false} posY={150} posX={140} />
    <LockImage key={3} locked={true} posY={300} posX={75} />
  </React.Fragment>
);

const BatteryScreen = () => (
  <React.Fragment>
    <Text
      style={{
        color: "white",
        textAlign: "center",
        fontSize: 24,
        marginTop: -30,
        marginBottom: 10
      }}
    >
      220 mi
    </Text>
    <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
      62%
    </Text>
    <Image
      source={require("../assets/images/tesla/Battery.png")}
      style={{
        height: 100,
        width: 100,
        resizeMode: "center",
        zIndex: 1,
        transform: [{ translateX: 50 }, { translateY: 80 }]
      }}
    />
    <Text style={{ color: "white", marginTop: 190, textAlign: "center" }}>
      CHARGING
    </Text>
    <Text style={{ color: "white", textAlign: "center" }}>58 min remaing</Text>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 70
      }}
    >
      <Text style={{ color: "white" }}>22 min/hr</Text>
      <Text style={{ color: "white" }}>232V</Text>
    </View>
  </React.Fragment>
);

export const Glow = () => {
  return (
    <SVG
      width="375px"
      height="759px"
      viewBox="0 0 375 759"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Defs>
        <LinearGradient
          x1="29.0189373%"
          y1="50%"
          x2="49.0001783%"
          y2="50%"
          id="linearGradient-1"
        >
          <Stop stop-color="#000000" offset="0%" />
          <Stop
            stop-color="#53F3FF"
            stop-opacity="0.543081975"
            offset="97.2046604%"
          />
        </LinearGradient>
        <Filter
          x="-21.8%"
          y="-28.8%"
          width="143.7%"
          height="157.6%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <FeGaussianBlur stdDeviation="50" in="SourceGraphic" />
        </Filter>
      </Defs>
      <G
        id="App"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        opacity="0.716995018"
      >
        <G
          id="Car-Temperature-(COOL)"
          transform="translate(0.000000, -38.000000)"
          fill="url(#linearGradient-1)"
        >
          <Ellipse
            id="Cool-glow"
            filter="url(#filter-2)"
            cx="370.5"
            cy="417.5"
            rx="343.5"
            ry="260.5"
          />
        </G>
      </G>
    </SVG>
  );
};

export const GlowLights = () => {
  return (
    <LinearGradient
      colors={["#000000", "rgba(83,243,255,0.54)"]}
      style={{
        marginTop: -20,
        padding: 15,
        alignItems: "center",
        borderRadius: 120,
        width: 200,
        height: 450,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 50,
        shadowColor: "rgba(15, 46, 49, 0.4)",
        zIndex: -1
      }}
    />
  );
};

export class TempController extends Component {
  state = {
    animation: new Animated.Value(80)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 700
    }).start();
  };

  componentWillMount() {
    this.startAnimation();
  }

  render() {
    const currentTemp = this.props.currentTemp;
    const setTemp = this.props.setTemp;
    const animatedStyles = {
      transform: [
        {
          translateY: this.state.animation
        }
      ]
    };

    return (
      <View
        style={{
          marginTop: 40,
          width: 150,
          height: 200,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ marginBottom: 30 }}>
          <Button onPress={() => setTemp("incr")}>
            <Icon type="FontAwesome" name="caret-up" />
          </Button>
        </View>
        <Animated.View
          style={[{ height: 60, overFlow: "hidden" }, animatedStyles]}
        >
          <Text style={[{ color: "white", fontSize: 50 }]}>{currentTemp}℃</Text>
        </Animated.View>

        <View style={{ marginTop: 30 }}>
          <Button onPress={() => setTemp("decr")}>
            <Icon type="FontAwesome" name="caret-down" />
          </Button>
        </View>
      </View>
    );
  }
}

const ControllerScreen = props => {
  const currentTemp = props.currentTemp;
  return (
    <View style={{ width: "100%", height: 100, marginTop: 20 }}>
      <Text style={{ color: "white", fontSize: 10, textAlign: "center" }}>
        CURRENT TEMPERATURE
      </Text>
      <View
        style={{
          marginTop: 10,
          width: "70%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "center"
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 14 }}>INSIDE</Text>
          <Text style={{ color: "white", fontSize: 18 }}>{currentTemp}℃</Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 14 }}>OUTSIDE</Text>
          <Text style={{ color: "white", fontSize: 18 }}>35℃</Text>
        </View>
      </View>
    </View>
  );
};

const AirCond = props => {
  const currentTemp = props.currentTemp;
  const setTemp = props.setTemp;
  return (
    <View
      style={{
        width: 200,
        height: 450,
        borderWidth: 0,
        borderColor: "green",
        transform: [{ translateX: -250 }, { translateY: -450 }]
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <View>
          <Image
            source={require("../assets/images/tesla/Cool.png")}
            style={{ height: 40, height: 40, resizeMode: "contain" }}
          />
          <Text
            style={{
              marginTop: 5,
              color: "rgba(83, 249, 255, 1.000)",
              textAlign: "center",
              fontSize: 14
            }}
          >
            COOL
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/tesla/Heat.png")}
            style={{
              marginTop: 5,
              height: 40,
              height: 40,
              resizeMode: "contain"
            }}
          />
          <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}>
            HEATER
          </Text>
        </View>
      </View>
      <TempController currentTemp={currentTemp} setTemp={setTemp} />
      <ControllerScreen currentTemp={currentTemp} />
    </View>
  );
};

const PressureController = props => {
  const bdc =
    props.pressure === "low"
      ? "rgba(203, 62, 80, 1.000)"
      : "rgba(39, 121, 125, 1.000)";
  const bgc =
    props.pressure === "low"
      ? "rgba(32, 2, 5, 0.7)"
      : "rgba(39, 121, 125, 0.1)";
  const pressure = props.pressure;

  const transStyle1 =
    props.pos === "back" ? [{ translateY: 170 }] : [{ translateY: 0 }];
  const transStyle2 =
    props.pos === "back" ? [{ translateY: -30 }] : [{ translateY: 70 }];
  //const transStyle3 = [{ translateY: 70 }];

  return (
    <View
      style={{
        width: 100,
        height: 225,
        borderColor: bdc,
        borderWidth: 0.9,
        backgroundColor: bgc,
        borderRadius: 8,
        padding: 5,

        marginRight: 4,
        marginBottom: 4
      }}
    >
      <View style={{ transform: transStyle1 }}>
        <Text style={{ color: "white", textAlign: "left", fontSize: 18 }}>
          {props.psi}psi
        </Text>
        <Text style={{ color: "white", fontSize: 14 }}>{props.temp}℃</Text>
      </View>

      <View style={{ transform: transStyle2 }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
          {pressure.toUpperCase()}
        </Text>
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
          PRESSURE
        </Text>
      </View>
    </View>
  );
};
export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      currentTemp: 24,

      animation: new Animated.Value(6)
    };
  }

  setTemp = opt => {
    if (opt == "incr") {
      this.setState({ currentTemp: ++this.state.currentTemp });
    } else {
      this.setState({ currentTemp: --this.state.currentTemp });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Header />
        <ImageBackground
          source={require("../assets/images/tesla/Car.png")}
          style={{
            marginTop: -20,
            height: 420,
            width: 200,
            resizMode: "contain",
            zIndex: 1,
            transform: [{ translateX: 0 }]
          }}
        >
          {false && <LockScreen />}
          {false && <BatteryScreen />}
          {false && <GlowLights />}
          {false && (
            <AirCond
              currentTemp={this.state.currentTemp}
              setTemp={this.setTemp}
            />
          )}
          {true && (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                width: 220,
                height: 400,
                marginTop: -20
              }}
            >
              {pressureDatas.map((data, index) => {
                return (
                  <PressureController
                    pressure={data.pressure}
                    key={index}
                    psi={data.psi}
                    temp={data.temp}
                    pos={data.pos}
                  />
                );
              })}
            </View>
          )}
        </ImageBackground>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    marginTop: -40,
    width: "100%",
    height: "120%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "red",
    backgroundColor: "rgba(0, 0, 0, 1.000)"
  },
  header: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 25,
    paddingHorizontal: 10,
    marginTop: -100
  }
});

//background-image: linear-gradient(-90deg, #000000 29%, rgba(83,243,255,0.54) 48%);
