import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { photos as dataphotos } from "../../data/photos";
import { ImagesGrid } from "../components/ImagesGrid";
import Chips from "../components/search/Chip";
import Searchbar from "../components/search/Searchbar";

const photos = [...dataphotos, ...dataphotos, ...dataphotos, ...dataphotos];

export const Search = () => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 8 }}>
        <Searchbar />
        <Chips />
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
    borderTopWidth: 0,
    backgroundColor: "white",
  },
});
