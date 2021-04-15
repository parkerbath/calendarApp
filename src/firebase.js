import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6bZI2vFjKKgNFOBafH4vYzTxDuwf03hs",
  authDomain: "astro-c397a.firebaseapp.com",
  projectId: "astro-c397a",
  storageBucket: "astro-c397a.appspot.com",
  messagingSenderId: "990277017437",
  appId: "1:990277017437:web:405b7ee3b4aeed247c52b4",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
