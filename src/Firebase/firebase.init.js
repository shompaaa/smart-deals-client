// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq9nluhZC31iPoCxS-Vb0hKZeybP_HYcQ",
  authDomain: "smart-deals-e5440.firebaseapp.com",
  projectId: "smart-deals-e5440",
  storageBucket: "smart-deals-e5440.firebasestorage.app",
  messagingSenderId: "445961642838",
  appId: "1:445961642838:web:f2eb6e77e02092c47facf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);