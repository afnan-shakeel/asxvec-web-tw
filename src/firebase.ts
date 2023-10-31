import {initializeApp} from 'firebase/app';

import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

console.log(import.meta.env.VITE_FIREBASE_PROJECT_ID)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  }
// initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app, import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_URL)
export { db, storage }