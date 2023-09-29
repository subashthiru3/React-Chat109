// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl48FJRwmluoD4vcRvkhcqg_P2jxf8AuE",
  authDomain: "react-chat-109.firebaseapp.com",
  projectId: "react-chat-109",
  storageBucket: "react-chat-109.appspot.com",
  messagingSenderId: "160644436865",
  appId: "1:160644436865:web:fc4410e0ad2f6857650e80",
  measurementId: "G-02GZLP5CJK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
