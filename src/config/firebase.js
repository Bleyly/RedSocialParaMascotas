// Import the functions you need from the SDKs you need
import React, { useEffect, useMemo } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useCallback, useContext, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_dDXCCaYtErhi9bcGozkZFTBNdr9OU9s",
  authDomain: "redsocialparamascotas.firebaseapp.com",
  projectId: "redsocialparamascotas",
  storageBucket: "redsocialparamascotas.appspot.com",
  messagingSenderId: "510741182170",
  appId: "1:510741182170:web:d5d8d2eab63852694697e3",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);

// Firebase context
const firebaseContext = createContext();
export const useFireBaseContext = () => useContext(firebaseContext);

export const FireBaseProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const userManagement = useMemo(
    () => ({
      register: async (name, email, password) => {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(user, { displayName: name });
      },
      login: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
      },
      logout: async () => {
        await signOut(auth);
      },
    }),
    []
  );

  return (
    <firebaseContext.Provider
      value={{
        ...userManagement,
        user,
        setUser,
      }}
    >
      {children}
    </firebaseContext.Provider>
  );
};
