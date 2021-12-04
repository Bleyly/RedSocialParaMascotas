import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Chip } from "react-native-paper";

const categories = ["Todos", "Publicación", "Adopción", "Artículo", "Venta"];

const Chips = () => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Chip
          key={index}
          style={styles.chip}
          selected={category === selected}
          onPress={() => setSelected(category)}
        >
          {category}
        </Chip>
      ))}
    </View>
  );
};

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
