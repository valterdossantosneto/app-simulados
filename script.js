/* =========================================================
   BANCO DE QUESTÕES
========================================================= */

const questoes = [
/* =========================================================
QUESTÕES DE ARACAJU
========================================================= */
  {
    numero: 21,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Geomorfologia e Relevo",
    texto: "A cidade de Aracaju possui características geomorfológicas típicas do litoral brasileiro, principalmente da Região Nordeste.",
    pergunta: "Entre as alternativas a seguir, a que caracteriza o relevo de Aracaju é:",
    alternativaA: "planície fluviomarinha.",
    alternativaB: "depressão absoluta.",
    alternativaC: "planalto dissecado.",
    alternativaD: "derramamentos vulcânicos.",
    alternativaE: "chapadas litorâneas.",
    correta: "A"
  },
  {
    numero: 22,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Demografia e Bairros de Aracaju",
    texto: "A distribuição da população nas cidades não ocorre de maneira equilibrada. É comum cidades possuírem bairros com grande ocupação populacional e bairros denominados de vazios demográficos.",
    pergunta: "Em Aracaju, e, segundo dados da prefeitura na década de 1990, entre os bairros a seguir, o que possui o maior número de pessoas é:",
    alternativaA: "Capucho.",
    alternativaB: "Cirurgia.",
    alternativaC: "Jabotiana.",
    alternativaD: "Farolândia.",
    alternativaE: "São José.",
    correta: "D"
  },
  {
    numero: 23,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Unidades de Conservação e Meio Ambiente",
    texto: "Sergipe possui duas Unidades de Conservação de uso sustentável na categoria de Área de Proteção Ambiental (APA), administradas pela SEMARH: Área de Proteção Ambiental Morro do Urubu e Área de Proteção Ambiental do Litoral Sul.",
    pergunta: "Sobre a APA do Litoral Sul pode-se afirmar que:",
    alternativaA: "define a ocupação da área compreendida entre a foz do Rio Vaza Barris e a desembocadura do Rio Real.",
    alternativaB: "organiza a região litorânea com a menor ocupação populacional, tais como Caueira, Saco e Abais.",
    alternativaC: "a fiscalização da unidade de conservação é de responsabilidade única do governo federal.",
    alternativaD: "abrange as áreas urbanizadas dos municípios de Aracaju e de Nossa Senhora do Socorro.",
    alternativaE: "preserva as praias entre a foz do Rio São Francisco e o centro da Região Metropolitana de Sergipe.",
    correta: "A"
  },
  {
    numero: 24,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Patrimônio Histórico e Arquitetônico",
    texto: "A imagem a seguir retrata o atual Centro de Cultura e Arte da Universidade Federal de Sergipe, conhecido como Culart.",
    pergunta: "Esse prédio histórico foi construído na segunda metade do século XIX para servir de:",
    alternativaA: "teatro municipal.",
    alternativaB: "orfanato.",
    alternativaC: "residência eclesiástica.",
    alternativaD: "correios.",
    alternativaE: "fórum metropolitano.",
    correta: "C"
  },
  {
    numero: 25,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Infraestrutura e Hidrelétricas",
    texto: "No limite dos Estados de Sergipe e Alagoas existe uma das mais importantes usinas hidrelétricas da Região Nordeste: hidrelétrica de Xingó.",
    pergunta: "A década em que a usina de Xingó entrou em funcionamento e a empresa que a administra são, respectivamente:",
    alternativaA: "1960 - Furnas.",
    alternativaB: "1970 - Aneel.",
    alternativaC: "1980 - Eletrosul.",
    alternativaD: "1990 - Chesf.",
    alternativaE: "2000 - Eletronorte.",
    correta: "D"
  },
  {
    numero: 26,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Geografia Política e Fronteiras Municipais",
    texto: "N/A",
    pergunta: "Entre os municípios sergipanos a seguir, o que possui limites com os Estados da Bahia e de Alagoas é:",
    alternativaA: "Canhoba.",
    alternativaB: "Tobias Barreto.",
    alternativaC: "Simão Dias.",
    alternativaD: "Ribeirópolis.",
    alternativaE: "Poço Redondo.",
    correta: "E"
  },
  {
    numero: 27,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Economia e Agricultura de Sergipe",
    texto: "O Estado de Sergipe, apesar da pequena extensão territorial, possui significativa diversidade na produção de gêneros agrícolas.",
    pergunta: "Entre os seguintes produtos, as duas lavouras permanentes que, em 2010, ocuparam as maiores extensões territoriais formam, respectivamente:",
    alternativaA: "mamão e limão.",
    alternativaB: "maracujá e tangerina.",
    alternativaC: "laranja e maracujá.",
    alternativaD: "limão e laranja.",
    alternativaE: "tangerina e mamão.",
    correta: "C"
  },
  {
    numero: 28,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Indicadores Sociais e PNAD",
    texto: "O IBGE elaborou um estudo sobre segurança alimentar em todas as unidades da federação. Esse estudo teve origem na Pesquisa Nacional por Amostra de Domicílios (PNAD), realizada de maneira permanente.",
    pergunta: "Em Sergipe, o resultado dessa pesquisa apresentou a seguinte condição em 2009, ano dos últimos dados divulgados pelo IBGE:",
    alternativaA: "Mais de 50% dos domicílios em situação de segurança alimentar.",
    alternativaB: "Menos de 10% dos domicílios em situação de insegurança alimentar leve.",
    alternativaC: "Cerca de 80% dos domicílios em situação de insegurança alimentar moderada.",
    alternativaD: "Mais de 50% dos domicílios em situação de insegurança alimentar grave.",
    alternativaE: "Menos de 10% dos domicílios em situação de segurança alimentar.",
    correta: "A"
  },
  {
    numero: 29,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Planejamento Urbano e História de Aracaju",
    texto: "O planejamento urbano é uma marca da organização espacial de Aracaju. O centro do poder político-administrativo onde, atualmente, se localiza a praça Fausto Cardoso, foi o ponto de partida do crescimento da cidade.",
    pergunta: "Na origem do planejamento urbano, a cidade de Aracaju foi organizada, a partir do centro, da seguinte maneira:",
    alternativaA: "foram construídos círculos concêntricos a partir do edifício sede do governo.",
    alternativaB: "a cidade foi planejada para evitar o contato com o Rio Sergipe por causa das enchentes.",
    alternativaC: "as ruas foram arrumadas, geometricamente, para desembocar no Rio Sergipe.",
    alternativaD: "foram construídas grandes vias rodoviárias, resultando em áreas com funções definidas.",
    alternativaE: "ocupação dos bairros mais populares e, na periferia, os bairros mais nobres.",
    correta: "C"
  },
  {
    numero: 30,
    ano: 2014,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Agente de Apoio Escolar",
    assuntoEspecifico: "Meio Ambiente e Coleta Seletiva",
    texto: "As atuais discussões sobre meio ambiente promovem ações práticas para melhoria da qualidade de vida das populações. A coleta seletiva é uma prática que une população e governo em busca da diminuição dos problemas resultantes das grandes quantidades de lixo produzidas nas cidades.",
    pergunta: "Entre os produtos a seguir, os que NÃO podem ser reciclados são:",
    alternativaA: "garrafas PET.",
    alternativaB: "peças de alumínio.",
    alternativaC: "jornais e revistas.",
    alternativaD: "papel higiênico.",
    alternativaE: "chumbo e bronze.",
    correta: "D"
  },
  {
    numero: 20,
    ano: 2013,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Analista Ambiental",
    assuntoEspecifico: "Divisão Territorial e Emancipação de Distritos",
    texto: "N/A",
    pergunta: "Entre os municípios a seguir, o que era distrito de Aracaju e foi desmembrado é:",
    alternativaA: "Barra dos Coqueiros.",
    alternativaB: "Amparo de São Francisco.",
    alternativaC: "Areia Branca.",
    alternativaD: "Pedrinhas.",
    alternativaE: "Cristianópolis.",
    correta: "A"
  },
  {
    numero: 13,
    ano: null,
    banca: "N/A",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "N/A",
    assuntoEspecifico: "História da Mudança da Capital",
    texto: "Como cidade planejada, Aracaju nasceu em 1855, por necessidades econômicas. Uma assembleia elevou o povoado de Santo Antônio do Aracaju à categoria de Cidade e transferiu para ele a capital da Província.",
    pergunta: "A transferência deu-se por iniciativa do Presidente da Província:",
    alternativaA: "Cristóvão Barros e do Barão Fausto Cardoso.",
    alternativaB: "Inácio Joaquim Barbosa e do Barão do Maruim Provincial.",
    alternativaC: "Pero Gonçalves e do Barão João Mulato.",
    alternativaD: "Sebastião Basílio Pirro e do Barão Salgado Filho.",
    alternativaE: "N/A",
    correta: "B"
  },
  {
    numero: 21,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Merendeira",
    assuntoEspecifico: "Aspectos Naturais e Saúde Pública em Aracaju",
    texto: "A palavra dengue tem origem espanhola e quer dizer 'melindre', 'manha'... Causada por um vírus, é transmitida pela picada da fêmea contaminada do mosquito Aedes aegypti.",
    pergunta: "Uma característica natural, inclusive de Aracaju, que favorece à propagação do mosquito transmissor da dengue é:",
    alternativaA: "relevo com variações de altitudes.",
    alternativaB: "vegetação que se adapta a solos salobros.",
    alternativaC: "temperaturas e volume de chuvas elevadas.",
    alternativaD: "grande quantidade de lixo deixado a céu aberto.",
    alternativaE: "localização próxima do litoral com ventos constantes.",
    correta: "C"
  },
  {
    numero: 23,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Merendeira",
    assuntoEspecifico: "Geografia Local e Posição Relativa de Aracaju",
    texto: "O Município de Aracaju localiza-se no litoral do Estado de Sergipe.",
    pergunta: "A partir da capital, a cidade localizada mais ao sul é:",
    alternativaA: "Barra dos Coqueiros.",
    alternativaB: "Estância.",
    alternativaC: "Indiaroba.",
    alternativaD: "Pacatuba.",
    alternativaE: "Pirambu.",
    correta: "C"
  },
  {
    numero: 25,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Merendeira",
    assuntoEspecifico: "Economia e Setores do PIB de Aracaju",
    texto: "Produto Interno Bruto (PIB) é a soma de todas as riquezas produzidas por um determinado lugar.",
    pergunta: "O setor econômico que mais contribui para o PIB de Aracaju é:",
    alternativaA: "extrativismo.",
    alternativaB: "agricultura.",
    alternativaC: "indústria.",
    alternativaD: "pecuária.",
    alternativaE: "serviços.",
    correta: "E"
  },
  {
    numero: 26,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Merendeira",
    assuntoEspecifico: "Administração Pública e Infraestrutura de Aracaju",
    texto: "No período de chuvas mais intensas, é comum existirem entupimentos de bueiros e galerias de drenagem...",
    pergunta: "O órgão da prefeitura municipal de Aracaju responsável pela desobstrução de bueiros e galerias de drenagem é:",
    alternativaA: "Emurb.",
    alternativaB: "Semed.",
    alternativaC: "Ajuprev.",
    alternativaD: "Sepp.",
    alternativaE: "Funcaju.",
    correta: "A"
  },
  {
    numero: 21,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Porteiro",
    assuntoEspecifico: "Comércio Ambulante e Administração Pública",
    texto: "O comércio ambulante, no município de Aracaju, é de responsabilidade da prefeitura municipal.",
    pergunta: "O cidadão que quiser instalar um comércio, como, por exemplo, uma banca de revista, um carrinho de lanches ou uma barraca nas feiras, deve proceder da seguinte maneira:",
    alternativaA: "preencher uma solicitação no protocolo, que será encaminhada à EMSURB.",
    alternativaB: "apresentar o currículo de experiência de, no mínimo, três anos na Semel.",
    alternativaC: "elaborar um pedido formal, por meio digital, à Secretaria de Planejamento.",
    alternativaD: "comprovar cinco anos de contribuição previdenciária com carteira assinada junto a Fundat.",
    alternativaE: "fazer um pedido de viabilidade econômica do serviço pretendido na Sefin.",
    correta: "A"
  },
  {
    numero: 23,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Porteiro",
    assuntoEspecifico: "Etimologia e História do Nome Aracaju",
    texto: "Os nomes das cidades e dos estados brasileiros possuem origens diversas: origem indígena ou relacionada com o processo de colonização.",
    pergunta: "Uma das origens do nome Aracaju, mais aceita e defendedora por estudiosos das línguas indígenas, é:",
    alternativaA: "Esconderijo das aranhas.",
    alternativaB: "Mar de águas revoltas.",
    alternativaC: "Cajueiro dos papagaios.",
    alternativaD: "Terra com fertilidade.",
    alternativaE: "Morada das tartarugas.",
    correta: "C"
  },
  {
    numero: 26,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Porteiro",
    assuntoEspecifico: "Saúde Pública e Prevenção à Dengue",
    texto: "Aracaju, da mesma maneira que diversos municípios brasileiros, sofre periodicamente com casos de dengue.",
    pergunta: "Assinale a alternativa que apresenta o modo de transmissão da doença:",
    alternativaA: "Tosse de doente.",
    alternativaB: "Picada de mosquito.",
    alternativaC: "Contato com esgoto.",
    alternativaD: "Ingerir água infectada.",
    alternativaE: "Alimentos estragados.",
    correta: "B"
  },
  {
    numero: 27,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Porteiro",
    assuntoEspecifico: "Patrimônio Histórico e Documental de Aracaju",
    texto: "N/A",
    pergunta: "O principal espaço da cidade de Aracaju, destinado a preservar o patrimônio arquivístico do município, bem como inventariar a documentação sobre a cidade de Aracaju, existente em acervos de particulares e públicos é:",
    alternativaA: "Galeria de Arte Álvaro Santos.",
    alternativaB: "Mirante da Praia 13 de julho.",
    alternativaC: "Escola de Artes Valdice Teles.",
    alternativaD: "Arquivo Público Municipal.",
    alternativaE: "Biblioteca Pública Clodomir Silva.",
    correta: "D"
  },
  {
    numero: 28,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Porteiro",
    assuntoEspecifico: "Climatologia e Turismo em Aracaju",
    texto: "Toda a região Nordeste possui no turismo uma importante fonte de renda. Para isso, o conhecimento das condições climáticas é fundamental para qualquer planejamento turístico.",
    pergunta: "O principal período chuvoso de Aracaju é:",
    alternativaA: "dezembro a março.",
    alternativaB: "março a augusto.",
    alternativaC: "agosto a novembro.",
    alternativaD: "setembro a dezembro.",
    alternativaE: "novembro a fevereiro.",
    correta: "B"
  },
  {
    numero: 30,
    ano: 2012,
    banca: "FUNCAB",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Porteiro",
    assuntoEspecifico: "Unidades de Conservação e Meio Ambiente de Aracaju",
    texto: "Sergipe possui o menor território entre todos os estados brasileiros. Contudo, possui uma significativa quantidade de unidades de conservação ambientais.",
    pergunta: "A Área de Proteção Ambiental Morro do Urubu possui como principal problema:",
    alternativaA: "alagamentos no período de chuvas.",
    alternativaB: "constantes derramamentos de petróleo.",
    alternativaC: "pressão urbana por meio de invasões.",
    alternativaD: "visitação de grupos de ecoturismo.",
    alternativaE: "infestação de pragas na mata nativa.",
    correta: "C"
  },
  {
    numero: 31,
    ano: 2024,
    banca: "INÉDITA",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Hidrografia de Aracaju",
    texto: "A rede hidrográfica do município de Aracaju é composta por rios e canais de grande importância para o ecossistema e a drenagem urbana, desaguando no Oceano Atlântico e sustentando vastas áreas de manguezal.",
    pergunta: "Assinale a alternativa que indica o rio que serve de divisa natural ao sul entre o município de Aracaju e o município de Itaporanga d'Ajuda:",
    alternativaA: "Rio Poxim.",
    alternativaB: "Rio Sergipe.",
    alternativaC: "Rio Vaza-Barris.",
    alternativaD: "Rio Pitanga.",
    alternativaE: "Rio Cotinguiba.",
    correta: "C"
  },
  {
    numero: 32,
    ano: 2024,
    banca: "INÉDITA",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Vegetação e Meio Ambiente",
    texto: "Aracaju situa-se em uma área de transição litorânea caracterizada por ecossistemas associados ao bioma Mata Atlântica. Um dos ecossistemas mais marcantes na paisagem urbana da capital desempenha papel essencial na proteção da costa e na reprodução da fauna marinha.",
    pergunta: "A vegetação típica das áreas estuarinas de Aracaju, adaptada ao solo salobro e periodicamente alagada pelas marés, é denominada:",
    alternativaA: "Restinga.",
    alternativaB: "Manguezal.",
    alternativaC: "Caatinga estuarina.",
    alternativaD: "Mata de Cocar.",
    alternativaE: "Cerrado litorâneo.",
    correta: "B"
  },
  {
    numero: 33,
    ano: 2024,
    banca: "INÉDITA",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontos Turísticos e Aspectos Paisagísticos",
    texto: "A Orla de Atalaia é considerada um dos principais cartões-postais de Aracaju e conta com infraestrutura voltada ao lazer, à gastronomia e à cultura.",
    pergunta: "Na Orla de Atalaia, o trecho famoso por abrigar diversos restaurantes especializados na culinária local e marcado pelo monumento do caranguejo gigante é conhecido como:",
    alternativaA: "Passarela dos Mercados.",
    alternativaB: "Orla do Bairro Industrial.",
    alternativaC: "Passarela do Caranguejo.",
    alternativaD: "Calçadão da Treze de Julho.",
    alternativaE: "Parque da Sementeira.",
    correta: "C"
  },
  {
    numero: 34,
    ano: 2024,
    banca: "INÉDITA",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Localização e Limites Municipais",
    texto: "O município de Aracaju está situado no litoral do Estado de Sergipe e faz fronteira terrestre e fluvial com outros municípios da Região Metropolitana.",
    pergunta: "O município localizado imediatamente ao norte de Aracaju, separado do território da capital pelo Rio Sergipe, é:",
    alternativaA: "Nossa Senhora do Socorro.",
    alternativaB: "Barra dos Coqueiros.",
    alternativaC: "São Cristóvão.",
    alternativaD: "Laranjeiras.",
    alternativaE: "Itaporanga d'Ajuda.",
    correta: "B"
  },
  {
    numero: 35,
    ano: 2024,
    banca: "INÉDITA",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "História do Município de Aracaju",
    texto: "Em 17 de março de 1855, a sede administrativa da província de Sergipe foi transferida de São Cristóvão para Aracaju. A decisão atendeu a imperativos econômicos e logísticos do período imperial.",
    pergunta: "O principal fator econômico que motivou a transferência da capital para Aracaju foi:",
    alternativaA: "a descoberta de reservas petrolíferas na bacia de Sergipe.",
    alternativaB: "a necessidade de um porto marítimo para escoar a produção açucareira.",
    alternativaC: "o fortalecimento da pecuária extensiva no sertão sergipano.",
    alternativaD: "a expansão do cultivo de citros para o mercado consumidor externo.",
    alternativaE: "a instalação do polo industrial do setor têxtil na foz do Rio Vaza-Barris.",
    correta: "B"
  },
  {
    numero: 36,
    ano: 2024,
    banca: "INÉDITA",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Aspectos Culturais e Festividades",
    texto: "Aracaju possui forte tradição nas festas populares do Nordeste, destacando-se na celebração do ciclo junino no mês de junho.",
    pergunta: "O grande evento junino promovido anualmente pela Prefeitura de Aracaju na Praça Hilário de Melo (na Orla do Bairro Industrial / Mercados Centrais) chama-se:",
    alternativaA: "Pré-Caju.",
    alternativaB: "Forró Caju.",
    alternativaC: "Arraiá do Povo.",
    alternativaD: "Fasc (Festival de Artes).",
    alternativaE: "Micareme.",
    correta: "B"
  },
  {
    numero: 37,
    ano: 2024,
    banca: "INÉDITA",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Patrimônio Ambiental e Unidades de Conservação",
    texto: "Na zona sul da capital aracajuana encontra-se uma importante área verde de lazer, conservação ambiental e atividades esportivas, que abriga a sede da Empresa Municipal de Obras e Urbanização e projetos de educação ambiental.",
    pergunta: "Essa importante área pública do município de Aracaju é o Parque:",
    alternativaA: "dos Cajueiros.",
    alternativaB: "Augusto Franco (Sementeira).",
    alternativaC: "Nacional da Serra de Itabaiana.",
    alternativaD: "Estadual Zé Peixe.",
    alternativaE: "Morro do Urubu.",
    correta: "B"
  },
  {
    numero: 38,
    ano: 2024,
    banca: "INÉDITA",
    disciplina: "História, Geografia e Conhecimentos Gerais de Aracaju e Sergipe",
    cidade: "Aracaju",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "População e Demografia",
    texto: "O Censo Demográfico do IBGE aponta Aracaju como o município mais populoso de Sergipe, concentrando expressiva parcela da população do estado.",
    pergunta: "Atualmente, a taxa de urbanização do município de Aracaju é caracterizada por ser:",
    alternativaA: "predominantemente rural, com mais de 60% dos moradores no campo.",
    alternativaB: "equilibrada, dividida em partes iguais entre zonas urbana e rural.",
    alternativaC: "praticamente 100% urbana, sendo a totalidade de sua população residente na área urbana.",
    alternativaD: "composta essencialmente por povoados indígenas isolados na faixa costeira.",
    alternativaE: "de baixo crescimento populacional, perdendo habitantes para a zona sertaneja.",
    correta: "C"
  }

];


