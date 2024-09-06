// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_U_7h2AkWudGdys_N4-6R6vXolpXWSo",
  authDomain: "expenses-tracker-30775.firebaseapp.com",
  projectId: "expenses-tracker-30775",
  storageBucket: "expenses-tracker-30775.appspot.com",
  messagingSenderId: "609630192993",
  appId: "1:609630192993:web:43dbedd3cc92e1ed5db120",
  measurementId: "G-0840513P0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  {app,analytics}