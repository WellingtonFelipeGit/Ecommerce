// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBYPmYmqr9jZGsv7_38Yu7dEa5-oVKP3M",
  authDomain: "usuarios-ecommerce.firebaseapp.com",
  projectId: "usuarios-ecommerce",
  storageBucket: "usuarios-ecommerce.appspot.com",
  messagingSenderId: "538026763681",
  appId: "1:538026763681:web:ffe0f63b58b81893ef97e0",
  measurementId: "G-D0BMMWJZZ6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
