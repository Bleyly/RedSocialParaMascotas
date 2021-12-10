import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import { LoginNavigation } from "./LoginNavigation";
import { DrawerNavigation } from "./drawer/DrawerNavigation";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/users/userActions";
import { Splash } from "../../screens/Splash";

export const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);

  const { currentUser } = useSelector((state) => state.userState, shallowEqual);
  const dispatch = useDispatch();

  const authStateChanged = (user) => {
    if (user) {
      dispatch(setUser(user)).then(() => loadingUser && setLoadingUser(false));
    } else {
      setLoadingUser(false);
    }

    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, authStateChanged);

    return subscriber;
  }, []);

  return initializing || loadingUser ? (
    <Splash />
  ) : (
    <NavigationContainer theme={theme}>
      {currentUser ? <DrawerNavigation /> : <LoginNavigation />}
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
