import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ScrollView,
  ImageBackground,
  Animated
} from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Icon,
  SearchBar,
  Header,
  Item,
  Input,
  Button as NativeButton
} from "native-base";
import { LinearGradient } from "expo";
import { StyleText } from "../components/StyledText";
const profileData = {
  avatarUrl: require("../assets/images/zingo/savatar5.png"),
  name: "Christina Kennedy",
  time: "2 hours ago",
  tags: [{ tag: "relax" }, { tag: "travel" }],
  content:
    "If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe.",
  hasLive: true,
  like: 1125,
  comments: 348,
  reply: 115,
  replyUsers: [
    { url: require("../assets/images/zingo/sssavatar1.png") },
    { url: require("../assets/images/zingo/sssavatar3.png") },
    { url: require("../assets/images/zingo/sssavatar2.png") }
  ]
};

const MyIcon = props => {
  const { type, name, color, checked, size } = { ...props };
  const fs = size ? size : 18;
  return (
    <Icon
      type={type}
      style={{
        color: color,
        fontSize: fs,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 2
      }}
      name={name}
    />
  );
};
const MyHeader = () => {
  return (
    <View
      style={{
        marginTop: 40,
        flexDirection: "row",
        height: 40,
        width: "100%",
        paddingHorizontal: 10
      }}
    >
      <Left>
        <MyIcon type="Ionicons" name="md-arrow-back" color="white" size={24} />
      </Left>
      <Right>
        <View
          style={{
            width: 60,
            height: 20,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <MyIcon
            type="MaterialCommunityIcons"
            name="reply"
            color="white"
            size={24}
          />
          <MyIcon type="Feather" name="more-vertical" color="white" size={24} />
        </View>
      </Right>
    </View>
  );
};

const Paging = props => {
  const { page, total } = { ...props };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(245, 75, 100, 1.000)", "rgba(241, 133, 103, 1.000)"]}
      style={{
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 15,
        width: 60,
        padding: 2,
        height: 22
      }}
    >
      <Text style={{ marginLeft: 5, color: "white", fontSize: 18 }}>
        {page}/{total}
      </Text>
    </LinearGradient>
  );
};

const SocialStatus = props => {
  const { like, comments, replyUsers } = { ...props };
  return (
    <View
      style={{
        marginTop: 70,
        width: "90%",
        height: 30,

        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {replyUsers.map((user, index) => {
          return (
            <Image
              key={index}
              style={{
                marginLeft: 12,
                height: 28,
                width: 28,
                borderRadius: 14,
                resizeMode: "contain",
                borderWidth: 1,
                borderColor: "white"
              }}
              source={user.url}
            />
          );
        })}
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <MyIcon type="AntDesign" name="heart" color="red" size={16} />
          <Text style={{ marginLeft: 10, color: "white" }}>{like}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MyIcon type="AntDesign" name="message1" color="white" size={16} />
          <Text style={{ marginLeft: 10, color: "white" }}>{comments}</Text>
        </View>
      </View>
    </View>
  );
};

const Detail = () => {
  return (
    <View
      style={{
        marginTop: 150,
        borderWidth: 0,
        borderColor: "red",
        height: 450,
        width: "100%",
        paddingLeft: 20,
        alignItems: "flex-start"
      }}
    >
      <Paging total={7} page={3} />
      <View style={{ marginTop: 20, width: "75%" }}>
        <Text style={{ fontSize: 36, color: "white", fontWeight: "bold" }}>
          Cheap Romantic Vacations
        </Text>

        <Text style={{ marginTop: 10, color: "white", fontSize: 16 }}>
          Since the introduction of Virtual Game, it has been achieving great
          heights so far as its popularity and technological advancement are
          concerned. The history of video game is as interesting as a fairy.
        </Text>
      </View>
      <SocialStatus {...profileData} />
    </View>
  );
};

const SendBtn = () => {
  return (
    <MyIcon
      type="Ionicons"
      size={24}
      name="md-send"
      color="rgba(246, 107, 98, 1.000)"
    />
  );
};

const TextEditor = () => {
  return (
    <View
      style={{
        height: 40,
        width: "100%",
        paddingHorizontal: 10,
        borderWidth: 0,
        borderColor: "green",
        position: "absolute",
        bottom: 5,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(72, 81, 100, 1.000)",
          height: 32,
          width: 280,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "flex-start",
          paddingHorizontal: 10,
          color: "white"
        }}
      >
        <TextInput
          placeholderTextColor="white"
          placeholder="Write a comment ..."
          style={{
            height: 32,
            borderColor: "rgba(72, 81, 100, 1.000)"
          }}
        />
      </View>

      <SendBtn />
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container>
          <ImageBackground
            source={require("../assets/images/zingo/detail1.png")}
            style={{ height: "100%", width: "100%" }}
          >
            <MyHeader />
            <Detail />
            <TextEditor />
          </ImageBackground>
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  }
});

// const colorInterpolation = this.state.animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ["rgba(8, 146, 64, 1.000)", "rgba(0, 162, 236, 1.000)"]
//   });
//   const colorStyles = {
//     backgroundColor: colorInterpolation
//   };
