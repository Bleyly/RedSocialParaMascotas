import React, { useState, useCallback, useEffect, useRef } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import "dayjs/locale/es-do";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebase";
import {
  CHATS_COLLECTION,
  MESSAGES_COLLECTION,
} from "../../helpers/collections";
import { collection, onSnapshot } from "firebase/firestore";
import { sendMessage } from "../../redux/users/userActions";
import { View, Keyboard } from "react-native";

export function Chat({
  route: {
    params: { chatId },
  },
}) {
  const {
    currentUser: { uid },
  } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);

  const handleSend = ([{ text }]) => {
    if (text) {
      dispatch(sendMessage(chatId, text));
    }
  };

  useEffect(() => {
    const keyboardEvent = Keyboard.addListener("keyboardDidHide", () =>
      Keyboard.dismiss()
    );

    return () => keyboardEvent.remove();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, CHATS_COLLECTION, chatId, MESSAGES_COLLECTION),
      (messagesSnapshot) => {
        const messages = messagesSnapshot
          .docChanges()
          .filter((change) => change.type === "added")
          .map(({ doc: messageSnapshot }) => {
            const message = messageSnapshot.data();

            return {
              _id: messageSnapshot.id,
              ...message,
              createdAt: message.createdAt.toDate(),
            };
          });

        if (messages.length) {
          messages.sort(
            (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
          );
        }

        setMessages((prevMessages) => {
          return [...messages, ...prevMessages];
        });
      }
    );

    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{ _id: uid }}
        alwaysShowSend
        locale="es-do"
      />
    </View>
  );
}
