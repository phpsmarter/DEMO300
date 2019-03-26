import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput
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
  Icon
} from "native-base";
import { LinearGradient } from "expo";

const listData = [
  {
    url: require("../assets/images/zingo/savatar1.png"),
    name: "Patrick Osborne",
    des: "Your're friends on Facebook",
    checked: true
  },
  {
    url: require("../assets/images/zingo/savatar2.png"),
    des: "Your re friends on Facebook",
    name: "Caleb Klein",
    checked: false
  },
  {
    url: require("../assets/images/zingo/savatar1.png"),
    name: "Patrick Osborne",
    des: "Your're friends on Facebook",
    checked: true
  },
  {
    url: require("../assets/images/zingo/savatar2.png"),
    des: "Your re friends on Facebook",
    name: "Caleb Klein",
    checked: false
  },
  {
    url: require("../assets/images/zingo/savatar1.png"),
    name: "Patrick Osborne",
    des: "Your're friends on Facebook",
    checked: true
  },
  {
    url: require("../assets/images/zingo/savatar2.png"),
    des: "Your re friends on Facebook",
    name: "Caleb Klein",
    checked: false
  }
];

const MyIcon = props => {
  const { type, name, color, checked } = { ...props };
  return (
    <Icon
      type={type}
      style={{
        color: color,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20
      }}
      name={name}
    />
  );
};

const Header = () => {
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
      <MyIcon type="AntDesign" name="close" color="white" />
      <Text style={{ color: "rgba(245, 75, 100, 1.000)", fontSize: 18 }}>
        Next
      </Text>
    </View>
  );
};
const MyListItem = props => {
  const { url, name, des, checked } = { ...props };
  const IconName = checked ? "checkcircle" : "pluscircleo";
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail
          source={url}
          style={{ height: 40, width: 40, borderRadius: 20 }}
        />
      </Left>
      <Body>
        <Text style={{ fontWeight: "bold", color: "white" }}>{name}</Text>
        <Text note style={{ color: "rgba(64, 73, 93, 1.000)" }}>
          {des}
        </Text>
      </Body>
      <Right>
        <MyIcon
          type="AntDesign"
          name={IconName}
          color="rgba(246, 105, 98, 1.000)"
        />
      </Right>
    </ListItem>
  );
};
const ListGroup = props => {
  const listData = props.listData;
  return (
    <>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          marginLeft: 15
        }}
      >
        Invite Friends
      </Text>
      <List>
        {listData.map((data, index) => {
          return <MyListItem {...data} key={index} />;
        })}
      </List>
    </>
  );
};

export default class DemoScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "rgba(36, 42, 56, 1.000)" }}>
        <Content>
          <StatusBar backgroundColor="black" barStyle="light-content" />

          <Header />
          <ListGroup listData={listData} />
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
