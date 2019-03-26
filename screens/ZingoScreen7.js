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
    { url: require("../assets/images/zingo/sssavatar1.png") },
    { url: require("../assets/images/zingo/sssavatar1.png") }
  ]
};

const eventsData = [
  {
    url: require("../assets/images/zingo/events1.png"),
    title: "LIVE-On the Radio",
    startTime: "10:30",
    type: "Freedom Trail",
    hasLive: true
  },
  {
    url: require("../assets/images/zingo/events2.png"),
    title: "Happy new Year !",
    startTime: "9:30",
    type: "Front Sumter",
    hasLive: false
  },
  {
    url: require("../assets/images/zingo/events3.png"),
    title: "Google I/O",
    startTime: "10:30",
    type: "WashingTon DC",
    hasLive: false
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
        <MyIcon type="FontAwesome" name="plus" color="white" size={16} />
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
  const { like, comments, replyUsers } = { ...props };
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
                marginLeft: -15,
                height: 40,
                width: 40,
                borderRadius: 20,
                resizeMode: "contain",
                borderWidth: 0.8,
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

const MyProfile = props => {
  const { avatarUrl, name, time, content } = { ...props.data };
  return (
    <View style={{ height: 200, width: "100%", paddingHorizontal: 15 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginBottom: 20,
          justifyContent: "space-between",
          paddingHorizontal: 10,
          alignSelf: "center",
          height: 40
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={avatarUrl}
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              resizeMode: "contain"
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 14, color: "white", marginBottom: 10 }}>
              {name}
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>{time}</Text>
          </View>
        </View>
        <View>
          <MyIcon
            type="Feather"
            name="more-horizontal"
            color="rgba(78, 88, 110, 1.000)"
            size={14}
          />
        </View>
      </View>
      <Text style={{ fontSize: 13, color: "white" }}>{content} </Text>

      <SocialStatus {...props.data} />
    </View>
  );
};

const Events = props => {
  return (
    <View style={{ width: "100%", paddingHorizontal: 10 }}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 30,
          color: "white",
          fontWeight: "bold"
        }}
      >
        Events
      </Text>
      <View
        style={{
          height: 150,
          width: "100%",
          paddingHorizontal: 10,
          alignSelf: "center"
        }}
      >
        <EventScrollView {...props} />
      </View>
    </View>
  );
};

const EventScrollView = props => {
  const eventsScrollViewData = props.data;
  return (
    <ScrollView horizontal>
      {eventsScrollViewData.map((data, index) => {
        return <EventItem {...data} key={index} />;
      })}
    </ScrollView>
  );
};

const EventItem = props => {
  const { url, title, type, hasLive, startTime } = { ...props };
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Image
        source={url}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <Text
        style={{ color: "white", fontSize: 12, marginTop: 10, marginBottom: 5 }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Text style={{ color: "rgba(57, 65, 83, 1.000)" }}>{startTime}</Text>
        <Text style={{ color: "rgba(57, 65, 83, 1.000)" }}>{type}</Text>
      </View>
      {hasLive && (
        <View style={{ position: "absolute", top: 10, right: 40 }}>
          <LiveIcon />
        </View>
      )}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              alignSelf: "center",
              paddingHorizontal: 10,
              marginTop: 20
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 10,
                fontSize: 30,
                color: "white"
              }}
            >
              Stories
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 14,
                color: "rgba(243, 74, 99, 1.000)"
              }}
            >
              View all
            </Text>
          </View>
          <MyScrollView />
          <MyProfile data={profileData} />
          <Events data={eventsData} />
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
