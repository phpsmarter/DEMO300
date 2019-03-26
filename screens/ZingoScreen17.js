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

const SocialBtns = [
  {
    name: "adduser",
    type: "AntDesign",
    outercolor: "rgba(91, 199, 249, 1.000)",
    color: "white",
    size: 20
  },
  {
    name: "message1",
    type: "AntDesign",
    outercolor: "rgba(244, 87, 99, 1.000)",
    color: "white",
    size: 20
  },
  {
    name: "phone",
    type: "FontAwesome",
    outercolor: "rgba(76, 217, 99, 1.000)",
    color: "white",
    size: 20
  }
];

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
        marginTop: 90,
        height: 60,
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <Image
        source={require("../assets/images/zingo/profile_avatar4.png")}
        style={{ width: 60, height: 60, borderRadius: 30 }}
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
        width: 100,
        padding: 2,
        height: 30,
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
        martinTop: 30,
        height: 60,
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", color: "white", marginBottom: 5 }}>
          {" "}
          128
        </Text>
        <Text style={{ color: "rgba(78, 88, 110, 1.000)" }}>Posts</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", color: "white", marginBottom: 5 }}>
          {" "}
          3120
        </Text>
        <Text style={{ color: "rgba(78, 88, 110, 1.000)" }}>Following</Text>
      </View>

      <View>
        <Text style={{ fontWeight: "bold", color: "white", marginBottom: 5 }}>
          {" "}
          5024
        </Text>
        <Text style={{ color: "rgba(78, 88, 110, 1.000)" }}>Follower</Text>
      </View>
      <FollowBtn />
    </View>
  );
};

const AboutMe = () => {
  return (
    <View style={{ marginTop: 20, width: "100%", paddingHorizontal: 15 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "white",
          marginBottom: 10
        }}
      >
        About me
      </Text>
      <Text style={{ fontSize: 12, color: "white", lineHeight: 20 }}>
        As conscious traveling Paupers we must always be concerned about our
        dear Mother Earth. If you think about it, you travel across her face,
        and She is the host to your journey; without Her we could not find the
        unfolding adventures that attract and feed
      </Text>
    </View>
  );
};

const VideoIcon = props => {
  const { top, left } = { ...props };
  return (
    <View
      style={{
        top: top,
        left: left,
        position: "absolute",
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "rgba(250, 250, 250, 0.2)",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <MyIcon type="FontAwesome" name="play" size={14} color="white" />
    </View>
  );
};

const ScrollItem = props => {
  const { uri, hasVideo } = { ...props };
  return (
    <View>
      <Image
        source={uri}
        style={{
          width: 100,
          height: 150,
          marginRight: 15,
          borderRadius: 6
        }}
      />
      {hasVideo && <VideoIcon top={50} left={30} />}
    </View>
  );
};

const PhotoGallery = () => {
  const hasLive = true;
  return (
    <View style={{ marginTop: 20, width: "100%", paddingHorizontal: 15 }}>
      <Text
        style={{
          fontSize: 18,
          color: "white"
        }}
      >
        Photo
      </Text>
      <ScrollView horizontal pagingEnabled style={{ marginTop: 10 }}>
        <ScrollItem
          uri={require("../assets/images/zingo/profile_photo1.png")}
          hasVideo={true}
        />
        <ScrollItem
          uri={require("../assets/images/zingo/profile_photo2.png")}
          hasVideo={false}
        />
        <ScrollItem
          uri={require("../assets/images/zingo/profile_photo3.png")}
          hasVideo={true}
        />
      </ScrollView>
    </View>
  );
};

const FriendsItem = props => {
  return (
    <Image
      source={props.uri}
      style={{ marginRight: 25, height: 40, width: 40, borderRadius: 20 }}
    />
  );
};

const FriendsGallery = () => {
  return (
    <View style={{ marginTop: 10, width: "100%", paddingHorizontal: 15 }}>
      <Text style={{ fontSize: 18, color: "white" }}>Friends</Text>
      <ScrollView horizontal pagingEnabled style={{ marginTop: 10 }}>
        <FriendsItem uri={require("../assets/images/zingo/listAvatar1.png")} />
        <FriendsItem uri={require("../assets/images/zingo/listAvatar2.png")} />
        <FriendsItem uri={require("../assets/images/zingo/listAvatar3.png")} />
        <FriendsItem uri={require("../assets/images/zingo/listAvatar4.png")} />
        <FriendsItem uri={require("../assets/images/zingo/listAvatar5.png")} />
      </ScrollView>
    </View>
  );
};
export default class DemoScreen extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container style={{ backgroundColor: "rgba(6, 37, 57, 1.000)" }}>
          <ImageBackground
            source={require("../assets/images/zingo/profile_image3.png")}
            style={{ height: 300, width: "100%" }}
          >
            <MyHeader />

            <ProfileHeader />
            <SocialStat />
          </ImageBackground>
          <AboutMe />
          <PhotoGallery />
          <FriendsGallery />
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
