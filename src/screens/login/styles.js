import { StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";

export const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: DefaultTheme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 14,
  },
  paragraph: {
    textAlign: "center",
  },
  button: {
    width: "100%",
    marginTop: 16,
  },
  input: {
    width: "100%",
    marginTop: 16,
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
  },
  label: {
    color: DefaultTheme.colors.backdrop,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: { fontWeight: "bold", color: DefaultTheme.colors.primary },
});
