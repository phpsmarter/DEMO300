import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar, Animated } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { keyframes, stagger } from "popmotion";
import { Icon } from "native-base";
import styled from "styled-components/native";
import {
  AnimatedCircularProgress,
  CircularProgress
} from "react-native-circular-progress";

const circleGroups = [
  {
    size: 160,
    tintColor: "rgba(0, 122, 255, 1.000)",
    backgroundColor: "rgba(203, 229, 255, 1.000)",
    width: 15,
    fill: 20
  },
  {
    size: 130,
    tintColor: "rgba(76, 217, 99, 1.000)",
    backgroundColor: "rgba(219, 248, 222, 1.000)",
    width: 15,
    fill: 60
  },
  {
    size: 100,
    tintColor: "rgba(255, 204, 1, 1.000)",
    backgroundColor: "rgba(255, 246, 203, 1.000)",
    width: 15,
    fill: 80
  }
];
//现在不使用这个方法,在circleItems 中通过判断animate的布尔值来决定返回那个组件

const AnimatedCircleGroupItem = props => {
  const { size, tintColor, backgroundColor, width, fill } = { ...props };
  return (
    <AnimatedCircularProgress
      size={size}
      width={width}
      fill={fill}
      tintColor={tintColor}
      onAnimationComplete={() => console.log("onAnimationComplete")}
      backgroundColor={backgroundColor}
      lineCap="round"
      rotation={-30}
      style={{ position: "absolute" }}
    />
  );
};

const CircleGroupItem = props => {
  const {
    size,
    tintColor,
    backgroundColor,
    width,
    fill,
    animated,
    rotation
  } = {
    ...props
  };
  if (animated) {
    return (
      <AnimatedCircularProgress
        size={size}
        width={width}
        fill={fill}
        tintColor={tintColor}
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor={backgroundColor}
        lineCap="round"
        rotation={rotation}
        style={{ position: "absolute" }}
      />
    );
  }
  return (
    <CircularProgress
      size={size}
      width={width}
      fill={fill}
      tintColor={tintColor}
      onAnimationComplete={() => console.log("onAnimationComplete")}
      backgroundColor={backgroundColor}
      lineCap="round"
      rotation={rotation}
      style={{ position: "absolute" }}
    />
  );
};

const StyledRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50;
  width: 95%;
`;

const StyledListItem = props => {
  const { iconcolor, tel, vote, complete } = { ...props };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        width: "95%",
        alignSelf: "center",
        marginBottom: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: "gray"
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            flex: 7,
            alignSelf: "center"
          }}
        >
          <Icon
            type="Entypo"
            style={{ color: iconcolor, fontSize: 30 }}
            name="dot-single"
          />
          <View>
            <Text style={{ fontSize: 14, marginBottom: 5 }}>{tel}</Text>
            <Text
              style={{
                fontSize: 10,
                color: "rgba(164, 164, 167, 1.000)",
                marginBottom: 10
              }}
            >
              {vote} vote
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          flex: 3,
          textAlign: "right",
          fontSize: 12,
          color: "rgba(164, 164, 167, 1.000)"
        }}
      >
        {complete}
      </Text>
    </View>
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
export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listInfo: listInfo,
      circleGroupdata: circleGroups,
      animated: true,
      rotation: 0
    };
  }

  render() {
    const circlesInformation = this.state.circleGroupdata;
    const animated = this.state.animated;
    const listInfo = this.state.listInfo;
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
            alignItems: "flex-start"
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
            position: "relative",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 130
          }}
        >
          {circlesInformation.map((data, index) => {
            return (
              <CircleGroupItem
                {...data}
                key={index}
                animated={animated}
                rotation={this.state.rotation}
              />
            );
          })}
        </View>
        <View style={{ marginTop: 150 }}>
          {listInfo.map((info, index) => {
            return <StyledListItem {...info} key={index} />;
          })}
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
