import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAL_xTPfLRjpGfVfqKHcpFzQGnV_fkgfeU",
  authDomain: "instagram-clone-d3dec.firebaseapp.com",
  projectId: "instagram-clone-d3dec",
  storageBucket: "instagram-clone-d3dec.firebasestorage.app",
  messagingSenderId: "929670128553",
  appId: "1:929670128553:web:25f1c55a00cda83da51ab8",
  measurementId: "G-194274NYB6"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const functions = getFunctions(app);

export { db, auth, storage, functions };
