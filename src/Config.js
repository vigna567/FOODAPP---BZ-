// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyaAhHtHKXNdwrf-iCJopeTXhRUJXImhU",
  authDomain: "final-app-d42a0.firebaseapp.com",
  projectId: "final-app-d42a0",
  storageBucket: "final-app-d42a0.appspot.com",
  messagingSenderId: "246758938989",
  appId: "1:246758938989:web:c9133d351c5cfe5ad3a264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export{auth,app,db};