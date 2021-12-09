import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "@firebase/firestore";
import { auth, db } from "../../config/firebase";
import { POSTS_COLLECTION, USERS_COLLECTION } from "../../helpers/collections";
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

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
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
          orderBy("created", "desc")
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
