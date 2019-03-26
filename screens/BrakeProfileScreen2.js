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

const Profile = () => {
  return (
    <View
      style={{
        flex: 7,
        marginLeft: 20,
        alignItems: "flex-start",
        borderWidth: 0,
        borderColor: "red",
        height: 100,
        padding: 10
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View style={{ marginRight: 20 }}>
          <Text style={{ marginBottom: 5, fontSize: 14 }}>1.2k</Text>
          <Text style={{ color: "rgba(188, 194, 198, 1.000)", fontSize: 10 }}>
            Following
          </Text>
        </View>
        <View>
          <Text style={{ marginBottom: 5, fontSize: 14 }}>32k</Text>
          <Text style={{ color: "rgba(188, 194, 198, 1.000)", fontSize: 10 }}>
            Followers
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MyIcon
          type="EvilIcons"
          color="rgba(188, 194, 198, 1.000)"
          name="location"
        />
        <Text style={{ fontSize: 10, color: "rgba(188, 194, 198, 1.000)" }}>
          San Francisco,CA
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

      <MyIcon
        type="FontAwesome"
        color="rgba(188, 194, 198, 1.000)"
        name="search"
      />
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
      <Image
        source={require("../assets/images/BrakeProfile/rectAvtar.png")}
        style={{ width: 100, height: 100, resizeMode: "cover", flex: 3 }}
      />
      <Profile />
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
        backgroundColor: "rgba(171, 179, 183, 0.2)",
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 0.2
      }}
    >
      <Text
        style={{
          color: "rgba(171, 179, 183, 1.000)",
          fontSize: 14,
          marginBottom: 10
        }}
      >
        Description
      </Text>
      <Text>
        Community Volunteer, Redhead, Friends of Animals, Water Protector, King
        of Lies. I like pop-up books.
      </Text>
      <LinearGradientButton
        color1="rgba(217, 59, 252, 1.000)"
        color2="rgba(151, 54, 252, 1.000)"
        text="Message"
        left={100}
      />
      <LinearGradientButton
        color1="rgba(135, 54, 253, 1.000)"
        color2="rgba(36, 51, 254, 1.000)"
        text="Follow"
        left={230}
      />
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

<MyLinearGradient>
  <Text style={{ fontSize: 10, color: "white" }}>+ Follow</Text>
</MyLinearGradient>;