/* =========================================================
   CHAVES DO LOCALSTORAGE
========================================================= */

const STORAGE_KEY =
    "bancoQuestoesProgresso";

const ERROS_STORAGE_KEY =
    "bancoQuestoesErros";


/* =========================================================
   VARIÁVEIS DO SIMULADO
========================================================= */

let simulado = [];

let indiceAtual = 0;

let respostas = {};

let modoRevisao = false;


/* =========================================================
   ELEMENTOS DA TELA INICIAL
========================================================= */

const telaInicial =
    document.getElementById("telaInicial");

const telaSimulado =
    document.getElementById("telaSimulado");

const telaResultado =
    document.getElementById("telaResultado");


const filtroBanca =
    document.getElementById("filtroBanca");

const filtroDisciplina =
    document.getElementById("filtroDisciplina");

const filtroAno =
    document.getElementById("filtroAno");

const filtroCidade =
    document.getElementById("filtroCidade");

const filtroCargo =
    document.getElementById("filtroCargo");

const filtroAssunto =
    document.getElementById("filtroAssunto");


const quantidadeQuestoes =
    document.getElementById("quantidadeQuestoes");

const questoesAleatorias =
    document.getElementById("questoesAleatorias");


const contadorFiltro =
    document.getElementById("contadorFiltro");


