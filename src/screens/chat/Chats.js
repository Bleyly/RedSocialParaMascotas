import React, { Fragment, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../redux/users/userActions";
import Moment from "react-moment";
import "moment/locale/es-do";
import { useFocusEffect } from "@react-navigation/native";

export const Chats = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state.userState);

  useFocusEffect(
    useCallback(() => {
      dispatch(getChats());
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      {chats &&
        chats
          .sort((a, b) => {
            if (!a.messages.length || !b.messages.length) {
              return 1;
            }

            return (
              b.messages[0].createdAt.getTime() -
              a.messages[0].createdAt.getTime()
            );
          })
          .map((chat) => (
            <TouchableRipple
              key={chat.uid}
              onPress={() => navigate("chat", { chatId: chat.uid })}
            >
              <View style={styles.chat}>
                <Avatar.Image
                  source={
                    chat.user.photo
                      ? { uri: chat.user.photo }
                      : require("../../../assets/avatar.png")
                  }
                />
                <View style={styles.information}>
                  <Title>{chat.user.name}</Title>
                  <View style={{ flexDirection: "row" }}>
                    <Caption
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={{ flexBasis: "40%" }}
                    >
                      {chat.messages.length ? chat.messages[0].text : ""}
                    </Caption>
                    <Caption style={{ marginLeft: 4, flexBasis: "60%" }}>
                      {chat.messages.length ? (
                        <Fragment>
                          {"Hace "}
                          <Moment fromNow ago element={Text}>
                            {chat.messages[0].createdAt}
                          </Moment>
                        </Fragment>
                      ) : (
                        ""
                      )}
                    </Caption>
                  </View>
                </View>
              </View>
            </TouchableRipple>
          ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "white",
  },
  chat: {
    margin: 16,
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 8,
  },
  information: {
    marginLeft: 8,
  },
});
