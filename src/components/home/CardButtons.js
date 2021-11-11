import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";

export const CardButtons = ({ liked, setLiked, saved, setSaved }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {liked ? (
          <AntDesign
            name="heart"
            size={24}
            onPress={() => setLiked(false)}
            color="red"
          />
        ) : (
          <AntDesign
            name="hearto"
            size={24}
            onPress={() => setLiked(true)}
            color="black"
          />
        )}

        <MaterialCommunityIcons
          name="comment-text-outline"
          size={24}
          style={{ marginLeft: 8 }}
        />
        <AntDesign name="sharealt" size={24} style={{ marginLeft: 8 }} />
      </View>
      <View>
        {saved ? (
          <Ionicons
            name="bookmark"
            size={24}
            onPress={() => setSaved(false)}
            color="#5F89FE"
          />
        ) : (
          <Ionicons
            name="bookmark-outline"
            size={24}
            onPress={() => setSaved(true)}
            color="black"
          />
        )}
      </View>
    </View>
  );
};