const btnIniciar =
    document.getElementById("btnIniciar");

const btnContinuar =
    document.getElementById("btnContinuar");

const btnLimparProgresso =
    document.getElementById("btnLimparProgresso");


/* =========================================================
   ELEMENTOS DA TELA DO SIMULADO
========================================================= */

const btnResponder =
    document.getElementById("btnResponder");

const btnPular =
    document.getElementById("btnPular");

const btnProxima =
    document.getElementById("btnProxima");

const btnSair =
    document.getElementById("btnSair");


const alternativasContainer =
    document.getElementById("alternativas");

const feedback =
    document.getElementById("feedback");


const textoProgresso =
    document.getElementById("textoProgresso");

const textoPlacar =
    document.getElementById("textoPlacar");

const barraProgresso =
    document.getElementById("barraProgresso");


const mapaQuestoes =
    document.getElementById("mapaQuestoes");


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        preencherFiltros();

        atualizarContadorFiltro();

        quantidadeQuestoes.max =
            questoes.length;


        if (questoes.length > 0) {

            quantidadeQuestoes.value =
                Math.min(
                    10,
                    questoes.length
                );

        }


        verificarProgresso();

    }
);


/* =========================================================
   PREENCHER FILTROS
========================================================= */

function preencherFiltros() {

    preencherSelect(
        filtroBanca,
        questoes.map(q => q.banca)
    );


    preencherSelect(
        filtroDisciplina,
        questoes.map(
            q => q.disciplina
        )
    );


    preencherSelect(
        filtroAno,
        questoes.map(q => q.ano)
    );


    preencherSelect(
        filtroCidade,
        questoes.map(q => q.cidade)
    );


    preencherSelect(
        filtroCargo,
        questoes.map(q => q.cargo)
    );


    preencherSelect(
        filtroAssunto,
        questoes.map(
            q => q.assuntoEspecifico
        )
    );

}


