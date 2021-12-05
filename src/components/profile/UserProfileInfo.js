import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Caption, Paragraph, Title } from "react-native-paper";
import { users } from "../../../data/users";

export const UserProfileInfo = ({ user }) => {
  return (
    <Fragment>
      <View style={styles.userInfoSection}>
        <Avatar.Image source={users[0].photo} />
        <View style={{ marginLeft: 16 }}>
          <Title>{user.displayName}</Title>

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {users[0].followers}
              </Paragraph>
              <Caption style={styles.caption}>Seguidores</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {users[0].following}
              </Paragraph>
              <Caption style={styles.caption}>Seguidos</Caption>
            </View>
          </View>
        </View>
      </View>
      <Paragraph style={{ marginLeft: 16 }}>{users[0].description}</Paragraph>
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
