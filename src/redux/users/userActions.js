import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { auth, db } from "../../config/firebase";
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

    const snapshot = await getDoc(doc(db, "users", user.uid));

    if (!snapshot.exists()) {
      const data = { name, currentUser: { uid: user.uid, email: user.email } };
      await setDoc(doc(db, "users", user.uid), data);

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
