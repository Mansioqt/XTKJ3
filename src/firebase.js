// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcPpg_C2kf6SSxvhrq4GUqpF1o-KW79EU",
  authDomain: "web-kelas-e28ed.firebaseapp.com",
  projectId: "web-kelas-e28ed",
  storageBucket: "web-kelas-e28ed.appspot.com",
  messagingSenderId: "977305346978",
  appId: "1:977305346978:web:f4307f8ec61b0774edc8fb",
  measurementId: "G-24K7XDFZNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();