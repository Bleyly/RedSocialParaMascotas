import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "../../../helpers/getHeaderTitle";
import { TabNavigation } from "../TabNavigation";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigation"
      drawerContent={DrawerContent}
      screenOptions={{
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
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={({ route }) => ({ title: getHeaderTitle(route) })}
      />
    </Drawer.Navigator>
  );
};
