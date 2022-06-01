// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3a809I8I4-NI0vjyQljBVHmIdaPh1k0",
  authDomain: "ecommerce-react-6a18b.firebaseapp.com",
  projectId: "ecommerce-react-6a18b",
  storageBucket: "ecommerce-react-6a18b.appspot.com",
  messagingSenderId: "451552343089",
  appId: "1:451552343089:web:2900eff56f6bea4bb41110"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp (){
    return app
}
