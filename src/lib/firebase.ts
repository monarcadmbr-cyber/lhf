// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5AbL84Iygf9Ky58LFJsTCBpIKqX9gfjQ",
  authDomain: "shadow-quadrinhos.firebaseapp.com",
  databaseURL: "https://shadow-quadrinhos-default-rtdb.firebaseio.com",
  projectId: "shadow-quadrinhos",
  storageBucket: "shadow-quadrinhos.firebasestorage.app",
  messagingSenderId: "824265678437",
  appId: "1:824265678437:web:78ddaf9dfbbf616f76708c"
};

// Evita reinicializar o Firebase mais de uma vez
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore
export const db = getFirestore(app);

// 🔥 AQUI ESTÁ O QUE FALTAVA
export const auth = getAuth(app);
