import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import AnimatedBar from "./AnimatedBar3";

const window = Dimensions.get("window");
const DELAY = 100;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(Math.floor(Math.random() * 100));
    }

    this.setState({
      data
    });
  };

  render() {
    const barData = this.state.data;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(35, 35, 59, 1.000)",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",

            transform: [
              {
                rotate: "0deg"
              }
            ]
          }}
        >
          {barData.map((value, index) => (
            <AnimatedBar value={value} delay={DELAY * index} key={index} />
          ))}
        </View>
      </View>
    );
  }
}