/* =========================================================
   PREENCHER SELECT
========================================================= */

function preencherSelect(
    select,
    valores
) {

    const unicos =
        [
            ...new Set(valores)
        ]
        .filter(
            valor =>
                valor !== undefined &&
                valor !== null &&
                valor !== ""
        )
        .sort();


    unicos.forEach(valor => {

        const option =
            document.createElement(
                "option"
            );


        option.value = valor;

        option.textContent = valor;


        select.appendChild(
            option
        );

    });

}


/* =========================================================
   OBTER QUESTÕES FILTRADAS
========================================================= */

function obterQuestoesFiltradas() {

    return questoes.filter(q => {

        const bancaOK =
            !filtroBanca.value ||
            q.banca === filtroBanca.value;


        const disciplinaOK =
            !filtroDisciplina.value ||
            q.disciplina ===
            filtroDisciplina.value;


        const anoOK =
            !filtroAno.value ||
            String(q.ano) ===
            filtroAno.value;


        const cidadeOK =
            !filtroCidade.value ||
            q.cidade ===
            filtroCidade.value;


        const cargoOK =
            !filtroCargo.value ||
            q.cargo ===
            filtroCargo.value;


        const assuntoOK =
            !filtroAssunto.value ||
            q.assuntoEspecifico ===
            filtroAssunto.value;


        return (
            bancaOK &&
            disciplinaOK &&
            anoOK &&
            cidadeOK &&
            cargoOK &&
            assuntoOK
        );

    });

}


