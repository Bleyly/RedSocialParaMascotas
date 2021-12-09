import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../config/firebase";
import {
  CHATS_COLLECTION,
  MESSAGES_COLLECTION,
  POSTS_COLLECTION,
  USERS_COLLECTION,
} from "../../helpers/collections";
import { userTypes } from "./userTypes";

export const register = (name, email, password) => {
  return async (dispatch) => {
    dispatch({ type: userTypes.setName, payload: name });

    await createUserWithEmailAndPassword(auth, email, password);
  };
};

export const login = (email, password) => {
  return async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };
};

export const logout = () => {
  return async (dispatch) => {
    await signOut(auth);

    dispatch({ type: userTypes.logout });
  };
};

export const setUser = (user) => {
  return async (dispatch, getStore) => {
    const {
      userState: { name },
    } = getStore();

    const snapshot = await getDoc(doc(db, USERS_COLLECTION, user.uid));

    if (!snapshot.exists()) {
      const data = {
        name,
        currentUser: { uid: user.uid, email: user.email },
        description: null,
        photo: null,
        followers: [],
        following: [],
        liked: [],
        saved: [],
      };
      await setDoc(doc(db, USERS_COLLECTION, user.uid), data);

      dispatch({
        type: userTypes.setUser,
        payload: data,
      });
    } else {
      dispatch({
        type: userTypes.setUser,
        payload: { ...snapshot.data() },
      });
    }
  };
};

export const resetPassword = (email, callback) => {
  return async () => {
    await sendPasswordResetEmail(auth, email);

    callback();
  };
};

export const getProfile = (userId) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
        following,
        saved,
      },
    } = getStore();
    let savedPosts = [];

    const isCurrentUser = userId === uid;

    const user = (await getDoc(doc(db, USERS_COLLECTION, userId))).data();
    const posts = (
      await getDocs(
        query(
          collection(db, POSTS_COLLECTION),
          where("userId", "==", userId),
          orderBy("createdAt", "desc")
        )
      )
    ).docs.map((post) => ({
      uid: post.id,
      ...post.data(),
      user,
    }));

    if (isCurrentUser) {
      savedPosts = (await getDocs(collection(db, POSTS_COLLECTION))).docs.map(
        (post) => {
          if (saved.includes(post.id)) {
            return post.data().pictures[0];
          }
        }
      );

      savedPosts = savedPosts.filter((post) => post);
    }

    dispatch({
      type: userTypes.setProfile,
      payload: {
        user: { ...user, isFollowing: following.includes(userId) },
        posts,
        savedPosts,
        isCurrentUser,
      },
    });
  };
};

export const follow = (userId) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
      },
    } = getStore();

    await updateDoc(doc(db, USERS_COLLECTION, userId), {
      followers: arrayUnion(uid),
    });
    await updateDoc(doc(db, USERS_COLLECTION, uid), {
      following: arrayUnion(userId),
    });

    dispatch({ type: userTypes.follow, payload: userId });
  };
};

export const unFollow = (userId) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
      },
    } = getStore();

    await updateDoc(doc(db, USERS_COLLECTION, userId), {
      followers: arrayRemove(uid),
    });
    await updateDoc(doc(db, USERS_COLLECTION, uid), {
      following: arrayRemove(userId),
    });

    dispatch({ type: userTypes.unFollow, payload: userId });
  };
};

export const cleanProfile = () => ({
  type: userTypes.setProfile,
  payload: null,
});

export const savePost = (postId) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
      },
    } = getStore();

    await updateDoc(doc(db, USERS_COLLECTION, uid), {
      saved: arrayUnion(postId),
    });

    dispatch({ type: userTypes.savePost, payload: postId });
  };
};

export const unsavePost = (postId) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
      },
    } = getStore();

    await updateDoc(doc(db, USERS_COLLECTION, uid), {
      saved: arrayRemove(postId),
    });

    dispatch({ type: userTypes.unsavePost, payload: postId });
  };
};

export const getChats = () => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
      },
    } = getStore();

    const chatsSnapshot = await getDocs(
      collection(db, CHATS_COLLECTION),
      where("users", "array-contains", uid)
    );

    const chats = await Promise.all(
      chatsSnapshot.docs.map(async (chatSnapshot) => {
        const chat = chatSnapshot.data();
        const user = (
          await getDoc(
            doc(
              db,
              USERS_COLLECTION,
              chat.users.find((user) => user != uid)
            )
          )
        ).data();

        const messages = (
          await getDocs(
            query(
              collection(
                db,
                CHATS_COLLECTION,
                chatSnapshot.id,
                MESSAGES_COLLECTION
              ),
              orderBy("createdAt", "desc")
            )
          )
        ).docs.map((messageSnapshot) => {
          const message = messageSnapshot.data();
          return {
            _id: messageSnapshot.id,
            ...message,
            createdAt: message.createdAt.toDate(),
          };
        });
        return {
          uid: chatSnapshot.id,
          ...chat,
          user: { photo: user.photo, name: user.name },
          messages,
        };
      })
    );

    dispatch({ type: userTypes.getChats, payload: chats });
  };
};

export const receiveMessages = (chatId, messages) => ({
  type: userTypes.receiveMessage,
  payload: { chatId, messages },
});

export const sendMessage = (chatId, text) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        name,
        photo,
        currentUser: { uid },
      },
    } = getStore();

    await addDoc(
      collection(db, CHATS_COLLECTION, chatId, MESSAGES_COLLECTION),
      {
        createdAt: Timestamp.now(),
        text,
        user: { _id: uid, name, avatar: photo },
      }
    );
  };
};

export const getChatId = (userId, callback) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
      },
    } = getStore();

    let chatId;

    const chatsSnapshot = await getDocs(collection(db, CHATS_COLLECTION));

    if (chatsSnapshot.empty) {
      chatId = await createChat(uid, userId);
    } else {
      const chatSnapshot = chatsSnapshot.docs.find((chatSnapshot) => {
        const chat = chatSnapshot.data();

        return chat.users.includes(userId) && chat.users.includes(uid);
      });

      if (!chatSnapshot) {
        chatId = await createChat(uid, userId);
      } else {
        chatId = chatSnapshot.id;
      }
    }

    callback(chatId);
  };
};

const createChat = async (currentUser, user) => {
  const chatSnapshot = await addDoc(collection(db, CHATS_COLLECTION), {
    users: [currentUser, user],
  });

  return chatSnapshot.id;
};

export const updateProfile = (name, description, photo, callback) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
        photo: currentPhoto,
      },
    } = getStore();

    let url = photo;

    if (photo && photo != currentPhoto) {
      url = await savePhoto(uid, photo);
    }

    const profile = {
      name,
      description,
      photo: url,
    };

    await updateDoc(doc(db, USERS_COLLECTION, uid), profile);

    dispatch({ type: userTypes.updateProfile, payload: profile });
    callback();
  };
};

const savePhoto = async (userId, photo) => {
  const path = `${userId}/avatar`;
  const response = await fetch(photo);
  const blob = await response.blob();
  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, blob);

  return getDownloadURL(storageRef);
};

export const getLikedPosts = () => {
  return async (dispatch, getStore) => {
    const {
      userState: { liked },
    } = getStore();

    let likedPosts = (await getDocs(collection(db, POSTS_COLLECTION))).docs.map(
      (post) => {
        if (liked.includes(post.id)) {
          return post.data().pictures[0];
        }
      }
    );

    likedPosts = likedPosts.filter((post) => post);

    dispatch({ type: userTypes.getLiked, payload: likedPosts });
  };
};
