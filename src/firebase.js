// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Realtime DB

const firebaseConfig = {
  apiKey: "AIzaSyAsFcVGei8fHVeeVrG28Y1VRZkN6N7Na7A",
  authDomain: "javatrixacademy.firebaseapp.com",
  projectId: "javatrixacademy",
  storageBucket: "javatrixacademy.firebasestorage.app",
  messagingSenderId: "499687998372",
  appId: "1:499687998372:web:ccc45a2ce587c2694af731",
  measurementId: "G-SNVH605WL5",
  databaseURL: "https://javatrixacademy-default-rtdb.firebaseio.com" 
};

// Initialize app once
const app = initializeApp(firebaseConfig);

// Export Firestore
export const firestoreDB = getFirestore(app);

// Export Realtime Database
export const realtimeDB = getDatabase(app);
