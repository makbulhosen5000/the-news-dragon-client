// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8k-hP58MYIoNYtmA4zLsXbh08A_zRv9Q",
  authDomain: "the-news-dragon-client-960a4.firebaseapp.com",
  projectId: "the-news-dragon-client-960a4",
  storageBucket: "the-news-dragon-client-960a4.appspot.com",
  messagingSenderId: "76609246591",
  appId: "1:76609246591:web:e4734d330632c8ca42364a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;