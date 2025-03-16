import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQCh1pGLpMnrfzYJDX9r0dJbgSawnLzWk",
  authDomain: "project-5-6d2e6.firebaseapp.com",
  databaseURL: "https://project-5-6d2e6-default-rtdb.firebaseio.com",
  projectId: "project-5-6d2e6",
  storageBucket: "project-5-6d2e6.firebasestorage.app",
  messagingSenderId: "318278164087",
  appId: "1:318278164087:web:8cec1144d471aeb4a9f072"
};

const app = initializeApp(firebaseConfig);

export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);