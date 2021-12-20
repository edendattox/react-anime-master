// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqi4IEpxhVIExSYBKZxlItwuDoE8-T1gg",
  authDomain: "react-ani.firebaseapp.com",
  projectId: "react-ani",
  storageBucket: "react-ani.appspot.com",
  messagingSenderId: "753602575590",
  appId: "1:753602575590:web:5872ef16a34c48a34b4f27",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
