"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { listenUser, auth } from "@/lib/auth";

// Rotas protegidas
const protectedRoutes = ["/painel", "/admin", "/minha-conta"];

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  // Monitora login
  useEffect(() => {
    const unsub = listenUser((u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Redireciona se for rota privada
  useEffect(() => {
    if (!loading) {
      const isProtected = protectedRoutes.includes(pathname);
      if (isProtected && !user) {
        router.push("/login");
      }
    }
  }, [loading, pathname, user, router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-zinc-900/60 backdrop-blur p-4 flex gap-6 border-b border-zinc-800 items-center">
        <Link href="/" className="font-bold text-purple-400 text-lg">
          LHF26
        </Link>

        <Link href="/obras" className="hover:text-purple-300">Obras</Link>
        <Link href="/competicoes" className="hover:text-purple-300">Competições</Link>
        <Link href="/instrucoes" className="hover:text-purple-300">Instruções</Link>
        <Link href="/votacoes" className="hover:text-purple-300">Votações</Link>
        <Link href="/info" className="hover:text-purple-300">Informações</Link>
        <Link href="/alistamento" className="hover:text-purple-300">Alistamento</Link>

        <div className="ml-auto flex gap-4">
          {user ? (
            <>
              <Link href="/painel" className="hover:text-purple-300">
                Painel
              </Link>
              <button
                onClick={() => auth.signOut()}
                className="font-bold text-red-400 hover:text-red-300"
              >
                Sair
              </button>
            </>
          ) : (
            <Link href="/login" className="font-bold hover:text-purple-200">
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* CONTEÚDO */}
      <main className="p-6">{children}</main>
    </>
  );
}
