import React from "react";
import { StyleSheet, View } from "react-native";
import { useFireBaseContext } from "../config/firebase";
import { Tabs } from "../components/profile/Tabs";
import { UserProfileInfo } from "../components/profile/UserProfileInfo";
import { profileTabs } from "../helpers/profileTabs";

export const Profile = ({
  route: {
    params: { tab },
  },
}) => {
  const { user } = useFireBaseContext();

  return (
    <View style={styles.container}>
      <UserProfileInfo user={user} />

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