/* =========================================================
   ATUALIZAR CONTADOR DOS FILTROS
========================================================= */

function atualizarContadorFiltro() {

    const quantidade =
        obterQuestoesFiltradas()
            .length;


    contadorFiltro.textContent =
        `${quantidade} questão${quantidade !== 1 ? "ões" : ""} encontrada${quantidade !== 1 ? "s" : ""}`;

}


/* =========================================================
   EVENTOS DOS FILTROS
========================================================= */

[
    filtroBanca,
    filtroDisciplina,
    filtroAno,
    filtroCidade,
    filtroCargo,
    filtroAssunto

].forEach(select => {

    select.addEventListener(
        "change",
        atualizarContadorFiltro
    );

});


/* =========================================================
   INICIAR NOVO SIMULADO
========================================================= */

btnIniciar.addEventListener(
    "click",
    iniciarNovoSimulado
);


function iniciarNovoSimulado() {

    const filtradas =
        obterQuestoesFiltradas();


    if (filtradas.length === 0) {

        alert(
            "Nenhuma questão encontrada com esses filtros."
        );

        return;

    }


    let quantidade =
        parseInt(
            quantidadeQuestoes.value
        );


    if (
        !quantidade ||
        quantidade < 1
    ) {

        quantidade =
            filtradas.length;

    }


    quantidade =
        Math.min(
            quantidade,
            filtradas.length
        );


    let selecionadas =
        [...filtradas];


    if (
        questoesAleatorias.checked
    ) {

        selecionadas =
            embaralhar(
                selecionadas
            );

    }


    selecionadas =
        selecionadas.slice(
            0,
            quantidade
        );


    simulado =
        selecionadas;


    indiceAtual = 0;


    respostas = {};


    modoRevisao = false;


    salvarProgresso();


    mostrarTelaSimulado();

}


/* =========================================================
   EMBARALHAR
========================================================= */

function embaralhar(array) {

    const novoArray =
        [...array];


    for (
        let i =
            novoArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            novoArray[i],
            novoArray[j]

        ] = [

            novoArray[j],
            novoArray[i]

        ];

    }


    return novoArray;

}


/* =========================================================
   MOSTRAR TELA DO SIMULADO
========================================================= */

function mostrarTelaSimulado() {

    telaInicial.classList.add(
        "hidden"
    );


    telaResultado.classList.add(
        "hidden"
    );


    telaSimulado.classList.remove(
        "hidden"
    );


    mostrarQuestao();

}


/* =========================================================
   MOSTRAR QUESTÃO
========================================================= */

function mostrarQuestao() {

    if (!simulado.length) {

        mostrarResultado();

        return;

    }


    const questao =
        simulado[indiceAtual];


    textoProgresso.textContent =
        `Questão ${indiceAtual + 1} de ${simulado.length}`;


    atualizarPlacar();

    atualizarBarra();

    preencherInformacoes(
        questao
    );

    preencherAlternativas(
        questao
    );

    atualizarMapa();

    resetarFeedback();

}


/* =========================================================
   PREENCHER INFORMAÇÕES
========================================================= */

function preencherInformacoes(
    questao
) {

    document.getElementById(
        "tagBanca"
    ).textContent =
        questao.banca;


    document.getElementById(
        "tagAno"
    ).textContent =
        questao.ano;


    document.getElementById(
        "tagDisciplina"
    ).textContent =
        questao.disciplina;


    document.getElementById(
        "infoCidade"
    ).textContent =
        questao.cidade || "-";


    document.getElementById(
        "infoCargo"
    ).textContent =
        questao.cargo || "-";


    document.getElementById(
        "infoAssunto"
    ).textContent =
        questao.assuntoEspecifico || "-";


    const textoContainer =
        document.getElementById(
            "textoContainer"
        );


    const texto =
        document.getElementById(
            "textoQuestao"
        );


    if (
        !questao.texto ||
        questao.texto.trim() === "-"
    ) {

        textoContainer.classList.add(
            "hidden"
        );

    } else {

        textoContainer.classList.remove(
            "hidden"
        );


        texto.textContent =
            questao.texto;

    }


    document.getElementById(
        "numeroPergunta"
    ).textContent =
        `Questão ${questao.numero}`;


    document.getElementById(
        "pergunta"
    ).textContent =
        questao.pergunta;

}


/* =========================================================
   PREENCHER ALTERNATIVAS
========================================================= */

function preencherAlternativas(
    questao
) {

    alternativasContainer.innerHTML =
        "";


    const alternativas = {

        A: questao.alternativaA,

        B: questao.alternativaB,

        C: questao.alternativaC,

        D: questao.alternativaD,

        E: questao.alternativaE

    };


    Object.entries(
        alternativas
    ).forEach(
        ([letra, texto]) => {

            if (
                texto === undefined ||
                texto === null ||
                texto === ""
            ) {

                return;

            }


            const label =
                document.createElement(
                    "label"
                );


            label.className =
                "alternativa";


            const input =
                document.createElement(
                    "input"
                );


            input.type =
                "radio";


            input.name =
                "resposta";


            input.value =
                letra;


            const letraSpan =
                document.createElement(
                    "span"
                );


            letraSpan.className =
                "letra-alternativa";


            letraSpan.textContent =
                `${letra})`;


            const textoSpan =
                document.createElement(
                    "span"
                );


            textoSpan.textContent =
                texto;


            label.appendChild(
                input
            );


            label.appendChild(
                letraSpan
            );


            label.appendChild(
                textoSpan
            );


            label.addEventListener(
                "click",
                () => {

                    if (
                        respostas[indiceAtual] &&
                        respostas[indiceAtual]
                            .status !== "pulada"
                    ) {

                        return;

                    }


                    document
                        .querySelectorAll(
                            ".alternativa"
                        )
                        .forEach(
                            el => {

                                el.classList
                                    .remove(
                                        "selecionada"
                                    );

                            }
                        );


                    label.classList.add(
                        "selecionada"
                    );

                }
            );


            alternativasContainer
                .appendChild(
                    label
                );

        }
    );


    verificarRespostaAnterior();

}


/* =========================================================
   VERIFICAR RESPOSTA ANTERIOR
========================================================= */

