// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyD-y8SP5qgNmpjvL0g9XgNwUDlouxhQi1A",
  authDomain: "kapitoshka-covid-app.firebaseapp.com",
  projectId: "kapitoshka-covid-app",
  storageBucket: "kapitoshka-covid-app.appspot.com",
  messagingSenderId: "524331400164",
  appId: "1:524331400164:web:808ff9a390e3f6f3fd65f1",
  measurementId: "G-482CKYTPLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const database = getDatabase(app);
export default database