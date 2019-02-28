import React, { Component } from "react";
import {
  TextInput,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Button,
  Teaxtarea,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { Container, Content, Picker, Form, Icon, Textarea } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import { Header } from "../components/Header";
import { LinearGradient } from "expo";
import { white, gray } from "ansi-colors";

const lineWidth = 0.6;
const cates = [
  {
    image: require("../assets/images/airport/restaurants.png"),
    title: "Restaruants"
  },
  {
    image: require("../assets/images/airport/shopping.png"),
    title: "Shopping"
  },
  {
    image: require("../assets/images/airport/restroom.png"),
    title: "Restrooom"
  },
  { image: require("../assets/images/airport/lounge.png"), title: "Lounge" },
  {
    image: require("../assets/images/airport/dutyfree.png"),
    title: "Dutyfree"
  },
  { image: require("../assets/images/airport/luggage.png"), title: "Luggage" }
];

const CateCard = props => {
  const index = props.index;
  const rightborder = index % 2 !== 0 ? null : { borderRightWidth: lineWidth };
  return (
    <View style={[styles.cateCard, rightborder]}>
      <Image
        source={props.image}
        style={{ width: 60, height: 60, resizeMode: "cover" }}
      />
      <Text style={{ marginTop: 5 }}>{props.title}</Text>
    </View>
  );
};
export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cates: cates
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <LinearGradient
            colors={["#57B4FC", "#1552F0"]}
            style={styles.headerLeft}
          />
          <View style={styles.headerCenter}>
            <Text style={{ fontSize: 14, color: "black" }}>boarding in</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>30:00</Text>
          </View>
          <View style={styles.headerRight}>
            <FontAwesome
              name="plane"
              size={32}
              color="black"
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={styles.category}>
          {this.state.cates.map((cate, index) => {
            return (
              <CateCard
                key={index}
                index={index}
                image={cate.image}
                title={cate.title}
              />
            );
          })}
        </View>
        <View style={styles.button}>
          <Text />
          <Text style={{ fontSize: 16, color: "rgba(70, 47, 236, 1.000)" }}>
            Airport Walk
          </Text>
          <FontAwesome
            name="compass"
            size={32}
            color="rgba(70, 47, 236, 1.000)"
            style={{ alignSelf: "center" }}
          />
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "95%",
    marginHorizontal: "auto",
    borderWidth: 0,
    borderColor: "green",
    alignSelf: "center",
    marginTop: 40
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    width: "90%",
    height: 70,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1.000)",
    justifyContent: "space-between"
  },
  headerLeft: {
    width: 100,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  headerCenter: {
    alignSelf: "center"
  },

  headerRight: {
    alignSelf: "center",
    paddingRight: 10
  },
  cateCard: {
    alignSelf: "center",
    padding: 30,
    width: 150,
    height: 120,
    borderBottomWidth: lineWidth,
    borderColor: "rgba(241, 241, 241, 1.000)"
  },
  category: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    height: 400,
    width: "90%",
    borderColor: "red",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    height: 60,
    paddingHorizontal: 20,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(232, 227, 252, 1.000)",
    borderRadius: 14
  }
});
