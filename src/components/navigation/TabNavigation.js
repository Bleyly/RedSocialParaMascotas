import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { DefaultTheme } from "react-native-paper";
import { names, titles, Home, Search } from "../../screens";
import { PostNavigation } from "./PostNavigation";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={names.home}
      screenOptions={{
        tabBarInactiveTintColor: `${DefaultTheme.colors.primary}80`,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="PostNavigation"
        component={PostNavigation}
        options={{
          title: titles[names.post],
          tabBarIcon: (props) => <Feather name="edit" {...props} />,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={names.home}
        component={Home}
        options={{
          title: titles[names.home],
          tabBarIcon: (props) => <Entypo name="home" {...props} />,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={names.search}
        component={Search}
        options={{
          title: titles[names.search],
          tabBarIcon: (props) => <FontAwesome name="search" {...props} />,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};
