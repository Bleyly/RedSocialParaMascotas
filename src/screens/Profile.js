import React, { Fragment, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "../components/profile/Tabs";
import { UserProfileInfo } from "../components/profile/UserProfileInfo";
import { cleanProfile, getProfile } from "../redux/users/userActions";

export const Profile = ({
  route: {
    params: { tab, userId },
  },
}) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(getProfile(userId));

    return () => dispatch(cleanProfile());
  }, [userId]);

  return (
    <View style={styles.container}>
      {profile && (
        <Fragment>
          <UserProfileInfo
            user={profile.user}
            isCurrentUser={profile.isCurrentUser}
          />

          <Tabs
            tab={tab}
            posts={profile.posts}
            savedPosts={profile.savedPosts}
            isCurrentUser={profile.isCurrentUser}
          />
        </Fragment>
      )}
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
