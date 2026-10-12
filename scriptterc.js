// Base de dados contendo frases completas extraídas do seu conteúdo
const dadosCrase = [
  // --- CRASE OBRIGATÓRIA ---
  {
    categoria: "obrigatoria",
    titulo: "Troca do substantivo Feminino por Masculino",
    fraseCompleta: "João voltou à cidade natal"
  },
  {
    categoria: "obrigatoria",
    titulo: "Nomes Geográficos (Regra do Voltar)",
    fraseCompleta: "Foi à França porque voltou da França"
  },
  {
    categoria: "obrigatoria",
    titulo: "Locuções Adverbiais Femininas",
    fraseCompleta: "Seu pai saiu às pressas"
  },
  {
    categoria: "obrigatoria",
    titulo: "Moda e Maneira Subentendidas",
    fraseCompleta: "Gosto de comer bife à milanesa"
  },
  {
    categoria: "obrigatoria",
    titulo: "Pronomes Demonstrativos (Aquele / Aquela / Aquilo)",
    fraseCompleta: "Cheguei àquele lugar pois cheguei a este lugar"
  },
  {
    categoria: "obrigatoria",
    titulo: "Expressões Comerciais / Ambiguidade",
    fraseCompleta: "Estou vendendo algo então vendo à vista com crase"
  },
  {
    categoria: "obrigatoria",
    titulo: "Indicação de Horas Determinadas",
    fraseCompleta: "Estudamos das oito às doze"
  },

  // --- CRASE FACULTATIVA ---
  {
    categoria: "facultativa",
    titulo: "Pronomes Possessivos Femininos",
    fraseCompleta: "Ele se refere a minha mãe"
  },
  {
    categoria: "facultativa",
    titulo: "Nomes Próprios Femininos (Sem Especificar)",
    fraseCompleta: "Eu me referi a Joana"
  },
  {
    categoria: "facultativa",
    titulo: "Nomes Próprios Femininos (Especificado - Obrigatoria)",
    fraseCompleta: "Eu me referi à Joana do seu Zé"
  },
  {
    categoria: "facultativa",
    titulo: "Após a Preposição 'Até'",
    fraseCompleta: "Todos os alunos foram até a escola"
  },

  // --- CRASE PROIBIDA ---
  {
    categoria: "proibida",
    titulo: "Antes de Verbo",
    fraseCompleta: "Estou apto a discutir assuntos de concurso"
  },
  {
    categoria: "proibida",
    titulo: "Entre Palavras Repetidas",
    fraseCompleta: "Ficamos cara a cara frente a frente lado a lado"
  },
  {
    categoria: "proibida",
    titulo: "Tempo Futuro ou Distância",
    fraseCompleta: "O ônibus sairá daqui a pouco"
  },
  {
    categoria: "proibida",
    titulo: "Dias da Semana",
    fraseCompleta: "As aulas acontecem de segunda a quinta"
  },
  {
    categoria: "proibida",
    titulo: "Pronomes de Tratamento Geral",
    fraseCompleta: "Não falo a você nem a vossa excelência"
  },
  {
    categoria: "proibida",
    titulo: "Pronomes de Tratamento Exceções (Permite Crase)",
    fraseCompleta: "Dirigi as palavras à dona à senhora e à senhorita"
  },
  {
    categoria: "proibida",
    titulo: "'A' no Singular + Substantivo no Plural",
    fraseCompleta: "Não falo a pessoas estranhas"
  }
];

// Estado da Aplicação
let cartoesFiltrados = [...dadosCrase];
let indiceAtual = 0;
let palavrasOriginais = [];
let palavrasUsuario = [];

// Elementos da DOM
const ruleTitle = document.getElementById("rule-title");
const wordsBank = document.getElementById("words-bank");
const userPhraseZone = document.getElementById("user-phrase-zone");
const feedbackEl = document.getElementById("feedback");
const cardTag = document.getElementById("card-tag");
const currentCardNum = document.getElementById("current-card-num");
const totalCardsNum = document.getElementById("total-cards-num");

document.addEventListener("DOMContentLoaded", () => {
  atualizarContadores();
  carregarDesafio();
});

function atualizarContadores() {
  document.getElementById("count-todas").innerText = dadosCrase.length;
  document.getElementById("count-obrigatoria").innerText = dadosCrase.filter(c => c.categoria === "obrigatoria").length;
  document.getElementById("count-facultativa").innerText = dadosCrase.filter(c => c.categoria === "facultativa").length;
  document.getElementById("count-proibida").innerText = dadosCrase.filter(c => c.categoria === "proibida").length;
}

