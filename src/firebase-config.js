// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpleQjOxjpAW6SvFe2CLeRM50gZ_CaZqM",
  authDomain: "test-d84c9.firebaseapp.com",
  projectId: "test-d84c9",
  storageBucket: "test-d84c9.appspot.com",
  messagingSenderId: "929493918088",
  appId: "1:929493918088:web:6737068ba8394a4c111a3d",
  measurementId: "G-6VFHJSY243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);