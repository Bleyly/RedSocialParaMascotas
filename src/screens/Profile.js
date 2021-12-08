import React from "react";
import { StyleSheet, View } from "react-native";
import { Tabs } from "../components/profile/Tabs";
import { UserProfileInfo } from "../components/profile/UserProfileInfo";

export const Profile = ({
  route: {
    params: { tab },
  },
}) => {
  return (
    <View style={styles.container}>
      <UserProfileInfo />

      <Tabs tab={tab} />
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
