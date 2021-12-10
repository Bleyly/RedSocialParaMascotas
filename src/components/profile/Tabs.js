import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView } from "react-native";
import { TouchableRipple, DefaultTheme } from "react-native-paper";
import { profileTabs } from "../../helpers/profileTabs";
import { Cards } from "../Cards";
import { ImagesGrid } from "../ImagesGrid";

export const Tabs = ({ tab, posts, savedPosts, isCurrentUser }) => {
  const scrollRef = useRef();
  const [selectedTab, setSelectedTab] = useState(undefined);

  useEffect(() => {
    setSelectedTab(tab);
  }, [tab]);

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
          onPress={() => changeTab(profileTabs.publishedPosts)}
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            borderBottomColor: isActive(profileTabs.publishedPosts)
              ? DefaultTheme.colors.primary
              : "white",
            borderBottomWidth: 1,
          }}
        >
          <Ionicons
            name="grid-outline"
            size={28}
            color={
              isActive(profileTabs.publishedPosts)
                ? DefaultTheme.colors.primary
                : "black"
            }
          />
        </TouchableRipple>
        {isCurrentUser && (
          <TouchableRipple
            onPress={() => changeTab(profileTabs.savedPosts)}
            style={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
              borderBottomColor: isActive(profileTabs.savedPosts)
                ? DefaultTheme.colors.primary
                : "white",
              borderBottomWidth: 1,
            }}
          >
            <Ionicons
              name="bookmark-outline"
              size={28}
              color={
                isActive(profileTabs.savedPosts)
                  ? DefaultTheme.colors.primary
                  : "black"
              }
            />
          </TouchableRipple>
        )}
      </View>
      {selectedTab && (
        <ScrollView ref={scrollRef} style={{ backgroundColor: "#e0e0e0" }}>
          {selectedTab === profileTabs.publishedPosts ? (
            <Cards posts={posts} />
          ) : (
            <View style={{ marginTop: 8 }}>
              <ImagesGrid images={savedPosts} />
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};
