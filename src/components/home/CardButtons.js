import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { dislikePost, likePost } from "../../redux/posts/postActions";
import { savePost, unsavePost } from "../../redux/users/userActions";
import { names } from "../../screens";

export const CardButtons = ({ postId, navigate }) => {
  const dispatch = useDispatch();
  const { liked, saved } = useSelector((state) => state.userState);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {liked.includes(postId) ? (
          <TouchableOpacity onPress={() => dispatch(dislikePost(postId))}>
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => dispatch(likePost(postId))}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => navigate(names.comments)}>
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
        {saved.includes(postId) ? (
          <TouchableOpacity onPress={() => dispatch(unsavePost(postId))}>
            <Ionicons name="bookmark" size={24} color="#5F89FE" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => dispatch(savePost(postId))}>
            <Ionicons name="bookmark-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
