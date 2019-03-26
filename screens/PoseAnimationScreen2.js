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

const Box2 = posed.View({
  draggable: true,
  dragging: { scale: 1.2 },
  dragEnd: { scale: 1 }
});
export default class DemoScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Box2 style={styles.button} />
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
