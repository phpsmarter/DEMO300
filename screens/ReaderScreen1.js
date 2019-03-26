import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
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
import { StyleText } from "../components/StyledText";
import ScrollableTabView from "react-native-scrollable-tab-view";
import FacebookTabBar from "../components/FaceBookTabBar";
const colors = [
  { color: "rgba(255, 255, 255, 1.000)" },

  { color: "rgba(255, 231, 191, 1.000)" },

  { color: "rgba(139, 87, 43, 1.000)" },

  { color: "rgba(34, 34, 34, 1.000)" }
];

const fonts = [
  { fontFamily: "Helvetica" },
  { fontFamily: "Roboto" },
  { fontFamily: "Roboto_medium" },

  { fontFamily: "Palatino" }
];

const aligns = [{ align: "left" }, { align: "center" }, { align: "right" }];
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
        justifyContent: "center"
      }}
      name={name}
    />
  );
};

const MyHeader = props => {
  const toggleSetting = props.toggleSetting;
  return (
    <View
      style={{
        marginTop: 40,
        flexDirection: "row",
        height: 40,
        width: "100%",
        paddingHorizontal: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: "rgba(233, 202, 160, 1.000)",
        marginBottom: 20
      }}
    >
      <Left>
        <MyIcon type="Ionicons" name="md-arrow-back" color="black" size={24} />
      </Left>
      <Body>
        <Text style={{ fontSize: 12, color: "black" }}>The Count of Monte</Text>
      </Body>
      <Right>
        <View
          style={{
            flexDirection: "row",
            width: 120,
            justifyContent: "flex-end"
          }}
        >
          <NativeButton
            onPress={toggleSetting}
            style={{ backgroundColor: "transparent" }}
          >
            <MyIcon type="Octicons" name="settings" color="black" size={24} />
          </NativeButton>

          <View style={{ marginLeft: 5 }}>
            <NativeButton
              onPress={toggleSetting}
              style={{ backgroundColor: "transparent" }}
            >
              <MyIcon type="Entypo" name="menu" color="black" size={24} />
            </NativeButton>
          </View>
        </View>
      </Right>
    </View>
  );
};

const TooltipIcon = () => (
  <View style={{ position: "absolute", top: -25, right: 15 }}>
    <MyIcon
      type="Entypo"
      name="triangle-up"
      size={60}
      color="rgba(34, 34, 34, 1.000)"
    />
  </View>
);

const ColorButton = props => {
  const { color, selected, index, changeBGColor } = { ...props };

  return (
    <NativeButton
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: color,
        borderWidth: 0.4,
        borderColor: "white"
      }}
      onPress={() => changeBGColor(index)}
    >
      {selected && (
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <MyIcon
            type="FontAwesome"
            name="check"
            size={10}
            color="rgba(34, 34, 34, 1.000)"
          />
        </View>
      )}
    </NativeButton>
  );
};
const ChangeBGCBtnGroup = props => {
  state = {
    selectedColorIndex: props.selectedColorIndex
  };
  return (
    <View
      style={{
        width: "100%",
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgba(34, 34, 34, 1.000)",
        borderBottomWidth: 0.4,
        borderBottomColor: "white",
        marginTop: 5
      }}
    >
      {colors.map((color, index) => {
        return (
          <ColorButton
            {...color}
            key={index}
            index={index}
            selected={index === this.state.selectedColorIndex}
            changeBGColor={props.changeBGColor}
          />
        );
      })}
    </View>
  );
};

const ChangeFont = props => {
  const { setSmallFont, setBigFont } = { ...props };

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 40,
        borderBottomWidth: 0.4,
        borderBottomColor: "white"
      }}
    >
      <NativeButton
        style={{
          alignSelf: "right",
          flex: 1,
          borderRightWidth: 0.4,
          borderRightColor: "white",
          backgroundColor: "transparent",
          height: 40,
          borderRadius: 0,
          width: "50%"
        }}
        onPress={setSmallFont}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 10 }}>
          A
        </Text>
      </NativeButton>
      <NativeButton
        style={{
          flex: 1,
          alignSelf: "center",
          backgroundColor: "transparent",
          height: 40,
          borderRadius: 0,
          width: "50%"
        }}
        onPress={setBigFont}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 14 }}>
          A
        </Text>
      </NativeButton>
    </View>
  );
};

