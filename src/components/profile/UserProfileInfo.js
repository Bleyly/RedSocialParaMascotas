import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Caption, Paragraph, Title } from "react-native-paper";
import { useSelector } from "react-redux";

export const UserProfileInfo = () => {
  const { name, photo, followers, following, description } = useSelector(
    (state) => state.userState
  );
  return (
    <Fragment>
      <View style={styles.userInfoSection}>
        <Avatar.Image
          source={
            photo ? { uri: photo } : require("../../../assets/avatar.png")
          }
        />
        <View style={{ marginLeft: 16 }}>
          <Title>{name}</Title>

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {followers}
              </Paragraph>
              <Caption style={styles.caption}>Seguidores</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {following}
              </Paragraph>
              <Caption style={styles.caption}>Seguidos</Caption>
            </View>
          </View>
        </View>
      </View>
      <Paragraph style={{ marginLeft: 16 }}>{description}</Paragraph>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  userInfoSection: {
    flexDirection: "row",
    margin: 16,
  },
  row: {
    flexDirection: "row",
  },
  section: {
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
});
