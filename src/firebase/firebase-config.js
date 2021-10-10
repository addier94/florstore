// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt-tJY881XvUF9Lck1tf5Fk_jVK3zaHC8",
  authDomain: "florstore-b2734.firebaseapp.com",
  projectId: "florstore-b2734",
  storageBucket: "florstore-b2734.appspot.com",
  messagingSenderId: "1003232881202",
  appId: "1:1003232881202:web:fb94563c1d6b292b8caa2b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
