// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { Firestore } from "firebase/firestore";
// import { Firestore } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYCMF9fd6E2o0T9Ejrgn2GMeXMI0J4txo",
  authDomain: "otas-portfolio.firebaseapp.com",
  projectId: "otas-portfolio",
  storageBucket: "otas-portfolio.appspot.com",
  messagingSenderId: "688849356986",
  appId: "1:688849356986:web:bd84f4a7a0ffc5a3729a83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = new Firestore(app);

export default db;
