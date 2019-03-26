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
    avatarUrl: require("../assets/images/zingo/message1.png"),

    name: "Christopher",
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
    ],
    hasActive: true
  },
  {
    avatarUrl: require("../assets/images/zingo/message2.png"),

    name: "Reese",
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
    ],
    hasActive: true
  },
  {
    avatarUrl: require("../assets/images/zingo/message3.png"),

    name: "Jeffrey",
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
    ],
    hasActive: true
  },
  {
    avatarUrl: require("../assets/images/zingo/message4.png"),

    name: "Laura",
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
    ],
    hasActive: true
  },
  {
    avatarUrl: require("../assets/images/zingo/message5.png"),

    name: "Maldine",
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
    ],
    hasActive: false
  }
];

const listViewData2 = [
  {
    avatarUrl: require("../assets/images/zingo/message6.png"),

    name: "Herman Pope",
    time: "04:04 AM",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "Hey! How's it going",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ],
    hasActive: false,
    unreadMessage: 3
  },

  {
    avatarUrl: require("../assets/images/zingo/message7.png"),

    name: "Sue calldwell",
    time: "08:50 PM",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "What kind of music do you like?",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ],
    hasActive: false,
    unreadMessage: 1
  },
  {
    avatarUrl: require("../assets/images/zingo/message8.png"),

    name: "Ada Reyes",
    time: "04:04 AM",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "Sounds good to me!",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ],
    hasActive: false,
    unreadMessage: 0
  },
  {
    avatarUrl: require("../assets/images/zingo/message9.png"),

    name: "Hallie Sandoval ",
    time: "04:04 AM",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "Hey Tina ! How's your night going?",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ],
    hasActive: false,
    unreadMessage: 0
  },
  {
    avatarUrl: require("../assets/images/zingo/message10.png"),

    name: "Dean Warren",
    time: "09:43 AM",
    tags: [{ tag: "relax" }, { tag: "travel" }],
    content: "What did you do over the weekend",
    hasVideo: false,
    like: 1125,
    comments: 348,
    reply: 115,
    replyUsers: [
      { url: require("../assets/images/zingo/sssavatar1.png") },
      { url: require("../assets/images/zingo/sssavatar3.png") },
      { url: require("../assets/images/zingo/sssavatar2.png") }
    ],
    hasActive: false,
    unreadMessage: 0
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
        <MyIcon
          type="AntDesign"
          name="plus"
          color="rgba(246, 105, 100, 1.000)"
          size={24}
        />
      </Right>
    </View>
  );
};

const ActiveIcon = props => {
  const { bottom, right } = { ...props };
  return (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "rgba(125, 211, 32, 1.000)",
        borderWidth: 1.2,
        borderColor: "white",
        position: "absolute",
        bottom: bottom,
        right: right
      }}
    />
  );
};

const ScrollItem = props => {
  const { avatarUrl, name, hasActive } = { ...props };
  return (
    <View style={{ width: 60, height: 70, marginHorizontal: 8 }}>
      <Image
        source={avatarUrl}
        style={{
          width: 52,
          height: 52,
          marginRight: 10,
          borderRadius: 26
        }}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          fontSize: 10,
          color: "white"
        }}
      >
        {name}
      </Text>
      {hasActive && <ActiveIcon bottom={15} right={15} />}
    </View>
  );
};

const MessageGallery = props => {
  const data = props.data;
  return (
    <View style={{ marginTop: 20, width: "100%", paddingHorizontal: 15 }}>
      <Text
        style={{
          fontSize: 20,
          color: "white"
        }}
      >
        Messages
      </Text>

      <ScrollView horizontal pagingEnabled style={{ marginTop: 10 }}>
        {data.map((item, index) => {
          return <ScrollItem {...item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const NumberBadge = props => {
  const { bottom, right, size, color, unreadMessage } = { ...props };

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color ? color : "rgba(246, 105, 100, 1.000)",
        borderWidth: 1.2,
        borderColor: "white",
        position: "absolute",
        bottom: bottom,
        right: right,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: 10, color: "white" }}>{unreadMessage}</Text>
    </View>
  );
};

const ListView = props => {
  const ListData = props.data;
  return (
    <View
      style={{
        marginTop: 20,
        height: 600,
        width: "100%",
        paddingHorizontal: 10,
        borderWidth: 0,
        borderColor: "white"
      }}
    >
      <List>
        {ListData.map((item, i) => (
          <MyListItem {...item} key={i} />
        ))}
      </List>
    </View>
  );
};

const MyListItem = props => {
  const { avatarUrl, name, content, time, unreadMessage } = { ...props };
  const hasUnreadMessage = unreadMessage > 0 ? true : false;
  return (
    <ListItem
      avatar
      style={{ height: 90, alignItems: "center", marginBottom: 10 }}
    >
      <Left style={{ height: 60 }}>
        <View>
          <Thumbnail
            source={avatarUrl}
            style={{ height: 54, width: 54, borderRadius: 27 }}
          />
          {hasUnreadMessage && (
            <NumberBadge
              size={18}
              unreadMessage={unreadMessage}
              bottom={5}
              right={-5}
            />
          )}
        </View>
      </Left>
      <Body
        style={{
          height: 90,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(21, 26, 34, 1.000)"
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 14,
            marginBottom: 5
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            marginBottom: 10,
            fontSize: 14,
            color: "white"
          }}
          note
        >
          {content}
        </Text>
      </Body>
      <Left
        style={{
          height: 90,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(21, 26, 34, 1.000)"
        }}
      >
        <Text style={{ color: "rgba(65, 73, 93, 1.000)" }}>{time}</Text>
      </Left>
    </ListItem>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container style={{ backgroundColor: "rgba(36, 42, 56, 1.000)" }}>
          <MyHeader />

          <MessageGallery data={ListViewData} />
          <ListView data={listViewData2} />
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
