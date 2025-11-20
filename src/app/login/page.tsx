"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, senha);

      // 🔥 Salva o usuário no localStorage
      localStorage.setItem(
        "usuario",
        JSON.stringify({
          email,
          logadoEm: Date.now(),
        })
      );

      router.push("/painel"); // redireciona após login
    } catch (err: any) {
      console.log(err);

      if (err.code === "auth/user-not-found") setError("Usuário não encontrado.");
      else if (err.code === "auth/wrong-password") setError("Senha incorreta.");
      else if (err.code === "auth/invalid-email") setError("Email inválido.");
      else setError("Erro ao fazer login.");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Entrar</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-3 rounded bg-zinc-800 border border-zinc-700 outline-none"
          required
        />

        {error && <p className="text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-purple-600 hover:bg-purple-500 transition rounded font-bold"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-400">
        Não tem conta?{" "}
        <a href="/cadastro" className="text-purple-400 hover:text-purple-300">
          Cadastre-se
        </a>
      </p>
    </div>
  );
}
