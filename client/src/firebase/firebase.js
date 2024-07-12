// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "content-gen-23c7e.firebaseapp.com",
  projectId: "content-gen-23c7e",
  storageBucket: "content-gen-23c7e.appspot.com",
  messagingSenderId: "257015928551",
  appId: "1:257015928551:web:5f08cd8e9bc6ef831bb442",
  measurementId: "G-V6H2JXVBZR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);