import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Chip } from "react-native-paper";
import { tagNames, tags } from "../../helpers/tags";

const Chips = React.memo(({ filter, setFilter }) => {
  return (
    <View style={styles.container}>
      <Chip
        style={styles.chip}
        selected={!filter.tag}
        onPress={() =>
          setFilter((prevFilter) => ({ ...prevFilter, tag: null }))
        }
      >
        Todos
      </Chip>
      {Object.values(tags).map((tag, index) => (
        <Chip
          key={index}
          style={styles.chip}
          selected={tag === filter.tag}
          onPress={() =>
            setFilter((prevFilter) => ({ ...prevFilter, tag: tag }))
          }
        >
          {tagNames[tag]}
        </Chip>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    marginBottom: 8,
  },
  chip: { height: 32, marginRight: 4, marginTop: 4 },
});

export default Chips;
