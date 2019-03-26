import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";
import { Icon } from "native-base";
import styled from "styled-components/native";
import { Svg } from "expo";

const { width, height } = Dimensions.get("window");

const MenuData = [
  { name: "MESSAGES", type: "AntDesign", icon: "message1", alert: 2 },
  { name: "TRENDING", type: "AntDesign", icon: "linechart", alert: null },
  { name: "BOOKMARKS", type: "Feather", icon: "bookmark", alert: null },
  { name: "GALLERY", type: "AntDesign", icon: "picture", alert: null },
  { name: "SETTING", type: "AntDesign", icon: "setting", alert: null },
  {
    name: "NOTIFICATIONS",
    type: "Ionicons",
    icon: "ios-notifications-outline",
    alert: 8
  },
  { name: "PEOPLE", type: "SimpleLineIcons", icon: "people", alert: 8 },
  { name: "PLACES", type: "EvilIcons", icon: "location", alert: 8 }
];

const LinearGradientContainer = props => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["rgba(151, 109, 255, 1.000)", "rgba(110, 94, 255, 1.000)"]}
      style={{
        alignItems: "center",
        width: "100%",

        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "100%"
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {props.children}
    </LinearGradient>
  );
};

const SearchIcon = () => {
  return (
    <Icon
      type="EvilIcons"
      style={{
        color: "white",
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center"
      }}
      name="search"
    />
  );
};

const MenuIcon = props => {
  const { type, name, active, alert, icon } = { ...props };
  const activeColor = active ? "rgba(30, 215, 165, 1.000)" : null;
  console.log(name);
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: activeColor,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Icon
        type={type}
        style={{
          color: "white",
          fontSize: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
        name={icon}
      />
      {alert && (
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 3,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            right: 1
          }}
        >
          <Text style={{ color: "white", fontSize: 10 }}>{alert}</Text>
        </View>
      )}
    </View>
  );
};

const SearchBar = () => {
  return (
    <View
      style={{
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(158, 124, 255, 1.000)",
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <TextInput placeholder="Type a message" style={{ color: "white" }} />
      <SearchIcon />
    </View>
  );
};

const SideMenu = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 40;
  margin-left: 40;
`;

const MenuItem = props => {
  const { index, type, icon, alert, name, activeIndex } = { ...props };
  const active = index === activeIndex ? true : false;
  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 15
      }}
    >
      <MenuIcon type={type} icon={icon} alert={alert} active={active} />
      <Text style={{ marginLeft: 30, color: "white" }}>{name}</Text>
    </View>
  );
};

const MenuContent = props => {
  const { data, activeIndex } = { ...props };

  return (
    <View style={{ marginTop: 40 }}>
      {data.map((item, i) => {
        return (
          <MenuItem {...item} key={i} activeIndex={activeIndex} index={i} />
        );
      })}
    </View>
  );
};

const PersonInfo = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <Image
        source={require("../assets/images/astro/Circle.png")}
        style={{
          height: 40,
          width: 40,
          resizeMode: "contain",
          marginRight: 20
        }}
      />
      <View>
        <Text style={{ color: "white", fontSize: 14 }}>Verna Harrison</Text>
        <Text style={{ fontSize: 12, color: "rgba(182, 173, 255, 1.000)" }}>
          Product Designer
        </Text>
      </View>
    </View>
  );
};
export default class DemoScreen extends React.Component {
  state = {
    selectedIndex: 2
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradientContainer>
          <SideMenu>
            <SearchBar />
            <MenuContent
              data={MenuData}
              activeIndex={this.state.selectedIndex}
            />
            <PersonInfo />
          </SideMenu>
        </LinearGradientContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
