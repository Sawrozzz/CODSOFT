// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyt6tinxsG8OOsiUWyEVreI7xvkdRUvhQ",

  authDomain: "myblog-83056.firebaseapp.com",

  projectId: "myblog-83056",

  storageBucket: "myblog-83056.appspot.com",

  messagingSenderId: "164267257189",

  appId: "1:164267257189:web:07a91e32c63ee95ec4c58c",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
