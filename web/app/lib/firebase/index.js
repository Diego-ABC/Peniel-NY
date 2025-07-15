import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_DATABASE_URL,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: VITE_FIREBASE_DATABASE_URL,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need

const isLocal =
  typeof location !== "undefined" && location.hostname === "localhost";

if (isLocal) {
  const auth = getAuth(app);
  const fs = getFirestore(app);
  const functions = getFunctions(app);
  const db = getDatabase(app);
  const storage = getStorage(app);
  console.log("hosted on localhost. connecting to emulator.");
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(fs, "localhost", 8080);
  connectFunctionsEmulator(functions, "localhost", 5001);
  connectDatabaseEmulator(db, "localhost", 9000);
  connectStorageEmulator(storage, "localhost", 9199);
}
