import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Icon } from "native-base";
import { Svg } from "expo";
import * as path from "svg-path-properties";
import * as shape from "d3-shape";
const height = 200;
const width = 400;
const verticalPadding = 20;
import { scaleTime, scaleLinear, scaleQuantile } from "d3-scale";

const { Path, Defs, LinearGradient, Stop } = Svg;
const d3 = {
  shape
};

const data = [
  { x: new Date(2018, 9, 1), y: 0 },
  { x: new Date(2018, 9, 16), y: 0 },
  { x: new Date(2018, 9, 17), y: 200 },
  { x: new Date(2018, 10, 1), y: 200 },
  { x: new Date(2018, 10, 2), y: 300 },
  { x: new Date(2018, 10, 5), y: 300 }
];

const scaleX = scaleTime()
  .domain([new Date(2018, 9, 1), new Date(2018, 10, 5)])
  .range([0, width]);
const scaleY = scaleLinear()
  .domain([0, 200, 300, 400])
  .range([height - verticalPadding, verticalPadding]);

const line = d3.shape
  .line()
  .x(d => scaleX(d.x))
  .y(d => scaleY(d.y))
  .curve(d3.shape.curveBasis)(data);

const MyIcon = props => {
  const { type, name, color } = { ...props };
  return (
    <Icon
      type={type}
      style={{
        color: color,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center"
      }}
      name={name}
    />
  );
};

const Header = () => {
  return (
    <View
      style={{
        height: 40,
        width: "90%",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <MyIcon
        type="Ionicons"
        color="rgba(188, 194, 198, 1.000)"
        name="ios-menu"
      />
      <Text style={{ fontSize: 14 }}>Profile</Text>

      <MyIcon
        type="Ionicons"
        color="rgba(188, 194, 198, 1.000)"
        name="ios-heart-empty"
      />
    </View>
  );
};

const Profile = () => {
  return (
    <View
      style={{
        height: 100,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0,
        borderColor: "red"
      }}
    >
      <Text
        style={{
          color: "rgba(18, 50, 254, 1.000)",
          fontSize: 24,
          marginBottom: 10
        }}
      >
        Mildred Stewart
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "rgba(119, 128, 135, 1.000)",
          marginBottom: 5
        }}
      >
        {" "}
        User Interface
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "rgba(119, 128, 135, 1.000)",
          marginBottom: 5
        }}
      >
        Designer
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <MyIcon
          type="SimpleLineIcons"
          color="rgba(188, 194, 198, 1.000)"
          name="location-pin"
        />

        <Text
          style={{
            marginLeft: 10,
            fontSize: 10,
            color: "rgba(205, 208, 211, 1.000)"
          }}
        >
          San Francisco CA
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: -200, zIndex: 999 }}>
        <Image
          source={require("../assets/images/BrakeProfile/roundAvatar.png")}
          style={{
            width: 180,
            height: 180,
            borderRadius: 60,
            resizeMode: "cover"
          }}
        />
      </View>
    </View>
  );
};

const Chart = () => {
  return (
    <Svg height={height} width={width}>
      <Defs>
        <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
          <Stop stopColor="#CDE3F8" offset="0%" />
          <Stop stopColor="#eef6fd" offset="80%" />
          <Stop stopColor="#FEFFFF" offset="100%" />
        </LinearGradient>
      </Defs>
      <Path
        d={line}
        fill="transparent"
        stroke="rgba(76, 51, 253, 1.000)"
        strokeWidth={2}
      />
      <Path
        d={`${line} L ${width} ${height} L 0 ${height}`}
        fill="url(#gradient)"
      />
    </Svg>
  );
};

const MyStats = () => {
  return (
    <View
      style={{
        borderWidth: 0,
        borderColor: "blue",
        marginTop: 100,
        height: 600,
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "white",
        zIndex: -10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowColor: "rgba(205, 208, 211, 1.000)",
        alignItems: "center"
      }}
    >
      <View
        style={{
          marginTop: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          width: "80%",
          marginBottom: 20
        }}
      >
        <Text>Statistics</Text>
        <Text style={{ fontSize: 12, color: "rgba(205, 208, 211, 1.000)" }}>
          View more
        </Text>
      </View>
      <View
        style={{ paddingHorizontal: 56, width: "80%", alignSelf: "flex-start" }}
      >
        <Text style={{ textAlign: "left", fontSize: 32, marginBottom: 5 }}>
          362 likes
        </Text>
        <Text style={{ fontSize: 12, color: "rgba(205, 208, 211, 1.000)" }}>
          this week
        </Text>
      </View>
      <Chart />
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Profile />
        <MyStats />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
