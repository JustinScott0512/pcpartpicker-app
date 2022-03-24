export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDh8PsqUAD7HHhN85uUsbdhyFGvz3TNfLg",
  authDomain: "pcpartpicker-app.firebaseapp.com",
  databaseURL: "https://pcpartpicker-app-default-rtdb.firebaseio.com",
  projectId: "pcpartpicker-app",
  storageBucket: "pcpartpicker-app.appspot.com",
  messagingSenderId: "107207324067",
  appId: "1:107207324067:web:5d5a3113da245ec1512a16",
  measurementId: "G-PM27BXR0P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);