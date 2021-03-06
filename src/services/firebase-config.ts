import { FirebaseApp, getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let app: FirebaseApp;

const firebaseConfig = {
  apiKey: "AIzaSyAt-tJY881XvUF9Lck1tf5Fk_jVK3zaHC8",
  authDomain: "florstore-b2734.firebaseapp.com",
  projectId: "florstore-b2734",
  storageBucket: "florstore-b2734.appspot.com",
  messagingSenderId: "1003232881202",
  appId: "1:1003232881202:web:fb94563c1d6b292b8caa2b",
};

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore();
export default app;
