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

const popularData = [
  {
    avatarUrl: require("../assets/images/zingo/savatar1.png"),
    imageUrls: [{ url: require("../assets/images/zingo/popular1.png") }],
    username: "Joel Jacobs",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "Bryce Canyon A Stunning Us Travel Destination",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
  },
  {
    avatarUrl: require("../assets/images/zingo/ssavatar2.png"),
    imageUrls: [],
    username: "Daisy Perry",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content:
      "For travellers searching for top of the line accommodation, try the Four Seasons Las Vegas.",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
  },
  {
    avatarUrl: require("../assets/images/zingo/ssavatar3.png"),
    imageUrls: [],
    username: "Birdie Ball",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content:
      "es since early Greek times, these days the stag do is more often a full-bodied stag weekend with activities planned for day and night. A Birmingham stag do gives your party the chance to take in a day at the races, compete in races of your own, bust a gut laughing at some of the finest comedy in the UK, and then get up in the morning to head out for a full day of off-road karting, paintball tournaments, quad biking or whitewater rafting. ",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
  },
  {
    avatarUrl: require("../assets/images/zingo/ssavatar3.png"),
    imageUrls: [
      { url: require("../assets/images/zingo/popular2.png") },
      { url: require("../assets/images/zingo/popular3.png") }
    ],
    username: "Daisy Perry",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "The 6 Step Non Surgical Facial Rejuvenation Program.",
    hasVideo: true,
    like: 1125,
    comments: 348,
    reply: 115
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
        <MyIcon type="FontAwesome" name="camera" color="white" size={20} />
      </LinearGradient>
    </View>
  );
};

const SocialStatus = props => {
  const { like, comments } = { ...props };
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
          <Text style={{ marginLeft: 10, color: "rgba(247, 110, 98, 1.000)" }}>
            {like}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MyIcon type="AntDesign" name="message1" color="white" size={20} />
          <Text style={{ marginLeft: 10, color: "white" }}>{comments}</Text>
        </View>
      </View>
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

const PopularItem = props => {
  console.log(props.data);
  const imageUrls = props.data.imageUrls;
  const hasImage = imageUrls.length > 0 ? true : false;

  return (
    <View
      style={{
        padding: 10,
        width: "45%",
        marginVertical: 10,
        backgroundColor: "rgba(36, 42, 56, 1.000)",
        marginHorizontal: 5,
        borderRadius: 6,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      }}
    >
      <ItemHeader {...props.data} />
      {hasImage && <ItemImages {...props.data} />}
      <ProfileTag {...props.data} />
      <Text style={{ color: "white", height: 100, overflow: "hidden" }}>
        {props.data.content}
      </Text>
      <SocialStatus {...props.data} />
    </View>
  );
};

const ItemHeader = props => {
  const { avatarUrl, username, time } = { ...props };
  return (
    <View
      style={{
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <Image
        source={avatarUrl}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          resizeMode: "contain"
        }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 14,
            marginBottom: 5
          }}
        >
          {username}
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "rgba(67, 75, 96, 1.000)",
            fontSize: 10
          }}
        >
          {time}
        </Text>
      </View>
    </View>
  );
};

const ItemImages = props => {
  const imageUrls = props.imageUrls;
  const hasVideo = props.hasVideo;
  return (
    <ScrollView horizontal style={{ width: "100%", height: 100 }}>
      {imageUrls.map((data, index) => {
        return (
          <View key={index}>
            <Image
              source={data.url}
              key={index}
              style={{
                flex: 1,
                height: 100,
                width: 100,
                resizeMode: "cover"
              }}
            />
            {hasVideo && <VideoIcon top={20} left={20} />}
          </View>
        );
      })}
    </ScrollView>
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

export default class DemoScreen extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <Content style={{ backgroundColor: "rgba(28, 32, 42, 1.000)" }}>
          <MyHeader style={{ alignItems: "center" }} />
          <Text
            style={{
              marginTop: 10,
              marginLeft: 10,
              fontSize: 30,
              color: "white",
              fontWeight: "bold"
            }}
          >
            Popular
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              flex: 1
            }}
          >
            {popularData.map((data, index) => {
              return <PopularItem data={data} key={index} />;
            })}
          </View>
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

const popularData2 = [
  {
    avatarUrl: require("../assets/images/zingo/savatar1.png"),
    imageUrls: [{ url: require("../assets/images/zingo/popular1.png") }],
    name: "Joel Jacobs",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "Bryce Canyon A Stunning Us Travel Destination",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
  },
  {
    avatarUrl: require("../assets/images/zingo/ssavatar2.png"),
    imageUrls: [],
    name: "Daisy Perry",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content:
      "For travellers searching for top of the line accommodation, try the Four Seasons Las Vegas.",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
  },
  {
    avatarUrl: require("../assets/images/zingo/ssavatar3.png"),
    imageUrls: [],
    name: "Birdie Ball",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content:
      "es since early Greek times, these days the stag do is more often a full-bodied stag weekend with activities planned for day and night. A Birmingham stag do gives your party the chance to take in a day at the races, compete in races of your own, bust a gut laughing at some of the finest comedy in the UK, and then get up in the morning to head out for a full day of off-road karting, paintball tournaments, quad biking or whitewater rafting. ",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
  },
  {
    avatarUrl: require("../assets/images/zingo/ssavatar3.png"),
    imageUrls: [
      { url: require("../assets/images/zingo/popular2.png") },
      { url: require("../assets/images/zingo/popular3.png") }
    ],
    name: "Daisy Perry",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "The 6 Step Non Surgical Facial Rejuvenation Program.",
    hasVideo: true,
    like: 1125,
    comments: 348,
    reply: 115
  }
];
