import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Appbar } from "react-native-paper";
import { PicturesProvider } from "../../../helpers/picturesContext";
import { getHeaderTitle } from "../../../helpers/getHeaderTitle";
import { names, titles } from "../../../screens";
import { Profile } from "../../../screens/Profile";
import { ChatNavigation } from "../ChatNavigation";
import { Camera } from "../../../screens/Camera";
import { TabNavigation } from "../TabNavigation";
import { DrawerContent } from "./DrawerContent";
import { SettingsNavigation } from "../SettingsNavigation";
import { Comments } from "../../../screens/Comments";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <PicturesProvider>
      <Drawer.Navigator
        initialRouteName="TabNavigation"
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          header: ({
            options: { title },
            navigation: { openDrawer, navigate, goBack },
            route: { name },
          }) => {
            return (
              <Appbar>
                {name === names.comments ? (
                  <Appbar.Action
                    icon={() => (
                      <Ionicons
                        name="arrow-back"
                        color="white"
                        size={24}
                        onPress={() => goBack()}
                      />
                    )}
                  />
                ) : (
                  <Appbar.Action icon="menu" onPress={openDrawer} />
                )}
                <Appbar.Content title={title} />
                <Appbar.Action
                  icon="chat"
                  onPress={() =>
                    navigate("ChatNavigation", { screen: "chats" })
                  }
                />
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
        <Drawer.Screen
          name={names.profile}
          component={Profile}
          options={{
            title: titles[names.profile],
            unmountOnBlur: true,
          }}
        />
        <Drawer.Screen
          name={names.camera}
          component={Camera}
          options={{
            headerShown: false,
            unmountOnBlur: true,
          }}
        />
        <Drawer.Screen name="ChatNavigation" component={ChatNavigation} />
        <Drawer.Screen
          name="SettingsNavigation"
          component={SettingsNavigation}
        />
        <Drawer.Screen name={names.comments} component={Comments} />
      </Drawer.Navigator>
    </PicturesProvider>
  );
};
