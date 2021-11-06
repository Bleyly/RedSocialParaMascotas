import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Post, Search } from "../../screens";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { Appbar, DefaultTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: `${DefaultTheme.colors.primary}80`,
        header: ({ options: { title }, navigation: { openDrawer } }) => {
          return (
            <Appbar>
              <Appbar.Action icon="menu" onPress={openDrawer} />
              <Appbar.Content title={title} />
              <Appbar.Action icon="chat" />
            </Appbar>
          );
        },
      }}
    >
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          title: "Publicar",
          tabBarIcon: (props) => <Feather name="edit" {...props} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: (props) => <Entypo name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Buscar",
          tabBarIcon: (props) => <FontAwesome name="search" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