const ChangeLineHeight = props => {
  const { setSmallLineHeight, setBigLineHeight } = { ...props };

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 40,
        borderBottomWidth: 0.4,
        borderBottomColor: "white"
      }}
    >
      <NativeButton
        style={{
          alignSelf: "right",
          flex: 1,
          borderRightWidth: 0.4,
          borderRightColor: "white",
          backgroundColor: "transparent",
          height: 40,
          borderRadius: 0,
          width: "50%"
        }}
        onPress={setSmallLineHeight}
      >
        <MyIcon type="Entypo" name="menu" size={12} color="white" />
      </NativeButton>
      <NativeButton
        style={{
          flex: 1,
          alignSelf: "center",
          backgroundColor: "transparent",
          height: 40,
          borderRadius: 0,
          width: "50%"
        }}
        onPress={setBigLineHeight}
      >
        <MyIcon type="Entypo" name="menu" size={18} color="white" />
      </NativeButton>
    </View>
  );
};

const ChangeFontFamilyItem = props => {
  const { setFontFamily, selected, index, fontFamily } = {
    ...props
  };
  const selectedBgc = props.selected
    ? "rgba(57, 57, 57, 1.000)"
    : "rgba(34, 34, 34, 1.000)";
  return (
    <NativeButton
      style={{ backgroundColor: "transparent" }}
      onPress={() => setFontFamily(index)}
    >
      <View
        style={[
          {
            height: 20,
            width: "100%",
            paddingHorizontal: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: selectedBgc
          }
        ]}
      >
        <Text style={{ color: "white", fontSize: 10 }}>{fontFamily}</Text>
        {selected && (
          <MyIcon type="FontAwesome" name="check" size={12} color="white" />
        )}
      </View>
    </NativeButton>
  );
};

const ChangeFontFamily = props => {
  return (
    <ScrollView style={{ height: 40, width: "100%", paddingHorizontal: 5 }}>
      {fonts.map((font, index) => {
        return (
          <ChangeFontFamilyItem
            {...font}
            key={index}
            index={index}
            setFontFamily={props.setFontFamily}
            selected={props.selectedFontFamilyIndex === index}
          />
        );
      })}
    </ScrollView>
  );
};