function verificarRespostaAnterior() {

    const resposta =
        respostas[indiceAtual];


    if (!resposta) {

        btnResponder.classList.remove(
            "hidden"
        );

        btnPular.classList.remove(
            "hidden"
        );

        btnProxima.classList.add(
            "hidden"
        );

        return;

    }


    if (
        resposta.status === "pulada"
    ) {

        btnResponder.classList.remove(
            "hidden"
        );

        btnPular.classList.remove(
            "hidden"
        );

        btnProxima.classList.add(
            "hidden"
        );

        return;

    }


    const inputs =
        document.querySelectorAll(
            'input[name="resposta"]'
        );


    inputs.forEach(
        input => {

            if (
                input.value ===
                resposta.resposta
            ) {

                input.checked = true;


                input.parentElement
                    .classList.add(
                        "selecionada"
                    );

            }

        }
    );


    mostrarResultadoResposta(
        resposta
    );

}


/* =========================================================
   RESPONDER QUESTÃO
========================================================= */

btnResponder.addEventListener(
    "click",
    responderQuestao
);


function responderQuestao() {

    const selecionada =
        document.querySelector(
            'input[name="resposta"]:checked'
        );


    if (!selecionada) {

        alert(
            "Selecione uma alternativa antes de responder."
        );

        return;

    }


    const respostaUsuario =
        selecionada.value;


    const questao =
        simulado[indiceAtual];


    const acertou =
        respostaUsuario ===
        questao.correta;


    respostas[indiceAtual] = {

        resposta:
            respostaUsuario,

        correta:
            questao.correta,

        status:
            acertou
                ? "acerto"
                : "erro"

    };


    /*
       SE ERROU, REGISTRA
       DATA, HORA, QUESTÃO,
       DISCIPLINA ETC.
    */

    if (!acertou) {

        registrarErro(
            questao,
            respostaUsuario
        );

    }


    salvarProgresso();


    mostrarResultadoResposta(
        respostas[indiceAtual]
    );


    atualizarMapa();

    atualizarPlacar();

}


/* =========================================================
   REGISTRAR ERRO
========================================================= */

function registrarErro(
    questao,
    respostaUsuario
) {

    const agora =
        new Date();


    const data =
        agora.toLocaleDateString(
            "pt-BR"
        );


    const hora =
        agora.toLocaleTimeString(
            "pt-BR"
        );


    const errosSalvos =
        JSON.parse(
            localStorage.getItem(
                ERROS_STORAGE_KEY
            )
        ) || [];


    errosSalvos.push({

        numero:
            questao.numero,

        data:
            data,

        hora:
            hora,

        disciplina:
            questao.disciplina,

        assuntoEspecifico:
            questao.assuntoEspecifico,

        banca:
            questao.banca,

        ano:
            questao.ano,

        cidade:
            questao.cidade,

        cargo:
            questao.cargo,

        respostaMarcada:
            respostaUsuario,

        respostaCorreta:
            questao.correta

    });


    localStorage.setItem(
        ERROS_STORAGE_KEY,
        JSON.stringify(
            errosSalvos
        )
    );

}


/* =========================================================
   MOSTRAR RESULTADO DA RESPOSTA
========================================================= */

function mostrarResultadoResposta(
    resultado
) {

    const questao =
        simulado[indiceAtual];


    const inputs =
        document.querySelectorAll(
            'input[name="resposta"]'
        );


    inputs.forEach(
        input => {

            input.disabled =
                true;


            if (
                input.value ===
                questao.correta
            ) {

                input.parentElement
                    .classList.add(
                        "correta"
                    );

            }


            if (
                input.value ===
                resultado.resposta &&
                resultado.status ===
                "erro"
            ) {

                input.parentElement
                    .classList.add(
                        "errada"
                    );

            }

        }
    );


    feedback.classList.remove(
        "hidden"
    );


    if (
        resultado.status ===
        "acerto"
    ) {

        feedback.className =
            "feedback acerto";


        feedback.innerHTML =
            "✓ Você acertou!";

    } else {

        feedback.className =
            "feedback erro";


        feedback.innerHTML =
            `✗ Você errou.<br>
             A alternativa correta é:
             <strong>${questao.correta}</strong>.`;

    }


    btnResponder.classList.add(
        "hidden"
    );


    btnPular.classList.add(
        "hidden"
    );


    btnProxima.classList.remove(
        "hidden"
    );

}


/* =========================================================
   PULAR QUESTÃO
========================================================= */

btnPular.addEventListener(
    "click",
    pularQuestao
);


function pularQuestao() {

    respostas[indiceAtual] = {

        resposta:
            null,

        correta:
            simulado[indiceAtual]
                .correta,

        status:
            "pulada"

    };


    salvarProgresso();


    irParaProxima();

}


/* =========================================================
   PRÓXIMA QUESTÃO
========================================================= */

btnProxima.addEventListener(
    "click",
    irParaProxima
);


function irParaProxima() {

    const proximoIndice =
        encontrarProximaNaoRespondida();


    if (
        proximoIndice !== -1
    ) {

        indiceAtual =
            proximoIndice;


        mostrarQuestao();


        return;

    }


    mostrarResultado();

}


/* =========================================================
   ENCONTRAR PRÓXIMA NÃO RESPONDIDA
========================================================= */

function encontrarProximaNaoRespondida() {

    for (
        let i = 0;
        i < simulado.length;
        i++
    ) {

        const resposta =
            respostas[i];


        if (
            !resposta ||
            resposta.status ===
            "pulada"
        ) {

            return i;

        }

    }


    return -1;

}


/* =========================================================
   MAPA DE QUESTÕES
========================================================= */

function atualizarMapa() {

    mapaQuestoes.innerHTML =
        "";


    simulado.forEach(
        (questao, index) => {

            const botao =
                document.createElement(
                    "button"
                );


            botao.type =
                "button";


            botao.className =
                "mapa-item";


            botao.textContent =
                index + 1;


            if (
                index ===
                indiceAtual
            ) {

                botao.classList.add(
                    "atual"
                );

            }


            const resposta =
                respostas[index];


            if (resposta) {

                botao.classList.add(
                    resposta.status
                );

            }


            botao.addEventListener(
                "click",
                () => {

                    indiceAtual =
                        index;


                    mostrarQuestao();

                }
            );


            mapaQuestoes.appendChild(
                botao
            );

        }
    );

}


/* =========================================================
   PLACAR
========================================================= */

function atualizarPlacar() {

    let acertos = 0;

    let erros = 0;

    let puladas = 0;


    Object.values(
        respostas
    ).forEach(
        resposta => {

            if (
                resposta.status ===
                "acerto"
            ) {

                acertos++;

            }


            if (
                resposta.status ===
                "erro"
            ) {

                erros++;

            }


            if (
                resposta.status ===
                "pulada"
            ) {

                puladas++;

            }

        }
    );


    textoPlacar.textContent =
        `${acertos} acerto${acertos !== 1 ? "s" : ""} • ${erros} erro${erros !== 1 ? "s" : ""} • ${puladas} pulada${puladas !== 1 ? "s" : ""}`;

}


