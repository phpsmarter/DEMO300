import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Animated,
  TextInput,
  Button
} from "react-native";
import posed from "react-native-pose";
const { height, width } = Dimensions.get("window");
const Box = posed.View({
  visible: { opacity: 1, transition: { duration: 600 } },
  hidden: { opacity: 0, transition: { duration: 600 } }
});
export default class DemoScreen extends React.Component {
  state = {
    isVisible: false
  };

  animation = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const isVisible = this.state.isVisible;
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Box style={styles.button} pose={isVisible ? "visible" : "hidden"} />
          <Button title="Click Me" onPress={this.animation} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    marginTop: 60,
    height,
    width,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    height: 50,
    width: 100,
    borderRadius: 8,
    backgroundColor: "rgba(30, 215, 165, 1.000)"
  }
});
