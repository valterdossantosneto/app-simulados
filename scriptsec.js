// Base de dados contendo todos os tópicos fornecidos
const dadosCrase = [
  // --- CRASE OBRIGATÓRIA ---
  {
    categoria: "obrigatoria",
    titulo: "Troca do substantivo Feminino por Masculino",
    conteudo: "Se trocar a palavra feminina por uma masculina e o \"a\" mudar para \"ao\", usa-se crase.\n\nExemplo:\n• João voltou a cidade natal → João voltou AO país natal.\n• Correto: João voltou À cidade natal."
  },
  {
    categoria: "obrigatoria",
    titulo: "Nomes Geográficos (Regra do Voltar)",
    conteudo: "Troque o verbo por \"Voltar\":\n• Se voltar DA → Crase no A!\n• Se voltar DE → Crase pra quê?\n\nExemplo:\n• Foi à França → Voltou DA França (tem crase).\n• Foi a Roma → Voltou DE Roma (não tem crase)."
  },
  {
    categoria: "obrigatoria",
    titulo: "Locuções Adverbiais Femininas",
    conteudo: "Expressões que indicam tempo, lugar, modo, etc. compostas por palavras femininas OBRIGATORIAMENTE levam crase.\n\nExemplos:\nSaiu às pressas, às vezes, à risca, à noite, à direita, à esquerda, à tarde, à frente, à maneira de, à custa de, à medida que, à proporção que, à força de, à espera de."
  },
  {
    categoria: "obrigatoria",
    titulo: "Expressão Subentendida: \"À moda de\" / \"À maneira de\"",
    conteudo: "Se \"à moda de\" ou \"à maneira de\" estiver implícito, USA-SE CRASE, mesmo diante de palavra masculina!\n\nExemplo:\n• Bife à milanesa (à moda milanesa)\n• Gol à Pelé (à moda de Pelé)"
  },
  {
    categoria: "obrigatoria",
    titulo: "Pronomes Demonstrativos: Aquele, Aquela, Aquilo",
    conteudo: "Substitua por \"a este\", \"a esta\" ou \"a isto\". Se a troca mantiver o sentido correto, o A do Aquele/Aquela/Aquilo leva crase.\n\nExemplo:\n• Cheguei ÀQUELE lugar → Cheguei A ESTE lugar."
  },
  {
    categoria: "obrigatoria",
    titulo: "Expressões Comerciais / Diferenciação de Sentido",
    conteudo: "Usa-se crase para evitar ambiguidades semânticas em locuções.\n\nExemplo:\n• Vendo à vista (vender com pagamento no ato).\n• Vendo a vista (enxergar a paisagem com os olhos).\n• Pagamento à vista, venda à bala."
  },
  {
    categoria: "obrigatoria",
    titulo: "Indicação de Horas Determinadas",
    conteudo: "Sempre se usa crase antes de horas exatas/especificadas.\n\nExemplo:\n• Das oito às doze horas.\n• A aula começará às 14h."
  },

  // --- CRASE FACULTATIVA ---
  {
    categoria: "facultativa",
    titulo: "Palavras \"Casa\" e \"Terra\" Especificadas",
    conteudo: "A crase é facultativa antes das palavras 'casa' e 'terra' quando estiverem acompanhadas de especificadores/modificadores."
  },
  {
    categoria: "facultativa",
    titulo: "Antes de Pronomes Possessivos Femininos",
    conteudo: "Uso opcional antes de: minha, tua, sua, nossa, vossa.\n\nExemplo:\n• Ele se referiu à minha mãe. (Com crase)\n• Ele se referiu a minha mãe. (Sem crase)\nAmbas as formas estão corretas!"
  },
  {
    categoria: "facultativa",
    titulo: "Antes de Nomes Próprios Femininos",
    conteudo: "Opcional antes de nomes de mulheres.\nExemplo: Eu me referi a Joana / Eu me referi à Joana.\n\n⚠️ ATENÇÃO: Se a mulher for ESPECIFICADA, a crase torna-se OBRIGATÓRIA!\nExemplo: Eu me referi À Joana do seu Zé."
  },
  {
    categoria: "facultativa",
    titulo: "Após a Preposição \"Até\"",
    conteudo: "Após a palavra 'até', se houver a presença da letra 'a', a crase é facultativa.\n\nExemplo:\n• Todos os alunos foram até a escola.\n• Todos os alunos foram até à escola."
  },

  // --- CRASE PROIBIDA (NUNCA USA) ---
  {
    categoria: "proibida",
    titulo: "Antes de Verbos",
    conteudo: "NUNCA se usa crase antes de verbos, pois verbo não aceita artigo feminino.\n\nExemplo:\n• Estou apto a discutir. (ERRADO usar à discutir)."
  },
  {
    categoria: "proibida",
    titulo: "Entre Palavras Repetidas",
    conteudo: "Não ocorre crase em expressões com palavras idênticas encadeadas.\n\nExemplos:\n• Cara a cara\n• Frente a frente\n• Lado a lado"
  },
  {
    categoria: "proibida",
    titulo: "Expressões que Indicam Tempo Futuro ou Distância",
    conteudo: "Nas expressões de tempo futuro ou distância aproximada, usa-se apenas preposição.\n\nExemplos:\n• Sairá daqui a pouco (tempo futuro).\n• Daqui a esquina (distância)."
  },
  {
    categoria: "proibida",
    titulo: "Antes de Dias da Semana",
    conteudo: "Não se usa crase com dias da semana em geral.\n\nExemplo:\n• De segunda a quinta."
  },
  {
    categoria: "proibida",
    titulo: "Antes de Pronomes de Tratamento",
    conteudo: "Regra geral: NÃO se usa crase antes de pronomes de tratamento (ex: A você, A Vossa Senhoria, A Vossa Excelência).\n\n⚠️ EXCEÇÕES QUE ADMITEM CRASE:\n• Dona, Senhora e Senhorita."
  },
  {
    categoria: "proibida",
    titulo: "\"A\" no Singular + Substantivo no Plural",
    conteudo: "Se o 'A' estiver no singular e a palavra seguinte for um substantivo feminino no plural, NUNCA leva crase.\n\nExemplo:\n• Não falo a pessoas estranhas. (Sem crase - apenas preposição)\n• Não falo às pessoas estranhas. (Com crase - preposição + artigo no plural)."
  }
];

