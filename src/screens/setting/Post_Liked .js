import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Avatar, Title } from "react-native-paper";
import { photos as dataphotos } from "../../../data/photos";
import { ImagesGrid } from "../../components/ImagesGrid";
import { ProgressBar } from "../../components/Post";

const photos = [...dataphotos, ...dataphotos, ...dataphotos, ...dataphotos];

export const Post_Liked = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Publicación que te gustó</Title>
      <ProgressBar />
      <ScrollView>
        <ImagesGrid images={photos} />
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
