import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { db, storage } from "../../config/firebase";
import { POSTS_COLLECTION, USERS_COLLECTION } from "../../helpers/collections";
import { postTypes } from "./postTypes";

export const createPost = (post, pictures) => {
  return async (dispatch, getStore) => {
    const {
      userState: { currentUser, name, photo },
    } = getStore();

    const urls = await getUrls(currentUser.uid, pictures);
    const data = {
      userId: currentUser.uid,
      ...post,
      pictures: urls,
      createdAt: Timestamp.now(),
    };

    const snapshot = await addDoc(collection(db, POSTS_COLLECTION), data);

    dispatch({
      type: postTypes,
      payload: { uid: snapshot.id, ...data, user: { name, photo } },
    });
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    const snapshot = await getDocs(
      query(collection(db, POSTS_COLLECTION), orderBy("createdAt", "desc"))
    );

    const data = snapshot.empty ? [] : await getPost(snapshot);

    dispatch({ type: postTypes.getPosts, payload: data });
  };
};

export const getFilteredPosts = ({ tag, searchText }) => {
  return async (dispatch) => {
    const postsRef = collection(db, POSTS_COLLECTION);
    let snapshot = { empty: true };
    let posts = [];

    if (tag) {
      snapshot = await getDocs(query(postsRef, where("tag", "==", tag)));
    } else {
      snapshot = await getDocs(query(postsRef, orderBy("createdAt", "desc")));
    }

    posts = await getPost(snapshot);
    if (searchText) {
      posts = posts.filter((post) =>
        post.description.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    dispatch({ type: postTypes.getPosts, payload: posts });
  };
};

export const likePost = (postId) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
      },
    } = getStore();

    dispatch({ type: postTypes.like, payload: postId });

    await updateDoc(doc(db, POSTS_COLLECTION, postId), {
      likes: increment(1),
    });

    await updateDoc(doc(db, USERS_COLLECTION, uid), {
      liked: arrayUnion(postId),
    });
  };
};

export const dislikePost = (postId) => {
  return async (dispatch, getStore) => {
    const {
      userState: {
        currentUser: { uid },
      },
    } = getStore();

    dispatch({ type: postTypes.dislike, payload: postId });

    await updateDoc(doc(db, POSTS_COLLECTION, postId), {
      likes: increment(-1),
    });

    await updateDoc(doc(db, USERS_COLLECTION, uid), {
      liked: arrayRemove(postId),
    });
  };
};

const getPost = async (snapshot) => {
  if (snapshot.empty) return [];

  return await Promise.all(
    snapshot.docs.map(async (document) => {
      const post = document.data();
      const user = (
        await getDoc(doc(db, USERS_COLLECTION, post.userId))
      ).data();

      return {
        uid: document.id,
        ...post,
        user: {
          name: user.name,
          photo: user.photo,
        },
      };
    })
  );
};

const getUrls = async (userId, pictures) => {
  return await Promise.all(
    pictures.map(async (picture) => {
      const path = `${userId}/posts/${Math.random().toString(36)}`;

      const response = await fetch(picture.uri);
      const blob = await response.blob();

      const storageRef = ref(storage, path);

      await uploadBytes(storageRef, blob);
      return await getDownloadURL(storageRef);
    })
  );
};
