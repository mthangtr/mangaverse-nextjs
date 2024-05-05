// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5plxfNZMk7ISxOCMLKD8DwlbUmQXwE4I",
    authDomain: "animefilmweb.firebaseapp.com",
    projectId: "animefilmweb",
    storageBucket: "animefilmweb.appspot.com",
    messagingSenderId: "309915701188",
    appId: "1:309915701188:web:1f5d64e9ccce666f529e91",
    measurementId: "G-S3T9C6V40R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };