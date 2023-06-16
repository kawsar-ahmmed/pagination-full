// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYgwrGHCUuL938uyuA3PhwN6cmcC2UXq4",
  authDomain: "ema-john-53bff.firebaseapp.com",
  projectId: "ema-john-53bff",
  storageBucket: "ema-john-53bff.appspot.com",
  messagingSenderId: "84072934007",
  appId: "1:84072934007:web:a941c5cdf6ee801dd07472"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;