// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS10AVyY7DwpYR6bou-8QiALfEh4yjhvc",
  authDomain: "old-coffee-shop-client.firebaseapp.com",
  projectId: "old-coffee-shop-client",
  storageBucket: "old-coffee-shop-client.appspot.com",
  messagingSenderId: "391635207324",
  appId: "1:391635207324:web:2278ee5304899464329959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;