// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3pRUCpRjBpiIjtcShYrNm2dlcOCFoMZM",
  authDomain: "iguanara-4ed16.firebaseapp.com",
  projectId: "iguanara-4ed16",
  storageBucket: "iguanara-4ed16.appspot.com",
  messagingSenderId: "531008868749",
  appId: "1:531008868749:web:724b9cc976ce826912edc4",
  measurementId: "G-NT6KC9WR5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, GithubAuthProvider, signInWithPopup };