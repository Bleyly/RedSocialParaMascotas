import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { names, titles } from "../screens";

export const getHeaderTitle = (route) => {
  const name = getFocusedRouteNameFromRoute(route);

  switch (name) {
    case names.post:
      return titles[names.post];
    case names.search:
      return titles[names.search];
    default:
      return titles[names.home];
  }
};
