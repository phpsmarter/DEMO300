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
    recturl: require("../assets/images/zingo/rect1.png"),
    ssavatarturl: require("../assets/images/zingo/ssavatar1.png"),
    name: "Thomas Curtis",
    hasLive: true
  },
  {
    recturl: require("../assets/images/zingo/rect2.png"),
    ssavatarturl: require("../assets/images/zingo/ssavatar2.png"),
    name: "Christine Barton",
    hasLive: false
  },
  {
    recturl: require("../assets/images/zingo/rect3.png"),
    ssavatarturl: require("../assets/images/zingo/ssavatar3.png"),
    name: "Nathan Mckiney",
    hasLive: false
  }
];

const profileData = {
  avatarUrl: require("../assets/images/zingo/savatar6.png"),
  profileUrl: require("../assets/images/zingo/profile1.png"),
  name: "Marcus Norris",
  time: "2 hours ago",
  tags: [{ tag: "relax" }, { tag: "travel" }],
  content: "Airport Hotels The Right Way To Start A Short Break Holiday",
  hasLive: true
};

const MyIcon = props => {
  const { type, name, color, checked } = { ...props };
  return (
    <Icon
      type={type}
      style={{
        color: color,
        fontSize: 10,
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
      <View style={{ flex: 1, height: 40, alignSelf: "flex-end" }}>
        <Image
          source={require("../assets/images/zingo/savatar6.png")}
          style={{ height: 40, width: 40, resizeMode: "contain" }}
        />
      </View>
    </View>
  );
};

const ScrollViewTitle = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        paddingHorizontal: 10,
        alignSelf: "center"
      }}
    >
      <Text style={{ fontWeight: "bold", color: "white", fontSize: 26 }}>
        Discover
      </Text>
      <Text style={{ color: "rgba(190, 66, 87, 1.000)", fontSize: 12 }}>
        View all
      </Text>
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
        paddingHorizontal: 5,
        borderRadius: 10,
        width: 50,
        height: 18
      }}
    >
      <MyIcon type="FontAwesome" name="video-camera" color="white" />
      <Text style={{ color: "white", fontSize: 8 }}>LIVE</Text>
    </LinearGradient>
  );
};

const ScrollViewItem = props => {
  const { recturl, ssavatarturl, name, hasLive } = { ...props };
  return (
    <View style={{ height: 180, width: 135, marginRight: 15 }}>
      <Image
        source={recturl}
        style={{ width: 135, height: 180, resizeMode: "cover" }}
      />
      <View
        style={{
          alignItems: "center",
          height: 20,
          width: 80,
          flexDirection: "row",
          position: "absolute",
          left: 5,
          bottom: 10
        }}
      >
        <Image
          source={ssavatarturl}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,

            resizeMode: "contain",
            borderWidth: 0.5,
            borderColor: "rgba(255, 46, 85, 1.000)",
            marginRight: 5
          }}
        />
        <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
          {name}
        </Text>
      </View>
      {hasLive && (
        <View style={{ position: "absolute", top: 10, right: 10 }}>
          <LiveIcon />
        </View>
      )}
    </View>
  );
};
const MyScrollView = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        marginTop: 10,
        height: 250,
        width: "100%"
      }}
    >
      <ScrollViewTitle />
      <ScrollView horizontal>
        {scrollViewData.map((data, index) => {
          return <ScrollViewItem {...data} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const ProfileHeader = props => {
  const { avatarUrl, name, time } = { ...props };
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Left style={{ flexDirection: "row" }}>
        <Image
          source={avatarUrl}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            resizeMode: "contain"
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 16,
              marginBottom: 12
            }}
          >
            {name}
          </Text>
          <Text style={{ color: "rgba(69, 78, 98, 1.000)", fontSize: 10 }}>
            {time}
          </Text>
        </View>
      </Left>
      <Right>
        <MyIcon type="Feather" name="more-horizontal" color="gray" />
      </Right>
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

const MyProfile = props => {
  const hasLive = props.data.hasLive;
  return (
    <View style={{ height: 200, width: "100%", paddingHorizontal: 15 }}>
      <ProfileHeader {...props.data} />
      <ProfileTag {...props.data} />
      <Text
        style={{
          width: "80%",
          textAlign: "left",
          color: "white",
          fontSize: 12,
          marginTop: 10
        }}
      >
        {props.data.content}
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
        {hasLive && (
          <View style={{ position: "absolute", top: 30, right: 30 }}>
            <LiveIcon />
          </View>
        )}
      </View>
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
