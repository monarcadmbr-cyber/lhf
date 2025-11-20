"use client";

import { useState } from "react";
import { registrarOuIncrementarObra } from "@/lib/firestore";

export default function AlistamentoContent() {
  const [nome, setNome] = useState("");
  const [confirmando, setConfirmando] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function enviarObra() {
    if (!nome.trim()) {
      setStatus("O nome da obra não pode estar vazio.");
      return;
    }

    setLoading(true);
    setStatus("Processando...");

    try {
      const res = await registrarOuIncrementarObra(nome.trim());

      if (!res.ok) {
        setStatus("Erro: " + res.error);
      } else if (res.action === "created") {
        setStatus("Obra cadastrada com sucesso!");
      } else {
        setStatus("Obra já existia — contador atualizado!");
      }

      setNome("");
      setConfirmando(false);
    } catch (e: any) {
      setStatus("Erro inesperado: " + e.message);
    }

    setLoading(false);
  }

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-xl max-w-xl w-full">

        <h1 className="text-2xl font-bold mb-6 text-purple-400">
          Alistamento de Obras
        </h1>

        {!confirmando && (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Digite o nome da obra..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-purple-400 outline-none text-white"
            />

            <button
              onClick={() => setConfirmando(true)}
              className="bg-purple-600 hover:bg-purple-500 transition font-bold p-3 rounded-lg disabled:opacity-50"
              disabled={!nome.trim() || loading}
            >
              Continuar
            </button>
          </div>
        )}

        {confirmando && (
          <div className="mt-6 p-4 border border-zinc-700 rounded-lg bg-zinc-800">
            <p className="mb-2">
              Você digitou: <b className="text-purple-300">{nome}</b>
            </p>
            <p className="mb-4">Está correto?</p>

            <div className="flex gap-4">
              <button
                onClick={() => setConfirmando(false)}
                className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg"
                disabled={loading}
              >
                Corrigir
              </button>

              <button
                onClick={enviarObra}
                className="bg-purple-600 hover:bg-purple-500 font-bold px-4 py-2 rounded-lg"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Confirmar"}
              </button>
            </div>
          </div>
        )}

        <p className="mt-6 min-h-6 text-sm text-purple-300">{status}</p>
      </div>
    </div>
  );
}
