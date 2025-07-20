// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_TsG62HOWI78rDFOBWiHTUUNZMJDYYXY",
  authDomain: "progect-18.firebaseapp.com",
  projectId: "progect-18",
  storageBucket: "progect-18.firebasestorage.app",
  messagingSenderId: "155309160863",
  appId: "1:155309160863:web:f9e59ff967b144e5d8a5aa",
  measurementId: "G-CJHNXPNSLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics
const analytics = getAnalytics(app);

export default app;