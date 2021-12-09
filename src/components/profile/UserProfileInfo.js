import { useNavigation } from "@react-navigation/native";
import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Caption, Paragraph, Title } from "react-native-paper";
import { useDispatch } from "react-redux";
import { follow, getChatId, unFollow } from "../../redux/users/userActions";

export const UserProfileInfo = ({ user, isCurrentUser }) => {
  const {
    name,
    photo,
    followers,
    following,
    description,
    currentUser: { uid },
    isFollowing,
  } = user;

  const dispatch = useDispatch();
  const handleFollow = () => {
    if (isFollowing) {
      dispatch(unFollow(uid));
    } else {
      dispatch(follow(uid));
    }
  };

  const { navigate } = useNavigation();

  const handleMessage = () => {
    dispatch(
      getChatId(uid, (chatId) => {
        navigate("ChatNavigation", { screen: "chat", params: { chatId } });
      })
    );
  };

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
                {followers.length}
              </Paragraph>
              <Caption style={styles.caption}>Seguidores</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {following.length}
              </Paragraph>
              <Caption style={styles.caption}>Seguidos</Caption>
            </View>
          </View>
        </View>
      </View>
      {!isCurrentUser && (
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            style={{ width: 155 }}
            mode={isFollowing ? "contained" : "outlined"}
            onPress={handleFollow}
            compact
          >
            {isFollowing ? "Dejar de Seguir" : "Seguir"}
          </Button>
          <Button
            style={{ width: 155 }}
            mode="outlined"
            compact
            onPress={handleMessage}
          >
            Mensaje
          </Button>
        </View>
      )}
      <Paragraph style={{ marginTop: 16, marginLeft: 16 }}>
        {description}
      </Paragraph>
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
