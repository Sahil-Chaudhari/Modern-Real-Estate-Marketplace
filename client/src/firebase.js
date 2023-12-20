// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-marketplace-b28c6.firebaseapp.com",
  projectId: "mern-estate-marketplace-b28c6",
  storageBucket: "mern-estate-marketplace-b28c6.appspot.com",
  messagingSenderId: "523973780932",
  appId: "1:523973780932:web:1e79cee642e81508c7f091"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
