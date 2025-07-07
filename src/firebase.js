import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAud9xeKXpjDtkrXPRYH4I4y-XxVf_E5Ag",
  authDomain: "wishapp-5b2d9.firebaseapp.com",
  projectId: "wishapp-5b2d9",
  storageBucket: "wishapp-5b2d9.firebasestorage.app",
  messagingSenderId: "47957882412",
  appId: "1:47957882412:web:2ff6de5f7fe010f420c389",
  measurementId: "G-4L0L36NSXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);