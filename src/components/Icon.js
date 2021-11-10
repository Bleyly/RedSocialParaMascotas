import React from "react";
import { Image } from "react-native";

export const Icon = ({ size, source }) => {
  return <Image style={{ width: size, height: size }} source={source} />;
};
