"use client";

export default function InstrucoesPage() {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl shadow-lg text-zinc-300 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-purple-400">Instruções Oficiais – LHF</h1>

      {/* 1 – Usuários */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">1 – Usuários</h2>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">1.1 Direitos de uso</h3>
        <p>
          Os usuários da LHF têm total liberdade para utilizar o conteúdo da competição como desejarem.
          É permitido:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Gravar vídeos</li>
          <li>Mencionar a competição em redes sociais</li>
          <li>Criar materiais informativos, coberturas e análises</li>
        </ul>
        <p className="mt-2">
          A LHF não possui conteúdo restrito, pois busca promover as obras participantes e fortalecer a cultura nacional.
        </p>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">1.2 Tipos de usuários</h3>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Usuários Passivos</strong> – apenas acompanham as competições.</li>
          <li><strong>Usuários Ativos</strong> – participam votando nas disputas.</li>
          <li><strong>Administradores (Embaixadores)</strong> – responsáveis pela organização e gestão da LHF.</li>
        </ul>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">1.3 Conduta e penalidades</h3>
        <p>
          Casos de:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Cyberbullying</li>
          <li>Cyberataque</li>
          <li>Crimes virtuais</li>
          <li>Ofensas ou condutas abusivas</li>
        </ul>
        <p className="mt-2">
          resultarão em banimento imediato, podendo gerar responsabilização legal.
        </p>
      </section>

      {/* 2 – Etapas da competição */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">2 – Etapas da Competição</h2>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">2.1 Registro</h3>
        <p>
          Para que uma obra participe da LHF, ela deve ser registrada e cumprir os requisitos do Artigo 3.
        </p>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">2.2 Alistamento</h3>
        <p>
          Primeira etapa oficial. Qualquer obra pode ser inscrita seguindo as regras.
        </p>
        <p className="mt-2">
          As obras mais votadas garantem vaga na Liga da temporada vigente.
        </p>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">2.3 Liga</h3>
        <p>A principal etapa da competição. Em 2026 haverá apenas Liga 1.</p>
        <p className="mt-2">
          Cada obra disputa <strong>20 confrontos</strong> durante o ano no formato 1x1x1x1.
        </p>

        <p className="mt-3 font-semibold">Pontuação por partida:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>1º lugar – 3 pontos</li>
          <li>2º lugar – 2 pontos</li>
          <li>3º lugar – 1 ponto</li>
          <li>4º lugar – 0 pontos</li>
        </ul>

        <p className="mt-3 font-semibold">Classificação:</p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Zona verde:</strong> vaga na CNF</li>
          <li><strong>Zona vermelha:</strong> risco de rebaixamento</li>
        </ul>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">2.4 CNF – Copa Nacional Fliptru</h3>
        <p>
          Evento no formato mata-mata 1x1 reunindo as melhores obras da temporada.
        </p>
      </section>

      {/* 3 – Regras Básicas */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">3 – Regras Básicas</h2>

        <ul className="space-y-2">
          <li><strong>3.1 Autonomia:</strong> A LHF não possui vínculo oficial com a Fliptru.</li>
          <li><strong>3.2 Conteúdo adulto:</strong> Hentai não é aceito; ecchi será avaliado individualmente.</li>
          <li><strong>3.3 Publicação:</strong> Somente obras publicadas na Fliptru podem participar.</li>
          <li><strong>3.4 Nacionalidade:</strong> Apenas obras brasileiras.</li>
          <li><strong>3.5 Fanworks:</strong> Obras derivadas de franquias famosas não são aceitas.</li>
          <li><strong>3.6 Igualdade competitiva:</strong> Todas competem igualmente, independente de tamanho ou gênero.</li>
          <li><strong>3.7 Neutralidade:</strong> Embaixadores são proibidos de influenciar resultados.</li>
          <li><strong>3.8 Crimes virtuais:</strong> Podem gerar banimento e medidas legais.</li>
          <li><strong>3.9 Dados pessoais:</strong> É proibido divulgar informações sensíveis.</li>
          <li><strong>3.10 Denúncias:</strong> Devem ser feitas pelo suporte oficial.</li>
        </ul>
      </section>

      {/* 4 – Canais de Comunicação */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">4 – Canais de Comunicação</h2>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">4.1 Plataforma</h3>
        <p>O site oficial permitirá:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Votação</li>
          <li>Alistamento</li>
          <li>Classificação</li>
          <li>Notícias</li>
          <li>Chat</li>
          <li>Perfil</li>
          <li>Tabela de confrontos</li>
          <li>Calendário</li>
        </ul>

        <h3 className="text-xl font-semibold text-purple-200 mt-4">4.2 YouTube</h3>
        <p>
          Canal oficial para notícias, transmissão de eventos, debates e respostas da equipe.
        </p>
      </section>

      {/* 5 – Equipe */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">5 – Equipe e Colaboradores</h2>

        <ul className="space-y-2">
          <li><strong>5.1 Apoiadores:</strong> No futuro será possível contribuir com doações.</li>
          <li><strong>5.2 Embaixadores:</strong> Usuários poderão se voluntariar para ajudar a gerir a LHF.</li>
          <li><strong>5.3 Parcerias:</strong> Empresas e criadores podem se tornar parceiros oficiais.</li>
        </ul>
      </section>

      {/* Final */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">Agradecimentos</h2>
        <p>
          Agradecemos a todos pelo apoio e presença. Novas atualizações serão divulgadas continuamente
          na área de notícias.
        </p>

        <p className="mt-4 text-purple-300 font-semibold">
          Suporte LHF – KJ  
        </p>

        <p className="mt-1">📧 monarcaadmbr@gmail.com</p>
      </section>
    </div>
  );
}
