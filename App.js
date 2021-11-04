import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { BottomNavigation } from "./components/BottomNavigation";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <BottomNavigation />
      </View>
    </PaperProvider>
  );
}
