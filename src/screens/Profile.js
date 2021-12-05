import React from "react";
import { StyleSheet, View } from "react-native";
import { useFireBaseContext } from "../config/firebase";
import { Tabs } from "../components/profile/Tabs";
import { UserProfileInfo } from "../components/profile/UserProfileInfo";

export const Profile = () => {
  const { user } = useFireBaseContext();

  return (
    <View style={styles.container}>
      <UserProfileInfo user={user} />

      <Tabs />
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
