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
import ScrollableTabView from "react-native-scrollable-tab-view";
import FacebookTabBar from "../components/FaceBookTabBar";
const ListViewData = [
  {
    avatarUrl: require("../assets/images/zingo/listAvatar1.png"),

    name: "Alejandro Hicks",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content:
      "If you are an entrepreneur, you know that your success cannot depend on the opinions of others. ",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ]
  },
  {
    avatarUrl: require("../assets/images/zingo/listAvatar2.png"),

    name: "Benjamin Webb",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content:
      "I am upset. At this moment, as I sit here typing this up, I am truly upset. Something happened a little while ago",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ]
  },
  {
    avatarUrl: require("../assets/images/zingo/listAvatar3.png"),

    name: "Cecelia Harrington",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "Global Resorts Network Grn Putting Timeshares To Shame",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ]
  },
  {
    avatarUrl: require("../assets/images/zingo/listAvatar4.png"),

    name: "Barbara Blair",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "3 mutal friends",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ]
  },
  {
    avatarUrl: require("../assets/images/zingo/listAvatar5.png"),

    name: "Louise Thornton",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "3 mutal friends",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ]
  }
];
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
        <MyIcon type="Feather" name="more-vertical" color="white" size={24} />
      </Right>
    </View>
  );
};

const ProfileHeader = () => {
  return (
    <View
      style={{
        marginTop: 50,
        height: 60,
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <Image
        source={require("../assets/images/zingo/profile_avatar1.png")}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 18, color: "white", marginBottom: 10 }}>
          Jorge Curtis
        </Text>
        <Text style={{ fontSize: 12, color: "white" }}>@jorgecutis</Text>
      </View>
    </View>
  );
};

const FollowBtn = props => {
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
        height: 22,
        marginLeft: 10
      }}
    >
      <Text style={{ color: "white", fontSize: 10 }}>FOLLOW</Text>
    </LinearGradient>
  );
};

const SocialStat = () => {
  return (
    <View
      style={{
        height: 60,
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <View>
        <Text style={{ color: "white", marginBottom: 5 }}> 128</Text>
        <Text style={{ color: "rgba(78, 88, 110, 1.000)" }}>Posts</Text>
      </View>
      <View>
        <Text style={{ color: "white", marginBottom: 5 }}> 3120</Text>
        <Text style={{ color: "rgba(78, 88, 110, 1.000)" }}>Following</Text>
      </View>

      <View>
        <Text style={{ color: "white", marginBottom: 5 }}> 5024</Text>
        <Text style={{ color: "rgba(78, 88, 110, 1.000)" }}>Follower</Text>
      </View>

      <View style={{ width: 120, flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "rgba(91, 199, 249, 1.000)",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <MyIcon type="AntDesign" name="adduser" size={20} color="white" />
        </View>

        <FollowBtn />
      </View>
    </View>
  );
};

const ListViewItemHeader = props => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View>
        <Image
          source={require("../assets/images/zingo/listAvatar1.png")}
          style={{ width: 32, height: 32, borderRadius: 16 }}
        />
      </View>

      <View style={{ marginLeft: -160 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            marginBottom: 5
          }}
        >
          Edward Kelly
        </Text>
        <Text style={{ fontSize: 10, color: "rgba(70, 79, 99, 1.000)" }}>
          2 hours ago
        </Text>
      </View>
      <View>
        <MyIcon type="Feather" name="more-horizontal" size={12} color="white" />
      </View>
    </View>
  );
};

const ListViewItemTags = props => {
  const { tags } = { ...props };
  console.log(tags);
  return (
    <View style={{ flexDirection: "row", width: "100%", height: 30 }}>
      {tags.map((tag, index) => {
        return (
          <Text
            key={index}
            style={{
              marginLeft: 5,
              fontSize: 8,
              color: "rgba(77, 87, 108, 1.000)"
            }}
          >
            #{tag.tag}
          </Text>
        );
      })}
    </View>
  );
};

const SocialStatus = props => {
  const { like, comments, replyUsers } = { ...props };
  return (
    <View
      style={{
        marginTop: 15,
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
          <MyIcon type="AntDesign" name="heart" color="red" size={16} />
          <Text style={{ marginLeft: 10, color: "white" }}>{like}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MyIcon type="AntDesign" name="message1" color="white" size={16} />
          <Text style={{ marginLeft: 10, color: "white" }}>{comments}</Text>
        </View>
      </View>
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
                marginRight: -10,
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
    </View>
  );
};
const ListViewItem = props => {
  const { tags, content } = { ...props };
  return (
    <View
      style={{
        height: 160,
        backgroundColor: "rgba(36, 42, 56, 1.000)",
        width: "92%",
        alignSelf: "center",
        paddingHorizontal: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        marginVertical: 10,
        borderRadius: 6
      }}
    >
      <ListViewItemHeader />
      <ListViewItemTags {...props} />
      <Text style={{ paddingHorizontal: 10, fontSize: 10, color: "white" }}>
        {content}
      </Text>
      <SocialStatus {...props} />
    </View>
  );
};

const Tab1 = props => {
  const { ListViewData } = { ...props };
  return (
    <ScrollView style={{ marginTop: 5 }}>
      {ListViewData.map((data, index) => {
        return <ListViewItem {...data} key={index} />;
      })}
    </ScrollView>
  );
};
const Tab2 = () => <Text>tab2</Text>;
const Tab3 = () => <Text>tab3</Text>;
const Tab4 = () => <Text>tab4</Text>;

const MyTab = props => {
  return (
    <ScrollableTabView
      style={{
        backgroundColor: "rgba(34, 41, 53, 1.000)",
        height: 600,
        width: "100%"
      }}
      renderTabBar={() => <FacebookTabBar />}
    >
      <Tab1 tabLabel="md-apps" {...props} />
      <Tab2 tabLabel="ios-image" />
      <Tab3 tabLabel="ios-play-circle" />
      <Tab4 tabLabel="ios-musical-notes" />
    </ScrollableTabView>
  );
};
export default class DemoScreen extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container style={{ backgroundColor: "rgba(36, 42, 56, 1.000)" }}>
          <ImageBackground
            source={require("../assets/images/zingo/profile_header.png")}
            style={{ height: 200, width: "100%" }}
          >
            <MyHeader />
            <ProfileHeader />
          </ImageBackground>
          <SocialStat />
          <MyTab ListViewData={ListViewData} />
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
