import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Icon } from "native-base";
import { LinearGradient } from "expo";
const ImageData = [
  { url: require("../assets/images/BrakeProfile/rect1.png") },
  { url: require("../assets/images/BrakeProfile/rect2.png") },
  { url: require("../assets/images/BrakeProfile/rect3.png") },
  { url: require("../assets/images/BrakeProfile/rect4.png") },
  { url: require("../assets/images/BrakeProfile/rect5.png") },
  { url: require("../assets/images/BrakeProfile/rect6.png") }
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
        justifyContent: "center"
      }}
      name={name}
    />
  );
};

const Profile = () => {
  return (
    <View
      style={{
        flex: 5,
        marginLeft: 20,
        alignItems: "flex-start",
        borderWidth: 0,
        borderColor: "red",
        height: 100,
        padding: 10
      }}
    >
      <Text style={{ fontSize: 14, marginBottom: 10 }}>Thea Mortensen</Text>
      <Text style={{ fontSize: 12 }}>Instagram Influencer</Text>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <MyIcon
          type="AntDesign"
          color="rgba(188, 194, 198, 1.000)"
          name="barschart"
        />
        <Text style={{ fontSize: 12, color: "rgba(201, 206, 209, 1.000)" }}>
          427 Campaigns
        </Text>
      </View>
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
        shadowRadius: 8,
        borderRadius: 6
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
      <MyIcon
        type="Ionicons"
        color="rgba(188, 194, 198, 1.000)"
        name="ios-arrow-back"
      />
      <Text style={{ fontSize: 12 }}>Profile</Text>

      <View style={{ flexDirection: "row" }}>
        <MyIcon
          type="FontAwesome"
          color="rgba(188, 194, 198, 1.000)"
          name="search"
        />
        <MyIcon
          type="SimpleLineIcons"
          color="rgba(188, 194, 198, 1.000)"
          name="settings"
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
        height: 150,
        width: "90%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderWidth: 0,
        borderColor: "red"
      }}
    >
      <Profile />
      <Image
        source={require("../assets/images/BrakeProfile/rectavatar2.png")}
        style={{ width: 120, height: 120, resizeMode: "cover" }}
      />
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
    <View style={{ alignSelf: "center", width: "90%" }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Mildred Stewart</Text>
      <Text style={{ fontSize: 12, color: "rgba(172, 178, 182, 1.000)" }}>
        Interface designer{" "}
        <Text style={{ color: "rgba(18, 50, 254, 1.000)" }}>@PanoplyStore</Text>
      </Text>
    </View>
  );
};

const MyDescription = () => {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
        width: "90%",
        height: 150,

        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 0.2
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%"
        }}
      >
        <Text
          style={{
            fontSize: 12,
            marginBottom: 10
          }}
        >
          About
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "rgba(201, 206, 209, 1.000)",
            marginBottom: 10
          }}
        >
          Learn more
        </Text>
      </View>

      <Text>
        Community Volunteer, Redhead, Friends of Animals, Water Protector, King
        of Lies. I like pop-up books.
      </Text>
    </View>
  );
};

const LinearGradientButton = props => {
  const { color1, color2, text, left } = { ...props };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[color1, color2]}
      style={{
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        width: 100,
        height: 35,
        position: "absolute",
        bottom: -10,
        left: left
      }}
    >
      <Text style={{ color: "white", fontSize: 12 }}>{text}</Text>
    </LinearGradient>
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
          alignSelf: "center",
          paddingHorizontal: 10
        }}
      >
        <Text style={{ fontSize: 12 }}>Instagram Feed</Text>
        <Text style={{ fontSize: 12, color: "rgba(172, 178, 182, 1.000)" }}>
          View Profile
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          height: 200,
          marginLeft: 10
        }}
      >
        {ImageData.map((data, index) => {
          return <Photo key={index} imageUrl={data.url} />;
        })}

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#DF25FC", "#9025FC"]}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 15,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            width: 50,
            height: 50,
            position: "absolute",
            bottom: -10,
            right: -10
          }}
        >
          <MyIcon
            type="MaterialCommunityIcons"
            color="white"
            name="message-text-outline"
          />
        </LinearGradient>
      </View>
    </View>
  );
};

const Photo = props => {
  const url = props.imageUrl;
  return <Image source={url} style={{ margin: 5, width: 95, height: 95 }} />;
};
export default class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MyAvatar />
        <MyStat />
        <MyDescription />
        <MyPhotos />
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
