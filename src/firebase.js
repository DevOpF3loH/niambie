import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGe4FkqrjVAhVAfHFw2PHuIOko9-Qv7hk",
  authDomain: "niambie-5e021.firebaseapp.com",
  projectId: "niambie-5e021",
  storageBucket: "niambie-5e021.appspot.com",
  messagingSenderId: "190077026461",
  appId: "1:190077026461:web:6832dfbc4b112a6dff9474",
  measurementId: "G-B074235QLT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
