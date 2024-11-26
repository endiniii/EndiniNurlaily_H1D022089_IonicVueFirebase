// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// modifikasi src/utils/firebase.ts
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAWXuWPjoNrOWMMp04wXcYqDALc9dY334U",
    authDomain: "prakmob-endini.firebaseapp.com",
    projectId: "prakmob-endini",
    storageBucket: "prakmob-endini.firebasestorage.app",
    messagingSenderId: "448959393713",
    appId: "1:448959393713:web:3ed6892a84745a659e5790",
    measurementId: "G-LSWYR6HCRV"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };