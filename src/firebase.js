import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signOut,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = initializeApp({
   apiKey: "AIzaSyDsgqghVvS0KNdEr2HOI0x60xGiWcIBigM",
   authDomain: "chat-app-4f2bf.firebaseapp.com",
   projectId: "chat-app-4f2bf",
   storageBucket: "chat-app-4f2bf.appspot.com",
   messagingSenderId: "389289113478",
   appId: "1:389289113478:web:d751312c7f24083fa05e07",
   measurementId: "G-MDJWHMKRGW",
});

// Initialize Firebase
const app = firebaseConfig;
const auth = getAuth();

// !! Sign in
export function signup(email, password) {
   return createUserWithEmailAndPassword(auth, email, password);
}

// !! LogIn
export function login(email, password) {
   return signInWithEmailAndPassword(auth, email, password);
}

// !! Log out
export function logout() {
   return signOut(auth);
}

// !! USer active
export function useAuth() {
   const [currentUser, setCurrentUser] = useState();

   useEffect(() => {
      const user = onAuthStateChanged(auth, (user) => setCurrentUser(user));
      return user;
   }, []);

   return currentUser;
}

// export function AuthContextProvider() {
//    const googleSignIn = () => {
//       const provider = new GoogleAuthProvider();
//       signInWithPopup(auth, provider);
//    };

//    return googleSignIn;
// }

// const provider = new GoogleAuthProvider();
