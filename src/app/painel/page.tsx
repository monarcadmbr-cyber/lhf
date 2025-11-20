"use client";

import { auth } from "@/lib/auth";
import { listenUser } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PainelPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔥 Listener do Firebase — detecta login e logout automaticamente
    const unsub = listenUser((u) => {
      if (!u) {
        router.push("/login");
      } else {
        setUser(u);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [router]);

  // Enquanto verifica login, evita piscadas
  if (loading) return <div className="text-center mt-20">Carregando...</div>;
  if (!user) return null;

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">
        Painel do Usuário
      </h1>

      <div className="flex flex-col gap-3 text-lg">
        <p>
          <span className="text-purple-300 font-semibold">Email:</span>{" "}
          {user.email}
        </p>

        <p>
          <span className="text-purple-300 font-semibold">UID:</span>{" "}
          {user.uid}
        </p>
      </div>

      <button
        onClick={async () => {
          await auth.signOut();
          router.push("/login");
        }}
        className="mt-8 p-3 bg-red-600 hover:bg-red-500 transition rounded font-bold w-full"
      >
        Sair da conta
      </button>
    </div>
  );
}
