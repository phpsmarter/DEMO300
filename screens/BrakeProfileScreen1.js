import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Icon } from "native-base";
import { LinearGradient } from "expo";
const ImageData = [
  { url: require("../assets/images/BrakeProfile/photo1.png") },
  { url: require("../assets/images/BrakeProfile/photo2.png") },
  { url: require("../assets/images/BrakeProfile/photo3.png") },
  { url: require("../assets/images/BrakeProfile/photo4.png") },
  { url: require("../assets/images/BrakeProfile/photo5.png") }
];
const MyIcon = props => {
  const { type, name, color } = { ...props };
  return (
    <Icon
      type={type}
      style={{
        color: color,
        fontSize: 14,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
      }}
      name={name}
    />
  );
};

const Header = () => {
  return (
    <View
      style={{
        height: 40,
        width: "90%",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MyIcon
          type="Ionicons"
          color="rgba(188, 194, 198, 1.000)"
          name="ios-arrow-back"
        />
        <Text style={{ fontSize: 12 }}>Profile</Text>
      </View>
      <View style={{ flexDirection: "row", alignItem: "center" }}>
        <MyIcon
          type="SimpleLineIcons"
          color="rgba(188, 194, 198, 1.000)"
          name="equalizer"
        />
        <MyIcon
          type="FontAwesome"
          color="rgba(188, 194, 198, 1.000)"
          name="search"
        />
      </View>
    </View>
  );
};

const MyAvatar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0,
        borderColor: "red"
      }}
    >
      <Image
        source={require("../assets/images/BrakeProfile/avatar1.png")}
        style={{ width: 60, height: 60, resizeMode: "cover" }}
      />
      <MyLinearGradient>
        <Text style={{ fontSize: 10, color: "white" }}>+ Follow</Text>
      </MyLinearGradient>
    </View>
  );
};

const MyLinearGradient = props => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(136, 54, 253, 1.000)", "rgba(25, 50, 253, 1.000)"]}
      style={{
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: "center",
        borderRadius: 15,
        width: 80,
        justifyContent: "center",
        height: 30
      }}
    >
      {props.children}
    </LinearGradient>
  );
};

const MyIntro = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Mildred Stewart</Text>
      <Text style={{ fontSize: 12, color: "rgba(172, 178, 182, 1.000)" }}>
        Hi,I'm graphic designer from Copenhagen 🤘
      </Text>
    </View>
  );
};

const MyStat = () => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        height: 60,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8
      }}
    >
      <View>
        <Text style={{ fontSize: 12, textAlign: "center" }}>353</Text>
        <Text
          style={{
            fontSize: 10,
            color: "rgba(172, 178, 182, 1.000)",
            textAlign: "center"
          }}
        >
          Photos
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 14, textAlign: "center" }}>124</Text>
        <Text
          style={{
            fontSize: 10,
            color: "rgba(172, 178, 182, 1.000)",
            textAlign: "center"
          }}
        >
          Articles
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 14, textAlign: "center" }}>74k</Text>
        <Text
          style={{
            fontSize: 10,
            color: "rgba(172, 178, 182, 1.000)",
            textAlign: "center"
          }}
        >
          Followers
        </Text>
      </View>
    </View>
  );
};

const MyPhotos = () => {
  return (
    <View style={{ width: "90%", height: 280 }}>
      <View
        style={{
          marginTop: 10,
          height: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          alignSelf: "center"
        }}
      >
        <Text style={{ fontSize: 12 }}>Photos</Text>
        <Text style={{ fontSize: 12, color: "rgba(172, 178, 182, 1.000)" }}>
          View All
        </Text>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          height: 200
        }}
      >
        {ImageData.map((data, index) => {
          return <Photo key={index} imageUrl={data.url} />;
        })}
        <View
          style={{
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            margin: 10
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["rgba(136, 54, 253, 1.000)", "rgba(25, 50, 253, 1.000)"]}
            style={{
              paddingVertical: 5,
              paddingHorizontal: 15,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              width: 90,
              height: 90
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>+298</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const MyArticle = () => {
  return (
    <View
      style={{ height: 200, width: "90%", borderWidth: 0, borderColor: "red" }}
    >
      <View
        style={{
          marginTop: -10,
          height: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          alignSelf: "center"
        }}
      >
        <Text style={{ fontSize: 12 }}>Articles</Text>
        <Text style={{ fontSize: 12, color: "rgba(172, 178, 182, 1.000)" }}>
          View All
        </Text>
      </View>
      <Image
        source={require("../assets/images/BrakeProfile/article_image.png")}
        style={{ width: "100%", height: 150, resizeMode: "cover" }}
      />
    </View>
  );
};

const Photo = props => {
  const url = props.imageUrl;
  return (
    <Image
      source={url}
      style={{ margin: 10, width: 90, height: 90, borderRadius: 6 }}
    />
  );
};
export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MyAvatar />
        <MyIntro />
        <MyStat />
        <MyPhotos />
        <MyArticle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
