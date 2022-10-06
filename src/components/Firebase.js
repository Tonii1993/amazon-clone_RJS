import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF7VzvHFqVnqe9-9J1reDNJgOEu5vJ9-s",
  authDomain: "clone-b337d.firebaseapp.com",
  projectId: "clone-b337d",
  storageBucket: "clone-b337d.appspot.com",
  messagingSenderId: "710590011694",
  appId: "1:710590011694:web:3b0b3c40bf03f6e52802bf",
  measurementId: "G-M5Q58SPZ5B",
};

const app = initializeApp(firebaseConfig);

// const db = app.firestore();
const auth = getAuth();

export { auth };
