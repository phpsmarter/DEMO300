import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ScrollView
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

const scrollViewData = [
  {
    sssavatarturl: require("../assets/images/zingo/sssavatar1.png"),
    name: "Thomas ",
    hasLive: false
  },
  {
    sssavatarturl: require("../assets/images/zingo/sssavatar2.png"),
    name: "Mike West ",
    hasLive: true
  },
  {
    sssavatarturl: require("../assets/images/zingo/sssavatar3.png"),
    name: "Kevin Dolye ",
    hasLive: false
  },
  {
    sssavatarturl: require("../assets/images/zingo/sssavatar4.png"),
    name: "Victor Block ",
    hasLive: false
  },
  {
    sssavatarturl: require("../assets/images/zingo/sssavatar5.png"),
    name: "Mildred Miles ",
    hasLive: true
  },
  {
    sssavatarturl: require("../assets/images/zingo/sssavatar6.png"),
    name: "Jane Bean ",
    hasLive: false
  }
];

const profileData = {
  profileUrl: require("../assets/images/zingo/profileImage1.png"),
  name: "Marcus Norris",
  time: "2 hours ago",
  tags: [{ tag: "relax" }, { tag: "travel" }],
  content:
    "Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. Located in the heart of Warwickshire, which is well-known as Shakespeare’s county.y",
  hasLive: true,
  like: 1125,
  comments: 348,
  reply: 115
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
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
        height: 40
      }}
    >
      <View style={{ flex: 9, backgroundColor: "rgba(36, 42, 56, 1.000)" }}>
        <Header
          searchBar
          rounded
          style={{
            marginTop: -30,
            justifyContent: "center",
            height: 40,
            backgroundColor: "rgba(36, 42, 56, 1.000)",
            borderBottomWidth: 0
          }}
        >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["rgba(245, 75, 100, 1.000)", "rgba(241, 133, 103, 1.000)"]}
        style={{
          alignSelf: "center",

          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          width: 36,
          height: 36
        }}
      >
        <MyIcon type="FontAwesome" name="camera" color="white" size={16} />
      </LinearGradient>
    </View>
  );
};

const LiveIcon = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(245, 75, 100, 1.000)", "rgba(241, 133, 103, 1.000)"]}
      style={{
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 2,
        borderRadius: 10,
        width: 36,
        height: 12
      }}
    >
      <MyIcon type="FontAwesome" name="video-camera" color="white" size={10} />
      <Text style={{ color: "white", fontSize: 7 }}>LIVE</Text>
    </LinearGradient>
  );
};

const ScrollViewItem = props => {
  const { sssavatarturl, name, hasLive } = { ...props };
  return (
    <View
      style={{
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={sssavatarturl}
          style={{ width: 40, height: 40, resizeMode: "contain" }}
        />

        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            borderColor: "rgba(243, 109, 100, 1.000)",
            borderWidth: 2,
            position: "absolute",
            marginRight: 10
          }}
        />
        {hasLive && (
          <View style={{ position: "absolute", bottom: -6, left: 2 }}>
            <LiveIcon />
          </View>
        )}
      </View>
    </View>
  );
};
const MyScrollView = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        marginTop: 20,
        height: 80,
        width: "100%"
      }}
    >
      <ScrollView horizontal>
        {scrollViewData.map((data, index) => {
          return <ScrollViewItem {...data} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const ProfileTag = props => {
  const { tags } = { ...props };
  return (
    <View
      style={{
        flexDirection: "row",
        height: "100%",
        height: 30,
        paddingHorizontal: 10,
        marginTop: 10
      }}
    >
      {tags.map(tag => {
        return (
          <Text
            style={{
              marginRight: 5,
              fontSize: 14,
              color: "rgba(221, 71, 94, 1.000)"
            }}
            key={tag.tag}
          >
            #{tag.tag}
          </Text>
        );
      })}
    </View>
  );
};

const textStyle = {
  fontSize: 12,
  color: "white"
};

const SocialStatus = props => {
  const { like, comments, reply } = { ...props };
  return (
    <View
      style={{
        marginTop: 10,
        width: "90%",
        height: 30,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <MyIcon type="AntDesign" name="heart" color="white" size={16} />
          <Text style={{ marginLeft: 10, color: "white" }}>{like}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MyIcon type="AntDesign" name="message1" color="white" size={20} />
          <Text style={{ marginLeft: 10, color: "white" }}>{comments}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <MyIcon
          type="MaterialCommunityIcons"
          name="reply"
          color="white"
          size={16}
        />
        <Text style={{ marginLeft: 10, color: "white" }}>{reply}</Text>
      </View>
    </View>
  );
};

const MyProfile = props => {
  return (
    <View style={{ height: 200, width: "100%", paddingHorizontal: 15 }}>
      <Text
        style={{
          fontWeight: "bold",
          marginVertical: 10,
          fontSize: 24,
          color: "white"
        }}
      >
        Popular
      </Text>
      <View>
        <Image
          source={props.data.profileUrl}
          style={{
            marginTop: 20,
            alignSelf: "center",
            height: 250,
            width: "100%"
          }}
        />
      </View>
      <ProfileTag {...props.data} />
      <Text
        style={{
          paddingHorizontal: 10,
          width: "90%",
          textAlign: "left",
          color: "white",
          fontSize: 12,
          marginTop: 10
        }}
      >
        {props.data.content}
      </Text>

      <SocialStatus {...props.data} />
    </View>
  );
};
export default class DemoScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "rgba(36, 42, 56, 1.000)" }}>
        <Content>
          <StatusBar backgroundColor="black" barStyle="light-content" />

          <MyHeader />
          <MyScrollView />
          <MyProfile data={profileData} />
        </Content>
      </Container>
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
