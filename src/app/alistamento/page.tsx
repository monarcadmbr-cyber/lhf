"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlistamentoContent from "./AlistamentoContent";

export default function AlistamentoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");

    // espera 50ms para garantir que o localStorage esteja disponível
    setTimeout(() => {
      if (!usuario) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }, 50);
  }, [router]);

  if (loading) return <p>Carregando...</p>;

  return <AlistamentoContent />;
}
