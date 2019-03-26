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
const AnimatedIcon = Animated.createAnimatedComponent(Icon);
import { keyframes, stagger } from "popmotion";
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
            source={require("../assets/images/zingo/listAvatar1.png")}
            style={{ width: 36, height: 36 }}
          />
          <View style={{ marginLeft: 10 }}>
            <StyleText color="white" size={15}>
              Russell Lee
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

const SendBtn = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(245, 75, 100, 1.000)", "rgba(241, 133, 103, 1.000)"]}
      style={{
        alignSelf: "center",

        alignItems: "center",
        justifyContent: "center",

        borderRadius: 15,
        width: 30,
        padding: 2,
        height: 30
      }}
    >
      <MyIcon type="Ionicons" size={16} name="md-send" color="white" />
    </LinearGradient>
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
          backgroundColor: "rgba(205, 206, 206, 1.000)",
          height: 32,
          width: 280,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "flex-start",
          paddingHorizontal: 10
        }}
      >
        <TextInput placeholder="Write a comment ..." />
      </View>

      <SendBtn />
    </View>
  );
};

const ShareBtn = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(245, 75, 100, 1.000)", "rgba(241, 133, 103, 1.000)"]}
      style={{
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 15,
        width: 150,
        padding: 2,
        height: 28,
        position: "absolute",
        top: "70%",
        left: 20
      }}
    >
      <MyIcon type="SimpleLineIcons" size={16} name="share-alt" color="white" />
      <Text style={{ marginLeft: 5, color: "white", fontSize: 12 }}>
        Share with friends
      </Text>
    </LinearGradient>
  );
};

MessageItem = props => {
  const { imageUrl, text, name, py } = { ...props };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(57, 61, 55, 0.7)", "rgba(57, 61, 55, 0.7)"]}
      style={{
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 30,
        width: 200,
        padding: 2,
        height: 40,
        position: "absolute",
        top: py,
        left: 20
      }}
    >
      <Image source={imageUrl} style={{ width: 36, height: 36 }} />
      <View style={{ marginLeft: 5 }}>
        <Text
          style={{
            color: "rgba(121, 122, 128, 1.000)",
            fontSize: 10,
            marginBottom: 5
          }}
        >
          {name}
        </Text>

        <Text style={{ color: "white", fontSize: 12 }}>{text}</Text>
      </View>
    </LinearGradient>
  );
};

//TODO  💕的动画线不做, 把UI做好
const ChatRoom = props => {
  const hearAnimations = props.IconAnimation;

  return (
    <View
      style={{
        height: "85%",
        width: "90%",
        borderWidth: 0,
        borderColor: "red",
        alignSelf: "center"
      }}
    >
      {/* {hearAnimations.map((item, i) => {
        return <HeartIcon {...item} key={i} />;
      })} */}
      <ShareBtn />
      <MessageItem
        imageUrl={require("../assets/images/zingo/listAvatar1.png")}
        text="Awesome Love It ❤️"
        name="Jean Walton"
        py={470}
      />
      <MessageItem
        imageUrl={require("../assets/images/zingo/listAvatar2.png")}
        text="Wow... so pretty!"
        name="Willie Singleton"
        py={520}
      />
      <TextEditor />
    </View>
  );
};

const HeartIcon = props => {
  const { color, size, opacity, scale, py, rotateDeg } = { ...props };
  const fs = size ? size : 18;
  const y = py ? py : 100;
  const rotate = rotateDeg ? rotateDeg : "45deg";

  const animatedStyle = {
    transform: [{ translateY: y }, { rotate: rotate }, { scale: scale }],
    opacity: opacity,
    color: color
  };
  return (
    <AnimatedIcon
      type="Foundation"
      style={[
        {
          fontSize: fs,
          alignItems: "center",
          justifyContent: "center",

          position: "absolute",
          bottom: 40,
          right: 25
        },
        animatedStyle
      ]}
      name="heart"
    />
  );
};

const COUNT = 5;
const DURATION = 4000;
const intialPhase = { color: "rgba(18, 50, 254, 1.000)", scale: 0, opacity: 1 };
const constructanimations = () =>
  [...Array(COUNT).keys()].map(index => intialPhase);
export default class DemoScreen extends Component {
  //FIXME  下面注释是动画部分的配置,暂时不做
  //   state = {
  //     animations: constructanimations()
  //   };

  //   animateIcons = () => {
  //     const frames = Array(COUNT).fill(
  //       keyframes({
  //         values: [
  //           intialPhase,
  //           { color: "rgba(238, 73, 98, 1.000)", scale: 2, opacity: 0 }
  //         ],
  //         duration: DURATION,
  //         loop: Infinity,
  //         yoyo: Infinity
  //       })
  //     );
  //     stagger(frames, DURATION / COUNT).start(animations => {
  //       this.setState({ animations });
  //     });
  //   };

  //   componentDidMount() {
  //     // this.animateIcons();
  //   }

  render() {
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container>
          <ImageBackground
            source={require("../assets/images/zingo/chat_background.png")}
            style={{ height: "100%", width: "100%" }}
          >
            <MyHeader />
            <ChatRoom />
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
