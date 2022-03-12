// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDQvrRlWpsTqbZrmq7XNPi4Md6mbeJcWg",
  authDomain: "queuing-system-project.firebaseapp.com",
  projectId: "queuing-system-project",
  storageBucket: "queuing-system-project.appspot.com",
  messagingSenderId: "254362416071",
  appId: "1:254362416071:web:71413edec261d368945fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);