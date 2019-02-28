import React from "react";

import { Image, Text, View } from "react-native";
import { styles } from "../screens/DemoScreen";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
export const IconHeader = props => {
  const IconColor = props.Color ? props.Color : "black";
  return (
    <View style={styles.menu}>
      <Ionicons
        name="md-menu"
        size={24}
        color={IconColor}
        style={{ alignSelf: "center" }}
      />
      <Text style={[styles.menuText, { color: "black", fontSize: 18 }]}>
        {props.title}
      </Text>
      {props.right ? (
        <FontAwesome
          name="plane"
          size={24}
          color="white"
          style={{ alignSelf: "center" }}
        />
      ) : (
        <View />
      )}
    </View>
  );
};
