import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";

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
          <TouchableOpacity onPress={() => setLiked(false)}>
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setLiked(true)}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => {}}>
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={24}
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign name="sharealt" size={24} style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </View>
      <View>
        {saved ? (
          <TouchableOpacity onPress={() => setSaved(false)}>
            <Ionicons name="bookmark" size={24} color="#5F89FE" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setSaved(true)}>
            <Ionicons name="bookmark-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
