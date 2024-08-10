// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUQ3vv_TdO6GTyJNmVevBz-FgMVUZQO5c",
  authDomain: "sheikh-russel-hall.firebaseapp.com",
  projectId: "sheikh-russel-hall",
  storageBucket: "sheikh-russel-hall.appspot.com",
  messagingSenderId: "475360012972",
  appId: "1:475360012972:web:02f623cbbaed1cc1bc0d09",
  measurementId: "G-0YMCB7Y2N4"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





