import React from "react";
import { Appbar as PaperAppbar, Text } from "react-native-paper";

export const Appbar = ({ title }) => {
  const handlePress = () => {
    console.log("pressed");
  };

  return (
    <PaperAppbar style={{marginBottom:8}}>
      <PaperAppbar.Action icon="menu" onPress={handlePress} />
      <PaperAppbar.Content title={title} />
      <PaperAppbar.Action icon="chat" onPress={handlePress} />
    </PaperAppbar>
  );
};