// Carrega o cartão e embaralha as palavras da frase
function carregarDesafio() {
  feedbackEl.innerText = "";
  feedbackEl.className = "feedback";
  userPhraseZone.innerHTML = '<span class="placeholder-text">Clique nas palavras abaixo para montar a frase...</span>';
  palavrasUsuario = [];

  if (cartoesFiltrados.length === 0) {
    ruleTitle.innerText = "Nenhuma frase nesta categoria.";
    wordsBank.innerHTML = "";
    cardTag.innerText = "-";
    cardTag.className = "badge";
    currentCardNum.innerText = 0;
    totalCardsNum.innerText = 0;
    return;
  }

  const desafio = cartoesFiltrados[indiceAtual];
  ruleTitle.innerText = desafio.titulo;
  cardTag.innerText = desafio.categoria;
  cardTag.className = `badge ${desafio.categoria}`;
  currentCardNum.innerText = indiceAtual + 1;
  totalCardsNum.innerText = cartoesFiltrados.length;

  // Separa a frase por espaços
  palavrasOriginais = desafio.fraseCompleta.split(" ");
  
  // Cria cópia e embaralha
  let palavrasEmbaralhadas = [...palavrasOriginais];
  embaralharArray(palavrasEmbaralhadas);

  // Renderiza botões das palavras no banco
  renderizacaoBanco(palavrasEmbaralhadas);
}

// Algoritmo de embaralhamento (Fisher-Yates)
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Desenha as palavras embaralhadas no banco
function renderizacaoBanco(palavras) {
  wordsBank.innerHTML = "";
  palavras.forEach((palavra, idx) => {
    const btn = document.createElement("button");
    btn.className = "word-btn";
    btn.innerText = palavra;
    btn.onclick = () => selecionarPalavra(palavra, btn);
    wordsBank.appendChild(btn);
  });
}

// Ao clicar em uma palavra do banco
function selecionarPalavra(palavra, elementoBtn) {
  if (palavrasUsuario.length === 0) {
    userPhraseZone.innerHTML = ""; // Limpa a marca d'água/placeholder
  }

  palavrasUsuario.push(palavra);
  elementoBtn.remove(); // Remove do banco

  // Cria botão na zona da frase
  const wordInZone = document.createElement("button");
  wordInZone.className = "word-btn";
  wordInZone.innerText = palavra;
  
  // Permitir remover da frase se o usuário clicar nela novamente
  wordInZone.onclick = () => devolverPalavra(palavra, wordInZone);
  userPhraseZone.appendChild(wordInZone);

  verificarProgresso();
}

// Caso o usuário queira remover uma palavra da frase criada
function devolverPalavra(palavra, elementoBtn) {
  elementoBtn.remove();
  const index = palavrasUsuario.indexOf(palavra);
  if (index > -1) {
    palavrasUsuario.splice(index, 1);
  }

  // Devolve para o banco
  const btnBank = document.createElement("button");
  btnBank.className = "word-btn";
  btnBank.innerText = palavra;
  btnBank.onclick = () => selecionarPalavra(palavra, btnBank);
  wordsBank.appendChild(btnBank);

  if (palavrasUsuario.length === 0) {
    userPhraseZone.innerHTML = '<span class="placeholder-text">Clique nas palavras abaixo para montar a frase...</span>';
  }

  verificarProgresso();
}

// Verifica se a frase foi montada corretamente
function verificarProgresso() {
  if (palavrasUsuario.length < palavrasOriginais.length) {
    feedbackEl.innerText = "";
    return;
  }

  const fraseUsuarioStr = palavrasUsuario.join(" ");
  const fraseCorretaStr = palavrasOriginais.join(" ");

  if (fraseUsuarioStr === fraseCorretaStr) {
    feedbackEl.innerText = "✨ Excelente! Frase montada corretamente!";
    feedbackEl.className = "feedback success";
  } else {
    feedbackEl.innerText = "❌ Ordem incorreta. Tente reiniciar ou ajustar as palavras!";
    feedbackEl.className = "feedback error";
  }
}

// Reinicia o desafio atual
function reiniciarCartao() {
  carregarDesafio();
}

function proximoCartao() {
  if (cartoesFiltrados.length === 0) return;
  indiceAtual = (indiceAtual + 1) % cartoesFiltrados.length;
  carregarDesafio();
}

function cartaoAnterior() {
  if (cartoesFiltrados.length === 0) return;
  indiceAtual = (indiceAtual - 1 + cartoesFiltrados.length) % cartoesFiltrados.length;
  carregarDesafio();
}

function filtrarCategoria(categoria) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (categoria === "todas") {
    cartoesFiltrados = [...dadosCrase];
  } else {
    cartoesFiltrados = dadosCrase.filter(item => item.categoria === categoria);
  }

  indiceAtual = 0;
  carregarDesafio();
}