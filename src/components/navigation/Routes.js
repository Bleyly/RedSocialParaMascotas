import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import { LoginNavigation } from "./LoginNavigation";
import { DrawerNavigation } from "./drawer/DrawerNavigation";
import { auth, useFireBaseContext } from "../../config/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { users } from "../../../data/users";
import { useDataContext } from "../../../data/dataContext";

export const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const { user, setUser } = useFireBaseContext();

  const { addUser } = useDataContext();

  const authStateChanged = (user) => {
    setUser(user);

    if (user && !users.some((u) => u._id === user.uid && user.displayName)) {
      addUser({
        _id: user.uid,
        name: user.displayName,
        photo: require("../../../assets/avatar.jpg"),
      });
    }

    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, authStateChanged);

    return subscriber;
  }, []);

  return initializing ? null : (
    <NavigationContainer theme={theme}>
      {user ? <DrawerNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};

const theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "#c6c6c6",
    notification: PaperDefaultTheme.colors.notification,
    primary: PaperDefaultTheme.colors.primary,
    text: PaperDefaultTheme.colors.text,
  },
};
