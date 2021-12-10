import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { photos as dataphotos } from "../../data/photos";
import { ImagesGrid } from "../components/ImagesGrid";
import Chips from "../components/search/Chip";
import Searchbar from "../components/search/Searchbar";
import { getFilteredPosts } from "../redux/posts/postActions";

export const Search = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => {
    const { posts } = state.postState;

    return posts.map((post) => post.pictures[0]);
  });

  const [filter, setFilter] = useState({ tag: null, searchText: "" });

  useEffect(() => {
    dispatch(getFilteredPosts(filter));
  }, [filter]);

  return (
    <View style={styles.container}>
      <View style={{ padding: 8 }}>
        <Searchbar setFilter={setFilter} />
        <Chips filter={filter} setFilter={setFilter} />
      </View>
      <ScrollView>
        <ImagesGrid images={photos} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "white",
  },
});
