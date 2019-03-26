import React, { Component } from "react";
import { Animated, View, Text } from "react-native";
import { Svg } from "expo";

const { Line } = Svg;

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
      alignSelf: "center",
      backgroundColor: "rgba(110, 94, 255, 0.000)",
      height: this._height,
      borderTopRightRadius: 3,
      borderTopLeftRadius: 3,
      width: 10,
      margin: 4,
      overflow: "hidden"
    };
    const emptyStyle = {
      backgroundColor: "white",
      width: 9,
      height: 150,
      margin: 4,
      position: "absolute",
      top: 35,
      left: -1,
      borderBottomRightRadius: 3,
      borderBottomLeftRadius: 3,
      borderTopWidth: 4,
      borderTopColor: "rgba(166, 226, 36, 1.000)"
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
      marginLeft: -3,
      backgroundColor: "red",
      height: 2,
      width: 8,

      alignSelf: "center"
    };
    return (
      <Animated.View
        style={{ marginTop: 100, transform: [{ rotate: "180deg" }] }}
      >
        <Text style={textStyle}>{this.props.value}</Text>
        <View style={emptyStyle} />
        <Animated.View style={barStyles}>
          <Svg height="100" width="10" style={{ alignSelf: "center" }}>
            <Line
              x1="0"
              y1="0"
              x2="0"
              y2="150"
              stroke="rgba(166, 226, 36, 1.000)"
              strokeWidth="15"
              strokeDasharray="3"
            />
          </Svg>
        </Animated.View>
        <Animated.View style={topStyle} />
      </Animated.View>
    );
  }
}

export default AnimatedBar;