const ChangeAlignItem = props => {
  const { name, selfIndex, selectedAlignIndex, setAlignIndex } = { ...props };
  const backgroundColor =
    selfIndex === selectedAlignIndex
      ? "rgba(57, 57, 57, 1.000)"
      : "rgba(34, 34, 34, 1.000)";
  return (
    <TouchableWithoutFeedback onPress={() => setAlignIndex(selfIndex)}>
      <View
        style={{
          flex: 1,
          borderLeftWidth: 0.4,
          borderLeftColor: "white",
          height: 30,
          backgroundColor: backgroundColor,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <MyIcon type="Feather" name={`align-${name}`} size={18} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};
const ChangeAlign = props => {
  return (
    <View
      style={{
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.6,
        borderTopWidth: 0.6,
        borderBottomColor: "white",
        borderTopColor: "white"
      }}
    >
      <ChangeAlignItem {...props} name="left" selfIndex={0} />
      <ChangeAlignItem {...props} name="center" selfIndex={1} />
      <ChangeAlignItem {...props} name="right" selfIndex={2} />
    </View>
  );
};

const Tooltip = props => {
  const {
    tooltipStyle,

    changeBGColor,
    selectedColorIndex
  } = {
    ...props
  };
  return (
    <Animated.View
      style={[
        {
          width: "40%",
          alignSelf: "center",
          height: 300,
          zIndex: 999,
          borderRadius: 6,
          backgroundColor: "rgba(34, 34, 34, 1.000)",
          position: "absolute",
          right: 50
        },
        tooltipStyle
      ]}
    >
      <TooltipIcon />
      <ChangeFont {...props} />
      <ChangeBGCBtnGroup
        selectedColorIndex={selectedColorIndex}
        changeBGColor={changeBGColor}
      />
      <ChangeLineHeight {...props} />
      <ChangeFontFamily {...props} />
      <ChangeAlign {...props} />
    </Animated.View>
  );
};

export default class DemoScreen extends Component {
  state = {
    show: false,
    fontSize: 14,
    animation: new Animated.Value(1),
    selectedColorIndex: 1,
    selectedFontFamilyIndex: 1,
    selectedAlignIndex: 0,
    bgcColor: "rgba(255, 231, 191, 1.000)",
    lineHeight: 30,
    fontFamily: "Helvetica",
    align: "left"
  };

  toggleSetting = () => {
    if (!this.state.show) {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 300
      }).start(() => {
        this.setState({ show: true });
      });
    } else {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 300
      }).start(() => {
        this.setState({ show: false });
      });
    }
  };

  setSmallFont = () => {
    this.setState({ fontSize: this.state.fontSize - 1 });
  };

  setBigFont = () => {
    this.setState({ fontSize: this.state.fontSize + 1 });
  };

  setSmallLineHeight = () => {
    this.setState({ lineHeight: this.state.lineHeight - 5 });
  };

  setBigLineHeight = () => {
    this.setState({ lineHeight: this.state.lineHeight + 5 });
  };

  changeBGColor = index => {
    this.setState({ selectedColorIndex: index });
    this.setState({ bgcColor: colors[index].color });
  };

  setFontFamily = index => {
    this.setState({ selectedFontFamilyIndex: index });
    this.setState({ fontFamily: fonts[index].fontFamily });
  };

  setAlignIndex = index => {
    this.setState({ selectedAlignIndex: index });
    this.setState({ align: aligns[index].align });
  };

  render() {
    const animatedContentY = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 80]
    });
    tooltipStyle = {
      opacity: this.state.animation,
      top: 90
    };

    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container style={{ backgroundColor: this.state.bgcColor }}>
          <MyHeader toggleSetting={this.toggleSetting} />

          <Tooltip
            selectedColorIndex={this.state.selectedColorIndex}
            setAlignIndex={this.setAlignIndex}
            selectedFontFamilyIndex={this.state.selectedFontFamilyIndex}
            selectedAlignIndex={this.state.selectedAlignIndex}
            tooltipStyle={tooltipStyle}
            setBigFont={this.setBigFont}
            setSmallFont={this.setSmallFont}
            setBigLineHeight={this.setBigLineHeight}
            setSmallLineHeight={this.setSmallLineHeight}
            changeBGColor={this.changeBGColor}
            setFontFamily={this.setFontFamily}
          />
          <Text
            style={[
              {
                lineHeight: this.state.lineHeight,
                padding: 10,
                color: "rgba(34, 34, 34, 1.000)",
                fontSize: this.state.fontSize,
                fontFamily: this.state.fontFamily,
                textAlign: this.state.align
              }
            ]}
          >
            Danglars, the ship’s supercargo, who is responsible for all
            financial matters, attempts to undermine Morrel’s good opinion of
            Dantès. Morrel boards the ship and Danglars tells him that Dantès
            forced the ship to stop at the Isle of Elba, which cost them
            precious time. When Morrel confronts Dantès with this accusation,
            Dantès explains that he stopped the ship at Elba in order to carry
            out his captain’s dying request: to deliver a package to an exiled
            grand-marshal, Maréchal Bertrand. He says that while he was on the
            island he spoke with Napoleon, the deposed emperor of France. With
            this matter cleared up, Morrel asks Dantès for his opinion of
            Danglars. Dantès answers honestly, explaining that he has a personal
            dislike for Danglars but that Danglars does his work very well.{" "}
          </Text>
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
//
