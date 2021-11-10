import React, { useState } from "react";
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Arrow que nos permite dar las configuraciones al boton me gusta  
export const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    
      return (
        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
          <MaterialCommunityIcons
            name={liked ? "heart" : "heart-outline"}
            size={32}
            color={liked ? "red" : "black"}
          />
        </Pressable>
      );
    };

// Arrow que nos permite dar las configuraciones al boton bookmark  
export const BookmarkButton = () => {
    const [Saved, setSaved] = useState(false);
    
      return (
        <Pressable onPress={() => setSaved((isSaved) => !isSaved)}>
          <MaterialCommunityIcons
            name={Saved ? "bookmark" : "bookmark-outline"}
            size={32}
            color={Saved ? "blue" : "black"}
          />
        </Pressable>
      );
    };