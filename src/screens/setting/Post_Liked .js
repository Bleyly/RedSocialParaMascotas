import { useFocusEffect } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore";
import React, { useCallback, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Avatar, Title } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { photos as dataphotos } from "../../../data/photos";
import { ImagesGrid } from "../../components/ImagesGrid";
import { ProgressBar } from "../../components/Post";
import { db } from "../../config/firebase";
import { POSTS_COLLECTION } from "../../helpers/collections";
import { getLikedPosts } from "../../redux/users/userActions";

export const Post_Liked = () => {
  const dispatch = useDispatch();
  const { likedPosts } = useSelector((state) => state.userState);

  useFocusEffect(
    useCallback(() => {
      dispatch(getLikedPosts());
    }, [])
  );

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Publicación que te gustó</Title>
      <ProgressBar />
      <ScrollView>
        <ImagesGrid images={likedPosts} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginLeft: 16,
    marginBottom: 12,
    marginTop: 12,
  },
});
