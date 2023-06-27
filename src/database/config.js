import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVpsnB5qpAbH2FyeZAJe8ayHHZl1QroA4",
  authDomain: "photowall-6a36f.firebaseapp.com",
  databaseURL: "https://photowall-6a36f-default-rtdb.firebaseio.com",
  projectId: "photowall-6a36f",
  storageBucket: "photowall-6a36f.appspot.com",
  messagingSenderId: "561519132089",
  appId: "1:561519132089:web:2a53f35e10dffde6a4ca68",
  measurementId: "G-0CN22R4TNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = firebase.database();

export {database}