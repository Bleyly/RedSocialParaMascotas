import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  BottomNavigation as PaperBottomNavigation,
  DefaultTheme,
} from "react-native-paper";
import { Home, Post, Search } from "../../screens";

const activeColor = `${DefaultTheme.colors.primary}FF`;
const inactiveColor = `${DefaultTheme.colors.primary}80`;

export const BottomNavigation = ({ setTitle }) => {
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

  const handleIndexChange = (index) => {
    setTitle(routes[index].title);
    setIndex(index);
  };

  return (
    <PaperBottomNavigation
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, primary: "white" },
      }}
      navigationState={{ index, routes }}
      onIndexChange={handleIndexChange}
      renderScene={PaperBottomNavigation.SceneMap({
        post: Post,
        home: Home,
        search: Search,
      })}
    />
  );
};
