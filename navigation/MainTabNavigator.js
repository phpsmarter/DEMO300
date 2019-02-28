import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
//NOTE  demo-entry
import DemoScreen from "../screens/BioScreen2";
import CouponScreen from "../screens/CouponScreen";
//import YourBagScreen from '../screens/YourBagScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  {
    headerMode: "none"
  }
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

const DemoStack = createStackNavigator(
  {
    Demo: DemoScreen
  },
  {
    headerMode: "none"
  }
);

DemoStack.navigationOptions = {
  tabBarLabel: "Demo",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cog" : "ios-cog"}
    />
  )
};

const CouponStack = createStackNavigator(
  {
    Demo: CouponScreen
  },
  {
    headerMode: "none"
  }
);

CouponStack.navigationOptions = {
  tabBarLabel: "Coupon",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-desktop" : "md-desktop"}
    />
  )
};

export default createBottomTabNavigator({
  DemoStack,
  HomeStack,
  LinksStack,
  SettingsStack,
  CouponStack
});
