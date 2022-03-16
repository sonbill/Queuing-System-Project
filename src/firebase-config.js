// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ94yQmZunr-OSjyXL8WmmoZAMofEDYT0",
  authDomain: "queuing-system-309bd.firebaseapp.com",
  projectId: "queuing-system-309bd",
  storageBucket: "queuing-system-309bd.appspot.com",
  messagingSenderId: "74599536158",
  appId: "1:74599536158:web:95373546680f654c46c00f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);