/* =========================================================
   BARRA DE PROGRESSO
========================================================= */

function atualizarBarra() {

    const respondidas =
        Object.values(
            respostas
        )
        .filter(
            r =>
                r.status ===
                    "acerto" ||
                r.status ===
                    "erro"
        )
        .length;


    const percentual =
        simulado.length > 0
            ? (
                respondidas /
                simulado.length
            ) * 100
            : 0;


    barraProgresso.style.width =
        `${percentual}%`;

}


/* =========================================================
   RESETAR FEEDBACK
========================================================= */

function resetarFeedback() {

    feedback.className =
        "feedback hidden";


    feedback.innerHTML =
        "";

}


/* =========================================================
   SALVAR PROGRESSO
========================================================= */

function salvarProgresso() {

    const dados = {

        simulado:
            simulado,

        indiceAtual:
            indiceAtual,

        respostas:
            respostas,

        filtros: {

            banca:
                filtroBanca.value,

            disciplina:
                filtroDisciplina.value,

            ano:
                filtroAno.value,

            cidade:
                filtroCidade.value,

            cargo:
                filtroCargo.value,

            assunto:
                filtroAssunto.value

        }

    };


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
            dados
        )
    );

}


/* =========================================================
   VERIFICAR PROGRESSO SALVO
========================================================= */

