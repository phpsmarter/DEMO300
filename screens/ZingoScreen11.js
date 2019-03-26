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
  Tab,
  Tabs,
  TabHeading,
  Button as NativeButton
} from "native-base";
import { LinearGradient } from "expo";
import { StyleText } from "../components/StyledText";
import styled from "styled-components/native";

import ScrollableTabView from "react-native-scrollable-tab-view";

const StyledTabs = styled(Tabs)`
  background-color: rgba(121, 122, 128, 000);
`;
const ForYourData = [
  {
    url: require("../assets/images/zingo/livestream2_bg.png"),
    name: "Lena Sutton",
    avatar: require("../assets/images/zingo/listAvatar1.png")
  },

  {
    url: require("../assets/images/zingo/livestream2_img3.png"),
    name: "Allie Burke",
    avatar: require("../assets/images/zingo/listAvatar2.png")
  },
  {
    url: require("../assets/images/zingo/livestream2_bg.png"),
    name: "Isaiah Betty",
    avatar: require("../assets/images/zingo/listAvatar3.png")
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
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/images/zingo/livestream2_avatar.png")}
            style={{ width: 36, height: 36 }}
          />
          <View style={{ marginLeft: 10 }}>
            <StyleText color="white" size={15}>
              Devin Stewart
            </StyleText>
            <StyleText color="white" size={10}>
              01:08:03
            </StyleText>
          </View>
        </View>
      </Left>
      <Right>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <MyIcon type="AntDesign" name="close" color="black" size={12} />
        </View>
      </Right>
    </View>
  );
};

const ScrollViewContent = props => {
  const data = props.data;

  return (
    <View
      style={{
        marginTop: 5,
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: "white",
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
        height: 252,
        width: 127
      }}
    >
      <Image
        style={{
          height: 250,
          width: 125,
          borderRadius: 6,
          resizeMode: "cover"
        }}
        source={data.url}
      />
      <Text
        style={{
          position: "absolute",
          right: 5,
          top: 10,
          color: "white",
          fontSize: 10
        }}
      >
        03:20
      </Text>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 5,
          left: 2,
          width: "100%",
          alignSelf: "flex-start"
        }}
      >
        <Image source={data.avatar} style={{ width: 20, height: 20 }} />
        <Text style={{ marginLeft: 5, fontSize: 8 }}>{data.name}</Text>
      </View>
    </View>
  );
};

const Tab1 = props => {
  const { scrollViewData } = { ...props };
  return (
    <ScrollView horizontal pagingEnabled style={{ marginTop: 5 }}>
      {scrollViewData.map((data, index) => {
        return <ScrollViewContent data={data} key={index} />;
      })}
    </ScrollView>
  );
};
const Tab2 = () => <Text>tab2</Text>;
const Tab3 = () => <Text>tab3</Text>;

const MyTab = props => {
  return (
    <ScrollableTabView
      style={{
        backgroundColor: "rgba(121, 122, 128, 000)"
      }}
      tabBarUnderlineStyle={{
        backgroundColor: "white"
      }}
      tabBarActiveTextColor="white"
      tabBarTextColor="rgba(196, 183, 165, 1.000)"
    >
      <Tab1 tabLabel="For Your" {...props} />
      <Tab2 tabLabel="Following" />
      <Tab3 tabLabel="Popular" />
    </ScrollableTabView>
  );
};

const ForYourComponent = props => {
  return (
    <View
      style={{
        marginTop: 320,
        height: 320,
        width: "100%",
        borderWidth: 0,
        borderColor: "red",
        backgroundColor: "rgba(205, 206, 206, 000)"
      }}
    >
      <MyTab {...props} />
    </View>
  );
};

export default class DemoScreen extends Component {
  state = {
    forYourData: ForYourData
  };
  render() {
    const fyData = this.state.forYourData;
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container>
          <ImageBackground
            source={fyData[0].url}
            style={{ height: "100%", width: "100%" }}
          >
            <MyHeader />
            <ForYourComponent scrollViewData={fyData} />
          </ImageBackground>
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
