import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { DangerZone } from "expo";
const { Lottie } = DangerZone;

export default class App extends React.Component {
  state = {
    animation: null
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        {this.state.animation && (
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 400,
              height: 500,
              backgroundColor: "#eee"
            }}
            source={this.state.animation}
          />
        )}
        <View style={styles.buttonContainer}>
          <Button
            title="start Animation"
            color={"white"}
            onPress={this._playAnimation}
          />
        </View>
      </View>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {
    let result = require("../assets/lottie/popping-heart.json");
    this.setState({ animation: result });
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonContainer: {
    alignSelf: "center",

    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "rgba(202, 82, 42, 1.000)",
    height: 60,
    width: 150,
    borderRadius: 30,
    color: "white"
  }
});
