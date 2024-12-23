// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7pRhj7dNOIwimpbw2M1msl1oUy38ktxQ",
  authDomain: "email-password-auth-9e802.firebaseapp.com",
  projectId: "email-password-auth-9e802",
  storageBucket: "email-password-auth-9e802.firebasestorage.app",
  messagingSenderId: "448802938074",
  appId: "1:448802938074:web:c31219b8a68eb46a0659e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);