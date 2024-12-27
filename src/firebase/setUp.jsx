import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATocmRwiTJ7Qk-1ujrvt7L0icVj3wEDwg",
  authDomain: "shibu-olx-clone.firebaseapp.com",
  projectId: "shibu-olx-clone",
  storageBucket: "shibu-olx-clone.firebasestorage.app",
  messagingSenderId: "826675606289",
  appId: "1:826675606289:web:9feac1efb472732f1e52b0",
  measurementId: "G-KDXNHQ1PBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()