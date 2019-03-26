import React, { Component } from "react";
import { Animated, View, Text } from "react-native";
import { Svg } from "expo";

class AnimatedBar extends Component {
  constructor(props) {
    super(props);
    this._height = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.animateTo(nextProps.delay, nextProps.value);
  }

  animateTo = (delay, value) => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this._height, {
        toValue: value
      })
    ]).start();
  };

  render() {
    const barStyles = {
      backgroundColor: "rgba(110, 94, 255, 1.000)",
      height: this._height,
      borderTopRightRadius: 3,
      borderTopLeftRadius: 3,
      width: 10,
      margin: 4
    };
    const emptyStyle = {
      backgroundColor: "white",
      width: 10,
      height: 150,
      margin: 4,
      position: "absolute",
      top: 35,
      borderBottomRightRadius: 3,
      borderBottomLeftRadius: 3,
      borderTopRightRadius: 3,
      borderTopLeftRadius: 3
    };

    const textStyle = {
      color: "white",
      fontSize: 11,
      transform: [
        {
          rotate: "180deg"
        }
      ],
      textAlign: "center",
      marginTop: 20
    };
    topStyle = {
      backgroundColor: "red",
      height: 2,
      width: 10,

      alignSelf: "center"
    };
    return (
      <View style={{ marginTop: 100, transform: [{ rotate: "180deg" }] }}>
        <Text style={textStyle}>{this.props.value}</Text>
        <View style={emptyStyle} />
        <Animated.View style={barStyles} />
        <Animated.View style={topStyle} />
      </View>
    );
  }
}

export default AnimatedBar;

<svg width="21px" height="404px" viewBox="0 0 21 404">
  <defs>
    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
      <stop stop-color="#EEEEEE" offset="0%" />
      <stop stop-color="#D8D8D8" offset="100%" />
    </linearGradient>
  </defs>
  <g
    id="Welcome"
    stroke="none"
    stroke-width="1"
    fill="none"
    fill-rule="evenodd"
    stroke-dasharray="4"
  >
    <g
      id="Mobile-Portrait"
      transform="translate(-150.000000, -135.000000)"
      fill="url(#linearGradient-1)"
      stroke="#A6E223"
      stroke-width="20"
    >
      <path d="M160.5,135.5 L160.5,538.5" id="Line" />
    </g>
  </g>
</svg>;
