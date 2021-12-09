import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../components/Cards";
import { getPosts } from "../redux/posts/postActions";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postState);

  useFocusEffect(
    useCallback(() => {
      dispatch(getPosts());
    }, [])
  );

  return (
    <ScrollView>
      <Cards posts={posts} />
    </ScrollView>
  );
};
