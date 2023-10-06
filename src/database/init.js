// import { get } from 'core-js/core/dict';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCYCMF9fd6E2o0T9Ejrgn2GMeXMI0J4txo",
  
    authDomain: "otas-portfolio.firebaseapp.com",
  
    projectId: "otas-portfolio",
  
    storageBucket: "otas-portfolio.appspot.com",
  
    messagingSenderId: "688849356986",
  
    appId: "1:688849356986:web:bd84f4a7a0ffc5a3729a83"
  
  };

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;