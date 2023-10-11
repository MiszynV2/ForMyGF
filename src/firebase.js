// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOyGxDO1sx89eQDAitXyOX1nZw0vG",
  authDomain: "windowsxp-2e75c.firebaseapp.com",
  projectId: "windowsxp-2e75c",
  storageBucket: "windowsxp-2e75c.appspot.com",
  messagingSenderId: "794670401470",
  appId: "1:794670401470:web:ba08ba525f6725a63d1bef",
  measurementId: "WYMXKNQJZ1",
};

export default getFirestore(initializeApp(firebaseConfig));
