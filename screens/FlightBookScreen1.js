import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  StyleSheet,
  StatusBar
} from "react-native";

import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  EvilIcons
} from "@expo/vector-icons";

const btnItems = [
  { text: "One Way" },
  { text: "Rond Trip" },
  { text: "Multicity" }
];

const classes = [
  { class: "Economy" },
  { class: "Business" },
  { class: "First Class" }
];
const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons
        name="ios-arrow-back"
        size={24}
        color="white"
        style={{ alignSelf: "center", marginLeft: 20 }}
      />
      <Text style={{ fontSize: 18, color: "white" }}>Search Flights</Text>
      <MaterialCommunityIcons
        name="dots-horizontal"
        size={24}
        color="rgba(177, 148, 245, 1.000)"
        style={{ alignSelf: "flex-start", marginLeft: 20 }}
      />
    </View>
  );
};
const Button = props => {
  const onChange = props.onChange;
  const text = props.text;
  const selfIndex = props.index;
  //alert(selfIndex);
  const selectedIndex = props.selectedIndex;
  const btnStyle = "rgba(116, 103, 240, 1.000)";
  const shadowStyle = {
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  };
  const selectedStyle = selfIndex === selectedIndex ? btnStyle : null;
  const textStyle =
    selfIndex === selectedIndex ? "white" : "rgba(185, 185, 186, 1.000)";
  const selectedShadowStyle = selfIndex === selectedIndex ? shadowStyle : null;
  return (
    <View
      style={[
        {
          height: "99%",
          width: 100,
          backgroundColor: selectedStyle,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center"
        },
        selectedShadowStyle
      ]}
    >
      <Text
        style={{ fontSize: 12, color: textStyle }}
        onPress={selfIndex => props.onChange(selfIndex)}
      >
        {text}
      </Text>
    </View>
  );
};
const ButtonGroup = props => {
  const selectedIndex = props.selectedIndex;
  const onChange = props.onChange;
  return (
    <View style={styles.ButtonGroup}>
      {btnItems.map((btnItem, index) => {
        return (
          <Button
            key={index}
            text={btnItem.text}
            index={index}
            selectedIndex={selectedIndex}
            onChange={e => onChange(e, index)}
          />
        );
      })}
    </View>
  );
};

const Item1 = props => (
  <View>
    <Text style={{ fontSize: 14 }}>From</Text>
    <Text
      style={{
        marginTop: 5,
        fontSize: 24,
        color: "rgba(116, 103, 240, 1.000)"
      }}
    >
      DEL
    </Text>
    <View style={{ flexDirection: "row" }}>
      <Ionicons
        name="md-paper-plane"
        size={14}
        color="black"
        style={{ alignSelf: "flex-start", marginRight: 5 }}
      />
      <Text style={{ fontSize: 12, color: "gray" }}>New Delhi</Text>
    </View>
  </View>
);

const Item2 = props => (
  <View>
    <Text style={{ fontSize: 14 }}>To</Text>
    <Text
      style={{
        marginTop: 5,
        fontSize: 24,
        color: "rgba(116, 103, 240, 1.000)"
      }}
    >
      BOM
    </Text>
    <View style={{ flexDirection: "row" }}>
      <EvilIcons
        name="location"
        size={14}
        color="black"
        style={{ alignSelf: "flex-start", marginRight: 5 }}
      />
      <Text style={{ fontSize: 12, color: "gray" }}>Mumbai</Text>
    </View>
  </View>
);

const Item3 = () => (
  <View>
    <View style={{ flexDirection: "row" }}>
      <Text style={{ marginRight: 10 }}>Depature</Text>
      <FontAwesome name="calendar" size={14} color="gray" />
    </View>

    <Text
      style={{
        marginTop: 5,
        fontSize: 24,
        color: "rgba(116, 103, 240, 1.000)"
      }}
    >
      10 DEC
    </Text>
    <View style={{ flexDirection: "row" }}>
      <Text style={{ fontSize: 12, color: "gray" }}>Monday 2018</Text>
    </View>
  </View>
);

const Item4 = () => (
  <View>
    <View style={{ flexDirection: "row" }}>
      <Text style={{ marginRight: 10 }}>Return</Text>
      <FontAwesome name="calendar" size={14} color="gray" />
    </View>

    <Text
      style={{
        marginTop: 5,
        fontSize: 24,
        color: "rgba(116, 103, 240, 1.000)"
      }}
    >
      MONTH
    </Text>
    <View style={{ flexDirection: "row" }}>
      <Text style={{ fontSize: 12, color: "gray" }}>day</Text>
    </View>
  </View>
);

