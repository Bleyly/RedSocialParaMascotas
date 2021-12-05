import React from "react";
import { View } from "react-native";
import { Card } from "./home";

export const Cards = ({ posts }) => {
  return (
    <View>
      {posts.map((post) => (
        <Card key={post._id} post={post} />
      ))}
    </View>
  );
};
