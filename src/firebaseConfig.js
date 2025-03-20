// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBiP-rC60B8M6pfqUjycuOG26fJmcfXh4M",
    authDomain: "pes-2025-9d10e.firebaseapp.com",
    projectId: "pes-2025-9d10e",
    storageBucket: "pes-2025-9d10e.firebasestorage.app",
    messagingSenderId: "1096375029000",
    appId: "1:1096375029000:web:e724113ec130628af4b0bd",
    measurementId: "G-60EE41KXK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);


export { auth, db };
