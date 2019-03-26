import React from "react";
import { StyleSheet, View } from "react-native";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
          style={{ alignSelf: "center", paddingHorizontal: 40 }}
          success
          onPress={this._signOutAsync}
        >
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
