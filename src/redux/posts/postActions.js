import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { db, storage } from "../../config/firebase";
import { postTypes } from "./postTypes";

const POSTS_COLLECTION = "posts";
const USERS_COLLECTION = "users";

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
      created: Timestamp.now(),
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
      query(collection(db, POSTS_COLLECTION), orderBy("created", "desc"))
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
      snapshot = await getDocs(query(postsRef, orderBy("created", "desc")));
    }

    posts = await getPost(snapshot);
    if (searchText) {
      posts = posts.filter((post) => post.description.includes(searchText));
    }

    dispatch({ type: postTypes.getPosts, payload: posts });
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
