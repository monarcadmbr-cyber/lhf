// src/lib/auth.ts
"use client";

import {
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "./firebase";

// Define persistência do login de forma segura (somente no client)
async function ensurePersistence() {
  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (err) {
    console.error("Erro ao definir persistência:", err);
  }
}

// Listener global de autenticação (com persistência garantida)
export function listenUser(callback: (user: any) => void) {
  ensurePersistence(); // garante persistência quando o listener é usado
  return onAuthStateChanged(auth, callback);
}

export { auth };
