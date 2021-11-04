import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  BottomNavigation as PaperBottomNavigation,
  DefaultTheme,
} from "react-native-paper";
import { Home } from "../screens/Home";
import { Post } from "../screens/Post";
import { Search } from "../screens/Search";

const activeColor = `${DefaultTheme.colors.primary}FF`;
const inactiveColor = `${DefaultTheme.colors.primary}80`;

export const BottomNavigation = () => {
  const [index, setIndex] = React.useState(1);
  const routes = [
    {
      key: "post",
      title: "Publicar",
      icon: () => (
        <Feather
          name="edit"
          size={24}
          color={index === 0 ? activeColor : inactiveColor}
        />
      ),
    },
    {
      key: "home",
      title: "Inicio",
      icon: () => (
        <Entypo
          name="home"
          size={24}
          color={index === 1 ? activeColor : inactiveColor}
        />
      ),
    },
    {
      key: "search",
      title: "Buscar",
      icon: () => (
        <FontAwesome
          name="search"
          size={24}
          color={index === 2 ? activeColor : inactiveColor}
        />
      ),
    },
  ];

  return (
    <PaperBottomNavigation
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, primary: "white" },
      }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={PaperBottomNavigation.SceneMap({
        post: Post,
        home: Home,
        search: Search,
      })}
    />
  );
};
