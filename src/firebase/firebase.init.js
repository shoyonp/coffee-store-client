// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoGE9zjbl-N8beU47KArXNbGzhK_szdMo",
  authDomain: "coffee-store-361de.firebaseapp.com",
  projectId: "coffee-store-361de",
  storageBucket: "coffee-store-361de.firebasestorage.app",
  messagingSenderId: "305757846420",
  appId: "1:305757846420:web:96af2bc224238303cfed81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
