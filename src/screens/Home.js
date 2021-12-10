import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../components/Cards";
import { getPosts } from "../redux/posts/postActions";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postState);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    dispatch(getPosts()).then(() => setIsRefreshing(false));
  }, []);

  useFocusEffect(handleRefresh);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    >
      <Cards posts={posts} />
    </ScrollView>
  );
};
