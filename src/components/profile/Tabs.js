import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { View, ScrollView } from "react-native";
import { TouchableRipple, DefaultTheme } from "react-native-paper";
import { photos } from "../../../data/photos";
import { posts } from "../../../data/posts";
import { users } from "../../../data/users";
import { Cards } from "../Cards";
import { ImagesGrid } from "../ImagesGrid";

const tabs = {
  publishedPosts: "published posts",
  savedPosts: "saved posts",
};

export const Tabs = () => {
  const scrollRef = useRef();
  const [selectedTab, setSelectedTab] = useState(tabs.publishedPosts);

  const changeTab = (tab) => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
    setSelectedTab(tab);
  };

  const isActive = (tab) => {
    return tab === selectedTab;
  };

  return (
    <View
      style={{
        paddingTop: 16,
        flex: 1,
      }}
    >
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableRipple
          onPress={() => changeTab(tabs.publishedPosts)}
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            borderBottomColor: isActive(tabs.publishedPosts)
              ? DefaultTheme.colors.primary
              : "white",
            borderBottomWidth: 1,
          }}
        >
          <Ionicons
            name="grid-outline"
            size={28}
            color={
              isActive(tabs.publishedPosts)
                ? DefaultTheme.colors.primary
                : "black"
            }
          />
        </TouchableRipple>
        <TouchableRipple
          onPress={() => changeTab(tabs.savedPosts)}
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            borderBottomColor: isActive(tabs.savedPosts)
              ? DefaultTheme.colors.primary
              : "white",
            borderBottomWidth: 1,
          }}
        >
          <Ionicons
            name="bookmark-outline"
            size={28}
            color={
              isActive(tabs.savedPosts) ? DefaultTheme.colors.primary : "black"
            }
          />
        </TouchableRipple>
      </View>
      <ScrollView ref={scrollRef} style={{ backgroundColor: "#e0e0e0" }}>
        {selectedTab === tabs.publishedPosts ? (
          <Cards
            posts={posts.map((post) => {
              const user = users.find((user) => user._id === post.userId);

              return { ...post, user };
            })}
          />
        ) : (
          <View style={{ marginTop: 8 }}>
            <ImagesGrid images={[...photos, ...photos, ...photos, ...photos]} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
