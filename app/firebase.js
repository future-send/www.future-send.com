// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf71rrH_Uw1og6FVsIbD7BZvs2OhA34RI",
  authDomain: "crisstudiocdz.firebaseapp.com",
  projectId: "crisstudiocdz",
  storageBucket: "crisstudiocdz.firebasestorage.app",
  messagingSenderId: "212035913961",
  appId: "1:212035913961:web:e662ed410e4228dbb80878",
  measurementId: "G-EK6R92593C",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
