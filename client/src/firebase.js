// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-a81ce.firebaseapp.com",
  projectId: "mern-estate-a81ce",
  storageBucket: "mern-estate-a81ce.appspot.com",
  messagingSenderId: "932458598825",
  appId: "1:932458598825:web:4b3e12f1a65cfa39b574b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);