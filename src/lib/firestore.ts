// src/lib/firestore.ts

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase"; // ← db correto, vindo do firebase.ts

// Função usada no alistamento de obras
export async function registrarOuIncrementarObra(nomeDigitado: string) {
  try {
    const id = nomeDigitado.trim().toLowerCase().replace(/\s+/g, "-");
    const obraRef = doc(db, "obras", id);

    const snap = await getDoc(obraRef);

    if (snap.exists()) {
      await updateDoc(obraRef, { contador: increment(1) });
      return { ok: true, action: "incremented", id };
    }

    await setDoc(obraRef, {
      nomeDigitado: nomeDigitado.trim(),
      contador: 1,
      criadoEm: serverTimestamp(),
    });

    return { ok: true, action: "created", id };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
}
