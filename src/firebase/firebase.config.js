// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkZ1sDUr6PIk8dZjRkyjWxA3prgsRAD1Y",
  authDomain: "old-coffee-shop-client-592c1.firebaseapp.com",
  projectId: "old-coffee-shop-client-592c1",
  storageBucket: "old-coffee-shop-client-592c1.appspot.com",
  messagingSenderId: "723388181948",
  appId: "1:723388181948:web:0a4976264327a687844fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;