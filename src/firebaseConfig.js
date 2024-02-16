// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUX4xne4esFlQEJdjaMhYdsm4nrFnp-j8",
  authDomain: "ecommerce-react-obsession.firebaseapp.com",
  projectId: "ecommerce-react-obsession",
  storageBucket: "ecommerce-react-obsession.appspot.com",
  messagingSenderId: "1076054720395",
  appId: "1:1076054720395:web:d463da3fc056682dfef98e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
