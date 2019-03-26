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
import { StyleText } from "../components/StyledText";
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
const ListData = [
  {
    avatarUrl: require("../assets/images/zingo/listAvatar1.png"),

    name: "Alejandro Hicks",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "3 mutal friends",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
  },
  {
    avatarUrl: require("../assets/images/zingo/listAvatar2.png"),

    name: "Benjamin Webb",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "3 mutal friends",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
  },
  {
    avatarUrl: require("../assets/images/zingo/listAvatar3.png"),

    name: "Cecelia Harrington",
    time: "2 hours ago",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "3 mutal friends",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115
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
    reply: 115
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
    <Header
      searchBar
      rounded
      style={{
        marginTop: -10,
        justifyContent: "center",
        height: 10,
        backgroundColor: "rgba(28, 32, 43, 1.000)",
        borderBottomWidth: 0
      }}
    >
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
      </Item>
    </Header>
  );
};
const ListHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
        width: "100%",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <StyleText color="white" size={18}>
        Recent search
      </StyleText>
      <StyleText color="rgba(238, 73, 98, 1.000)" size={12}>
        Clear all{" "}
      </StyleText>
    </View>
  );
};

const FollowBtn = () => {
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
        width: 50,
        paddingHorizontal: 5,
        height: 18
      }}
    >
      <Text style={{ width: 50, color: "white", fontSize: 8 }}>FOLLOW</Text>
    </LinearGradient>
  );
};

const MyListItem = props => {
  const { avatarUrl, name, content } = { ...props };
  console.log(name);
  return (
    <ListItem avatar style={{ height: 60, alignItems: "center" }}>
      <Left style={{ height: 50 }}>
        <Thumbnail
          source={avatarUrl}
          style={{ height: 40, width: 40, borderRadius: 20 }}
        />
      </Left>
      <Body
        style={{
          height: 50,
          borderBottomWidth: 3,
          borderBottomColor: "rgba(21, 26, 34, 1.000)"
        }}
      >
        <Text style={{ color: "white", fontSize: 12, marginBottom: 5 }}>
          {name}
        </Text>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 10,
            color: "rgba(75, 87, 108, 1.000)"
          }}
          note
        >
          {content}
        </Text>
      </Body>
      <Right
        style={{
          height: 55,
          justifyContent: "center",
          borderBottomWidth: 3,
          borderBottomColor: "rgba(21, 26, 34, 1.000)"
        }}
      >
        <FollowBtn />
      </Right>
    </ListItem>
  );
};
const FriendsList = props => {
  const ListData = props.listData;
  //console.log(ListData);
  return (
    <View style={{ marginTop: 10 }}>
      <ListHeader />
      <List>
        {ListData.map((item, i) => (
          <MyListItem {...item} key={i} />
        ))}
      </List>
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <Content style={{ backgroundColor: "rgba(28, 32, 42, 1.000)" }}>
          <View
            style={{
              marginTop: 40,
              height: 60,
              width: "90%",
              paddingHorizontal: 10
            }}
          >
            <MyIcon
              type="AntDesign"
              size={20}
              color="rgba(250, 250, 250, 1.000)"
              name="close"
            />
            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
              }}
            >
              Search
            </Text>
          </View>
          <MyHeader />
          <FriendsList
            style={{ width: "100%", height: 400 }}
            listData={ListData}
          />
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
