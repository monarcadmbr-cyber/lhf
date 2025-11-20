"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function CadastroPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (senha !== senha2) {
      setError("As senhas não coincidem.");
      setLoading(false);
      return;
    }

    try {
      // 🔥 1 - Criar usuário no Firebase Auth
      const cred = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = cred.user.uid;

      // 🔥 2 - Criar documento do usuário no Firestore
      await setDoc(doc(db, "users", uid), {
        email: email,
        uid: uid,
        createdAt: serverTimestamp(),
        role: "user", // cargo padrão
        avatar: null,
        displayName: email.split("@")[0], // nome básico inicial
      });

      // 🔥 3 - Redirecionar para o painel protegido
      router.push("/painel");

    } catch (err: any) {
      console.log(err);

      if (err.code === "auth/email-already-in-use")
        setError("Este email já está sendo usado.");
      else if (err.code === "auth/invalid-email")
        setError("Formato de email inválido.");
      else if (err.code === "auth/weak-password")
        setError("A senha deve ter pelo menos 6 caracteres.");
      else setError("Erro ao criar conta.");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Criar conta</h1>

      <form onSubmit={handleCadastro} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded bg-zinc-800 border border-zinc-700 outline-none"
          required
        />

        <input
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-3 rounded bg-zinc-800 border border-zinc-700 outline-none"
          required
        />

        <input
          type="password"
          placeholder="Repita sua senha"
          value={senha2}
          onChange={(e) => setSenha2(e.target.value)}
          className="p-3 rounded bg-zinc-800 border border-zinc-700 outline-none"
          required
        />

        {error && <p className="text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-purple-600 hover:bg-purple-500 transition rounded font-bold"
        >
          {loading ? "Criando conta..." : "Cadastrar"}
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-400">
        Já tem conta?{" "}
        <a href="/login" className="text-purple-400 hover:text-purple-300">
          Fazer login
        </a>
      </p>
    </div>
  );
}