// Variáveis de Estado do Aplicativo
let cartoesFiltrados = [...dadosCrase];
let indiceAtual = 0;

// Elementos da DOM
const cardElement = document.getElementById("card");
const tagElement = document.getElementById("card-tag");
const titleElement = document.getElementById("card-title");
const contentElement = document.getElementById("card-content");
const currentCardNum = document.getElementById("current-card-num");
const totalCardsNum = document.getElementById("total-cards-num");

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  atualizarContadores();
  carregarCartao();
});

// Atualiza os números nos botões de filtro
function atualizarContadores() {
  document.getElementById("count-todas").innerText = dadosCrase.length;
  document.getElementById("count-obrigatoria").innerText = dadosCrase.filter(c => c.categoria === "obrigatoria").length;
  document.getElementById("count-facultativa").innerText = dadosCrase.filter(c => c.categoria === "facultativa").length;
  document.getElementById("count-proibida").innerText = dadosCrase.filter(c => c.categoria === "proibida").length;
}

// Carrega os dados no cartão atual
function carregarCartao() {
  if (cartoesFiltrados.length === 0) {
    titleElement.innerText = "Nenhum cartão nesta categoria.";
    contentElement.innerText = "";
    tagElement.innerText = "-";
    tagElement.className = "badge";
    currentCardNum.innerText = 0;
    totalCardsNum.innerText = 0;
    return;
  }

  // Desvira o cartão caso esteja virado
  cardElement.classList.remove("flipped");

  setTimeout(() => {
    const item = cartoesFiltrados[indiceAtual];
    
    titleElement.innerText = item.titulo;
    contentElement.innerText = item.conteudo;
    
    // Atualiza tag/categoria visual
    tagElement.innerText = item.categoria;
    tagElement.className = `badge ${item.categoria}`;

    // Atualiza progresso
    currentCardNum.innerText = indiceAtual + 1;
    totalCardsNum.innerText = cartoesFiltrados.length;
  }, 150);
}

// Vira o cartão
function virarCartao() {
  if (cartoesFiltrados.length > 0) {
    cardElement.classList.toggle("flipped");
  }
}

// Próximo Cartão
function proximoCartao() {
  if (cartoesFiltrados.length === 0) return;
  indiceAtual = (indiceAtual + 1) % cartoesFiltrados.length;
  carregarCartao();
}

// Cartão Anterior
function cartaoAnterior() {
  if (cartoesFiltrados.length === 0) return;
  indiceAtual = (indiceAtual - 1 + cartoesFiltrados.length) % cartoesFiltrados.length;
  carregarCartao();
}

// Filtra por Categoria
function filtrarCategoria(categoria) {
  // Atualiza botões ativos
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Filtra o array
  if (categoria === "todas") {
    cartoesFiltrados = [...dadosCrase];
  } else {
    cartoesFiltrados = dadosCrase.filter(item => item.categoria === categoria);
  }

  indiceAtual = 0;
  carregarCartao();
}