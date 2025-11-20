export default function Info() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">

      <h1 className="text-4xl font-bold text-purple-400">
        Informações da LHF26
      </h1>

      <p className="text-lg text-zinc-300">
        Bem-vindos à <strong className="text-white">LHF – Liga de Histórias da Fliptru</strong>.
      </p>

      <p className="text-zinc-400 leading-relaxed">
        É com grande entusiasmo que iniciamos o <strong className="text-white">LHF26 – Liga de Histórias da Fliptru 2026</strong>.
        A edição atual conta com <strong className="text-white">64 obras</strong>, formando a Liga A, onde todas competem entre si
        pelo título de Melhor Obra de 2026.
      </p>

      <p className="text-zinc-400 leading-relaxed">
        A LHF é um evento independente e não pertence a nenhuma organização governamental.
      </p>

      {/* Links */}
      <div className="pt-4">
        <h2 className="text-2xl font-semibold text-purple-300">Acompanhe a LHF</h2>
        <ul className="list-disc list-inside text-zinc-300 mt-2 space-y-1">
          <li>Site oficial</li>
          <li>Instagram</li>
          <li>Canal Shounen News no YouTube</li>
        </ul>
      </div>

      <hr className="border-zinc-800 my-6" />

      {/* Formato das Partidas */}
      <h2 className="text-3xl font-bold text-purple-300">Formato das Partidas</h2>

      <p className="text-zinc-400">
        Cada rodada é composta por um duelo 1x1x1x1, com 4 obras competindo simultaneamente.
        As partidas são avaliadas em 6 competências, cada uma valendo 1 ponto:
      </p>

      <div className="space-y-4 pt-4">

        <div>
          <h3 className="text-xl font-semibold text-white">🧩 1. Roteiro e Narrativa</h3>
          <p className="text-zinc-400">
            Analisa estrutura da história, coesão do enredo, ritmo, diálogos e qualidade geral.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">🎨 2. Arte e Design Visual</h3>
          <p className="text-zinc-400">
            Avalia traço, estilo, composição dos quadros, cores e clareza visual.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">💡 3. Originalidade e Criatividade</h3>
          <p className="text-zinc-400">
            Considera inovação, conceitos e ideias únicas da obra.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">👥 4. Desenvolvimento de Personagens</h3>
          <p className="text-zinc-400">
            Julga profundidade, evolução e conexão emocional dos personagens.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">❤️ 5. Impacto Emocional ou Social</h3>
          <p className="text-zinc-400">
            Avalia o quanto a obra provoca sentimentos, reflexões ou críticas sociais.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">⚔️ 6. Estrutura e Ação</h3>
          <p className="text-zinc-400">
            Examina tensão, ritmo visual e condução dos conflitos.
          </p>
        </div>

      </div>

      <hr className="border-zinc-800 my-6" />

      {/* Sistema de Pontuação */}
      <h2 className="text-3xl font-bold text-purple-300">Sistema de Pontuação</h2>

      <p className="text-zinc-400">
        Cada votante escolhe uma obra por competência.  
        A obra com mais votos recebe 1 ponto.
      </p>

      <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 mt-3">
        <p className="text-zinc-300 font-semibold">Exemplo:</p>
        <ul className="text-zinc-400 mt-2 space-y-1">
          <li>Obra X: 7 votos</li>
          <li>Obra Y: 9 votos</li>
          <li>Obra R: 3 votos</li>
          <li>Obra T: 12 votos</li>
        </ul>
        <p className="text-purple-300 font-bold mt-2">
          ➡️ Obra T recebe o ponto da competência.
        </p>
      </div>

      <div className="pt-4">
        <p className="text-zinc-300">Classificação final:</p>
        <ul className="text-zinc-400 mt-2 space-y-1">
          <li>🥇 1º lugar: 3 pontos de liga</li>
          <li>🥈 2º lugar: 2 pontos de liga</li>
          <li>🥉 3º lugar: 1 ponto de liga</li>
          <li>🟫 4º lugar: 0 pontos de liga</li>
        </ul>
      </div>

      <hr className="border-zinc-800 my-6" />

      {/* Abas do Site */}
      <h2 className="text-3xl font-bold text-purple-300">Abas do Site</h2>

      <ul className="list-disc list-inside text-zinc-300 space-y-1 mt-2">
        <li>📅 Competições – resultados completos</li>
        <li>📘 Instruções – regras de votação</li>
        <li>🎮 Votação – escolher competidores</li>
        <li>📚 Obras – detalhes e links de leitura</li>
      </ul>

      <hr className="border-zinc-800 my-6" />

      {/* Agradecimentos */}
      <h2 className="text-2xl font-bold text-purple-300">Agradecimentos</h2>
      <p className="text-zinc-400">Obrigado por acompanhar a LHF!</p>

      <p className="text-zinc-400 pt-2">
        Para suporte: <br />
        <span className="text-white">📧 monarcaadmbr@gmail.com</span>
      </p>

    </div>
  );
}
