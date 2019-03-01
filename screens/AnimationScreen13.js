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

const btnItems = [
  { text: "One Way" },
  { text: "Rond Trip" },
  { text: "Multicity" }
];

const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons
        name="ios-arrow-back"
        size={24}
        color="white"
        style={{ alignSelf: "center", marginLeft: 20 }}
      />
      <Text style={{ fontSize: 18, color: "white" }}>Search Flights</Text>
      <MaterialCommunityIcons
        name="dots-horizontal"
        size={24}
        color="rgba(177, 148, 245, 1.000)"
        style={{ alignSelf: "flex-start", marginLeft: 20 }}
      />
    </View>
  );
};
const Button = props => {
  const onChange = props.onChange;
  const text = props.text;
  const selfIndex = props.index;
  //alert(selfIndex);
  const selectedIndex = props.selectedIndex;
  const btnStyle = "rgba(116, 103, 240, 1.000)";
  const shadowStyle = {
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  };
  const selectedStyle = selfIndex === selectedIndex ? btnStyle : null;
  const textStyle =
    selfIndex === selectedIndex ? "white" : "rgba(185, 185, 186, 1.000)";
  const selectedShadowStyle = selfIndex === selectedIndex ? shadowStyle : null;
  return (
    <View
      style={[
        {
          height: "99%",
          width: 100,

          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 0,
          borderColor: "red",
          zIndex: 999
        }
      ]}
    >
      <Text
        style={{ fontSize: 12, color: "black" }}
        onPress={selfIndex => onChange(selfIndex)}
      >
        {text}
      </Text>
    </View>
  );
};
const ButtonGroup = props => {
  const selectedIndex = props.selectedIndex;
  const onChange = props.onChange;
  const animatedStyle = props.animatedStyle;
  return (
    <View style={styles.ButtonGroup}>
      {btnItems.map((btnItem, index) => {
        return (
          <Button
            key={index}
            text={btnItem.text}
            index={index}
            selectedIndex={selectedIndex}
            onChange={e => onChange(e, index)}
          />
        );
      })}
      <Animated.View
        style={[
          {
            height: 30,
            width: 100,
            backgroundColor: "rgba(116, 103, 240, 1.000)",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            marginTop: 5
          },
          animatedStyle
        ]}
      />
    </View>
  );
};

export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      animation: new Animated.Value(6)
    };
  }
  startAnimation = value => {
    Animated.timing(this.state.animation, {
      toValue: value,
      duration: 200
    }).start();
  };

  onChange = (e, index) => {
    //let offset = 127;
    e.preventDefault();
    //alert(index);
    //return;
    this.setState({ selectedIndex: index });
    if (index === 0) {
      offset = 6;
    } else if (index === 1) {
      offset = 124;
    } else if (index === 2) {
      offset = 240;
    }
    this.startAnimation(offset);
  };

  render() {
    const animatedStyles = {
      transform: [
        {
          translateX: this.state.animation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <ImageBackground
          source={require("../assets/images/flyticket/background.png")}
          style={{ marginTop: -40, height: 180, width: "100%" }}
        >
          <Header />
          <ButtonGroup
            selectedIndex={this.state.selectedIndex}
            animatedStyle={animatedStyles}
            onChange={this.onChange}
          />
        </ImageBackground>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 0,
    borderColor: "red",
    backgroundColor: "rgba(245, 245, 245, 1.000)"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: 40,
    paddingHorizontal: 10,
    marginTop: 40
  },
  title: {
    width: "90%",
    height: 60,
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start"
  },
  bestCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "red",
    marginTop: 30,
    paddingHorizontal: 10,
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  carsDetail: {
    alignSelf: "center",
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 10,
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  ButtonGroup: {
    position: "relative",
    alignSelf: "center",
    marginTop: 10,
    width: "95%",
    height: 40,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  },
  InformationCard: {
    marginTop: -30,
    backgroundColor: "white",
    height: 450,
    width: "95%",
    borderRadius: 6,
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  }
});
