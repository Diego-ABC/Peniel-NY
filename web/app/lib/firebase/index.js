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

const isLocal = import.meta.env.DEV;

export const auth = getAuth(app);
export const fs = getFirestore(app);
export const functions = getFunctions(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

if (isLocal) {
  const host = location.hostname;
  console.log("hosted on localhost. connecting to emulator.");
  connectAuthEmulator(auth, `http://${host}:9099`);
  connectFirestoreEmulator(fs, host, 8080);
  connectFunctionsEmulator(functions, host, 5001);
  connectDatabaseEmulator(db, host, 9000);
  connectStorageEmulator(storage, host, 9199);
}