const Item5 = props => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={{ marginRight: 15 }}>
      <Text style={{ fontSize: 14, color: "gray", textAlign: "center" }}>
        Passengers
      </Text>
      <Text
        style={{
          height: 30,
          marginHorizontal: 10,
          fontSize: 20,
          color: "rgba(116, 103, 240, 1.000)",
          textAlign: "center"
        }}
      >
        ADULTS
      </Text>
      <Text style={{ fontSize: 10, color: "gray", textAlign: "center" }}>
        12+ years
      </Text>
    </View>
    <View>
      <FontAwesome name="angle-up" size={14} color="gray" />
      <Text>{props.adult}</Text>
      <FontAwesome name="angle-down" size={14} color="gray" />
    </View>
  </View>
);

const Item6 = props => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={{ marginRight: 15 }}>
      <Text
        style={{
          textAlign: "center",
          marginHorizontal: 10,
          fontSize: 18,
          color: "rgba(116, 103, 240, 1.000)"
        }}
      >
        CHILDREN
      </Text>
      <Text style={{ textAlign: "center" }}>1-2 years</Text>
    </View>
    <View>
      <FontAwesome name="angle-up" size={14} color="gray" />
      <Text>{props.children}</Text>
      <FontAwesome name="angle-down" size={14} color="gray" />
    </View>
  </View>
);

const Row = props => (
  <View
    style={{
      flexDirection: "row",
      height: 90,
      width: "90%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
      borderBottomWidth: 0.3,
      borderColor: "rgba(181, 181, 181, 0.5)",
      alignSelf: "center"
    }}
  >
    {props.children}
  </View>
);

const SeatClass = props => {
  const selectedIndex = props.selectedSeatIndex;
  const text = props.text;
  const index = props.index;
  const unselectedColor = "rgba(245, 244, 250, 1.000)";
  const selectedColor = "rgba(116, 103, 240, 1.000)";
  const bgcStyle = index === selectedIndex ? selectedColor : unselectedColor;
  const textColor = index === selectedIndex ? "white" : "black";
  const BGCStyle = {
    backgroundColor: bgcStyle
  };

  return (
    <View
      style={[
        {
          width: 90,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10
        },
        BGCStyle
      ]}
    >
      <Text style={{ color: textColor }}>{text}</Text>
    </View>
  );
};

const InformationCard = props => {
  const adult = props.adult;
  const children = props.children;
  const selectedSeatIndex = props.selectedSeatIndex;
  return (
    <View style={styles.InformationCard}>
      <Row>
        <Item1 />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "rgba(249, 249, 249, 1.000)"
          }}
        >
          <FontAwesome
            name="exchange"
            size={20}
            color="rgba(116, 103, 240, 1.000)"
            style={{ alignSelf: "center" }}
          />
        </View>
        <Item2 />
      </Row>
      <Row>
        <Item3 />
        <View />
        <Item4 />
      </Row>

      <Row>
        <Item5 adult={adult} />
        <View />
        <Item6 children={children} />
      </Row>
      <Row>
        {classes.map((seat, index) => {
          return (
            <SeatClass
              text={seat.class}
              key={index}
              index={index}
              selectedSeatIndex={selectedSeatIndex}
            />
          );
        })}
      </Row>
      <View
        style={{ margnTop: 10, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 12, color: "gray", textAlign: "center" }}>
          Non stop flight only
        </Text>
        <View
          style={{
            marginTop: 10,
            width: "70%",
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(116, 103, 240, 1.000)",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 5
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>SEARCH FLIGHT</Text>
        </View>
      </View>
    </View>
  );
};

export default class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adult: 1,
      children: 0,
      selectedSeatIndex: 0,
      selectedIndex: 0
    };
  }

  onChange = (e, index) => {
    e.preventDefault();
    //alert(index);
    //return;
    this.setState({ selectedIndex: index });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <ImageBackground
          source={require("../assets/images/flyticket/background.png")}
          style={{ marginTop: -40, height: 180, width: "100%" }}
        >
          <Header />
          <ButtonGroup
            selectedIndex={this.state.selectedIndex}
            onChange={this.onChange}
          />
        </ImageBackground>
        <InformationCard
          adult={this.state.adult}
          children={this.state.children}
          selectedSeatIndex={this.state.selectedSeatIndex}
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 0,
    borderColor: "red",
    backgroundColor: "rgba(245, 245, 245, 1.000)"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: 40,
    paddingHorizontal: 10,
    marginTop: 40
  },
  title: {
    width: "90%",
    height: 60,
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start"
  },
  bestCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "red",
    marginTop: 30,
    paddingHorizontal: 10,
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  carsDetail: {
    alignSelf: "center",
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 10,
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  ButtonGroup: {
    alignSelf: "center",
    marginTop: 10,
    width: "95%",
    height: 40,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  },
  InformationCard: {
    marginTop: -30,
    backgroundColor: "white",
    height: 450,
    width: "95%",
    borderRadius: 6,
    shadowOffset: { width: 5, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  }
});
