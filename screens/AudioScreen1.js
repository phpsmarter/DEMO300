import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar
} from "react-native";
const colors = [
  { color: "rgba(255, 255, 255, 1.000)" },
  { color: "rgba(223, 223, 223, 1.000)" },
  { color: "rgba(252, 184, 0, 1.000)" },
  { color: "rgba(192, 61, 7, 1.000)" },
  { color: "rgba(0, 78, 145, 1.000)" }
];
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const ColorItem = props => {
  const selfIndex = props.selfIndex;
  const bgc = props.color ? props.color : "white";
  const style = { shadowOpacity: 2, shadowRadius: 10, shadowColor: bgc };
  selectedStyle = props.selfIndex === props.selectedIndex ? style : null;
  return (
    <View
      style={[
        {
          width: 16,
          height: 16,
          borderRadius: 8,
          backgroundColor: bgc,
          position: "relative",
          shadowOffset: { width: 2, height: 2 }
        },
        selectedStyle
      ]}
    >
      <Text
        style={{ width: "100%", height: "100%" }}
        onPress={selfIndex => {
          props.onChange(selfIndex);
        }}
      >
        {" "}
      </Text>
    </View>
  );
};

export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 3
    };
  }

  onChange = (e, index) => {
    e.preventDefault();
    this.setState({ selectedIndex: index });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" />
        <Ionicons
          name="md-arrow-back"
          size={16}
          color="black"
          style={{ alignSelf: "flex-start", marginLeft: 20 }}
        />
        <View
          style={{ alignSelf: "flex-start", marginTop: 20, marginLeft: 20 }}
        >
          <Text style={{ textAlign: "left", fontSize: 18 }}>New Audio Q2</Text>
        </View>

        <Image
          source={require("../assets/images/Audiocar/Audio1.png")}
          style={{ width: "100%", height: 300, resizeMode: "contain" }}
        />
        <View style={styles.colorList}>
          {colors.map((color, index) => {
            return (
              <ColorItem
                color={color.color}
                selfIndex={index}
                key={index}
                selectedIndex={this.state.selectedIndex}
                onChange={e => this.onChange(e, index)}
              />
            );
          })}
        </View>

        <View style={styles.next}>
          <Text>$ 29,247</Text>
          <View
            style={{
              width: 80,
              height: 30,
              padding: 5,
              borderRadius: 6,
              backgroundColor: "rgba(252, 184, 0, 1.000)"
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Next</Text>
          </View>
        </View>
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
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backgroundColor: "rgba(242, 242, 242, 1.000)"
  },
  colorList: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: 40,
    paddingHorizontal: 10
  },
  next: {
    marginTop: 50,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  }
});
