import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

googleProvider.setCustomParameters({
  prompt: "select_account",
});
const database = getFirestore(app);
const collectionRef = collection(database, "posts");
const collectionQuery = query(collectionRef, orderBy("user.time", "desc"));
const storage = getStorage();

export {
  auth,
  googleProvider,
  database,
  collectionRef,
  storage,
  collectionQuery,
};
