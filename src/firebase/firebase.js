// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8cGvEFw1PSPNKLiG9MaIO9C479FIXb8Q",
  authDomain: "news-daragon-client.firebaseapp.com",
  projectId: "news-daragon-client",
  storageBucket: "news-daragon-client.appspot.com",
  messagingSenderId: "194847917807",
  appId: "1:194847917807:web:f76615a9cc8e1a5e01bd1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;