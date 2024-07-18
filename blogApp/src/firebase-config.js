// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJXUebgc5OFP1nVvqA6F_nt1VrjBmF1nY",
  authDomain: "blogapp-674a2.firebaseapp.com",
  projectId: "blogapp-674a2",
  storageBucket: "blogapp-674a2.appspot.com",
  messagingSenderId: "282573272927",
  appId: "1:282573272927:web:fa80345008fd2264ff68ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
