// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpgaq3Rx5Azi6CoW-txC6A1qXA_O-Jkc8",
  authDomain: "ensenas-b1193.firebaseapp.com",
  projectId: "ensenas-b1193",
  storageBucket: "ensenas-b1193.appspot.com",
  messagingSenderId: "122025613504",
  appId: "1:122025613504:web:e0979df482f656c4b43525"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

setPersistence(auth, browserLocalPersistence);