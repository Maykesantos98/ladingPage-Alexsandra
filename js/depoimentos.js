/* ================================================================
   ✏️  DEPOIMENTOS — EDITE APENAS AQUI
   ================================================================
   Adicione, remova ou altere entradas nesta lista.
   O carrossel é montado e duplicado automaticamente.

   CAMPOS:
     texto  → depoimento do paciente (entre aspas)
     nome   → primeiro nome + inicial, ex: "Carla M."
     tipo   → "Atendimento Online" ou "Atendimento Presencial"
     cor    → gradiente do avatar (pode trocar as cores)

   ⚠️  ÉTICA CFP:
     - Nunca use nome completo
     - Nunca mencione diagnósticos (ex: "depressão", "TOC")
     - Obtenha autorização por escrito do paciente
     - Evite promessas de resultado ("fui curada", "resolvi X")
     - Prefira experiências subjetivas: "me sinto mais leve"
   ================================================================ */

const DEPOIMENTOS = [

  {
    texto: "A Alexsandra me ajudou a entender minhas emoções de uma forma que eu nunca tinha conseguido sozinha. Me sinto muito mais leve e capaz de lidar com os desafios do dia a dia.",
    nome: "Ana N.",
    tipo: "Atendimento Online",
    cor: "linear-gradient(135deg, #8A9A50, #6B7A3E)"
  },

  {
    texto: "Passei anos com ansiedade e achei que nunca ia melhorar. Depois de alguns meses de terapia, aprendi a me conhecer e a cuidar da minha saúde mental de verdade. Recomendo muito!",
    nome: "Marcos R.",
    tipo: "Atendimento Presencial",
    cor: "linear-gradient(135deg, #C9A96E, #9E7530)"
  },

  {
    texto: "O espaço criado pela Alexsandra é de total acolhimento. Me sinto segura para falar sobre tudo sem medo de julgamento. É uma profissional incrível, comprometida com o bem-estar.",
    nome: "Larissa C.",
    tipo: "Atendimento Online",
    cor: "linear-gradient(135deg, #B07A5A, #8A5A3A)"
  },

  {
    texto: "Tinha resistência à terapia, mas a abordagem empática e cuidadosa da Alexsandra mudou tudo. Hoje entendo minhas emoções e me relaciono melhor comigo mesmo e com as pessoas.",
    nome: "Rafael S.",
    tipo: "Atendimento Presencial",
    cor: "linear-gradient(135deg, #8A9A50, #4A5628)"
  },

  {
    texto: "Vim para a terapia após uma perda muito grande. A Alexsandra me acompanhou com muita sensibilidade durante o luto. Não sei o que seria de mim sem esse suporte.",
    nome: "Patrícia T.",
    tipo: "Atendimento Online",
    cor: "linear-gradient(135deg, #C9A96E, #B08A4E)"
  },

  /* ── ADICIONE NOVOS DEPOIMENTOS AQUI ──────────────────────────

  // Exemplo SEM foto (usa iniciais coloridas):
  {
    texto: "Escreva aqui o depoimento do paciente.",
    nome: "Nome I.",
    tipo: "Atendimento Online",
    cor: "linear-gradient(135deg, #8A9A50, #6B7A3E)"
  },

  // Exemplo COM foto (coloque o arquivo de imagem na mesma pasta do HTML):
  {
    texto: "Escreva aqui o depoimento do paciente.",
    nome: "Nome I.",
    tipo: "Atendimento Presencial",
    foto: "fotos/nome-paciente.jpg"   // ← caminho da imagem
  },

  ────────────────────────────────────────────────────────────── */

];

/* ================================================================
   A PARTIR DAQUI NÃO PRECISA EDITAR
   ================================================================ */

const STARS = `<svg width="80" height="14" viewBox="0 0 80 14" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg"><path d="M7 1l1.6 3.2 3.5.5-2.5 2.5.6 3.5L7 9.2 3.8 11l.6-3.5L2 5 5.5 4.5z"/><path d="M23 1l1.6 3.2 3.5.5-2.5 2.5.6 3.5L23 9.2 19.8 11l.6-3.5L18 5l3.5-.5z"/><path d="M39 1l1.6 3.2 3.5.5-2.5 2.5.6 3.5L39 9.2 35.8 11l.6-3.5L34 5l3.5-.5z"/><path d="M55 1l1.6 3.2 3.5.5-2.5 2.5.6 3.5L55 9.2 51.8 11l.6-3.5L50 5l3.5-.5z"/><path d="M71 1l1.6 3.2 3.5.5-2.5 2.5.6 3.5L71 9.2 67.8 11l.6-3.5L66 5l3.5-.5z"/></svg>`;

function iniciais(nome) {
  return nome.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();
}

function criarAvatar(dep) {
  if (dep.foto) {
    return `<div class="test-av"><img src="${dep.foto}" alt="Foto de ${dep.nome}" loading="lazy"></div>`;
  }
  return `<div class="test-av" style="background:${dep.cor || 'linear-gradient(135deg,#8A9A50,#6B7A3E)'}">${iniciais(dep.nome)}</div>`;
}

function criarCard(dep) {
  return `<div class="test-card">
      <div class="test-stars">${STARS}</div>
      <p class="test-text">${dep.texto}</p>
      <div class="test-author">
        ${criarAvatar(dep)}
        <div><strong>${dep.nome}</strong><span>${dep.tipo}</span></div>
      </div>
    </div>`;
}

// Duplica para o loop infinito do carrossel
const track = document.getElementById('testTrack');
track.innerHTML = [...DEPOIMENTOS, ...DEPOIMENTOS].map(criarCard).join('\n');
