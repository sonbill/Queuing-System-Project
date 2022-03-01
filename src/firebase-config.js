// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkFt3bsFPF0dYubK7Dz3AukZkZNEhiEw0",
  authDomain: "queuing-system-project-2891e.firebaseapp.com",
  projectId: "queuing-system-project-2891e",
  storageBucket: "queuing-system-project-2891e.appspot.com",
  messagingSenderId: "474418642234",
  appId: "1:474418642234:web:22066d530395eac925e403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);