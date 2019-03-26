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
const ListData = [
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
    reply: 115
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
    reply: 115
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
      {/* <Right>
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
      </Right> */}
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

const MyListItem = props => {
  const { avatarUrl, name, content, time } = { ...props };
  console.log(name);
  return (
    <ListItem avatar style={{ height: 140, alignItems: "center" }}>
      <Left style={{ height: 50 }}>
        <Thumbnail
          source={avatarUrl}
          style={{ height: 40, width: 40, borderRadius: 20 }}
        />
      </Left>
      <Body
        style={{
          height: 140,
          borderBottomWidth: 2,
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
        <Text>{time}</Text>
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
        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            color: "rgba(245, 75, 100, 1.000)"
          }}
        >
          Reply
        </Text>
      </Body>
    </ListItem>
  );
};
const CommentsList = props => {
  const ListData = props.data;
  return (
    <View
      style={{
        height: 600,
        width: "100%",
        paddingHorizontal: 10,
        borderWidth: 0,
        borderColor: "white"
      }}
    >
      <Text style={{ fontSize: 30, color: "white" }}>Comments</Text>
      <View style={{ marginTop: 10 }}>
        <List>
          {ListData.map((item, i) => (
            <MyListItem {...item} key={i} />
          ))}
        </List>
      </View>
    </View>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container style={{ backgroundColor: "rgba(36, 42, 56, 1.000)" }}>
          <MyHeader />
          <CommentsList data={ListData} />
          <TextEditor />
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