function verificarProgresso() {

    const salvo =
        localStorage.getItem(
            STORAGE_KEY
        );


    if (!salvo) {

        btnContinuar.classList.add(
            "hidden"
        );

        return;

    }


    try {

        const dados =
            JSON.parse(
                salvo
            );


        if (
            !dados.simulado ||
            !dados.simulado.length
        ) {

            btnContinuar.classList.add(
                "hidden"
            );

            return;

        }


        btnContinuar.classList.remove(
            "hidden"
        );


        btnContinuar.textContent =
            `Continuar simulado (${dados.simulado.length} questões)`;


    } catch (erro) {

        console.error(
            "Erro ao carregar progresso:",
            erro
        );


        btnContinuar.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   CONTINUAR SIMULADO
========================================================= */

btnContinuar.addEventListener(
    "click",
    continuarSimulado
);


function continuarSimulado() {

    const salvo =
        localStorage.getItem(
            STORAGE_KEY
        );


    if (!salvo) {

        alert(
            "Nenhum simulado salvo."
        );

        return;

    }


    try {

        const dados =
            JSON.parse(
                salvo
            );


        simulado =
            dados.simulado ||
            [];


        indiceAtual =
            dados.indiceAtual ||
            0;


        respostas =
            dados.respostas ||
            {};


        if (
            !simulado.length
        ) {

            alert(
                "O simulado salvo está vazio."
            );

            return;

        }


        mostrarTelaSimulado();


    } catch (erro) {

        console.error(
            erro
        );


        alert(
            "Não foi possível carregar o simulado."
        );

    }

}


/* =========================================================
   SAIR DO SIMULADO
========================================================= */

btnSair.addEventListener(
    "click",
    () => {

        salvarProgresso();


        telaSimulado.classList.add(
            "hidden"
        );


        telaResultado.classList.add(
            "hidden"
        );


        telaInicial.classList.remove(
            "hidden"
        );


        verificarProgresso();

    }
);


/* =========================================================
   MOSTRAR RESULTADO
========================================================= */

function mostrarResultado() {

    telaSimulado.classList.add(
        "hidden"
    );


    telaInicial.classList.add(
        "hidden"
    );


    telaResultado.classList.remove(
        "hidden"
    );


    calcularResultado();

}


/* =========================================================
   CALCULAR RESULTADO
========================================================= */

function calcularResultado() {

    let acertos = 0;

    let erros = 0;

    let puladas = 0;


    Object.values(
        respostas
    ).forEach(
        resposta => {

            if (
                resposta.status ===
                "acerto"
            ) {

                acertos++;

            }


            if (
                resposta.status ===
                "erro"
            ) {

                erros++;

            }


            if (
                resposta.status ===
                "pulada"
            ) {

                puladas++;

            }

        }
    );


    const total =
        simulado.length;


    const percentual =
        total > 0
            ? (
                acertos /
                total
            ) * 100
            : 0;


    document.getElementById(
        "resultadoTotal"
    ).textContent =
        total;


    document.getElementById(
        "resultadoAcertos"
    ).textContent =
        acertos;


    document.getElementById(
        "resultadoErros"
    ).textContent =
        erros;


    document.getElementById(
        "resultadoPuladas"
    ).textContent =
        puladas;


    document.getElementById(
        "resultadoPorcentagem"
    ).textContent =
        `${percentual.toFixed(1)}%`;


    gerarDesempenhoDisciplinas();

    gerarListaResultado();


    btnRevisarErros.disabled =
        erros === 0;


    btnRevisarPuladas.disabled =
        puladas === 0;

}


/* =========================================================
   DESEMPENHO POR DISCIPLINA
========================================================= */

function gerarDesempenhoDisciplinas() {

    const container =
        document.getElementById(
            "desempenhoDisciplinas"
        );


    container.innerHTML =
        "";


    const disciplinas = {};


    simulado.forEach(
        (questao, index) => {

            const disciplina =
                questao.disciplina;


            if (
                !disciplinas[
                    disciplina
                ]
            ) {

                disciplinas[
                    disciplina
                ] = {

                    total: 0,

                    acertos: 0,

                    erros: 0,

                    puladas: 0

                };

            }


            disciplinas[
                disciplina
            ].total++;


            const resposta =
                respostas[index];


            if (
                resposta?.status ===
                "acerto"
            ) {

                disciplinas[
                    disciplina
                ].acertos++;

            }


            if (
                resposta?.status ===
                "erro"
            ) {

                disciplinas[
                    disciplina
                ].erros++;

            }


            if (
                resposta?.status ===
                "pulada"
            ) {

                disciplinas[
                    disciplina
                ].puladas++;

            }

        }
    );


    const cabecalho =
        document.createElement(
            "div"
        );


    cabecalho.className =
        "desempenho-linha cabecalho-tabela";


    cabecalho.innerHTML = `

        <span>Disciplina</span>

        <span>Total</span>

        <span>Acertos</span>

        <span>%</span>

    `;


    container.appendChild(
        cabecalho
    );


    Object.entries(
        disciplinas
    ).forEach(
        ([disciplina, dados]) => {

            const linha =
                document.createElement(
                    "div"
                );


            linha.className =
                "desempenho-linha";


            const percentual =
                dados.total > 0
                    ? (
                        dados.acertos /
                        dados.total
                    ) * 100
                    : 0;


            linha.innerHTML = `

                <span>
                    ${disciplina}
                </span>

                <span>
                    ${dados.total}
                </span>

                <span>
                    ${dados.acertos}
                </span>

                <span>
                    ${percentual.toFixed(1)}%
                </span>

            `;


            container.appendChild(
                linha
            );

        }
    );

}


/* =========================================================
   LISTA DO RESULTADO
========================================================= */

function gerarListaResultado() {

    const container =
        document.getElementById(
            "listaResultado"
        );


    container.innerHTML =
        "";


    simulado.forEach(
        (questao, index) => {

            const resultado =
                respostas[index];


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "resultado-questao";


            let statusTexto =
                "Não respondida";


            let classe =
                "pulada";


            if (
                resultado?.status ===
                "acerto"
            ) {

                statusTexto =
                    "✓ Acertou";


                classe =
                    "acerto";

            }


            if (
                resultado?.status ===
                "erro"
            ) {

                statusTexto =
                    `✗ Errou — correta: ${questao.correta}`;


                classe =
                    "erro";

            }


            if (
                resultado?.status ===
                "pulada"
            ) {

                statusTexto =
                    "○ Pulou";


                classe =
                    "pulada";

            }


            div.innerHTML = `

                <strong>
                    Questão ${questao.numero}
                    —
                    ${questao.disciplina}
                </strong>

                <span class="status ${classe}">
                    ${statusTexto}
                </span>

            `;


            container.appendChild(
                div
            );

        }
    );

}


/* =========================================================
   REVISAR ERROS
========================================================= */

const btnRevisarErros =
    document.getElementById(
        "btnRevisarErros"
    );


btnRevisarErros.addEventListener(
    "click",
    () => {

        iniciarRevisao(
            "erro"
        );

    }
);


/* =========================================================
   REVISAR PULADAS
========================================================= */

const btnRevisarPuladas =
    document.getElementById(
        "btnRevisarPuladas"
    );


btnRevisarPuladas.addEventListener(
    "click",
    () => {

        iniciarRevisao(
            "pulada"
        );

    }
);


/* =========================================================
   INICIAR REVISÃO
========================================================= */

function iniciarRevisao(
    tipo
) {

    const indices =
        simulado
            .map(
                (questao, index) => ({

                    questao,

                    index

                })
            )
            .filter(
                item =>
                    respostas[
                        item.index
                    ]?.status ===
                    tipo
            );


    if (
        !indices.length
    ) {

        alert(
            "Não existem questões para revisar."
        );

        return;

    }


    const novoSimulado =
        indices.map(
            item =>
                item.questao
        );


    const novasRespostas =
        {};


    indices.forEach(
        (item, novoIndex) => {

            novasRespostas[
                novoIndex
            ] =
                respostas[
                    item.index
                ];

        }
    );


    simulado =
        novoSimulado;


    respostas =
        novasRespostas;


    indiceAtual = 0;


    modoRevisao = true;


    mostrarTelaSimulado();

}


/* =========================================================
   NOVO SIMULADO
========================================================= */

document.getElementById(
    "btnNovoSimulado"
).addEventListener(
    "click",
    () => {

        telaResultado.classList.add(
            "hidden"
        );


        telaInicial.classList.remove(
            "hidden"
        );


        modoRevisao = false;


        verificarProgresso();

    }
);


/* =========================================================
   LIMPAR PROGRESSO
========================================================= */

btnLimparProgresso.addEventListener(
    "click",
    () => {

        const confirmar =
            confirm(
                "Tem certeza que deseja apagar todo o progresso salvo?"
            );


        if (!confirmar) {

            return;

        }


        localStorage.removeItem(
            STORAGE_KEY
        );


        respostas = {};

        simulado = [];

        indiceAtual = 0;


        btnContinuar.classList.add(
            "hidden"
        );


        alert(
            "Progresso apagado com sucesso."
        );

    }
);


/* =========================================================
   =========================================================
   EXCEL DOS ERROS
   =========================================================
========================================================= */


/* =========================================================
   BOTÃO DE BAIXAR EXCEL
========================================================= */

const btnBaixarErros =
    document.getElementById(
        "btnBaixarErros"
    );


btnBaixarErros.addEventListener(
    "click",
    baixarExcelErros
);


/* =========================================================
   BAIXAR EXCEL
========================================================= */

function baixarExcelErros() {

    const erros =
        JSON.parse(
            localStorage.getItem(
                ERROS_STORAGE_KEY
            )
        ) || [];


    if (
        erros.length === 0
    ) {

        alert(
            "Você ainda não possui questões erradas registradas."
        );

        return;

    }


    /*
       Transformamos os dados
       para os nomes que aparecerão
       nas colunas do Excel.
    */

    const dadosExcel =
        erros.map(
            erro => ({

                "Número da questão":
                    erro.numero,

                "Data":
                    erro.data,

                "Hora":
                    erro.hora,

                "Disciplina":
                    erro.disciplina,

                "Assunto específico":
                    erro.assuntoEspecifico,

                "Banca":
                    erro.banca,

                "Ano":
                    erro.ano,

                "Cidade":
                    erro.cidade,

                "Cargo":
                    erro.cargo,

                "Resposta marcada":
                    erro.respostaMarcada,

                "Resposta correta":
                    erro.respostaCorreta

            })
        );


    /*
       Cria a planilha.
    */

    const planilha =
        XLSX.utils.json_to_sheet(
            dadosExcel
        );


    /*
       Ajusta a largura das colunas.
    */

    planilha["!cols"] = [

        {
            wch: 20
        },

        {
            wch: 14
        },

        {
            wch: 12
        },

        {
            wch: 25
        },

        {
            wch: 30
        },

        {
            wch: 15
        },

        {
            wch: 10
        },

        {
            wch: 20
        },

        {
            wch: 25
        },

        {
            wch: 20
        },

        {
            wch: 20
        }

    ];


    /*
       Cria o arquivo Excel.
    */

    const livro =
        XLSX.utils.book_new();


    /*
       Adiciona a planilha
       ao arquivo.
    */

    XLSX.utils.book_append_sheet(
        livro,
        planilha,
        "Questões Erradas"
    );


    /*
       Gera o arquivo.
    */

    XLSX.writeFile(
        livro,
        "questoes_erradas.xlsx"
    );

}


/* =========================================================
   FIM DO SCRIPT
========================================================= */