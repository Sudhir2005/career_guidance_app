// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU8TS9ksYbkYZ8kUCh37tQ8CZ9GJ1sBjI",
  authDomain: "career-guidance-app-c7f67.firebaseapp.com",
  projectId: "career-guidance-app-c7f67",
  storageBucket: "career-guidance-app-c7f67.firebasestorage.app",
  messagingSenderId: "477916587719",
  appId: "1:477916587719:web:e6c4b2494543f1138200e2",
  measurementId: "G-TLR80G0E8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);