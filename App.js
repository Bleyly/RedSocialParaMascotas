import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Appbar, BottomNavigation } from "./components";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default function App() {
  const [title, setTitle] = useState("Inicio");

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar title={title} />
        <BottomNavigation setTitle={setTitle} />
      </View>
    </PaperProvider>
  );
}
