import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PROJECT_API_KEY,
  authDomain: import.meta.env.VITE_PROJECT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_PROJECT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_PROJECT_MESSAGING_SENSER_ID,
  appId: import.meta.env.VITE_PROJECT_APP_ID,
  measurementId: import.meta.env.VITE_PROJECT_APP_MEASURMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const database = getFirestore(app);

export { auth, googleProvider, database };
