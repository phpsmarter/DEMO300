import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  Animated
} from "react-native";
import Pulse from "react-native-pulse";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Constants, Location, Permissions, MapView } from "expo";
import { Icon } from "native-base";
import { Marker } from "react-native-maps";
import { allSettled } from "rsvp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo";
const location = { latitude: 23.1066805, longitude: 113.3245904 };
const locationData = [
  {
    location: { latitude: 23.1066805, longitude: 113.3245904 },
    name: "GZ Tower"
  },
  {
    location: { latitude: 23.1379308889, longitude: 113.2656064727 },
    name: "GZ Museum"
  },
  {
    location: { latitude: 23.116264, longitude: 113.326042 },
    name: "GZ Library"
  },
  { location: { latitude: 23.14802, longitude: 113.30887 }, name: "GZ Opera" }
];

const MarkerAtMap = props => {
  const { location, name } = { ...props };
  return (
    <TouchableWithoutFeedback onPress={() => alert("test")}>
      <Marker coordinate={location} title={name} description={name}>
        <Pulse
          color="orange"
          numPulses={3}
          diameter={30}
          speed={30}
          duration={3000}
        />
      </Marker>
    </TouchableWithoutFeedback>
  );
};

const InformationScrollView = () => {
  return (
    <ScrollView horizontal style={{ height: 80, width: 500 }}>
      <Image
        source={require("../assets/images/bicycle/map-introduction1.png")}
        style={{ height: 120, width: 140, resizeMode: "contain" }}
      />
      <Image
        source={require("../assets/images/bicycle/map-introduction2.png")}
        style={{ height: 120, width: 140, resizeMode: "contain" }}
      />
    </ScrollView>
  );
};

const SelectedButton = props => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["rgba(22, 157, 218, 1.000)", "rgba(43, 196, 248, 1.000)"]}
      style={{
        alignItems: "center",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        borderRadius: 12,
        alignSelf: "center",
        marginTop: 10,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: "rgba(44, 195, 248, 1.000)"
      }}
    >
      <Text>Select Bike</Text>
    </LinearGradient>
  );
};
const InformationCard = props => {
  const animation = props.animation;
  const hiddenCard = props.hiddenCard;
  return (
    <Animated.View
      style={{
        position: "absolute",
        left: "10%",
        bottom: animation,
        backgroundColor: "white",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: "gray",
        height: 250,
        width: "80%",
        borderRadius: 12,
        padding: 20
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              letterSpacing: 1,
              fontWeight: "bold",
              marginBottom: 5
            }}
          >
            Surly Pack Rat 2019
          </Text>
          <Text style={{ fontSize: 10, color: "rgba(120, 122, 147, 1.000)" }}>
            Light Pavement Touring Bike
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={props.hiddenCard}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 6,
              shadowOffset: { width: -1, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 6,
              shadowColor: "gray",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon
              type="Entypo"
              style={{
                color: "black",
                fontSize: 24,
                alignItems: "center",
                justifyContent: "center"
              }}
              name="chevron-small-down"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          marginTop: 10,
          marginBottom: 0,
          width: 80,
          height: 30,
          borderRadius: 30,
          borderWidth: 1.5,
          borderColor: "rgba(44, 195, 248, 1.000)",
          padding: 5,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "rgba(44, 195, 248, 1.000)", fontSize: 12 }}>
          $0.5/hr
        </Text>
      </View>
      <InformationScrollView />
      <SelectedButton hiddenCard={hiddenCard} />
    </Animated.View>
  );
};

export default class DemoScreen extends Component {
  state = {
    coords: location,
    locationData: locationData,
    errorMessage: null,
    animation: new Animated.Value(-250)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 10,
      duration: 500
    }).start();
  };

  stopAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -250,
      duration: 500
    }).start();
  };

  componentWillUpdate() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }
  }

  componentDidMount() {
    // Animated.timing(this.state.animation, {
    //   toValue: 10,
    //   duration: 300
    // }).start();
    this.startAnimation();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let coords = await Location.getCurrentPositionAsync({});
    this.setState({ coords });
    console.log(coords);
  };
  render() {
    const locationData = this.state.locationData;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.coords.latitude,
            longitude: this.state.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {locationData.map((data, index) => {
            return <MarkerAtMap {...data} key={index} />;
          })}

          {/* <MarkerAtMap
            marker={location}
            title={"GuangZhou Tower"}
            desc={desc}
          /> */}
        </MapView>
        <InformationCard
          animation={this.state.animation}
          hiddenCard={this.stopAnimation}
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "red",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  }
});
