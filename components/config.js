// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyEtT9W7LRlr8kVK1dhQMjhXe9W9EmOpQ",
  authDomain: "fir-32205.firebaseapp.com",
  projectId: "fir-32205",
  storageBucket: "fir-32205.appspot.com",
  messagingSenderId: "729592774602",
  appId: "1:729592774602:web:02176e432d3040e308d933",
  measurementId: "G-L7JX66R0ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);