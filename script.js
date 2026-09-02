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
  },
  /*Questões de conhecimento especifico*/
  {
    numero: 26,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Prisão em Flagrante",
    texto: "A Lei nº 10.741/03 instituiu o Estatuto do Idoso. Considerando as disposições do referido Estatuto, analise as afirmativas:\nI. É obrigação da família, da comunidade, da sociedade e do Poder Público assegurar ao idoso, com absoluta prioridade, a efetivação do direito à vida...\nII. Para os efeitos do Estatuto, considera-se violência contra o idoso qualquer ação ou omissão praticada em local público ou privado...\nIII. Para ter acesso à gratuidade dos transportes coletivos, o idoso deverá obrigatoriamente passar por cadastramento em que seja demonstrada a carência econômica.\nIV. Constitui infração administrativa, punível com multa, discriminar pessoa idosa...",
    pergunta: "Estão corretas apenas as afirmativas",
    alternativaA: "I e II.",
    alternativaB: "I e IV.",
    alternativaC: "II e III.",
    alternativaD: "II e IV.",
    alternativaE: "Espanha e IV.",
    correta: "A"
  },
  {
    numero: 30,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Porte de Arma e Órgão de Supervisão",
    texto: "De acordo com as normas básicas da Lei Orgânica sobre os servidores públicos municipais, analise as afirmativas:\nI. Os cargos públicos serão criados por lei, que fixará sua denominação, padrão de vencimento...\nII. O servidor municipal será civil, criminal e administrativamente responsável pelos atos que praticar...\nIII. Os editais de concurso público deverão prever isonomia de vencimentos entre cargos de atribuições iguais...",
    pergunta: "Está(ão) correta(s) a(s) afirmativa(s)",
    alternativaA: "I, II e III.",
    alternativaB: "II, apenas.",
    alternativaC: "III, apenas.",
    alternativaD: "I e II, apenas.",
    alternativaE: "II e III, apenas.",
    correta: "A"
  },
  {
    numero: 44,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Lei nº 13.022/2014",
    texto: "",
    pergunta: "Assinale a alternativa que apresenta o princípio ético constitucional que melhor orienta o tratamento igualitário entre os cidadãos, proibindo a discriminação com base em raça, gênero, religião, orientação sexual, entre outros aspectos, no serviço público brasileiro:",
    alternativaA: "Princípio da Eficiência.",
    alternativaB: "Princípio da Publicidade.",
    alternativaC: "Princípio da Legalidade.",
    alternativaD: "Princípio da Impessoalidade.",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 46,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Limite de Efetivo (Art. 7º)",
    texto: "",
    pergunta: "Com base no Art. 334 do Código Penal, que trata do crime de descaminho, indique a alternativa que descreve as condutas deste tipo de crime.",
    alternativaA: "Usurpar o pagamento de dinheiro devido ao consumo de mercadoria.",
    alternativaB: "Iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, pela saída ou pelo consumo de mercadoria.",
    alternativaC: "Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício.",
    alternativaD: "Retardar vantagem indevida para o pagamento de imposto referente à saída de mercadoria.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 41,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Art. 144 CF",
    texto: "",
    pergunta: "Pode se afirmar, corretamente, como sendo órgãos responsáveis pela Segurança Pública, de acordo com a CRFB:",
    alternativaA: "Polícia Federal, Guarda Civil e Polícia do Exército.",
    alternativaB: "Polícia Federal e Guarda Nacional.",
    alternativaC: "Polícia Rodoviária Federal e Polícia Ferroviária Federal.",
    alternativaD: "Polícia Militar, Guarda Civil e Polícia Civil.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 47,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Lei nº 11.343/2006",
    texto: "",
    pergunta: "De acordo com a Lei nº 11.343/2006 (Lei de Drogas), assinale a alternativa correta.",
    alternativaA: "Induzir, instigar ou auxiliar alguém ao uso indevido de droga tem pena cominada de detenção, de 1 (um) a 3 (três) anos, e multa de 100 (cem) a 300 (trezentos) dias-multa.",
    alternativaB: "As penas previstas para quem tiver em depósito, para consumo pessoal, drogas sem autorização, serão exclusivamente aplicadas cumulativamente, ouvidos o Ministério Público e o defensor.",
    alternativaC: "Para garantia do cumprimento das medidas educativas, a que injustificadamente se recuse o agente, deverá o Ministério Público submetê-lo, sucessivamente a admoestação verbal e multa.",
    alternativaD: "Prescrevem em oito anos a imposição e a execução das penas, no tocante à interrupção do prazo.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 48,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Lei nº 10.826/2003",
    texto: "",
    pergunta: "Com fulcro na Lei nº 10.826/2003 (Estatuto do Desarmamento) e suas alterações, indique a alternativa correta:",
    alternativaA: "A classificação legal, técnica e geral bem como a definição das armas de fogo e demais produtos controlados, de usos proibidos, restritos, permitidos ou obsoletos e de valor histórico serão disciplinadas em ato do Comando do Exército, mediante proposta do chefe do Poder Executivo Federal.",
    alternativaB: "Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal do estabelecimento ou empresa tem pena cominada de reclusão de 1 (um) a 3 (três) anos, e multa.",
    alternativaC: "Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal ou regulamentar tem pena de reclusão, de 2 (dois) a 4 (quatro) anos, e multa.",
    alternativaD: "É vedado ao Ministério da Justiça celebrar convênios com os Estados e o Distrito Federal para o cumprimento do disposto nesta Lei.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 49,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Lei nº 13.869/2019",
    texto: "",
    pergunta: "Consubstanciado na Lei nº 13.869/2019 (Lei de abuso de Autoridade) e suas alterações, é correto afirmar:",
    alternativaA: "Os crimes previstos nesta Lei são de ação penal pública condicionada a representação.",
    alternativaB: "É sujeito ativo do crime de abuso de autoridade apenas o agente público, servidor de carreira, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do Distrito Federal, dos Municípios e de Território.",
    alternativaC: "É sujeito do crime de abuso de autoridade o agente público de carreira e se limita a servidor público e militar ou pessoa a ele equiparada; membro do Poder Legislativo; membro do Poder Executivo; membro do Poder Judiciário e membro do Ministério Público.",
    alternativaD: "As penas restritivas de direitos, previstas nesta lei, podem ser aplicadas autônoma ou cumulativamente.",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 50,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Lei nº 11.340/2006",
    texto: "",
    pergunta: "Com base na Lei nº 11.340/2006 (Lei Maria da Penha - Violência doméstica e familiar contra a mulher) e suas alterações, aponte a alternativa correta.",
    alternativaA: "Na hipótese da iminência ou da prática de violência doméstica e familiar contra a mulher, a autoridade policial que tomar conhecimento da ocorrência adotará, de imediato, as providências legais cabíveis.",
    alternativaB: "No atendimento à mulher em situação de violência doméstica e familiar, a autoridade policial poderá garantir proteção policial, quando necessário, comunicando de imediato ao Ministério Público e a Controladoria Geral da União.",
    alternativaC: "Nos casos de violência doméstica e familiar contra a mulher, feito o registro da ocorrência, deverá a autoridade policial, após o período de 48 (quarenta e oito) horas, colher todas as provas que servirem para o esclarecimento do fato e de suas circunstâncias.",
    alternativaD: "A ofendida, nos casos de violência doméstica, caso tenha interesse na ação de divórcio ou de dissolução de união estável, deverá optar pelo exclusivamente Juizado de Violência Doméstica e Familiar contra a Mulher.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 29,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 13.869/2019",
    texto: "Acerca do que dispõe as normas gerais dispostas na Lei Orgânica sobre os serviços públicos municipais, analise as afirmativas (V ou F):\n( ) As obras públicas deverão ser executadas pela Prefeitura, por entidades públicas...\n( ) O município poderá retomar, sem qualquer indenização, os serviços permitidos ou concedidos...\n( ) As tarifas dos serviços públicos deverão ser fixadas pelo Prefeito...\n( ) É vedada a realização, pelo município, de obras e serviços de interesse comum, mediante convênios.",
    pergunta: "A sequência está correta em",
    alternativaA: "F, V, V, F",
    alternativaB: "V, F, F, V",
    alternativaC: "F, F, V, V",
    alternativaD: "V, V, F, F",
    alternativaE: "F, V, F, V",
    correta: "A"
  },
  {
    numero: 30,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 13.022/2014",
    texto: "De acordo com as normas básicas da Lei Orgânica sobre os servidores públicos municipais, analise as afirmativas:\nI. Os cargos públicos serão criados por lei, que fixará sua denominação, padrão de vencimento...\nII. O servidor municipal será civil, criminal e administrativamente responsável pelos atos que praticar...\nIII. Os editais de concurso público deverão prever isonomia de vencimentos entre cargos de atribuições iguais...",
    pergunta: "Está(ão) correta(s) a(s) afirmativa(s)",
    alternativaA: "I, II e III.",
    alternativaB: "II, apenas.",
    alternativaC: "III, apenas.",
    alternativaD: "I e II, apenas.",
    alternativaE: "II e III, apenas.",
    correta: "A"
  },
  {
    numero: 32,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 11.343/2006",
    texto: "",
    pergunta: "O legislador constituinte, preocupado com os direitos individuais do cidadão, restringiu o poder punitivo do Estado, limitando algumas espécies de pena. Acerca das penas proibidas pela Constituição Federal de 1988, assinale a alternativa INCORRETA.",
    alternativaA: "Cruéis.",
    alternativaB: "De banimento.",
    alternativaC: "De caráter perpétuo.",
    alternativaD: "De trabalhos forçados.",
    alternativaE: "De morte, em qualquer caso.",
    correta: "E"
  },
  {
    numero: 33,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 11.340/2006",
    texto: "",
    pergunta: "Nos termos do Estatuto do Idoso, Lei nº 10.741/2003, os casos de suspeita ou confirmação de violência praticada contra idosos serão objetos de notificação compulsória pelos serviços de saúde públicos e privados à autoridade sanitária, bem como serão obrigatoriamente comunicados por eles a quaisquer dos seguintes órgãos, EXCETO:",
    alternativaA: "Juiz plantonista.",
    alternativaB: "Ministério Público.",
    alternativaC: "Autoridade policial.",
    alternativaD: "Conselho Estadual do Idoso.",
    alternativaE: "Conselho Municipal do Idoso.",
    correta: "A"
  },
  {
    numero: 34,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 10.826/2003",
    texto: "",
    pergunta: "Sobre o Estatuto da Criança e do Adolescente, Lei nº 8.069/90, assinale a afirmativa correta.",
    alternativaA: "Por se tratar de norma específica, não se aplicam aos crimes definidos no ECA, as normas do Código Penal ou de Processo Penal.",
    alternativaB: "Comete crime aquele que descumprir, dolosa ou culposamente, os deveres inerentes ao poder familiar ou decorrente de tutela ou guarda.",
    alternativaC: "O ECA dispõe apenas sobre os crimes contra criança e adolescente praticados por ação, ficando os crimes por omissão a cargo do Código Penal.",
    alternativaD: "Considera-se infração administrativa, prevista no ECA, hospedar criança ou adolescente desacompanhado dos pais ou responsável, ou sem autorização escrita desses ou da autoridade judiciária, em hotel, pensão, motel ou congênere.",
    alternativaE: "Comete crime, previsto no ECA, o professor de ensino fundamental que deixar de comunicar à autoridade competente os casos de que tenha conhecimento, envolvendo suspeita ou confirmação de maus tratos contra criança ou adolescente.",
    correta: "D"
  },
  {
    numero: 44,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "classificação",
    texto: "",
    pergunta: "Assinale a alternativa que apresenta o princípio ético constitucional que melhor orienta o tratamento igualitário entre os cidadãos, proibindo a discriminação com base em raça, gênero, religião, orientação sexual, entre outros aspectos, no serviço público brasileiro:",
    alternativaA: "Princípio da Eficiência.",
    alternativaB: "Princípio da Publicidade.",
    alternativaC: "Princípio da Legalidade.",
    alternativaD: "Princípio da Impessoalidade.",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 45,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Invalidação, revogação e anulação",
    texto: "",
    pergunta: "Em se tratando dos crimes contra Administração Pública, previstos no Código Penal, aponte a alternativa correta.",
    alternativaA: "Facilitação de contrabando ou descaminho: Participar, sem a infração de dever funcional, a prática de contrabando.",
    alternativaB: "Corrupção ativa: Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício, Pena reclusão, de 2 (dois) a 12 (doze) anos, e multa.",
    alternativaC: "Tráfico de Influência: Iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, pela saída ou pelo consumo de mercadoria.",
    alternativaD: "Concussão: Extraviar livro oficial ou qualquer documento, de que tem a guarda em razão do cargo; sonegá-lo ou inutilizá-lo, total ou parcialmente.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 46,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Classificação dos atos",
    texto: "",
    pergunta: "Com base no Art. 334 do Código Penal, que trata do crime de descaminho, indique a alternativa que descreve as condutas deste tipo de crime.",
    alternativaA: "Usurpar o pagamento de dinheiro devido ao consumo de mercadoria.",
    alternativaB: "Iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, pela saída ou pelo consumo de mercadoria.",
    alternativaC: "Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício.",
    alternativaD: "Retardar vantagem indevida para o pagamento de imposto referente à saída de mercadoria.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 47,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "conveniência e oportunidade",
    texto: "",
    pergunta: "De acordo com a Lei nº 11.343/2006 (Lei de Drogas), assinale a alternativa correta.",
    alternativaA: "Induzir, instigar ou auxiliar alguém ao uso indevido de droga tem pena cominada de detenção, de 1 (um) a 3 (três) anos, e multa de 100 (cem) a 300 (trezentos) dias-multa.",
    alternativaB: "As penas previstas para quem tiver em depósito, para consumo pessoal, drogas sem autorização, serão exclusivamente aplicadas cumulativamente, ouvidos o Ministério Público e o defensor.",
    alternativaC: "Para garantia do cumprimento das medidas educativas, a que injustificadamente se recuse o agente, deverá o Ministério Público submetê-lo, sucessivamente a admoestação verbal e multa.",
    alternativaD: "Prescrevem em oito anos a imposição e a execução das penas, no tocante à interrupção do prazo.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 48,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Autotutela",
    texto: "",
    pergunta: "Com fulcro na Lei nº 10.826/2003 (Estatuto do Desarmamento) e suas alterações, indique a alternativa correta:",
    alternativaA: "A classificação legal, técnica e geral bem como a definição das armas de fogo e demais produtos controlados, de usos proibidos, restritos, permitidos ou obsoletos e de valor histórico serão disciplinadas em ato do Comando do Exército, mediante proposta do chefe do Poder Executivo Federal.",
    alternativaB: "Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal do estabelecimento ou empresa tem pena cominada de reclusão de 1 (um) a 3 (três) anos, e multa.",
    alternativaC: "Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal ou regulamentar tem pena de reclusão, de 2 (dois) a 4 (quatro) anos, e multa.",
    alternativaD: "É vedado ao Ministério da Justiça celebrar convênios com os Estados e o Distrito Federal para o cumprimento do disposto nesta Lei.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 49,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "art. 144 da Constituição Federal",
    texto: "",
    pergunta: "Consubstanciado na Lei nº 13.869/2019 (Lei de abuso de Autoridade) e suas alterações, é correto afirmar:",
    alternativaA: "Os crimes previstos nesta Lei são de ação penal pública condicionada a representação.",
    alternativaB: "É sujeito ativo do crime de abuso de autoridade apenas o agente público, servidor de carreira, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do Distrito Federal, dos Municípios e de Território.",
    alternativaC: "É sujeito do crime de abuso de autoridade o agente público de carreira e se limita a servidor público e militar ou pessoa a ele equiparada; membro do Poder Legislativo; membro do Poder Executivo; membro do Poder Judiciário e membro do Ministério Público.",
    alternativaD: "As penas restritivas de direitos, previstas nesta lei, podem ser aplicadas autônoma ou cumulativamente.",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 49,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Entidades e atos",
    texto: "",
    pergunta: "Consubstanciado na Lei nº 13.869/2019 (Lei de abuso de Autoridade) e suas alterações, é correto afirmar:",
    alternativaA: "Os crimes previstos nesta Lei são de ação penal pública condicionada a representação.",
    alternativaB: "É sujeito ativo do crime de abuso de autoridade apenas o agente público, servidor de carreira, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do Distrito Federal, dos Municípios e de Território.",
    alternativaC: "É sujeito do crime de abuso de autoridade o agente público de carreira e se limita a servidor público e militar ou pessoa a ele equiparada; membro do Poder Legislativo; membro do Poder Executivo; membro do Poder Judiciário e membro do Ministério Público.",
    alternativaD: "As penas restritivas de direitos, previstas nesta lei, podem ser aplicadas autônoma ou cumulativamente.",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 50,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "ordinatórios",
    texto: "",
    pergunta: "Com base na Lei nº 11.340/2006 (Lei Maria da Penha - Violência doméstica e familiar contra a mulher) e suas alterações, aponte a alternativa correta.",
    alternativaA: "Na hipótese da iminência ou da prática de violência doméstica e familiar contra a mulher, a autoridade policial que tomar conhecimento da ocorrência adotará, de imediato, as providências legais cabíveis.",
    alternativaB: "No atendimento à mulher em situação de violência doméstica e familiar, a autoridade policial poderá garantir proteção policial, quando necessário, comunicando de imediato ao Ministério Público e a Controladoria Geral da União.",
    alternativaC: "Nos casos de violência doméstica e familiar contra a mulher, feito o registro da ocorrência, deverá a autoridade policial, após o período de 48 (quarenta e oito) horas, colher todas as provas que servirem para o esclarecimento do fato e de suas circunstâncias.",
    alternativaD: "A ofendida, nos casos de violência doméstica, caso tenha interesse na ação de divórcio ou de dissolução de união estável, deverá optar pelo exclusivamente Juizado de Violência Doméstica e Familiar contra a Mulher.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 54,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Remédios Constitucionais",
    texto: "",
    pergunta: "João, guarda municipal, foi preso em flagrante por ter cometido um crime fora do horário de serviço, enquanto estava de folga. Após a prisão, João foi mantido preso por tempo indeterminado sem ter sido apresentado à autoridade judicial competente. Com base nos Direitos e Garantias Fundamentais estabelecidos na Constituição Federal de 1988, qual é o recurso que João pode apresentar para garantir a sua liberdade?",
    alternativaA: "Mandado de segurança.",
    alternativaB: "Habeas corpus.",
    alternativaC: "Mandado de injunção.",
    alternativaD: "Habeas data.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 71,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "efetivo",
    texto: "",
    pergunta: "De acordo com a Lei nº 13.022/2014 (Estatuto Geral das Guardas), as guardas municipais não poderão ter efetivo superior a: I. 0,4% (quatro décimos por cento) da população, em Municípios com até 50.000 (cinquenta mil) habitantes; II. 0,3% (três décimos por cento) da população, em Municípios com mais de 500.000 (quinhentos mil) habitantes; III. 0,5% (dois décimos por cento) da população, em Municípios com mais de 750.000 (setecentos e cinquenta mil) habitantes; IV. 0,2% (dois décimos por cento) da população, em Municípios com mais de 50.000 (cinquenta mil) e menos de 500.000 (quinhentos mil) habitantes; Está(ão) correto(s) o(s) item(ns):",
    alternativaA: "Apenas I.",
    alternativaB: "I, II e IV.",
    alternativaC: "II e III.",
    alternativaD: "III e IV.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 74,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Competências",
    texto: "",
    pergunta: "Respeitadas as competências dos órgãos federais e estaduais, há diversas competências específicas das guardas municipais. Por exemplo, a Lei nº 13.022/2014 (Estatuto Geral das Guardas) prevê que compete a elas:",
    alternativaA: "Atuar mediante ações preventivas na segurança escolar, zelando pelo entorno e participando de ações educativas com o corpo discente e docente das unidades de ensino municipal, de forma a colaborar com a implantação da cultura de paz na comunidade local.",
    alternativaB: "Encaminhar ao Ministério Público, diante de flagrante delito, o autor da infração, preservando o local do crime, quando possível e sempre que necessário.",
    alternativaC: "Auxiliar na segurança de eventos de qualquer porte e na proteção dos servidores públicos, enquanto estiverem em atividade laboral nas repartições públicas municipais.",
    alternativaD: "Proteger o patrimônio ecológico, histórico, cultural, arquitetônico e ambiental do Município, exceto quanto à adoção de medidas educativas.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 75,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "inabilitação",
    texto: "",
    pergunta: "A Lei nº 13.869/2019 definiu os crimes de abuso de autoridade, cometidos por agente público, servidor ou não, que, no exercício de suas funções ou a pretexto de exercê-las, abuse do poder que lhe tenha sido atribuído. Caso o agente seja reincidente na prática de crime previsto na referida lei, é possível que ele seja inabilitado para o exercício de cargo, mandato ou função pública pelo período de:",
    alternativaA: "Até 30 (trinta) anos.",
    alternativaB: "1 (um) a 5 (cinco) anos.",
    alternativaC: "3 (três) a 15 (quinze) anos.",
    alternativaD: "4 (quatro) a 20 (vinte) anos.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 76,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "porte de arma",
    texto: "",
    pergunta: "Considere que Maria é guarda municipal; Paulo é analista tributário da Receita Federal do Brasil; Rita é agente do Departamento de Segurança do Gabinete de Segurança Institucional da Presidência da República; João é procurador-geral do Município de Fortaleza. Nesse cenário, com base no Estatuto do Desarmamento, é possível afirmar que:",
    alternativaA: "João não tem direito ao porte de arma de fogo em território nacional.",
    alternativaB: "Todos têm direito ao porte de arma de fogo no território nacional.",
    alternativaC: "Paulo e João não têm direito ao porte de arma de fogo no território nacional.",
    alternativaD: "Apenas Maria e Rita têm direito ao porte de arma de fogo no território nacional.",
    alternativaE: "",
    correta: "ANULADA"
  },
  {
    numero: 21,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "princípios de atuação",
    texto: "",
    pergunta: "Acerca das normas disciplinadoras dos Princípios Fundamentais enumeradas na Constituição da República Federativa do Brasil, assinale a alternativa correta.",
    alternativaA: "A República Federativa do Brasil tem como fundamento, dentre outros, a igualdade entre os Estados.",
    alternativaB: "São Poderes da União, dependentes e harmônicos entre si, o Legislativo, o Executivo e o Tribunal de Contas.",
    alternativaC: "Constituem objetivos fundamentais da República Federativa do Brasil, dentre outros, a dignidade da pessoa humana.",
    alternativaD: "A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina.",
    alternativaE: "A República Federativa do Brasil rege-se nas suas relações internacionais, dentre outros, pelo Princípio do Pluralismo Político.",
    correta: "D"
  },
  {
    numero: 22,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "competências específicas",
    texto: "De acordo com a Lei nº 10.826/03, que dispõe sobre registro, posse e comercialização de armas de fogo e munição no território nacional, analise as afirmativas (V ou F):\n( ) É proibido o porte de arma de fogo em todo o território nacional, salvo...\n( ) A autorização para o porte de arma de fogo das guardas municipais está condicionada à formação funcional...\n( ) Constitui crime de porte irregular, manter sob sua guarda arma de fogo...\n( ) Disparar arma de fogo em lugar habitado...",
    pergunta: "A sequência está correta em",
    alternativaA: "F, F, V, V",
    alternativaB: "V, V, F, F",
    alternativaC: "V, F, F, V",
    alternativaD: "F, V, V, F",
    alternativaE: "V, F, V, F",
    correta: "B"
  },
  {
    numero: 23,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "efetivo",
    texto: "",
    pergunta: "Consoante ao que dispõe a Legislação Ambiental a respeito da conservação de recursos naturais e impacto ambiental, assinale a alternativa INCORRETA.",
    alternativaA: "São instrumentos da Política Nacional do Meio Ambiente, dentre outros, a avaliação de impactos ambientais.",
    alternativaB: "A construção, a instalação, a ampliação e o funcionamento de estabelecimentos e atividades utilizadores de recursos ambientais dependerão de prévio licenciamento.",
    alternativaC: "Nos casos de licenciamento ambiental de empreendimentos de significativo impacto ambiental, dispensado em todo caso o estudo de impacto ambiental e respectivo relatório EIA/RIMA...",
    alternativaD: "A ação ou omissão das pessoas físicas ou jurídicas que importem inobservância aos preceitos da legislação ambiental sujeitam os infratores às sanções previstas em lei.",
    alternativaE: "Considera-se conservação da natureza, para fins legais, o manejo do uso humano da natureza...",
    correta: "C"
  },
  {
    numero: 24,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "requisitos de investidura",
    texto: "",
    pergunta: "A Lei nº 11.340/06 cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher. De acordo com as disposições constantes da referida Lei, assinale a alternativa INCORRETA.",
    alternativaA: "Aos crimes praticados com violência doméstica e familiar contra a mulher, cuja pena seja inferior a dois anos, serão aplicados os benefícios da Lei nº 9.099/95.",
    alternativaB: "O poder público desenvolverá políticas que visem garantir os direitos humanos das mulheres no âmbito das relações domésticas e familiares...",
    alternativaC: "Na hipótese da iminência ou da prática de violência doméstica e familiar contra a mulher, a autoridade policial adotará, de imediato, as providências legais cabíveis.",
    alternativaD: "Os Juizados de Violência Doméstica e Familiar contra a Mulher poderão ser criados pela União e pelos Estados...",
    alternativaE: "A política pública, que visa coibir a violência doméstica e familiar contra a mulher, far-se-á por meio de um conjunto articulado de ações...",
    correta: "A"
  },
  {
    numero: 28,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "bens protegidos",
    texto: "",
    pergunta: "De acordo com a Lei nº 9.503/97 (Código de Trânsito Brasileiro), no que se refere à competência dos órgãos e entidades executivos de trânsito dos municípios, assinale a alternativa INCORRETA.",
    alternativaA: "Coletar dados estatísticos e elaborar estudos sobre os acidentes de trânsito e suas causas.",
    alternativaB: "Estabelecer, em conjunto com os órgãos de polícia ostensiva de trânsito, as diretrizes para o policiamento ostensivo de trânsito.",
    alternativaC: "Promover e participar de projetos e programas de educação e segurança de trânsito de acordo com as diretrizes do CONTRAN.",
    alternativaD: "Planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e de animais...",
    alternativaE: "Fiscalizar o nível de emissão de poluentes e ruídos produzidos pelos veículos automotores, sendo vedada, entretanto, a participação nas ações específicas de órgão ambiental local.",
    correta: "E"
  },
  {
    numero: 29,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "controle e prerrogativas",
    texto: "Acerca do que dispõe as normas gerais dispostas na Lei Orgânica sobre os serviços públicos municipais, analise as afirmativas (V ou F):\n( ) As obras públicas deverão ser executadas pela Prefeitura, por entidades públicas...\n( ) O município poderá retomar, sem qualquer indenização, os serviços permitidos ou concedidos...\n( ) As tarifas dos serviços públicos deverão ser fixadas pelo Prefeito...\n( ) É vedada a realização, pelo município, de obras e serviços de interesse comum, mediante convênios.",
    pergunta: "A sequência está correta em",
    alternativaA: "F, V, V, F",
    alternativaB: "V, F, F, V",
    alternativaC: "F, F, V, V",
    alternativaD: "V, V, F, F",
    alternativaE: "F, V, F, V",
    correta: "A"
  },
  {
    numero: 30,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "linha telefônica",
    texto: "De acordo com as normas básicas da Lei Orgânica sobre os servidores públicos municipais, analise as afirmativas:\nI. Os cargos públicos serão criados por lei, que fixará sua denominação, padrão de vencimento...\nII. O servidor municipal será civil, criminal e administrativamente responsável pelos atos que praticar...\nIII. Os editais de concurso público deverão prever isonomia de vencimentos entre cargos de atribuições iguais...",
    pergunta: "Está(ão) correta(s) a(s) afirmativa(s)",
    alternativaA: "I, II e III.",
    alternativaB: "II, apenas.",
    alternativaC: "III, apenas.",
    alternativaD: "I e II, apenas.",
    alternativaE: "II e III, apenas.",
    correta: "A"
  },
  {
    numero: 31,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "uniforme e estrutura",
    texto: "",
    pergunta: "A Constituição Federal de 1988 destina título específico à proteção dos Direitos e Garantias Fundamentais, nestes compreendidos a especial proteção à casa, assim considerada como o asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador. Entretanto, o próprio texto constitucional prevê exceções a essa regra. Assinale a alternativa que NÃO indica uma destas exceções.",
    alternativaA: "Desastre.",
    alternativaB: "Flagrante delito.",
    alternativaC: "Prestação de socorro.",
    alternativaD: "Inspeção epidemiológica.",
    alternativaE: "Determinação judicial, apenas durante o dia.",
    correta: "D"
  },
  {
    numero: 32,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "violência",
    texto: "",
    pergunta: "O legislador constituinte, preocupado com os direitos individuais do cidadão, restringiu o poder punitivo do Estado, limitando algumas espécies de pena. Acerca das penas proibidas pela Constituição Federal de 1988, assinale a alternativa INCORRETA.",
    alternativaA: "Cruéis.",
    alternativaB: "De banimento.",
    alternativaC: "De caráter perpétuo.",
    alternativaD: "De trabalhos forçados.",
    alternativaE: "De morte, em qualquer caso.",
    correta: "E"
  },
  {
    numero: 33,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "conceito de abuso de autoridade",
    texto: "",
    pergunta: "Nos termos do Estatuto do Idoso, Lei nº 10.741/2003, os casos de suspeita ou confirmação de violência praticada contra idosos serão objetos de notificação compulsória pelos serviços de saúde públicos e privados à autoridade sanitária, bem como serão obrigatoriamente comunicados por eles a quaisquer dos seguintes órgãos, EXCETO:",
    alternativaA: "Juiz plantonista.",
    alternativaB: "Ministério Público.",
    alternativaC: "Autoridade policial.",
    alternativaD: "Conselho Estadual do Idoso.",
    alternativaE: "Conselho Municipal do Idoso.",
    correta: "A"
  },
  {
    numero: 34,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "sujeitos ativos",
    texto: "",
    pergunta: "Sobre o Estatuto da Criança e do Adolescente, Lei nº 8.069/90, assinale a afirmativa correta.",
    alternativaA: "Por se tratar de norma específica, não se aplicam aos crimes definidos no ECA, as normas do Código Penal ou de Processo Penal.",
    alternativaB: "Comete crime aquele que descumprir, dolosa ou culposamente, os deveres inerentes ao poder familiar ou decorrente de tutela ou guarda.",
    alternativaC: "O ECA dispõe apenas sobre os crimes contra criança e adolescente praticados por ação, ficando os crimes por omissão a cargo do Código Penal.",
    alternativaD: "Considera-se infração administrativa, prevista no ECA, hospedar criança ou adolescente desacompanhado dos pais ou responsável, ou sem autorização escrita desses ou da autoridade judiciária, em hotel, pensão, motel ou congênere.",
    alternativaE: "Comete crime, previsto no ECA, o professor de ensino fundamental que deixar de comunicar à autoridade competente os casos de que tenha conhecimento, envolvendo suspeita ou confirmação de maus tratos contra criança ou adolescente.",
    correta: "D"
  },
  {
    numero: 35,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "busca domiciliar",
    texto: "",
    pergunta: "Em relação ao Conselho Tutelar e às normas disciplinadoras dispostas no Estatuto da Criança e do Adolescente, assinale a alternativa INCORRETA.",
    alternativaA: "As decisões do Conselho Tutelar somente poderão ser revistas pela autoridade judiciária a pedido de quem tenha legítimo interesse.",
    alternativaB: "Faz parte das atribuições do Conselho Tutelar atender e aconselhar os pais ou responsável, aplicando, dentre outras, medidas de advertência.",
    alternativaC: "Os dirigentes de estabelecimentos de ensino fundamental comunicarão ao Conselho Tutelar, dentre outros, os casos de elevados níveis de repetência.",
    alternativaD: "O Conselho Tutelar é órgão permanente e autônomo, com competência, dentre outras, para julgar infrações penais cometidas por menores de 18 anos, bem como aplicar medidas socioeducativas.",
    alternativaE: "Os casos de suspeita ou confirmação de maus tratos contra criança ou adolescente serão, obrigatoriamente, comunicados ao Conselho Tutelar da respectiva localidade, sem prejuízo de outras providências legais.",
    correta: "D"
  },
  {
    numero: 36,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "efeitos da condenação",
    texto: "Sobre as disposições contidas na Lei nº 11.340/2006, que estabelece mecanismos para coibir a violência doméstica e familiar contra a mulher, marque V para as afirmativas verdadeiras e F para as falsas.\n( ) Considera como forma de violência doméstica, dentre outras, a violência física, psicológica e sexual, entretanto, não faz qualquer menção à chamada violência patrimonial...\n( ) Descreve especificamente como forma de violência psicológica qualquer conduta que configure calúnia, difamação ou injúria.\n( ) Prevê que a política pública que visa coibir a violência doméstica e familiar contra a mulher far-se-á por meio de um conjunto articulado de ações...\n( ) Dispõe que a assistência à mulher em situação de violência doméstica e familiar será prestada de forma articulada...",
    pergunta: "A sequência está correta em",
    alternativaA: "V, F, V, F",
    alternativaB: "F, V, F, V",
    alternativaC: "V, V, F, F",
    alternativaD: "F, F, V, V",
    alternativaE: "V, F, F, V",
    correta: "D"
  },
  {
    numero: 22,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Lei nº 10.826/03",
    texto: "De acordo com a Lei nº 10.826/03, que dispõe sobre registro, posse e comercialização de armas de fogo e munição no território nacional, analise as afirmativas (V ou F):\n( ) É proibido o porte de arma de fogo em todo o território nacional, salvo...\n( ) A autorização para o porte de arma de fogo das guardas municipais está condicionada à formação funcional...\n( ) Constitui crime de porte irregular, manter sob sua guarda arma de fogo...\n( ) Disparar arma de fogo em lugar habitado...",
    pergunta: "A sequência está correta em",
    alternativaA: "F, F, V, V",
    alternativaB: "V, V, F, F",
    alternativaC: "V, F, F, V",
    alternativaD: "F, V, V, F",
    alternativaE: "V, F, V, F",
    correta: "B"
  },
  {
    numero: 24,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Lei nº 11.340/06",
    texto: "",
    pergunta: "A Lei nº 11.340/06 cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher. De acordo com as disposições constantes da referida Lei, assinale a alternativa INCORRETA.",
    alternativaA: "Aos crimes praticados com violência doméstica e familiar contra a mulher, cuja pena seja inferior a dois anos, serão aplicados os benefícios da Lei nº 9.099/95.",
    alternativaB: "O poder público desenvolverá políticas que visem garantir os direitos humanos das mulheres no âmbito das relações domésticas e familiares...",
    alternativaC: "Na hipótese da iminência ou da prática de violência doméstica e familiar contra a mulher, a autoridade policial adotará, de imediato, as providências legais cabíveis.",
    alternativaD: "Os Juizados de Violência Doméstica e Familiar contra a Mulher poderão ser criados pela União e pelos Estados...",
    alternativaE: "A política pública, que visa coibir a violência doméstica e familiar contra a mulher, far-se-á por meio de um conjunto articulado de ações...",
    correta: "A"
  },
  {
    numero: 36,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei nº 11.340/2006",
    texto: "Sobre as disposições contidas na Lei nº 11.340/2006, que estabelece mecanismos para coibir a violência doméstica e familiar contra a mulher, marque V para as afirmativas verdadeiras e F para as falsas.\n( ) Considera como forma de violência doméstica, dentre outras, a violência física, psicológica e sexual, entretanto, não faz qualquer menção à chamada violência patrimonial...\n( ) Descreve especificamente como forma de violência psicológica qualquer conduta que configure calúnia, difamação ou injúria.\n( ) Prevê que a política pública que visa coibir a violência doméstica e familiar contra a mulher far-se-á por meio de um conjunto articulado de ações...\n( ) Dispõe que a assistência à mulher em situação de violência doméstica e familiar será prestada de forma articulada...",
    pergunta: "A sequência está correta em",
    alternativaA: "V, F, V, F",
    alternativaB: "F, V, F, V",
    alternativaC: "V, V, F, F",
    alternativaD: "F, F, V, V",
    alternativaE: "V, F, F, V",
    correta: "D"
  },
  {
    numero: 39,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Porte de Arma",
    texto: "",
    pergunta: "A Lei nº 10.826/2003, popularmente conhecida como Estatuto do Desarmamento, dispõe sobre registro, posse e comercialização de armas de fogo e munição, dentre outros assuntos. Com base na referida Lei, assinale a alternativa que NÃO retrata uma exceção à regra da proibição do porte de arma de fogo em todo o território nacional.",
    alternativaA: "Os integrantes do quadro efetivo dos agentes e guardas prisionais, os integrantes das escoltas de presos e as guardas portuárias.",
    alternativaB: "Os membros dos Tribunais do Poder Judiciário, dos Ministérios Públicos da União e dos Estados e das Defensorias Públicas da União e dos Estados.",
    alternativaC: "Os integrantes das carreiras de Auditoria da Receita Federal do Brasil e de Auditoria-Fiscal do Trabalho, cargos de Auditor-Fiscal e Analista Tributário.",
    alternativaD: "Os integrantes das guardas municipais das capitais dos Estados e dos Municípios com mais de quinhentos mil habitantes, nas condições estabelecidas em Lei.",
    alternativaE: "Os agentes operacionais da Agência Brasileira de Inteligência e os agentes do Departamento de Segurança do Gabinete de Segurança Institucional da Presidência da República.",
    correta: "B"
  },
  {
    numero: 24,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Porte de Arma e Guardas Municipais",
    texto: "",
    pergunta: "A Lei nº 11.340/06 cria mecanismos para coibir e prevenir a violência doméstica e familiar contra a mulher. De acordo com as disposições constantes da referida Lei, assinale a alternativa INCORRETA.",
    alternativaA: "Aos crimes praticados com violência doméstica e familiar contra a mulher, cuja pena seja inferior a dois anos, serão aplicados os benefícios da Lei nº 9.099/95.",
    alternativaB: "O poder público desenvolverá políticas que visem garantir os direitos humanos das mulheres no âmbito das relações domésticas e familiares...",
    alternativaC: "Na hipótese da iminência ou da prática de violência doméstica e familiar contra a mulher, a autoridade policial adotará, de imediato, as providências legais cabíveis.",
    alternativaD: "Os Juizados de Violência Doméstica e Familiar contra a Mulher poderão ser criados pela União e pelos Estados...",
    alternativaE: "A política pública, que visa coibir a violência doméstica e familiar contra a mulher, far-se-á por meio de um conjunto articulado de ações...",
    correta: "A"
  },
  {
    numero: 26,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Regras Gerais e Simulacros",
    texto: "A Lei nº 10.741/03 instituiu o Estatuto do Idoso. Considerando as disposições do referido Estatuto, analise as afirmativas:\nI. É obrigação da família, da comunidade, da sociedade e do Poder Público assegurar ao idoso, com absoluta prioridade, a efetivação do direito à vida...\nII. Para os efeitos do Estatuto, considera-se violência contra o idoso qualquer ação ou omissão praticada em local público ou privado...\nIII. Para ter acesso à gratuidade dos transportes coletivos, o idoso deverá obrigatoriamente passar por cadastramento em que seja demonstrada a carência econômica.\nIV. Constitui infração administrativa, punível com multa, discriminar pessoa idosa...",
    pergunta: "Estão corretas apenas as afirmativas",
    alternativaA: "I e II.",
    alternativaB: "I e IV.",
    alternativaC: "II e III.",
    alternativaD: "II e IV.",
    alternativaE: "Espanha e IV.",
    correta: "A"
  },
  {
    numero: 27,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Posse Irregular",
    texto: "",
    pergunta: "Nos termos da Lei nº 8.069/90 (Estatuto da Criança e do Adolescente), assinale a alternativa INCORRETA.",
    alternativaA: "Considera-se ato infracional a conduta descrita como crime ou contravenção penal.",
    alternativaB: "É proibida, dentre outros, a venda à criança ou ao adolescente de armas, bebidas alcoólicas, bilhetes lotéricos e equivalentes.",
    alternativaC: "Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente.",
    alternativaD: "É dever de todos velar pela dignidade da criança e do adolescente, pando-os a salvo de qualquer tratamento desumano...",
    alternativaE: "O adolescente apreendido em flagrante de ato infracional será, desde logo, encaminhado à autoridade judiciária competente ou, na falta desta, ao órgão responsável pela Assistência Social.",
    correta: "E"
  },
  {
    numero: 28,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei nº 11.340/2006",
    texto: "",
    pergunta: "De acordo com a Lei nº 9.503/97 (Código de Trânsito Brasileiro), no que se refere à competência dos órgãos e entidades executivos de trânsito dos municípios, assinale a alternativa INCORRETA.",
    alternativaA: "Coletar dados estatísticos e elaborar estudos sobre os acidentes de trânsito e suas causas.",
    alternativaB: "Estabelecer, em conjunto com os órgãos de polícia ostensiva de trânsito, as diretrizes para o policiamento ostensivo de trânsito.",
    alternativaC: "Promover e participar de projetos e programas de educação e segurança de trânsito de acordo com as diretrizes do CONTRAN.",
    alternativaD: "Planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e de animais...",
    alternativaE: "Fiscalizar o nível de emissão de poluentes e ruídos produzidos pelos veículos automotores, sendo vedada, entretanto, a participação nas ações específicas de órgão ambiental local.",
    correta: "E"
  },
  {
    numero: 29,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei nº 11.340/2006",
    texto: "Acerca do que dispõe as normas gerais dispostas na Lei Orgânica sobre os serviços públicos municipais, analise as afirmativas (V ou F):\n( ) As obras públicas deverão ser executadas pela Prefeitura, por entidades públicas...\n( ) O município poderá retomar, sem qualquer indenização, os serviços permitidos ou concedidos...\n( ) As tarifas dos serviços públicos deverão ser fixadas pelo Prefeito...\n( ) É vedada a realização, pelo município, de obras e serviços de interesse comum, mediante convênios.",
    pergunta: "A sequência está correta em",
    alternativaA: "F, V, V, F",
    alternativaB: "V, F, F, V",
    alternativaC: "F, F, V, V",
    alternativaD: "V, V, F, F",
    alternativaE: "F, V, F, V",
    correta: "A"
  },
  {
    numero: 22,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Segurança Pública (Art. 144)",
    texto: "De acordo com a Lei nº 10.826/03, que dispõe sobre registro, posse e comercialização de armas de fogo e munição no território nacional, analise as afirmativas (V ou F):\n( ) É proibido o porte de arma de fogo em todo o território nacional, salvo...\n( ) A autorização para o porte de arma de fogo das guardas municipais está condicionada à formação funcional...\n( ) Constitui crime de porte irregular, manter sob sua guarda arma de fogo...\n( ) Disparar arma de fogo em lugar habitado...",
    pergunta: "A sequência está correta em",
    alternativaA: "F, F, V, V",
    alternativaB: "V, V, F, F",
    alternativaC: "V, F, F, V",
    alternativaD: "F, V, V, F",
    alternativaE: "V, F, V, F",
    correta: "B"
  },
  {
    numero: 28,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Crimes contra a Administração Pública (Peculato)",
    texto: "",
    pergunta: "De acordo com a Lei nº 9.503/97 (Código de Trânsito Brasileiro), no que se refere à competência dos órgãos e entidades executivos de trânsito dos municípios, assinale a alternativa INCORRETA.",
    alternativaA: "Coletar dados estatísticos e elaborar estudos sobre os acidentes de trânsito e suas causas.",
    alternativaB: "Estabelecer, em conjunto com os órgãos de polícia ostensiva de trânsito, as diretrizes para o policiamento ostensivo de trânsito.",
    alternativaC: "Promover e participar de projetos e programas de educação e segurança de trânsito de acordo com as diretrizes do CONTRAN.",
    alternativaD: "Planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e de animais...",
    alternativaE: "Fiscalizar o nível de emissão de poluentes e ruídos produzidos pelos veículos automotores, sendo vedada, entretanto, a participação nas ações específicas de órgão ambiental local.",
    correta: "E"
  },
  {
    numero: 31,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Lei nº 9.455/1997 (Causa de Aumento)",
    texto: "",
    pergunta: "A Constituição Federal de 1988 destina título específico à proteção dos Direitos e Garantias Fundamentais, nestes compreendidos a especial proteção à casa, assim considerada como o asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador. Entretanto, o próprio texto constitutional prevê exceções a essa regra. Assinale a alternativa que NÃO indica uma destas exceções.",
    alternativaA: "Desastre.",
    alternativaB: "Flagrante delito.",
    alternativaC: "Prestação de socorro.",
    alternativaD: "Inspeção epidemiológica.",
    alternativaE: "Determinação judicial, apenas durante o dia.",
    correta: "D"
  },
  {
    numero: 38,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Resolução CONTRAN nº 996/2023",
    texto: "",
    pergunta: "O Código de Trânsito Brasileiro dispõe que \"a velocidade máxima permitida para a via será indicada por meio de sinalização, obedecidas suas características técnicas e as condições de trânsito\". Entretanto, onde NÃO houver sinalização regulamentadora, a velocidade máxima será de",
    alternativaA: "trinta quilômetros por hora, nas vias locais.",
    alternativaB: "oitenta quilômetros por hora, nas estradas.",
    alternativaC: "quarenta quilômetros por hora, nas vias arteriais.",
    alternativaD: "sessenta quilômetros por hora, nas vias coletoras.",
    alternativaE: "cem quilômetros por hora, nas vias de trânsito rápido.",
    correta: "A"
  },
  {
    numero: 39,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Registros de Habilitação (RENACH)",
    texto: "",
    pergunta: "A Lei nº 10.826/2003, popularmente conhecida como Estatuto do Desarmamento, dispõe sobre registro, posse e comercialização de armas de fogo e munição, dentre outros assuntos. Com base na referida Lei, assinale a alternativa que NÃO retrata uma exceção à regra da proibição do porte de arma de fogo em todo o território nacional.",
    alternativaA: "Os integrantes do quadro efetivo dos agentes e guardas prisionais, os integrantes das escoltas de presos e as guardas portuárias.",
    alternativaB: "Os membros dos Tribunais do Poder Judiciário, dos Ministérios Públicos da União e dos Estados e das Defensorias Públicas da União e dos Estados.",
    alternativaC: "Os integrantes das carreiras de Auditoria da Receita Federal do Brasil e de Auditoria-Fiscal do Trabalho, cargos de Auditor-Fiscal e Analista Tributário.",
    alternativaD: "Os integrantes das guardas municipais das capitais dos Estados e dos Municípios com mais de quinhentos mil habitantes, nas condições estabelecidas em Lei.",
    alternativaE: "Os agentes operacionais da Agência Brasileira de Inteligência e os agentes do Departamento de Segurança do Gabinete de Segurança Institucional da Presidência da República.",
    correta: "B"
  },
  {
    numero: 40,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Resolução CONTRAN nº 918/2022 (Notificação de Autuação)",
    texto: "De acordo com a Lei nº 12.288/10, que institui o Estatuto da Igualdade Racial, analise as afirmativas:\nI. Para efeito do Estatuto, considera-se \"população negra\" o conjunto de pessoas que se autodeclaram pretas...\nII. Além das normas constitucionais relativas aos princípios fundamentais, aos direitos e garantias fundamentais e aos direitos sociais, econômicos e culturais, o Estatuto adota como diretriz político-jurídica a inclusão das vítimas...\nIII. Constitui um dos objetivos da Política Nacional de Saúde Integral da População Negra a melhoria da qualidade dos sistemas de informação do SUS...",
    pergunta: "Está(ão) correta(s) apenas a(s) afirmativa(s)",
    alternativaA: "I.",
    alternativaB: "II.",
    alternativaC: "I e II.",
    alternativaD: "I e III.",
    alternativaE: "II e III.",
    correta: "E"
  },
  {
    numero: 41,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Estacionamento Irregular (Art. 181)",
    texto: "",
    pergunta: "Pode se afirmar, corretamente, como sendo órgãos responsáveis pela Segurança Pública, de acordo com a CRFB:",
    alternativaA: "Polícia Federal, Guarda Civil e Polícia do Exército.",
    alternativaB: "Polícia Federal e Guarda Nacional.",
    alternativaC: "Polícia Rodoviária Federal e Polícia Ferroviária Federal.",
    alternativaD: "Polícia Militar, Guarda Civil e Polícia Civil.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 42,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Suspensão do Direito de Dirigir",
    texto: "",
    pergunta: "Aponte a alternativa que indica corretamente qual Ministério foi responsável pela coordenação do Programa Nacional de Segurança Pública com Cidadania (Pronasci):",
    alternativaA: "Ministério das Relações Exteriores.",
    alternativaB: "Ministério da Justiça e Segurança Pública.",
    alternativaC: "Ministério da Defesa e Segurança Pública.",
    alternativaD: "Ministério da Cidadania e Segurança Pública.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 43,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Limites de Velocidade (Art. 61)",
    texto: "",
    pergunta: "Sobre a ética no serviço público, em especial quanto a transparência dos seus atos na esfera Federal, assinale a alternativa que indica qual é o órgão típico responsável por fiscalizar a transparência nas ações do governo e nos gastos públicos (garantindo o cumprimento da Lei de Acesso à Informação), bem como aponte, na sequência, o princípio de licitações para evitar práticas de favorecimento indevido:",
    alternativaA: "Advocacia-Geral da União (AGU) - Princípio da Transparência.",
    alternativaB: "Tribunal de Contas da União (TCU) - Princípio da Legalidade.",
    alternativaC: "Controladoria-Geral da União (CGU) - Princípio da Impessoalidade.",
    alternativaD: "Ministério da Fazenda - Princípio da Isonomia.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 45,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Condução de Escolares (Art. 138)",
    texto: "",
    pergunta: "Em se tratando dos crimes contra Administração Pública, previstos no Código Penal, aponte a alternativa correta.",
    alternativaA: "Facilitação de contrabando ou descaminho: Participar, sem a infração de dever funcional, a prática de contrabando.",
    alternativaB: "Corrupção ativa: Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício, Pena reclusão, de 2 (dois) a 12 (doze) anos, e multa.",
    alternativaC: "Tráfico de Influência: Iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, pela saída ou pelo consumo de mercadoria.",
    alternativaD: "Concussão: Extraviar livro oficial ou qualquer documento, de que tem a guarda em razão do cargo; sonegá-lo ou inutilizá-lo, total ou parcialmente.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 33,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Tratados de Direitos Humanos",
    texto: "",
    pergunta: "Nos termos do Estatuto do Idoso, Lei nº 10.741/2003, os casos de suspeita ou confirmação de violência praticada contra idosos serão objetos de notificação compulsória pelos serviços de saúde públicos e privados à autoridade sanitária, bem como serão obrigatoriamente comunicados por eles a quaisquer dos seguintes órgãos, EXCETO:",
    alternativaA: "Juiz plantonista.",
    alternativaB: "Ministério Público.",
    alternativaC: "Autoridade policial.",
    alternativaD: "Conselho Estadual do Idoso.",
    alternativaE: "Conselho Municipal do Idoso.",
    correta: "A"
  },
  {
    numero: 36,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Engenharia e Engenharia de Tráfego",
    texto: "Sobre as disposições contidas na Lei nº 11.340/2006, que estabelece mecanismos para coibir a violência doméstica e familiar contra a mulher, marque V para as afirmativas verdadeiras e F para as falsas.\n( ) Considera como forma de violência doméstica, dentre outras, a violência física, psicológica e sexual, entretanto, não faz qualquer menção à chamada violência patrimonial...\n( ) Descreve especificamente como forma de violência psicológica qualquer conduta que configure calúnia, difamação ou injúria.\n( ) Prevê que a política pública que visa coibir a violência doméstica e familiar contra a mulher far-se-á por meio de um conjunto articulado de ações...\n( ) Dispõe que a assistência à mulher em situação de violência doméstica e familiar será prestada de forma articulada...",
    pergunta: "A sequência está correta em",
    alternativaA: "V, F, V, F",
    alternativaB: "F, V, F, V",
    alternativaC: "V, V, F, F",
    alternativaD: "F, F, V, V",
    alternativaE: "V, F, F, V",
    correta: "D"
  },
  {
    numero: 37,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Competências Municipais",
    texto: "",
    pergunta: "Considerando a distribuição de competências descritas no Código de Trânsito Brasileiro, é INCORRETO afirmar que compete aos órgãos e entidades executivos de trânsito dos Municípios, no âmbito de sua circunscrição,",
    alternativaA: "implantar, manter e operar sistema de estacionamento rotativo pago nas vias.",
    alternativaB: "cumprir e fazer cumprir a legislação e as normas de trânsito, no âmbito de suas atribuições.",
    alternativaC: "implantar, manter e operar o sistema de sinalização, os dispositivos e os equipamentos de controle viário.",
    alternativaD: "planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e ciclistas, ficando a cargo do IBAMA a regulamentação do trânsito de animais.",
    alternativaE: "executar a fiscalização de trânsito, autuar e aplicar as medidas administrativas cabíveis, por infrações de circulação, estacionamento e parada previstas neste Código, no exercício regular do Poder de Polícia de Trânsito.",
    correta: "D"
  },
  {
    numero: 38,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Limites de Velocidade",
    texto: "",
    pergunta: "O Código de Trânsito Brasileiro dispõe que \"a velocidade máxima permitida para a via será indicada por meio de sinalização, obedecidas suas características técnicas e as condições de trânsito\". Entretanto, onde NÃO houver sinalização regulamentadora, a velocidade máxima será de",
    alternativaA: "trinta quilômetros por hora, nas vias locais.",
    alternativaB: "oitenta quilômetros por hora, nas estradas.",
    alternativaC: "quarenta quilômetros por hora, nas vias arteriais.",
    alternativaD: "sessenta quilômetros por hora, nas vias coletoras.",
    alternativaE: "cem quilômetros por hora, nas vias de trânsito rápido.",
    correta: "A"
  },
  {
    numero: 39,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Porte de Arma",
    texto: "",
    pergunta: "A Lei nº 10.826/2003, popularmente conhecida como Estatuto do Desarmamento, dispõe sobre registro, posse e comercialização de armas de fogo e munição, dentre outros assuntos. Com base na referida Lei, assinale a alternativa que NÃO retrata uma exceção à regra da proibição do porte de arma de fogo em todo o território nacional.",
    alternativaA: "Os integrantes do quadro efetivo dos agentes e guardas prisionais, os integrantes das escoltas de presos e as guardas portuárias.",
    alternativaB: "Os membros dos Tribunais do Poder Judiciário, dos Ministérios Públicos da União e dos Estados e das Defensorias Públicas da União e dos Estados.",
    alternativaC: "Os integrantes das carreiras de Auditoria da Receita Federal do Brasil e de Auditoria-Fiscal do Trabalho, cargos de Auditor-Fiscal e Analista Tributário.",
    alternativaD: "Os integrantes das guardas municipais das capitais dos Estados e dos Municípios com mais de quinhentos mil habitantes, nas condições estabelecidas em Lei.",
    alternativaE: "Os agentes operacionais da Agência Brasileira de Inteligência e os agentes do Departamento de Segurança do Gabinete de Segurança Institucional da Presidência da República.",
    correta: "B"
  },
  {
    numero: 40,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Igualdade Racial",
    texto: "De acordo com a Lei nº 12.288/10, que institui o Estatuto da Igualdade Racial, analise as afirmativas:\nI. Para efeito do Estatuto, considera-se \"população negra\" o conjunto de pessoas que se autodeclaram pretas...\nII. Além das normas constitucionais relativas aos princípios fundamentais, aos direitos e garantias fundamentais e aos direitos sociais, econômicos e culturais, o Estatuto adota como diretriz político-jurídica a inclusão das vítimas...\nIII. Constitui um dos objetivos da Política Nacional de Saúde Integral da População Negra a melhoria da qualidade dos sistemas de informação do SUS...",
    pergunta: "Está(ão) correta(s) apenas a(s) afirmativa(s)",
    alternativaA: "I.",
    alternativaB: "II.",
    alternativaC: "I e II.",
    alternativaD: "I e III.",
    alternativaE: "II e III.",
    correta: "E"
  },
  {
    numero: 45,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Código Penal",
    texto: "",
    pergunta: "Em se tratando dos crimes contra Administração Pública, previstos no Código Penal, aponte a alternativa correta.",
    alternativaA: "Facilitação de contrabando ou descaminho: Participar, sem a infração de dever funcional, a prática de contrabando.",
    alternativaB: "Corrupção ativa: Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício, Pena reclusão, de 2 (dois) a 12 (doze) anos, e multa.",
    alternativaC: "Tráfico de Influência: Iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, pela saída ou pelo consumo de mercadoria.",
    alternativaD: "Concussão: Extraviar livro oficial ou qualquer documento, de que tem a guarda em razão do cargo; sonegá-lo ou inutilizá-lo, total ou parcialmente.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 46,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Descaminho",
    texto: "",
    pergunta: "Com base no Art. 334 do Código Penal, que trata do crime de descaminho, indique a alternativa que descreve as condutas deste tipo de crime.",
    alternativaA: "Usurpar o pagamento de dinheiro devido ao consumo de mercadoria.",
    alternativaB: "Iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, pela saída ou pelo consumo de mercadoria.",
    alternativaC: "Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício.",
    alternativaD: "Retardar vantagem indevida para o pagamento de imposto referente à saída de mercadoria.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 31,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 12.850/2013",
    texto: "",
    pergunta: "A Constituição Federal de 1988 destina título específico à proteção dos Direitos e Garantias Fundamentais, nestes compreendidos a especial proteção à casa, assim considerada como o asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador. Entretanto, o próprio texto constitucional prevê exceções a essa regra. Assinale a alternativa que NÃO indica uma destas exceções.",
    alternativaA: "Desastre.",
    alternativaB: "Flagrante delito.",
    alternativaC: "Prestação de socorro.",
    alternativaD: "Inspeção epidemiológica.",
    alternativaE: "Determinação judicial, apenas durante o dia.",
    correta: "D"
  },
  {
    numero: 35,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 9.605/1998",
    texto: "",
    pergunta: "Em relação ao Conselho Tutelar e às normas disciplinadoras dispostas no Estatuto da Criança e do Adolescente, assinale a alternativa INCORRETA.",
    alternativaA: "As decisões do Conselho Tutelar somente poderão ser revistas pela autoridade judiciária a pedido de quem tenha legítimo interesse.",
    alternativaB: "Faz parte das atribuições do Conselho Tutelar atender e aconselhar os pais ou responsável, aplicando, dentre outras, medidas de advertência.",
    alternativaC: "Os dirigentes de estabelecimentos de ensino fundamental comunicarão ao Conselho Tutelar, dentre outros, os casos de elevados níveis de repetência.",
    alternativaD: "O Conselho Tutelar é órgão permanente e autônomo, com competência, dentre outras, para julgar infrações penais cometidas por menores de 18 anos, bem como aplicar medidas socioeducativas.",
    alternativaE: "Os casos de suspeita ou confirmação de maus tratos contra criança ou adolescente serão, obrigatoriamente, comunicados ao Conselho Tutelar da respectiva localidade, sem prejuízo de outras providências legais.",
    correta: "D"
  },
  {
    numero: 36,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 8.069/1990",
    texto: "Sobre as disposições contidas na Lei nº 11.340/2006, que estabelece mecanismos para coibir a violência doméstica e familiar contra a mulher, marque V para as afirmativas verdadeiras e F para as falsas.\n( ) Considera como forma de violência doméstica, dentre outras, a violência física, psicológica e sexual, entretanto, não faz qualquer menção à chamada violência patrimonial...\n( ) Descreve especificamente como forma de violência psicológica qualquer conduta que configure calúnia, difamação ou injúria.\n( ) Prevê que a política pública que visa coibir a violência doméstica e familiar contra a mulher far-se-á por meio de um conjunto articulado de ações...\n( ) Dispõe que a assistência à mulher em situação de violência doméstica e familiar será prestada de forma articulada...",
    pergunta: "A sequência está correta em",
    alternativaA: "V, F, V, F",
    alternativaB: "F, V, F, V",
    alternativaC: "V, V, F, F",
    alternativaD: "F, F, V, V",
    alternativaE: "V, F, F, V",
    correta: "D"
  },
  {
    numero: 37,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Competências Municipais",
    texto: "",
    pergunta: "Considerando a distribuição de competências descritas no Código de Trânsito Brasileiro, é INCORRETO afirmar que compete aos órgãos e entidades executivos de trânsito dos Municípios, no âmbito de sua circunscrição,",
    alternativaA: "implantar, manter e operar sistema de estacionamento rotativo pago nas vias.",
    alternativaB: "cumprir e fazer cumprir a legislação e as normas de trânsito, no âmbito de suas atribuições.",
    alternativaC: "implantar, manter e operar o sistema de sinalização, os dispositivos e os equipamentos de controle viário.",
    alternativaD: "planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e ciclistas, ficando a cargo do IBAMA a regulamentação do trânsito de animais.",
    alternativaE: "executar a fiscalização de trânsito, autuar e aplicar as medidas administrativas cabíveis, por infrações de circulação, estacionamento e parada previstas neste Código, no exercício regular do Poder de Polícia de Trânsito.",
    correta: "D"
  },
  {
    numero: 38,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 8.072/1990",
    texto: "",
    pergunta: "O Código de Trânsito Brasileiro dispõe que \"a velocidade máxima permitida para a via será indicada por meio de sinalização, obedecidas suas características técnicas e as condições de trânsito\". Entretanto, onde NÃO houver sinalização regulamentadora, a velocidade máxima será de",
    alternativaA: "trinta quilômetros por hora, nas vias locais.",
    alternativaB: "oitenta quilômetros por hora, nas estradas.",
    alternativaC: "quarenta quilômetros por hora, nas vias arteriais.",
    alternativaD: "sessenta quilômetros por hora, nas vias coletoras.",
    alternativaE: "cem quilômetros por hora, nas vias de trânsito rápido.",
    correta: "A"
  },
  {
    numero: 39,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei 9.455/1997",
    texto: "",
    pergunta: "A Lei nº 10.826/2003, popularmente conhecida como Estatuto do Desarmamento, dispõe sobre registro, posse e comercialização de armas de fogo e munição, dentre outros assuntos. Com base na referida Lei, assinale a alternativa que NÃO retrata uma exceção à regra da proibição do porte de arma de fogo em todo o território nacional.",
    alternativaA: "Os integrantes do quadro efetivo dos agentes e guardas prisionais, os integrantes das escoltas de presos e as guardas portuárias.",
    alternativaB: "Os membros dos Tribunais do Poder Judiciário, dos Ministérios Públicos da União e dos Estados e das Defensorias Públicas da União e dos Estados.",
    alternativaC: "Os integrantes das carreiras de Auditoria da Receita Federal do Brasil e de Auditoria-Fiscal do Trabalho, cargos de Auditor-Fiscal e Analista Tributário.",
    alternativaD: "Os integrantes das guardas municipais das capitais dos Estados e dos Municípios com mais de quinhentos mil habitantes, nas condições estabelecidas em Lei.",
    alternativaE: "Os agentes operacionais da Agência Brasileira de Inteligência e os agentes do Departamento de Segurança do Gabinete de Segurança Institucional da Presidência da República.",
    correta: "B"
  },
  {
    numero: 40,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "CTB",
    texto: "De acordo com a Lei nº 12.288/10, que institui o Estatuto da Igualdade Racial, analise as afirmativas:\nI. Para efeito do Estatuto, considera-se \"população negra\" o conjunto de pessoas que se autodeclaram pretas...\nII. Além das normas constitucionais relativas aos princípios fundamentais, aos direitos e garantias fundamentais e aos direitos sociais, econômicos e culturais, o Estatuto adota como diretriz político-jurídica a inclusão das vítimas...\nIII. Constitui um dos objetivos da Política Nacional de Saúde Integral da População Negra a melhoria da qualidade dos sistemas de informação do SUS...",
    pergunta: "Está(ão) correta(s) apenas a(s) afirmativa(s)",
    alternativaA: "I.",
    alternativaB: "II.",
    alternativaC: "I e II.",
    alternativaD: "I e III.",
    alternativaE: "II e III.",
    correta: "E"
  },
  {
    numero: 41,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Poderes da União",
    texto: "",
    pergunta: "Pode se afirmar, corretamente, como sendo órgãos responsáveis pela Segurança Pública, de acordo com a CRFB:",
    alternativaA: "Polícia Federal, Guarda Civil e Polícia do Exército.",
    alternativaB: "Polícia Federal e Guarda Nacional.",
    alternativaC: "Polícia Rodoviária Federal e Polícia Ferroviária Federal.",
    alternativaD: "Polícia Militar, Guarda Civil e Polícia Civil.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 43,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Princípios Administrativos",
    texto: "",
    pergunta: "Sobre a ética no serviço público, em especial quanto a transparência dos seus atos na esfera Federal, assinale a alternativa que indica qual é o órgão típico responsável por fiscalizar a transparência nas ações do governo e nos gastos públicos (garantindo o cumprimento da Lei de Acesso à Informação), bem como aponte, na sequência, o princípio de licitações para evitar práticas de favorecimento indevido:",
    alternativaA: "Advocacia-Geral da União (AGU) - Princípio da Transparência.",
    alternativaB: "Tribunal de Contas da União (TCU) - Princípio da Legalidade.",
    alternativaC: "Controladoria-Geral da União (CGU) - Princípio da Impessoalidade.",
    alternativaD: "Ministério da Fazenda - Princípio da Isonomia.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 47,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "art. 6º da Constituição Federal",
    texto: "",
    pergunta: "De acordo com a Lei nº 11.343/2006 (Lei de Drogas), assinale a alternativa correta.",
    alternativaA: "Induzir, instigar ou auxiliar alguém ao uso indevido de droga tem pena cominada de detenção, de 1 (um) a 3 (três) anos, e multa de 100 (cem) a 300 (trezentos) dias-multa.",
    alternativaB: "As penas previstas para quem tiver em depósito, para consumo pessoal, drogas sem autorização, serão exclusivamente aplicadas cumulativamente, ouvidos o Ministério Público e o defensor.",
    alternativaC: "Para garantia do cumprimento das medidas educativas, a que injustificadamente se recuse o agente, deverá o Ministério Público submetê-lo, sucessivamente a admoestação verbal e multa.",
    alternativaD: "Prescrevem em oito anos a imposição e a execução das penas, no tocante à interrupção do prazo.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 48,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "art. 14 da Constituição Federal",
    texto: "",
    pergunta: "Com fulcro na Lei nº 10.826/2003 (Estatuto do Desarmamento) e suas alterações, indique a alternativa correta:",
    alternativaA: "A classificação legal, técnica e geral bem como a definição das armas de fogo e demais produtos controlados, de usos proibidos, restritos, permitidos ou obsoletos e de valor histórico serão disciplinadas em ato do Comando do Exército, mediante proposta do chefe do Poder Executivo Federal.",
    alternativaB: "Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal do estabelecimento ou empresa tem pena cominada de reclusão de 1 (um) a 3 (três) anos, e multa.",
    alternativaC: "Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal ou regulamentar tem pena de reclusão, de 2 (dois) a 4 (quatro) anos, e multa.",
    alternativaD: "É vedado ao Ministério da Justiça celebrar convênios com os Estados e o Distrito Federal para o cumprimento do disposto nesta Lei.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 50,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Deslocamento de competência",
    texto: "",
    pergunta: "Com base na Lei nº 11.340/2006 (Lei Maria da Penha - Violência doméstica e familiar contra a mulher) e suas alterações, aponte a alternativa correta.",
    alternativaA: "Na hipótese da iminência ou da prática de violência doméstica e familiar contra a mulher, a autoridade policial que tomar conhecimento da ocorrência adotará, de imediato, as providências legais cabíveis.",
    alternativaB: "No atendimento à mulher em situação de violência doméstica e familiar, a autoridade policial poderá garantir proteção policial, quando necessário, comunicando de imediato ao Ministério Público e a Controladoria Geral da União.",
    alternativaC: "Nos casos de violência doméstica e familiar contra a mulher, feito o registro da ocorrência, deverá a autoridade policial, após o período de 48 (quarenta e oito) horas, colher todas as provas que servirem para o esclarecimento do fato e de suas circunstâncias.",
    alternativaD: "A ofendida, nos casos de violência doméstica, caso tenha interesse na ação de divórcio ou de dissolução de união estável, deverá optar pelo exclusivamente Juizado de Violência Doméstica e Familiar contra a Mulher.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 51,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Direitos Humanos",
    texto: "",
    pergunta: "Assinale a alternativa que apresenta um dos objetivos fundamentais da República Federativa do Brasil descritos no art. 3º da Constituição Federal.",
    alternativaA: "Garantir a livre expressão da atividade intelectual, artística, científica e de comunicação.",
    alternativaB: "Erradicação da tortura e do tratamento desumano ou degradante.",
    alternativaC: "Proteger a dignidade da pessoa humana e o pluralismo político partidário.",
    alternativaD: "Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 51,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Objetivos fundamentais da República",
    texto: "",
    pergunta: "Assinale a alternativa que apresenta um dos objetivos fundamentais da República Federativa do Brasil descritos no art. 3º da Constituição Federal.",
    alternativaA: "Garantir a livre expressão da atividade intelectual, artística, científica e de comunicação.",
    alternativaB: "Erradicação da tortura e do tratamento desumano ou degradante.",
    alternativaC: "Proteger a dignidade da pessoa humana e o pluralismo político partidário.",
    alternativaD: "Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 52,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Fundamentos da República",
    texto: "",
    pergunta: "Tomando por base os princípios fundamentais da Constituição Federal de 1988, assinale a alternativa que representa um dos fundamentos da República Federativa do Brasil descrito no art. 1º da Magna Carta.",
    alternativaA: "O Estado confessional.",
    alternativaB: "A censura prévia da imprensa.",
    alternativaC: "O pluralismo político.",
    alternativaD: "A autodeterminação dos povos.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 52,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Fundamentos da República",
    texto: "",
    pergunta: "Tomando por base os princípios fundamentais da Constituição Federal de 1988, assinale a alternativa que representa um dos fundamentos da República Federativa do Brasil descrito no art. 1º da Magna Carta.",
    alternativaA: "O Estado confessional.",
    alternativaB: "A censura prévia da imprensa.",
    alternativaC: "O pluralismo político.",
    alternativaD: "A autodeterminação dos povos.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 53,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "primeira geração",
    texto: "",
    pergunta: "De acordo com o artigo 144 da Constituição Federal, qual é o órgão responsável pelo policiamento ostensivo e preservação da ordem pública nos Estados e no Distrito Federal?",
    alternativaA: "Polícia Federal",
    alternativaB: "Polícia Militar",
    alternativaC: "Guarda Municipal",
    alternativaD: "Polícia Civil",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 53,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Polícia Militar",
    texto: "",
    pergunta: "De acordo com o artigo 144 da Constituição Federal, qual é o órgão responsável pelo policiamento ostensivo e preservação da ordem pública nos Estados e no Distrito Federal?",
    alternativaA: "Polícia Federal",
    alternativaB: "Polícia Militar",
    alternativaC: "Guarda Municipal",
    alternativaD: "Polícia Civil",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 55,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Art. 7º CF",
    texto: "",
    pergunta: "Lidiane é empregada de determinada empresa, exercendo suas funções como motorista. Enquanto trabalhadora urbana, quais direitos trabalhistas são garantidos à Lidiane pela Constituição Federal no artigo 7º?",
    alternativaA: "Direito ao seguro-desemprego parcial em razão de acidente de trabalho.",
    alternativaB: "Remuneração do trabalho diurno superior à do noturno.",
    alternativaC: "Jornada de oito horas para o trabalho realizado em turnos ininterruptos de revezamento, vedada negociação coletiva à respeito.",
    alternativaD: "Proteção em face da automação, na forma da lei;",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 56,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "alteração de sistema de informações",
    texto: "",
    pergunta: "O artigo 14 da Constituição Federal estabelece as condições de elegibilidade para os cargos eletivos no Brasil. Pedro Machado, conhecido comerciante do interior de Goiás está interessado em se candidatar à presidência da República, acreditando que desta forma poderá construir um pais melhor para todos. Visando alcançar seu objetivo, quais requisitos Pedro Machado deve cumprir para se candidatar ao cargo pretendido?",
    alternativaA: "Ter idade mínima de 30 anos; ter nacionalidade brasileira; estar em pleno exercício dos direitos políticos; ser filiado a um partido político; ser alistável e possuir domicílio eleitoral no país.",
    alternativaB: "Ter idade mínima de 35 anos; ter nacionalidade brasileira; estar em pleno exercício dos direitos políticos; ser filiado a um partido político; ser alistável e possuir domicílio eleitoral no país.",
    alternativaC: "Ter idade mínima de 35 anos; ter nacionalidade brasileira; estar em pleno exercício dos direitos políticos; ser filiado a um partido político ou declaração de que concorrerá sem qualquer ligação partidária; ser alistável e possuir residência fixa.",
    alternativaD: "Ter idade mínima de 30 anos; ter nacionalidade brasileira; estar em pleno exercício dos direitos políticos; ser filiado a um partido político ou declaração de que concorrerá sem qualquer ligação partidária; ser alistável; possuir residência fixo e não ter respondido a processo criminal.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 56,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Condições de elegibilidade",
    texto: "",
    pergunta: "O artigo 14 da Constituição Federal estabelece as condições de elegibilidade para os cargos eletivos no Brasil. Pedro Machado, conhecido comerciante do interior de Goiás está interessado em se candidatar à presidência da República, acreditando que desta forma poderá construir um pais melhor para todos. Visando alcançar seu objetivo, quais requisitos Pedro Machado deve cumprir para se candidatar ao cargo pretendido?",
    alternativaA: "Ter idade mínima de 30 anos; ter nacionalidade brasileira; estar em pleno exercício dos direitos políticos; ser filiado a um partido político; ser alistável e possuir domicílio eleitoral no país.",
    alternativaB: "Ter idade mínima de 35 anos; ter nacionalidade brasileira; estar em pleno exercício dos direitos políticos; ser filiado a um partido político; ser alistável e possuir domicílio eleitoral no país.",
    alternativaC: "Ter idade mínima de 35 anos; ter nacionalidade brasileira; estar em pleno exercício dos direitos políticos; ser filiado a um partido político ou declaração de que concorrerá sem qualquer ligação partidária; ser alistável e possuir residência fixa.",
    alternativaD: "Ter idade mínima de 30 anos; ter nacionalidade brasileira; estar em pleno exercício dos direitos políticos; ser filiado a um partido político ou declaração de que concorrerá sem qualquer ligação partidária; ser alistável; possuir residência fixo e não ter respondido a processo criminal.",
    alternativaE: "",
    correta: "B"
  },
  {
    numero: 57,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Art. 183 CF",
    texto: "",
    pergunta: "O art. 183 da Constituição Federal apresenta a chamada Usucapião Especial Urbana, definindo uma série de requisitos para sua concessão. Tomando por base tais informações, assinale a alternativa que contém os requisitos expressos no artigo mencionado.",
    alternativaA: "Aquele que possuir, como sua, área urbana de até duzentos e cinquenta metros quadrados, por cinco anos, ininterruptamente e sem oposição, utilizando-a para sua moradia ou de sua família, adquirir-lhe-á o domínio, desde que não seja proprietário de outro imóvel urbano ou rural.",
    alternativaB: "Aquele que possuir, como sua, área urbana de até duzentos metros quadrados, por três anos, ininterruptamente e sem oposição, utilizando-a para sua moradia ou de sua família, adquirir-lhe-á o domínio, desde que não seja proprietário de outro imóvel urbano ou rural.",
    alternativaC: "Aquele que possuir, como sua, área urbana de até duzentos metros quadrados, por dez anos, ininterruptamente e sem oposição, utilizando-a para sua moradia ou de sua família, adquirir-lhe-á o domínio, desde que não seja proprietário de outro imóvel urbano ou rural.",
    alternativaD: "Aquele que possuir, como sua, área urbana de até quatrocentos metros quadrados, por cinco anos, ininterruptamente e sem oposição, utilizando-a para sua moradia ou de sua família, adquirir-lhe-á o domínio, desde que não seja proprietário de outro imóvel urbano ou rural.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 58,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Gerações e valores",
    texto: "",
    pergunta: "É sabido que os Direitos Humanos são divididos em gerações, sendo cada geração destes direitos atrelada a um valor específico. Tomando por base tal premissa, assinale a alternativa correta com relação as mencionadas gerações e seus valores.",
    alternativaA: "A primeira geração dos direitos humanos tem como principais valores a solidariedade e a fraternidade, ao passo que tais institutos são verdadeiros pilares da sociedade, sem os quais não é possível a operacionalização dos Direitos Humanos.",
    alternativaB: "A primeira geração dos direitos humanos tem como principal valor a igualdade, defendendo que a isonomia entre todos os seres humanos é basilar no fomento aos Direitos Humanos.",
    alternativaC: "A terceira geração dos direitos humanos tem como pilar principal a liberdade, posto que apenas com a liberdade do indivíduo, que não deve ser cerceada, é que podemos construir uma sociedade livre, justa e solidária.",
    alternativaD: "A segunda geração dos direitos humanos tem como pilar principal a igualdade e defende os direitos sociais, econômicos e culturais.",
    alternativaE: "",
    correta: "D"
  },
  {
    numero: 59,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Art. 22 CF",
    texto: "",
    pergunta: "Tomando o art. 22 da Constituição Federal, assinale a alternativa que representa uma competência exclusiva da União.",
    alternativaA: "É de competência privativa da União legislar sobre sistemas de consórcios e sorteios.",
    alternativaB: "Compete privativamente à União cuidar da saúde e assistência pública, da proteção e garantia das pessoas portadoras de deficiência.",
    alternativaC: "É de competência privativa da União registrar, acompanhar e fiscalizar as concessões de direitos de pesquisa e exploração de recursos hídricos e minerais em seus territórios.",
    alternativaD: "Compete privativamente à União proteger os documentos, as obras e outros bens de valor histórico, artístico e cultural, os monumentos, as paisagens naturais notáveis e os sítios arqueológicos.",
    alternativaE: "",
    correta: "A"
  },
  {
    numero: 60,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "União estável",
    texto: "",
    pergunta: "De acordo com o artigo 226 da Constituição Federal, o casamento religioso tem efeito civil. Além disso, o Estado deve assegurar a união estável entre homem e mulher como entidade familiar. Com base nesse artigo, qual é a única alternativa correta sobre a união estável?",
    alternativaA: "A união estável é uma forma de casamento, com efeitos civis e religiosos.",
    alternativaB: "A união estável é exclusiva entre homens e mulheres, sendo vedada a união estável homoafetiva.",
    alternativaC: "A união estável é uma entidade familiar reconhecida pelo Estado, independente da orientação sexual dos companheiros.",
    alternativaD: "A união estável só é reconhecida como entidade familiar se houver a intenção de constituir família e se houver convivência duradoura e pública.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 60,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Entidade familiar",
    texto: "",
    pergunta: "De acordo com o artigo 226 da Constituição Federal, o casamento religioso tem efeito civil. Além disso, o Estado deve assegurar a união estável entre homem e mulher como entidade familiar. Com base nesse artigo, qual é a única alternativa correta sobre a união estável?",
    alternativaA: "A união estável é uma forma de casamento, com efeitos civis e religiosos.",
    alternativaB: "A união estável é exclusiva entre homens e mulheres, sendo vedada a união estável homoafetiva.",
    alternativaC: "A união estável é uma entidade familiar reconhecida pelo Estado, independente da orientação sexual dos companheiros.",
    alternativaD: "A união estável só é reconhecida como entidade familiar se houver a intenção de constituir família e se houver convivência duradoura e pública.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 78,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "farol desregulado",
    texto: "",
    pergunta: "Francisco de Assis, guarda municipal, estava conduzindo uma viatura da Guarda Municipal para deslocamento não emergencial à Secretaria de Finanças do Município, quando percebeu que o farol estava desregulado. Caso seja parado nessa condição por agentes de trânsito, é possível afirmar que:",
    alternativaA: "O guarda municipal terá a carteira de habilitação cassada.",
    alternativaB: "O guarda municipal será autuado pela prática de infração de trânsito leve.",
    alternativaC: "Como medida administrativa, o veículo será retido para regularização.",
    alternativaD: "O guarda municipal terá a carteira de habilitação suspensa.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 25,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "medidas de proteção",
    texto: "",
    pergunta: "Sobre os Direitos Individuais e Coletivos disciplinados na Constituição da República Federativa do Brasil, assinale a justificativa correta.",
    alternativaA: "Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização ou prévio aviso a autoridade competente.",
    alternativaB: "Ninguém será submetido a tratamento desumano ou degradante, sendo permitida, entretanto, a utilização de tortura em caso de interrogatórios de acusado por crime de perigo comum.",
    alternativaC: "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, inclusive nos casos de transgressão militar...",
    alternativaD: "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito... ou, a qualquer hora, por determinação judicial.",
    alternativaE: "Qualquer cidadão é parte legítima para propor ação popular que vise anular ato lesivo ao meio ambiente, ao patrimônio histórico e cultural...",
    correta: "E"
  },
  {
    numero: 26,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "ato infracional",
    texto: "A Lei nº 10.741/03 instituiu o Estatuto do Idoso. Considerando as disposições do referido Estatuto, analise as afirmativas:\nI. É obrigação da família, da comunidade, da sociedade e do Poder Público assegurar ao idoso, com absoluta prioridade, a efetivação do direito à vida...\nII. Para os efeitos do Estatuto, considera-se violência contra o idoso qualquer ação ou omissão praticada em local público ou privado...\nIII. Para ter acesso à gratuidade dos transportes coletivos, o idoso deverá obrigatoriamente passar por cadastramento em que seja demonstrada a carência econômica.\nIV. Constitui infração administrativa, punível com multa, discriminar pessoa idosa...",
    pergunta: "Estão corretas apenas as afirmativas",
    alternativaA: "I e II.",
    alternativaB: "I e IV.",
    alternativaC: "II e III.",
    alternativaD: "II e IV.",
    alternativaE: "Espanha e IV.",
    correta: "A"
  },
  {
    numero: 27,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "medidas socioeducativas",
    texto: "",
    pergunta: "Nos termos da Lei nº 8.069/90 (Estatuto da Criança e do Adolescente), assinale a alternativa INCORRETA.",
    alternativaA: "Considera-se ato infracional a conduta descrita como crime ou contravenção penal.",
    alternativaB: "É proibida, dentre outros, a venda à criança ou ao adolescente de armas, bebidas alcoólicas, bilhetes lotéricos e equivalentes.",
    alternativaC: "Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente.",
    alternativaD: "É dever de todos velar pela dignidade da criança e do adolescente, pando-os a salvo de qualquer tratamento desumano...",
    alternativaE: "O adolescente apreendido em flagrante de ato infracional será, desde logo, encaminhado à autoridade judiciária competente ou, na falta desta, ao órgão responsável pela Assistência Social.",
    correta: "E"
  },
  {
    numero: 37,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "categoria da CNH",
    texto: "",
    pergunta: "Considerando a distribuição de competências descritas no Código de Trânsito Brasileiro, é INCORRETO afirmar que compete aos órgãos e entidades executivos de trânsito dos Municípios, no âmbito de sua circunscrição,",
    alternativaA: "implantar, manter e operar sistema de estacionamento rotativo pago nas vias.",
    alternativaB: "cumprir e fazer cumprir a legislação e as normas de trânsito, no âmbito de suas atribuições.",
    alternativaC: "implantar, manter e operar o sistema de sinalização, os dispositivos e os equipamentos de controle viário.",
    alternativaD: "planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e ciclistas, ficando a cargo do IBAMA a regulamentação do trânsito de animais.",
    alternativaE: "executar a fiscalização de trânsito, autuar e aplicar as medidas administrativas cabíveis, por infrações de circulação, estacionamento e parada previstas neste Código, no exercício regular do Poder de Polícia de Trânsito.",
    correta: "D"
  },
  {
    numero: 38,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "registro e licenciamento",
    texto: "",
    pergunta: "O Código de Trânsito Brasileiro dispõe que \"a velocidade máxima permitida para a via será indicada por meio de sinalização, obedecidas suas características técnicas e as condições de trânsito\". Entretanto, onde NÃO houver sinalização regulamentadora, a velocidade máxima será de",
    alternativaA: "trinta quilômetros por hora, nas vias locais.",
    alternativaB: "oitenta quilômetros por hora, nas estradas.",
    alternativaC: "quarenta quilômetros por hora, nas vias arteriais.",
    alternativaD: "sessenta quilômetros por hora, nas vias coletoras.",
    alternativaE: "cem quilômetros por hora, nas vias de trânsito rápido.",
    correta: "A"
  },
  {
    numero: 39,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "excesso de velocidade",
    texto: "",
    pergunta: "A Lei nº 10.826/2003, popularmente conhecida como Estatuto do Desarmamento, dispõe sobre registro, posse e comercialização de armas de fogo e munição, dentre outros assuntos. Com base na referida Lei, assinale a alternativa que NÃO retrata uma exceção à regra da proibição do porte de arma de fogo em todo o território nacional.",
    alternativaA: "Os integrantes do quadro efetivo dos agentes e guardas prisionais, os integrantes das escoltas de presos e as guardas portuárias.",
    alternativaB: "Os membros dos Tribunais do Poder Judiciário, dos Ministérios Públicos da União e dos Estados e das Defensorias Públicas da União e dos Estados.",
    alternativaC: "Os integrantes das carreiras de Auditoria da Receita Federal do Brasil e de Auditoria-Fiscal do Trabalho, cargos de Auditor-Fiscal e Analista Tributário.",
    alternativaD: "Os integrantes das guardas municipais das capitais dos Estados e dos Municípios com mais de quinhentos mil habitantes, nas condições estabelecidas em Lei.",
    alternativaE: "Os agentes operacionais da Agência Brasileira de Inteligência e os agentes do Departamento de Segurança do Gabinete de Segurança Institucional da Presidência da República.",
    correta: "B"
  },
  {
    numero: 40,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "estacionamento sobre faixa",
    texto: "De acordo com a Lei nº 12.288/10, que institui o Estatuto da Igualdade Racial, analise as afirmativas:\nI. Para efeito do Estatuto, considera-se \"população negra\" o conjunto de pessoas que se autodeclaram pretas...\nII. Além das normas constitucionais relativas aos princípios fundamentais, aos direitos e garantias fundamentais e aos direitos sociais, econômicos e culturais, o Estatuto adota como diretriz político-jurídica a inclusão das vítimas...\nIII. Constitui um dos objetivos da Política Nacional de Saúde Integral da População Negra a melhoria da qualidade dos sistemas de informação do SUS...",
    pergunta: "Está(ão) correta(s) apenas a(s) afirmativa(s)",
    alternativaA: "I.",
    alternativaB: "II.",
    alternativaC: "I e II.",
    alternativaD: "I e III.",
    alternativaE: "II e III.",
    correta: "E"
  },
  {
    numero: 41,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "uso indevido da buzina",
    texto: "",
    pergunta: "Pode se afirmar, corretamente, como sendo órgãos responsáveis pela Segurança Pública, de acordo com a CRFB:",
    alternativaA: "Polícia Federal, Guarda Civil e Polícia do Exército.",
    alternativaB: "Polícia Federal e Guarda Nacional.",
    alternativaC: "Polícia Rodoviária Federal e Polícia Ferroviária Federal.",
    alternativaD: "Polícia Militar, Guarda Civil e Polícia Civil.",
    alternativaE: "",
    correta: "C"
  },
  {
    numero: 25,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "servidor público eleito vereador",
    texto: "",
    pergunta: "Sobre os Direitos Individuais e Coletivos disciplinados na Constituição da República Federativa do Brasil, assinale a justificativa correta.",
    alternativaA: "Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização ou prévio aviso a autoridade competente.",
    alternativaB: "Ninguém será submetido a tratamento desumano ou degradante, sendo permitida, entretanto, a utilização de tortura em caso de interrogatórios de acusado por crime de perigo comum.",
    alternativaC: "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, inclusive nos casos de transgressão militar...",
    alternativaD: "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito... ou, a qualquer hora, por determinação judicial.",
    alternativaE: "Qualquer cidadão é parte legítima para propor ação popular que vise anular ato lesivo ao meio ambiente, ao patrimônio histórico e cultural...",
    correta: "E"
  },
  {
    numero: 27,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "crimes contra a Administração Pública",
    texto: "",
    pergunta: "Nos termos da Lei nº 8.069/90 (Estatuto da Criança e do Adolescente), assinale a alternativa INCORRETA.",
    alternativaA: "Considera-se ato infracional a conduta descrita como crime ou contravenção penal.",
    alternativaB: "É proibida, dentre outros, a venda à criança ou ao adolescente de armas, bebidas alcoólicas, bilhetes lotéricos e equivalentes.",
    alternativaC: "Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente.",
    alternativaD: "É dever de todos velar pela dignidade da criança e do adolescente, pando-os a salvo de qualquer tratamento desumano...",
    alternativaE: "O adolescente apreendido em flagrante de ato infracional será, desde logo, encaminhado à autoridade judiciária competente ou, na falta desta, ao órgão responsável pela Assistência Social.",
    correta: "E"
  },
  {
    numero: 28,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "habilitação",
    texto: "",
    pergunta: "De acordo com a Lei nº 9.503/97 (Código de Trânsito Brasileiro), no que se refere à competência dos órgãos e entidades executivos de trânsito dos municípios, assinale a alternativa INCORRETA.",
    alternativaA: "Coletar dados estatísticos e elaborar estudos sobre os acidentes de trânsito e suas causas.",
    alternativaB: "Estabelecer, em conjunto com os órgãos de polícia ostensiva de trânsito, as diretrizes para o policiamento ostensivo de trânsito.",
    alternativaC: "Promover e participar de projetos e programas de educação e segurança de trânsito de acordo com as diretrizes do CONTRAN.",
    alternativaD: "Planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e de animais...",
    alternativaE: "Fiscalizar o nível de emissão de poluentes e ruídos produzidos pelos veículos automotores, sendo vedada, entretanto, a participação nas ações específicas de órgão ambiental local.",
    correta: "E"
  },
  {
    numero: 29,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "infrações",
    texto: "Acerca do que dispõe as normas gerais dispostas na Lei Orgânica sobre os serviços públicos municipais, analise as afirmativas (V ou F):\n( ) As obras públicas deverão ser executadas pela Prefeitura, por entidades públicas...\n( ) O município poderá retomar, sem qualquer indenização, os serviços permitidos ou concedidos...\n( ) As tarifas dos serviços públicos deverão ser fixadas pelo Prefeito...\n( ) É vedada a realização, pelo município, de obras e serviços de interesse comum, mediante convênios.",
    pergunta: "A sequência está correta em",
    alternativaA: "F, V, V, F",
    alternativaB: "V, F, F, V",
    alternativaC: "F, F, V, V",
    alternativaD: "V, V, F, F",
    alternativaE: "F, V, F, V",
    correta: "A"
  },
  {
    numero: 30,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "equipamentos sonoros",
    texto: "De acordo com as normas básicas da Lei Orgânica sobre os servidores públicos municipais, analise as afirmativas:\nI. Os cargos públicos serão criados por lei, que fixará sua denominação, padrão de vencimento...\nII. O servidor municipal será civil, criminal e administrativamente responsável pelos atos que praticar...\nIII. Os editais de concurso público deverão prever isonomia de vencimentos entre cargos de atribuições iguais...",
    pergunta: "Está(ão) correta(s) a(s) afirmativa(s)",
    alternativaA: "I, II e III.",
    alternativaB: "II, apenas.",
    alternativaC: "III, apenas.",
    alternativaD: "I e II, apenas.",
    alternativaE: "II e III, apenas.",
    correta: "A"
  },
  {
    numero: 27,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "ECA",
    texto: "",
    pergunta: "Nos termos da Lei nº 8.069/90 (Estatuto da Criança e do Adolescente), assinale a alternativa INCORRETA.",
    alternativaA: "Considera-se ato infracional a conduta descrita como crime ou contravenção penal.",
    alternativaB: "É proibida, dentre outros, a venda à criança ou ao adolescente de armas, bebidas alcoólicas, bilhetes lotéricos e equivalentes.",
    alternativaC: "Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente.",
    alternativaD: "É dever de todos velar pela dignidade da criança e do adolescente, pando-os a salvo de qualquer tratamento desumano...",
    alternativaE: "O adolescente apreendido em flagrante de ato infracional será, desde logo, encaminhado à autoridade judiciária competente ou, na falta desta, ao órgão responsável pela Assistência Social.",
    correta: "E"
  },
  {
    numero: 28,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Competências Municipais",
    texto: "",
    pergunta: "De acordo com a Lei nº 9.503/97 (Código de Trânsito Brasileiro), no que se refere à competência dos órgãos e entidades executivos de trânsito dos municípios, assinale a alternativa INCORRETA.",
    alternativaA: "Coletar dados estatísticos e elaborar estudos sobre os acidentes de trânsito e suas causas.",
    alternativaB: "Estabelecer, em conjunto com os órgãos de polícia ostensiva de trânsito, as diretrizes para o policiamento ostensivo de trânsito.",
    alternativaC: "Promover e participar de projetos e programas de educação e segurança de trânsito de acordo com as diretrizes do CONTRAN.",
    alternativaD: "Planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e de animais...",
    alternativaE: "Fiscalizar o nível de emissão de poluentes e ruídos produzidos pelos veículos automotores, sendo vedada, entretanto, a participação nas ações específicas de órgão ambiental local.",
    correta: "E"
  },
  {
    numero: 31,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Inviolabilidade do Domicílio",
    texto: "",
    pergunta: "A Constituição Federal de 1988 destina título específico à proteção dos Direitos e Garantias Fundamentais, nestes compreendidos a especial proteção à casa, assim considerada como o asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador. Entretanto, o próprio texto constitucional prevê exceções a essa regra. Assinale a alternativa que NÃO indica uma destas exceções.",
    alternativaA: "Desastre.",
    alternativaB: "Flagrante delito.",
    alternativaC: "Prestação de socorro.",
    alternativaD: "Inspeção epidemiológica.",
    alternativaE: "Determinação judicial, apenas durante o dia.",
    correta: "D"
  },
  {
    numero: 34,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "ECA",
    texto: "",
    pergunta: "Sobre o Estatuto da Criança e do Adolescente, Lei nº 8.069/90, assinale a afirmativa correta.",
    alternativaA: "Por se tratar de norma específica, não se aplicam aos crimes definidos no ECA, as normas do Código Penal ou de Processo Penal.",
    alternativaB: "Comete crime aquele que descumprir, dolosa ou culposamente, os deveres inerentes ao poder familiar ou decorrente de tutela ou guarda.",
    alternativaC: "O ECA dispõe apenas sobre os crimes contra criança e adolescente praticados por ação, ficando os crimes por omissão a cargo do Código Penal.",
    alternativaD: "Considera-se infração administrativa, prevista no ECA, hospedar criança ou adolescente desacompanhado dos pais ou responsável, ou sem autorização escrita desses ou da autoridade judiciária, em hotel, pensão, motel ou congênere.",
    alternativaE: "Comete crime, previsto no ECA, o professor de ensino fundamental que deixar de comunicar à autoridade competente os casos de que tenha conhecimento, envolvendo suspeita ou confirmação de maus tratos contra criança ou adolescente.",
    correta: "D"
  },
  {
    numero: 37,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Competências Municipais",
    texto: "",
    pergunta: "Considerando a distribuição de competências descritas no Código de Trânsito Brasileiro, é INCORRETO afirmar que compete aos órgãos e entidades executivos de trânsito dos Municípios, no âmbito de sua circunscrição,",
    alternativaA: "implantar, manter e operar sistema de estacionamento rotativo pago nas vias.",
    alternativaB: "cumprir e fazer cumprir a legislação e as normas de trânsito, no âmbito de suas atribuições.",
    alternativaC: "implantar, manter e operar o sistema de sinalização, os dispositivos e os equipamentos de controle viário.",
    alternativaD: "planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e ciclistas, ficando a cargo do IBAMA a regulamentação do trânsito de animais.",
    alternativaE: "executar a fiscalização de trânsito, autuar e aplicar as medidas administrativas cabíveis, por infrações de circulação, estacionamento e parada previstas neste Código, no exercício regular do Poder de Polícia de Trânsito.",
    correta: "D"
  },
  {
    numero: 38,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Limites de Velocidade",
    texto: "",
    pergunta: "O Código de Trânsito Brasileiro dispõe que \"a velocidade máxima permitida para a via será indicada por meio de sinalização, obedecidas suas características técnicas e as condições de trânsito\". Entretanto, onde NÃO houver sinalização regulamentadora, a velocidade máxima será de",
    alternativaA: "trinta quilômetros por hora, nas vias locais.",
    alternativaB: "oitenta quilômetros por hora, nas estradas.",
    alternativaC: "quarenta quilômetros por hora, nas vias arteriais.",
    alternativaD: "sessenta quilômetros por hora, nas vias coletoras.",
    alternativaE: "eem quilômetros por hora, nas vias de trânsito rápido.",
    correta: "A"
  },
  {
    numero: 40,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lei nº 12.288/2010",
    texto: "De acordo com a Lei nº 12.288/10, que institui o Estatuto da Igualdade Racial, analise as afirmativas:\nI. Para efeito do Estatuto, considera-se \"população negra\" o conjunto de pessoas que se autodeclaram pretas...\nII. Além das normas constitucionais relativas aos princípios fundamentais, aos direitos e garantias fundamentais e aos direitos sociais, econômicos e culturais, o Estatuto adota como diretriz político-jurídica a inclusão das vítimas...\nIII. Constitui um dos objetivos da Política Nacional de Saúde Integral da População Negra a melhoria da qualidade dos sistemas de informação do SUS...",
    pergunta: "Está(ão) correta(s) apenas a(s) afirmativa(s)",
    alternativaA: "I.",
    alternativaB: "II.",
    alternativaC: "I e II.",
    alternativaD: "I e III.",
    alternativaE: "II e III.",
    correta: "E"
  },
  {
    numero: 21,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Direitos e Garantias Fundamentais",
    texto: "",
    pergunta: "Acerca das normas disciplinadoras dos Princípios Fundamentais enumeradas na Constituição da República Federativa do Brasil, assinale a alternativa correta.",
    alternativaA: "A República Federativa do Brasil tem como fundamento, dentre outros, a igualdade entre os Estados.",
    alternativaB: "São Poderes da União, dependentes e harmônicos entre si, o Legislativo, o Executivo e o Tribunal de Contas.",
    alternativaC: "Constituem objetivos fundamentais da República Federativa do Brasil, dentre outros, a dignidade da pessoa humana.",
    alternativaD: "A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina.",
    alternativaE: "A República Federativa do Brasil rege-se nas suas relações internacionais, dentre outros, pelo Princípio do Pluralismo Político.",
    correta: "D"
  },
  {
    numero: 22,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Adoção",
    texto: "De acordo com a Lei nº 10.826/03, que dispõe sobre registro, posse e comercialização de armas de fogo e munição no território nacional, analise as afirmativas (V ou F):\n( ) É proibido o porte de arma de fogo em todo o território nacional, salvo...\n( ) A autorização para o porte de arma de fogo das guardas municipais está condicionada à formação funcional...\n( ) Constitui crime de porte irregular, manter sob sua guarda arma de fogo...\n( ) Disparar arma de fogo em lugar habitado...",
    pergunta: "A sequência está correta em",
    alternativaA: "F, F, V, V",
    alternativaB: "V, V, F, F",
    alternativaC: "V, F, F, V",
    alternativaD: "F, V, V, F",
    alternativaE: "V, F, V, F",
    correta: "B"
  },
  {
    numero: 23,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conceitos e Direitos",
    texto: "",
    pergunta: "Consoante ao que dispõe a Legislação Ambiental a respeito da conservação de recursos naturais e impacto ambiental, assinale a alternativa INCORRETA.",
    alternativaA: "São instrumentos da Política Nacional do Meio Ambiente, dentre outros, a avaliação de impactos ambientais.",
    alternativaB: "A construção, a instalação, a ampliação e o funcionamento de estabelecimentos e atividades utilizadores de recursos ambientais dependerão de prévio licenciamento.",
    alternativaC: "Nos casos de licenciamento ambiental de empreendimentos de significativo impacto ambiental, dispensado em todo caso o estudo de impacto ambiental e respectivo relatório EIA/RIMA...",
    alternativaD: "A ação ou omissão das pessoas físicas ou jurídicas que importem inobservância aos preceitos da legislação ambiental sujeitam os infratores às sanções previstas em lei.",
    alternativaE: "Considera-se conservação da natureza, para fins legais, o manejo do uso humano da natureza...",
    correta: "C"
  },
  {
    numero: 23,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sistema Nacional de Trânsito (CETRAN)",
    texto: "",
    pergunta: "Consoante ao que dispõe a Legislação Ambiental a respeito da conservação de recursos naturais e impacto ambiental, assinale a alternativa INCORRETA.",
    alternativaA: "São instrumentos da Política Nacional do Meio Ambiente, dentre outros, a avaliação de impactos ambientais.",
    alternativaB: "A construção, a instalação, a ampliação e o funcionamento de estabelecimentos e atividades utilizadores de recursos ambientais dependerão de prévio licenciamento.",
    alternativaC: "Nos casos de licenciamento ambiental de empreendimentos de significativo impacto ambiental, dispensado em todo caso o estudo de impacto ambiental e respectivo relatório EIA/RIMA...",
    alternativaD: "A ação ou omissão das pessoas físicas ou jurídicas que importem inobservância aos preceitos da legislação ambiental sujeitam os infratores às sanções previstas em lei.",
    alternativaE: "Considera-se conservação da natureza, para fins legais, o manejo do uso humano da natureza...",
    correta: "C"
  },
  {
    numero: 25,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Regras de Circulação",
    texto: "",
    pergunta: "Sobre os Direitos Individuais e Coletivos disciplinados na Constituição da República Federativa do Brasil, assinale a justificativa correta.",
    alternativaA: "Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização ou prévio aviso a autoridade competente.",
    alternativaB: "Ninguém será submetido a tratamento desumano ou degradante, sendo permitida, entretanto, a utilização de tortura em caso de interrogatórios de acusado por crime de perigo comum.",
    alternativaC: "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, inclusive nos casos de transgressão militar...",
    alternativaD: "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito... ou, a qualquer hora, por determinação judicial.",
    alternativaE: "Qualquer cidadão é parte legítima para propor ação popular que vise anular ato lesivo ao meio ambiente, ao patrimônio histórico e cultural...",
    correta: "E"
  },
  {
    numero: 26,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sinais de Trânsito",
    texto: "A Lei nº 10.741/03 instituiu o Estatuto do Idoso. Considerando as disposições do referido Estatuto, analise as afirmativas:\nI. É obrigação da família, da comunidade, da sociedade e do Poder Público assegurar ao idoso, com absoluta prioridade, a efetivação do direito à vida...\nII. Para os efeitos do Estatuto, considera-se violência contra o idoso qualquer ação ou omissão praticada em local público ou privado...\nIII. Para ter acesso à gratuidade dos transportes coletivos, o idoso deverá obrigatoriamente passar por cadastramento em que seja demonstrada a carência econômica.\nIV. Constitui infração administrativa, punível com multa, discriminar pessoa idosa...",
    pergunta: "Estão corretas apenas as afirmativas",
    alternativaA: "I e II.",
    alternativaB: "I e IV.",
    alternativaC: "II e III.",
    alternativaD: "II e IV.",
    alternativaE: "Espanha e IV.",
    correta: "A"
  },
  {
    numero: 27,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Prazo de Internação Provisória",
    texto: "",
    pergunta: "Nos termos da Lei nº 8.069/90 (Estatuto da Criança e do Adolescente), assinale a alternativa INCORRETA.",
    alternativaA: "Considera-se ato infracional a conduta descrita como crime ou contravenção penal.",
    alternativaB: "É proibida, dentre outros, a venda à criança ou ao adolescente de armas, bebidas alcoólicas, bilhetes lotéricos e equivalentes.",
    alternativaC: "Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente.",
    alternativaD: "É dever de todos velar pela dignidade da criança e do adolescente, pando-os a salvo de qualquer tratamento desumano...",
    alternativaE: "O adolescente apreendido em flagrante de ato infracional será, desde logo, encaminhado à autoridade judiciária competente ou, na falta desta, ao órgão responsável pela Assistência Social.",
    correta: "E"
  },
  {
    numero: 28,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Licenciamento de Veículos",
    texto: "",
    pergunta: "De acordo com a Lei nº 9.503/97 (Código de Trânsito Brasileiro), no que se refere à competência dos órgãos e entidades executivos de trânsito dos municípios, assinale a alternativa INCORRETA.",
    alternativaA: "Coletar dados estatísticos e elaborar estudos sobre os acidentes de trânsito e suas causas.",
    alternativaB: "Estabelecer, em conjunto com os órgãos de polícia ostensiva de trânsito, as diretrizes para o policiamento ostensivo de trânsito.",
    alternativaC: "Promover e participar de projetos e programas de educação e segurança de trânsito de acordo com as diretrizes do CONTRAN.",
    alternativaD: "Planejar, projetar, regulamentar e operar o trânsito de veículos, de pedestres e de animais...",
    alternativaE: "Fiscalizar o nível de emissão de poluentes e ruídos produzidos pelos veículos automotores, sendo vedada, entretanto, a participação nas ações específicas de órgão ambiental local.",
    correta: "E"
  },
  {
    numero: 30,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Medidas Socioeducativas",
    texto: "De acordo com as normas básicas da Lei Orgânica sobre os servidores públicos municipais, analise as afirmativas:\nI. Os cargos públicos serão criados por lei, que fixará sua denominação, padrão de vencimento...\nII. O servidor municipal será civil, criminal e administrativamente responsável pelos atos que praticar...\nIII. Os editais de concurso público deverão prever isonomia de vencimentos entre cargos de atribuições iguais...",
    pergunta: "Está(ão) correta(s) a(s) afirmativa(s)",
    alternativaA: "I, II e III.",
    alternativaB: "II, apenas.",
    alternativaC: "III, apenas.",
    alternativaD: "I e II, apenas.",
    alternativaE: "II e III, apenas.",
    correta: "A"
  },
  {
    numero: 21,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Conhecimento Específico da Guarda",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Produtos e Serviços",
    texto: "",
    pergunta: "Acerca das normas disciplinadoras dos Princípios Fundamentais enumeradas na Constituição da República Federativa do Brasil, assinale a alternativa correta.",
    alternativaA: "A República Federativa do Brasil tem como fundamento, dentre outros, a igualdade entre os Estados.",
    alternativaB: "São Poderes da União, dependentes e harmônicos entre si, o Legislativo, o Executivo e o Tribunal de Contas.",
    alternativaC: "Constituem objetivos fundamentais da República Federativa do Brasil, dentre outros, a dignidade da pessoa humana.",
    alternativaD: "A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina.",
    alternativaE: "A República Federativa do Brasil rege-se nas suas relações internacionais, dentre outros, pelo Princípio do Pluralismo Político.",
    correta: "D"
  },
  /*Questões de pportuguês*/
  {
    numero: 1,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Modalizadores Discursivos / Tipos de Modalização",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "Os modalizadores discursivos são elementos linguísticos que expressam a atitude do falante em relação ao conteúdo do seu discurso. Assim sendo, no excerto a seguir, o emprego da estrutura oracional demarcada atribui ao contexto discursivo uma modalização do tipo: \"Acredito que essa reação ocorreu por ainda existir nele o fogo da juventude [...]\"",
    alternativaA: "volitiva.",
    alternativaB: "deôntica.",
    alternativaC: "afetiva intersubjetiva.",
    alternativaD: "epistêmica asseverativa.",
    alternativaE: "epistêmica quase-asseverativa.",
    correta: "E"
  },
  {
    numero: 2,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Morfossintaxe / Advérbios e Dêixis",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "Analise o emprego dos advérbios realçados no fragmento que segue, de modo a marcar o item correto: \"Outro dia saí com uma amiga psicóloga, e nossos encontros sempre rendem bons papos. Um chope aqui¹, um petisco ali², e a conversa vai rendendo. Tal hora lhe perguntei qual assunto era mais tratado no seu divã.\"",
    alternativaA: "1 e 2 são dêiticos.",
    alternativaB: "1 e 2 são anafóricos.",
    alternativaC: "1 e 2 são catafóricos.",
    alternativaD: "1 é dêitico; 2, catafórico.",
    alternativaE: "1 é anafórico; 2, catafórico.",
    correta: "A"
  },
  {
    numero: 3,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Morfologia / Classes de Palavras",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "As classes de palavras ou classes gramaticais são grupos de palavras que são classificados de acordo com suas funções na língua portuguesa. Assim sendo, aponte a alternativa seguinte em que o vocábulo destacado tenha sido empregado conforme sua tipificação entre parênteses.",
    alternativaA: "\"Outro dia saí com uma amiga psicóloga [...]\" (adjetivo).",
    alternativaB: "\"Que mal os heróis infalíveis de nossa infância cometeriam [...]\" (advérbio).",
    alternativaC: "\"[...] mas esse assunto me saiu como uma bela epifania.\" (substantivo).",
    alternativaD: "\"[...] resolvi folhear uma que estava no meio de cestos de revistas e não vi graça.\" (numeral).",
    alternativaE: "\"[...] conseguem imaginar as paredes de um banheiro pintadas com as personagens da Turma da Mônica? Assim era o lá de casa\" (conjunção).",
    correta: "C"
  },
  {
    numero: 4,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Sintaxe / Regência Verbal e Complementos",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "Sobre a regência do verbo ressaltado, no contexto do período que segue, é verdadeiro afirmar que: \"Tal hora lhe perguntei qual assunto era mais tratado no seu divã.\"",
    alternativaA: "é transitiva indireta, cujo objeto indireto é o termo \"lhe\", pronome oblíquo passível dessa função integrante.",
    alternativaB: "é intransitiva, pois apresenta autossuficiência sintático-semântica; não sendo, portanto, necessária a presença de complementos.",
    alternativaC: "é transitiva direta, em que o objeto direto se trata do termo \"assunto\", pois, nesse contexto, quem perguntou, perguntou algo.",
    alternativaD: "é bitransitiva, em que o objeto direto se trata da oração \"qual assunto era mais tratado no seu divã\", e o objeto indireto é o pronome oblíquo \"lhe\".",
    alternativaE: "é bitransitiva, cujos complementos verbais são, respectivamente, a oração \"qual assunto era mais tratado\" (objeto direto) e a expressão \"no seu divã\" (objeto indireto)...",
    correta: "D"
  },
  {
    numero: 5,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Sintaxe / Vozes Verbais (Voz Passiva Analítica)",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "\"Outro dia, enquanto aguardava ser atendido em um consultório médico [...]\" A partir da estrutura oracional do trecho demarcado no período anterior, é verdadeiro o que se descreve no item:",
    alternativaA: "A estrutura é ativa, com sujeito agente no contexto discursivo.",
    alternativaB: "A estrutura é ativa, com sujeito paciente no contexto discursivo.",
    alternativaC: "A estrutura é passiva analítica, com agente da passiva explícito no contexto discursivo.",
    alternativaD: "A estrutura é passiva analítica, com agente da passiva implícito no contexto discursivo.",
    alternativaE: "A estrutura é passiva sintética, com agente da passiva explícito no contexto discursivo.",
    correta: "D"
  },
  {
    numero: 6,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Morfossegmentação / Função das Palavras \"que\"",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "Em \"Sei que¹ muitos que² estão lendo essa crônica não têm ou tiveram relações tão agradáveis com seus genitores\", os termos enumerados foram empregados como",
    alternativaA: "pronome relativo em 1 e em 2.",
    alternativaB: "conjunção integrante em 1 e em 2.",
    alternativaC: "preposição em 1 e como conjunção subordinativa em 2.",
    alternativaD: "conjunção integrante em 1 e como pronome relativo em 2.",
    alternativaE: "pronome relativo em 1 e como conjunção integrante em 2.",
    correta: "D"
  },
  {
    numero: 7,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Ortografia / Novo Acordo Ortográfico (Hifenização)",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "\"[...] atribuo a eles eu ter uma boa autoestima.\" Assim como em autoestima, há um vocábulo demarcado, formado corretamente sem auxílio de hifenização, em:",
    alternativaA: "O parlamento decidiu abrogar a lei antiga sobre impostos.",
    alternativaB: "As diferenças interregionais não podem acarretar xenofobia.",
    alternativaC: "O panamericanismo visava à união política e cultural das Américas.",
    alternativaD: "Afroestadunidense refere-se a cidadãos dos Estados Unidos que têm ascendência africana.",
    alternativaE: "A Contrarreforma foi o movimento da Igreja Católica em resposta à Reforma Protestante do século XVI.",
    correta: "E"
  },
  {
    numero: 8,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Morfologia / Tempos Compostos do Indicativo",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "A formação do tempo verbal composto destacado a seguir se refere ao: \"[...] também nunca tinha parado para pensar a respeito [...]\"",
    alternativaA: "infinitivo pessoal composto.",
    alternativaB: "pretérito perfeito composto do indicativo.",
    alternativaC: "futuro do pretérito composto do indicativo.",
    alternativaD: "pretérito mais-que-perfeito composto do indicativo.",
    alternativaE: "pretérito mais-que-perfeito composto do subjuntivo.",
    correta: "D"
  },
  {
    numero: 9,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Sintaxe / Colocação Pronominal e Norma-Padrão",
    texto: "QUANDO SE PERDOA AOS PAIS (Alan, Victor. Qual o nome de sua saudade? Belo Horizonte: Editora Epopeia, 2025). Texto reflexivo sobre a relação entre filhos e pais, o amadurecimento, o perdão e o reconhecimento dos pais como seres humanos falhos.",
    pergunta: "\"Ao vê-los envelhecendo, ela me deu a capacidade de colocá-los em certos lugares [...]\" A estrutura sintática destacada, na passagem anterior, refere-se à sintaxe de colocação pronominal, que analisa a correta posição dos pronomes átonos em relação ao verbo e à regência dos enunciados. Desse modo, aponte o item correto cuja estrutura sintática oracional tenha respeitado as regras da norma-padrão da língua portuguesa.",
    alternativaA: "Fi-lo porque qui-lo.",
    alternativaB: "Fi-lo porque lo quis.",
    alternativaC: "Fi-lo porque mo quis.",
    alternativaD: "Fi-lo porque quis-lhe.",
    alternativaE: "Fi-lo porque quis a mim.",
    correta: "B"
  },
  {
    numero: 10,
    ano: 2025,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Patos/PB",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Morfossintaxe / Classe e Função do Vocábulo \"Como\"",
    texto: "COMO NOSSOS PAIS (Belchior, A. C., 1976). Letra de música que reflete sobre a repetição de comportamentos e a relação entre gerações.",
    pergunta: "O termo \"como\", em \"como os nossos pais\", no contexto discursivo da letra de canção em evidência, trata-se de um(a)",
    alternativaA: "pronome, pois tem função referencial anafórica.",
    alternativaB: "substantivo, pois está sendo determinado por um artigo definido.",
    alternativaC: "advérbio, pois foi empregado circunstanciando o modo como se vive.",
    alternativaD: "preposição, pois relaciona dois termos, indicando a condição na qual se vive.",
    alternativaE: "conjunção, pois liga orações, estabelecendo relações de sentido entre elas.",
    correta: "E"
  },
  {
    numero: 11,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação textual e conflito gerador",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "O conflito gerador é o elemento estrutural da narrativa o qual se trata da quebra da harmonia característica, principalmente, da situação inicial de enredos lineares. Assim sendo, o conflito do texto em análise gira em torno",
    alternativaA: "da reforma agrária tão almejada pelo protagonista.",
    alternativaB: "dos desejos do protagonista em arranjar um emprego e constituir uma família.",
    alternativaC: "da forma a qual o protagonista detalha seus dissabores, denominados de provocações.",
    alternativaD: "dos infortúnios pelos quais o protagonista passou a vida inteira, descritos pelo narrador como provocações.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 12,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Formação de palavras: derivação prefixal",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "Em “Queria um emprego, só conseguiu um subemprego.” A palavra subemprego é formada por",
    alternativaA: "derivação prefixal.",
    alternativaB: "composição justaposta.",
    alternativaC: "composição aglutinada.",
    alternativaD: "derivação parassintética.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 13,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Classes gramaticais",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "A partir da definição de classe de palavra como sendo uma categorização que considera as funções morfológicas dos vocábulos, analise a correlação termo sublinhado / função entre parênteses para marcar o item correto.",
    alternativaA: "“A segunda provocação foi a alimentação que lhe deram...” (conjunção).",
    alternativaB: "“...mesmo os que nascem em maternidade.” (pronome).",
    alternativaC: "“Foram lhe provocando por toda a vida.” (adjetivo).",
    alternativaD: "“Mas aí lhe tiraram a roça. (interjeição).",
    alternativaE: "não tem essa alternativa",
    correta: "ANULADA"
  },
  {
    numero: 14,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Ortografia e uso do prefixo sub-",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "“Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos.” Tendo por base o vocábulo subnutrido, a ausência de hifenização está correta na palavra destacada na alternativa",
    alternativaA: "O panafricanismo é um movimento de caráter social.",
    alternativaB: "O ultra som atestou uma gravidez de gêmeos.",
    alternativaC: "A lei sancionada rapidamente foi abrogada.",
    alternativaD: "Ele foi o coautor do livro.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 15,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Colocação pronominal",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "“Se animou. Se mobilizou.” Sobre a colocação do pronome átono, no trecho entre aspas, é correto afirmar que",
    alternativaA: "está conforme o uso das regras da ênclise.",
    alternativaB: "está conforme o uso das regras da próclise.",
    alternativaC: "está em desacordo com as regras da ênclise.",
    alternativaD: "está em desacordo com as regras da próclise.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 16,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Regência verbal",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "A regência verbal trata-se da relação que se estabelece entre os verbos e os termos que os complementam ou os circunstanciam. Tendo por base essa definição, marque o item que traz uma informação correta sobre essa relação.",
    alternativaA: "“...mesmo os que nascem em maternidade.” (O verbo nascer é transitivo indireto; e o termo em maternidade, seu objeto indireto).",
    alternativaB: "“Outra provocação foi perder a metade dos seus dez irmãos.” (O verbo perder é bitransitivo; e os termos a metade e dos seus dez irmãos, seus objetos.)",
    alternativaC: "“Não gostou nada daquilo” (O verbo gostar é transitivo direto; e o termo nada, seu objeto direto).",
    alternativaD: "“Parece que a ideia era lhe dar uma terrinha.” (O verbo dar é bitransitivo; e os termos lhe e uma terrinha seus objetos.)",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 17,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Orações subordinadas",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "Partindo da definição de que orações subordinadas são aquelas que dependem de outras orações no período e que não têm sentido completo isoladas, aponte a alternativa em que há uma oração subordinada destacada cuja classificação se encontra correta entre parênteses.",
    alternativaA: "“Depois perder o barraco, que estava onde não podia estar.” (subordinada adverbial causal)",
    alternativaB: "“Parece que a ideia era lhe dar uma terrinha”. (subordinada subjetiva completiva nominal)",
    alternativaC: "“Concluiu que era provocação.” (subordinada substantiva objetiva direta)",
    alternativaD: "“Aí ouviu que a reforma agrária não era bem assim.” (subordinada substantiva predicativa)",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 18,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Tempos verbais",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "No trecho “Em ter a terra que nunca tivera”, o verbo destacado está no",
    alternativaA: "pretérito perfeito do indicativo.",
    alternativaB: "pretérito mais-que-perfeito do indicativo.",
    alternativaC: "pretérito imperfeito do indicativo.",
    alternativaD: "pretérito imperfeito do subjuntivo.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 19,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Concordância nominal",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "Assim como em “...aparado só pelo chão, a concordância nominal se faz corretamente no item",
    alternativaA: "Eu quero ficar a sós.",
    alternativaB: "Eu quero ficar sós.",
    alternativaC: "Eu quero ficar a só.",
    alternativaD: "Nós queremos ficar a só.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 20,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Acentuação gráfica",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "“Parece que a ideia era lhe dar uma terrinha.” Da mesma forma que no vocábulo ideia, o acento gráfico caiu em desuso na palavra.",
    alternativaA: "heroi.",
    alternativaB: "chapeu.",
    alternativaC: "heroico.",
    alternativaD: "coroneis.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 21,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Gênero dos substantivos",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "Da mesma maneira que a palavra toca na passagem “E não como ele, numa toca”, há um substantivo corretamente flexionado no feminino na alternativa",
    alternativaA: "a tomate.",
    alternativaB: "a cônjuge.",
    alternativaC: "a anátema.",
    alternativaD: "a comichão.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 22,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Regência nominal",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "Ao substituir o trecho sublinhado em “...ajudados por especialistas.”, a sintaxe de concordância também atende à norma-padrão em",
    alternativaA: "Alheio a especialistas.",
    alternativaB: "Grato de especialistas.",
    alternativaC: "Perito sobre especialistas.",
    alternativaD: "Próximo com especialistas.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 23,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Coesão textual: anáfora e catáfora",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "Analise o trecho a seguir para marcar a alternativa correta. “A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês¹ fazem assim, mesmo os² que nascem em maternidade, ajudados por especialistas.”",
    alternativaA: "O termo destacado em 1 trata-se de um elemento anafórico.",
    alternativaB: "O termo destacado em 1 é substituído anaforicamente em 2.",
    alternativaC: "O termo destacado em 2 trata-se de um pronome catafórico.",
    alternativaD: "O termo destacado em 1 é substituído cataforicamente em 2.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 24,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontuação e oração subordinada adjetiva",
    texto: "PROVOCAÇÕES CONHECIMENTOS COMUNS A primeira provocação ele aguentou calado. Na verdade, gritou e esperneou. Mas todos os bebês fazem assim, mesmo os que nascem em maternidade, ajudados por especialistas. E não como ele, numa toca, aparado só pelo chão. A segunda provocação foi a alimentação que lhe deram, depois do leite da mãe. Uma porcaria. Não reclamou porque não era disso. Outra provocação foi perder a metade dos seus dez irmãos, por doença e falta de atendimento. Não gostou nada daquilo. Mas ficou firme. Era de boa paz. Foram lhe provocando por toda a vida. Não pode ir à escola porque tinha que ajudar na roça. Tudo bem, gostava da roça. Mas aí lhe tiraram a roça. Na cidade, para onde teve que ir com a família, era provocação de tudo que era lado. Resistiu a todas. Morar em barraco. Depois perder o barraco, que estava onde não podia estar. Ir para um barraco pior. Ficou firme. Queria um emprego, só conseguiu um subemprego. Queria casar, conseguiu uma submulher. Tiveram subfilhos. Subnutridos. Para conseguir ajuda, só entrando em fila. E a ajuda não ajudava. Estavam lhe provocando. Gostava da roça. O negócio dele era a roça. Queria voltar pra roça. Ouvira falar de uma tal reforma agrária. Não sabia bem o que era. Parece que a ideia era lhe dar uma terrinha. Se não era outra provocação, era uma boa. Terra era o que não faltava. Passou anos ouvindo falar em reforma agrária. Em voltar à terra. Em ter a terra que nunca tivera. Amanhã. No próximo ano. No próximo governo. Concluiu que era provocação. Mais uma. Finalmente ouviu dizer que dessa vez a reforma agrária vinha mesmo. Para valer. Garantida. Se animou. Se mobilizou. Pegou a enxada e foi brigar pelo que pudesse conseguir. Estava disposto a aceitar qualquer coisa. Só não estava mais disposto a aceitar provocação. Aí ouviu que a reforma agrária não era bem assim. Talvez amanhã. Talvez no próximo ano. Então, protestou. Na décima milésima provocação, reagiu. E ouviu espantado, as pessoas dizerem, horrorizadas com ele: – Violência, não! Luís Fernando Veríssimo",
    pergunta: "Em “Depois perder o barraco, que estava onde não podia estar”, o uso obrigatório da vírgula se faz em decorrência do trecho negritado ter caráter",
    alternativaA: "restritivo.",
    alternativaB: "resumidor.",
    alternativaC: "explicativo.",
    alternativaD: "enumerador.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 25,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Acentuação gráfica – regra do hiato",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "1. Assinale a alternativa em que a palavra indicada tenha sido acentuada seguindo a mesma regra que Paraíba (linha 10).",
    alternativaA: "índice (linha 6)",
    alternativaB: "período (linha 9)",
    alternativaC: "país (linha 12)",
    alternativaD: "veículos (linha 28)",
    alternativaE: "não tem essa alternativa",
    correta: "Nula"
  },
  {
    numero: 26,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação e inferência textual",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "2. Em relação à leitura do texto e as inferências que podem ser feitas, analise as afirmativas a seguir:\nI. Embora tenha havido uma queda no volume de vendas na Paraíba, no período analisado, o Estado arrecadou mais impostos.\nII. Comparando-se os resultados de setembro, em relação ao mês anterior, o desempenho paraibano ficou acima da média nacional, o que fez o estado ter um saldo positivo na receita.\nIII. Somente o setor varejista ampliado paraibano teve resultado positivo durante todo o ano, destacando-se como o único comércio que obteve lucros nos últimos doze meses.\nAssinale",
    alternativaA: "se apenas a afirmativa I estiver correta.",
    alternativaB: "se apenas a afirmativa II estiver correta.",
    alternativaC: "se apenas a afirmativa III estiver correta.",
    alternativaD: "se todas as afirmativas estiverem corretas.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 27,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Classes gramaticais – adjetivo",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "3. Assinale a alternativa em que, no texto, a palavra desempenhe papel adjetivo.",
    alternativaA: "alta (linha 10)",
    alternativaB: "outro (linha 17)",
    alternativaC: "indicador (linha 26)",
    alternativaD: "construção (linha 29)",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 28,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontuação – uso dos parênteses",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "4. O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). (linhas 1 a 8)\nEm relação ao período acima e sua composição, analise as afirmativas a seguir:\nI. Todos os parênteses introduzem uma informação de mesma natureza em relação ao elemento anterior.\nII. Em relação aos percentuais, houve uma preocupação em mantê-los seguindo o mesmo padrão de apresentação da informação.\nIII. Em somente uma ocorrência do par de parênteses se apresentou uma informação de caráter textual. Nas demais, a informação tem natureza extratextual.\nAssinale",
    alternativaA: "se apenas a afirmativa I estiver correta.",
    alternativaB: "se apenas a afirmativa II estiver correta.",
    alternativaC: "se apenas a afirmativa III estiver correta.",
    alternativaD: "se todas as afirmativas estiverem corretas.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 29,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conjunções – valor semântico",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "5. Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. (linhas 17 a 19)\nO elemento sublinhado no período acima apresenta sentido de",
    alternativaA: "tempo.",
    alternativaB: "finalidade.",
    alternativaC: "concessão.",
    alternativaD: "oposição.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 30,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pronomes/dêixis",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "6. Assinale a alternativa em que o palavra indicada desempenhe, no texto, papel dêitico.",
    alternativaA: "índice (linha 6)",
    alternativaB: "período (linha 9)",
    alternativaC: "Este (linha 20)",
    alternativaD: "ambos (linha 31)",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 31,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica – linguagem denotativa",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "7. Em recortes (linha 24), ocorre exemplo de linguagem",
    alternativaA: "denotativa.",
    alternativaB: "conotativa.",
    alternativaC: "hiperbólica.",
    alternativaD: "antitética.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 32,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfologia – artigos",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "8. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. (linhas 34 a 36)\nNo período acima, há quantos artigos?",
    alternativaA: "Três.",
    alternativaB: "Quatro.",
    alternativaC: "Cinco.",
    alternativaD: "Seis.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 33,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Regência verbal e crase",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "9. O índice estadual contrasta com a média nacional... (linhas 6 e 7)\nAssinale a alternativa em que, alterando-se a redação do segmento acima, independentemente da mudança de sentido provocada, tenha-se mantido a correção gramatical.",
    alternativaA: "O índice estadual visa a média nacional...",
    alternativaB: "O índice estadual almeja à média nacional...",
    alternativaC: "O índice estadual aspira a média nacional...",
    alternativaD: "O índice estadual alude à média nacional...",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 34,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontuação – adjunto adverbial deslocado",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "10.Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. (linhas 12 e 13)\nNo período acima, a vírgula está corretamente empregada por qual razão?",
    alternativaA: "Isola o vocativo do restante do período.",
    alternativaB: "Marca a divisão de termos de uma enumeração.",
    alternativaC: "Antecede um termo explicativo.",
    alternativaD: "Trata-se de elemento adverbial deslocado.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 35,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica – homônimos",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "11.Na linha 31, a palavra receita apresenta um sentido definido. Entretanto, em outros contextos pode trazer sentidos diversos. No caso, é correto afirmar que, com as diferentes palavras receita, ocorre exemplo de",
    alternativaA: "parônimos.",
    alternativaB: "homônimos homógrafos e homófonos.",
    alternativaC: "homônimos homógrafos não homófonos.",
    alternativaD: "homônimos homófonos não homógrafos.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 36,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Concordância verbal – haver",
    texto: "Paraíba registra queda no volume de vendas do comércio varejista, diz IBGE O volume de vendas do comércio varejista paraibano apresentou a 3ª menor variação do país no acumulado em 12 meses (–0,7%), segundo a Pesquisa Mensal do Comércio (PMC) referente a setembro, divulgada nesta quinta-feira (11) pelo Instituto Brasileiro de Geografia e Estatística (IBGE). O índice estadual contrasta com a média nacional, que aponta para um saldo positivo (3,9%). No mesmo período, a receita nominal do setor da Paraíba, embora tenha tido alta de 9,7%, registrou também a 3ª menor variação do Brasil, inferior à média do país (15,1%). Em ambos os casos, os indicadores paraibanos foram os menores do Nordeste. Já frente aos resultados de agosto deste ano, o volume de vendas paraibano teve retração de 1,4% em setembro, próxima à observada na média do Brasil (– 1,3%). Por outro lado, foi verificado um crescimento de 0,6% na receita do estado, enquanto no cenário nacional houve redução de 0,2%. Este ano, até o mês pesquisado, o volume brasileiro de vendas do comércio varejista apresentou expansão de 3,8%, no comparativo com o mesmo período de 2020, ao passo que o paraibano teve queda de 1,1%. Contudo, nos dois recortes territoriais, o saldo da receita foi positivo, de 16,3% e 10,4%, respectivamente, embora o indicador da Paraíba tenha sido o 3º menor do Brasil. No comércio varejista ampliado paraibano – que inclui as atividades de veículos, motos, partes e peças e de material de construção –, foram observadas variações positivas no acumulado de 12 meses, tanto no volume de vendas (6,1%), como na receita (16,9%). Em ambos os casos, porém, os resultados do estado foram inferiores às médias nacionais, de 7% e 19%, respectivamente. Na comparação dos resultados de setembro com os de agosto, houve redução de 0,2% no volume estadual e de 1,1% no nacional. Entretanto, as receitas dos setores aumentaram 0,8% e 0,3%, respectivamente. (Jornal da Paraíba, 11/11/2021.)",
    pergunta: "12....enquanto no cenário nacional houve redução de 0,2%. (linhas 18 e 19)\nAssinale a alternativa em que, alterando-se a redação do segmento acima, manteve-se a correção gramatical. Ignore possível alteração de sentido.",
    alternativaA: "...enquanto no cenário nacional houveram reduções de percentual.",
    alternativaB: "...enquanto no cenário nacional deviam haver reduções de percentual.",
    alternativaC: "...enquanto no cenário nacional há de haver reduções de percentual.",
    alternativaD: "...enquanto no cenário nacional poderão haver reduções de percentual.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 37,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação de texto e inferências",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada. Apesar de ter completado o percurso outras vezes, aquele dia foi diferente: o animal deixou tudo melhor. O que quase nenhum dos trilheiros nota, no entanto, é a presença de árvores, arbustos e pequenas plantas, muitas vezes igualmente raras, tão (ou mais?) importantes quanto os animais, e com propriedades diferentes e interessantes. É o que chamamos de cegueira botânica. Ao vermos um animal em seu ambiente natural, cercado de plantas, nosso cérebro o destaca, porém transforma as plantas em uma massa verde amorfa. É compreensível: nos conectamos facilmente com o comportamento animal, enquanto os vegetais, com seu crescimento lento, movimentos pouco perceptíveis e organização corporal muito diferente, parecem quase alienígenas. O diretor Steven Spielberg, em conversa com o astrofísico Neil deGrasse Tyson, diz ter pensado o personagem E.T. como planta, mas acabou fazendo alterações para gerar empatia, tornando-o mais parecido conosco. Plantas têm uma intrincada relação com a história da humanidade. No livro Plantas e civilização , o biólogo Luiz Mors Cabral, professor da Universidade Federal Fluminense, relata como elas participaram de alguns eventos históricos. A descoberta do rio Amazonas (pelos europeus, pois os povos nativos o conheciam havia tempos) ocorreu porque exploradores buscavam valiosas “árvores de canela”, embora essas plantas não existissem na América do Sul (havia apenas uma cujo casco cheirava a canela). No século 19, a massiva migração da Irlanda, em especial para os Estados Unidos – não à toa Boston tem uma das maiores festas de St. Patrick’s Day do mundo, e o time de basquete da cidade é o Celtics –, foi motivada por uma doença nas batatas, tubérculo então crucial para a alimentação dos irlandeses. Já em Sob o efeito das plantas, Michael Pollan sugere que o café – a cafeína, especificamente, nosso vício quase universal – pode ter acelerado o Iluminismo e o desenvolvimento da ciência moderna. Como água potável era difícil de armazenar sem ser logo contaminada, consumia-se cerveja e vinho, pois o álcool impedia o crescimento de bactérias. O efeito adverso era a dificuldade em enfrentar um dia de trabalho e estar bem hidratado. O hábito do café, bebida fervida (e, portanto, estéril) ofereceu uma alternativa, com a vantagem de aumentar a energia e o foco, e sobretudo manter os indivíduos sóbrios. Talvez não por acaso os coffee shops britânicos eram locais onde vários expoentes intelectuais da época se encontravam para discutir ideias que contribuíram para o Iluminismo. A relação das plantas com os seres humanos é ainda mais profunda. Quando éramos caçadores-coletores, comíamos carne de animais de caça, raízes, frutos e grãos em uma dieta variada. Há cerca de 10 mil anos, passamos a guardar alguns grãos e os plantamos perto do acampamento, para facilitar a colheita. Logo estávamos selecionando sementes das plantas que produziam mais. Iniciamos assim a Revolução Agrícola, e nos tornamos agricultores. Como explica Yuval Noah Harari no livro Sapiens, a domesticação de algumas plantas permitiu que alimentássemos um número maior de pessoas, ainda que com uma nutrição mais restrita. Enquanto modificávamos plantas de trigo, milho, arroz, batata, tomate, ervilha, feijão – até que produzimos novas espécies, agora dependentes de nós, e nós delas –, criamos vilarejos e posteriormente cidades. A domesticação de plantas ocorreu entre 10 mil e 3 mil anos atrás, e hoje são os vegetais que sustentam nossa segurança alimentar. Como sabemos, a fotossíntese, também realizada por organismos de célula única na superfície dos oceanos, é a marca registrada dos vegetais. Ela captura energia do Sol e a armazena em ligações entre átomos de carbono, derivados do CO2 atmosférico. A energia armazenada é depois utilizada pelas próprias plantas para sustentar seu funcionamento e crescimento. Os animais, por sua vez, como não fazem fotossíntese, precisam “roubar” energia. Se esse mecanismo de captura de energia solar parasse de funcionar, a vida multicelular não sobreviveria – nós próprios, os humanos, inclusos. A fotossíntese também produz como subproduto oxigênio (O2), essencial para grande parte da vida na Terra. Na verdade, quando esse tipo de fotossíntese surgiu na Terra, há cerca de 2 bilhões de anos, os organismos que a utilizavam foram tão bem-sucedidos que se multiplicaram rapidamente, causando um excesso de O2 na atmosfera. O acúmulo levou à extinção em massa, e apenas aqueles organismos que sabiam lidar com o O2 sobreviveram. Ou seja, o Grande Evento de Oxidação mudou a história evolutiva, e sem ele talvez nós, que dependemos de oxigênio, não estivéssemos aqui. As plantas estão no centro de uma das principais questões que ameaçam a mesma civilização que ajudaram a criar. As mudanças climáticas são em grande parte causadas pelo uso massivo de combustíveis fósseis. A origem deles? Fotossíntese antiga. Estamos devolvendo rapidamente para a atmosfera o CO2 capturado na biosfera ao longo de milhões de anos, causando aumento da temperatura do planeta.",
    pergunta: "Com base na leitura e nas inferências do texto, analise as afirmativas a seguir:\nI. As plantas, ao longo dos anos, contribuíram mais para satisfazer a necessidade de alimentar a humanidade que os animais.\nII. A fotossíntese realizada pelas plantas e organismos unicelulares sempre foi fator de possibilitar a sobrevivência no planeta.\nIII. Não se pode deixar de incluir as plantas nos programas de bem-estar ambiental, buscando o aumento de árvores que contribuam para a redução de CO2 no ambiente.",
    alternativaA: "se apenas as afirmativas I e II estiverem corretas.",
    alternativaB: "se apenas as afirmativas I e III estiverem corretas.",
    alternativaC: "se apenas as afirmativas II e III estiverem corretas.",
    alternativaD: "se as afirmativas I, II e III estiverem corretas.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 38,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pronomes: referência e função",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada. (linhas 1 e 2) O pronome sublinhado no período acima desempenha papel",
    alternativaA: "anafórico.",
    alternativaB: "catafórico.",
    alternativaC: "dêitico.",
    alternativaD: "exofórico.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 39,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Relações de sentido e pontuação",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "Apesar de ter completado o percurso outras vezes, aquele dia foi diferente: o animal deixou tudo melhor. (linha 2) O segmento sublinhado no período acima, em relação ao que se localiza anteriormente aos dois-pontos, apresenta sentido",
    alternativaA: "enumerativo.",
    alternativaB: "especificativo.",
    alternativaC: "exemplificativo.",
    alternativaD: "explicativo.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 40,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica e significado vocabular",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "Por “intrincada” (linha 12), só não se pode entender, no texto,",
    alternativaA: "entrelaçada.",
    alternativaB: "emaranhada.",
    alternativaC: "embaraçada.",
    alternativaD: "destrinçada.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 41,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Funções sintáticas",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "Plantas têm uma intrincada relação com a história da humanidade. No livro Plantas e civilização [1], o biólogo Luiz Mors Cabral [2], professor da Universidade Federal Fluminense [3], relata como elas participaram de alguns eventos históricos. A descoberta do rio Amazonas [4] (pelos europeus, pois os povos nativos o conheciam havia tempos) ocorreu porque exploradores buscavam valiosas “árvores de canela”, embora essas plantas não existissem na América do Sul (havia apenas uma cujo casco cheirava a canela). (linhas 12 a 16)\nNo período acima, há quatro termos sublinhados e numerados. Assinale a alternativa em que esteja indicado um termo com função sintática distinta da dos demais.",
    alternativaA: "[1]",
    alternativaB: "[2]",
    alternativaC: "[3]",
    alternativaD: "[4]",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 42,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Ortografia: prefixos e composição",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "Na verdade, quando esse tipo de fotossíntese surgiu na Terra, há cerca de 2 bilhões de anos, os organismos que a utilizavam foram tão bem-sucedidos que se multiplicaram rapidamente, causando um excesso de O2 na atmosfera. (linhas 40 a 42)\nAssinale a alternativa com a grafia correta do contrário da palavra sublinhada no período acima.",
    alternativaA: "malsucedidos",
    alternativaB: "mal sucedidos",
    alternativaC: "mal-sucedidos",
    alternativaD: "mau-sucedidos",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 43,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontuação",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "Já em Sob o efeito das plantas, Michael Pollan sugere que o café – a cafeína, especificamente, nosso vício quase universal – pode ter acelerado o Iluminismo e o desenvolvimento da ciência moderna. (linhas 19 e 20)\nAssinale a alternativa em que a alteração da pontuação do período acima tenha sido feita obedecendo à norma culta.",
    alternativaA: "Já em Sob o efeito das plantas, Michael Pollan sugere que o café, a cafeína, especificamente, nosso vício quase universal, pode ter acelerado o Iluminismo e o desenvolvimento da ciência moderna.",
    alternativaB: "Já em Sob o efeito das plantas, Michael Pollan sugere que o café, a cafeína, especificamente – nosso vício quase universal, pode ter acelerado o Iluminismo e o desenvolvimento da ciência moderna.",
    alternativaC: "Já em Sob o efeito das plantas, Michael Pollan sugere que o café – a cafeína, especificamente, nosso vício quase universal –, pode ter acelerado o Iluminismo e o desenvolvimento da ciência moderna.",
    alternativaD: "Já em Sob o efeito das plantas Michael Pollan sugere que o café – a cafeína – especificamente, nosso vício quase universal pode ter acelerado o Iluminismo e o desenvolvimento da ciência moderna.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 44,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Formação de palavras: composição",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "Assinale a alternativa em que a palavra indicada, no texto, não tenha sido formada por composição.",
    alternativaA: "mamífero (linha 1)",
    alternativaB: "multicelular (linha 39)",
    alternativaC: "subproduto (linha 40)",
    alternativaD: "biosfera (linha 47)",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 45,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Flexão verbal e imperativo",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "Plante, e contribua. (linha 52)\nAssinale a alternativa em que se tenha feito a transposição correta do período acima para a forma “vós”.",
    alternativaA: "Planta, e contribui.",
    alternativaB: "Plantai, e contribuí.",
    alternativaC: "Planteis, e contribueis.",
    alternativaD: "Plantais, e contribuais.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 46,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Valor semântico de conjunções",
    texto: "Por que os animais nos fascinam mais do que as plantas? A maioria de nós já teve esta experiência: fazer uma trilha e no caminho encontrar um mamífero, um réptil, uma ave inesperada...",
    pergunta: "Como água potável era difícil de armazenar sem ser logo contaminada, consumia-se cerveja e vinho, pois o álcool impedia o crescimento de bactérias. (linhas 20 e 21)\nAssinale a alternativa que indique a circunstância apontada pela palavra sublinhada no período acima.",
    alternativaA: "concessão",
    alternativaB: "comparação",
    alternativaC: "conformidade",
    alternativaD: "causa",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 47,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação de texto – educação multicultural",
    texto: "Como educar seu filho para um mundo cultural. O texto aborda a necessidade de uma educação multicultural, o respeito às diferenças culturais e a construção de uma sociedade tolerante e inclusiva.",
    pergunta: "De acordo com o texto, é correto afirmar que uma educação multicultural",
    alternativaA: "envolve os aspectos culturais apenas da comunidade em que se localiza a escola.",
    alternativaB: "anula a identidade do indivíduo e prepara-o para conhecer e praticar uma nova cultura.",
    alternativaC: "trata-se apenas em apresentar ao educando alguns aspectos culturais diferentes da sua própria cultura.",
    alternativaD: "contempla uma pluralidade de vozes e identidades, mostrando ao educando que a sociedade é formada por uma diversidade cultural.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 48,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação e inferência textual",
    texto: "Como educar seu filho para um mundo cultural.",
    pergunta: "Através das informações apresentadas no texto infere-se que a educação multicultural",
    alternativaA: "é um tema novo introduzido indiretamente pela globalização.",
    alternativaB: "deve ser introduzida nas escolas e no meio familiar devido aos frequentes casos de preconceito enfrentados no meio escolar.",
    alternativaC: "é compromisso da escola implantar esse tipo de educação visando o desenvolvimento dos valores da intolerância e de relações interpessoais entre grupos de culturalmente diferentes.",
    alternativaD: "deve ser retomada no meio familiar e nas escolas, pois a intolerância do ser humano para com o seu semelhante tem ultrapassado até mesmo fronteiras. Deve-se criar um cidadão que além de respeitar o seu semelhante contribua para uma sociedade inclusiva.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 49,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação textual – preconceito e intolerância",
    texto: "“Pense a respeito: quantos exemplos de intolerância ou de preconceito as crianças presenciam hoje? Essas posturas aparecem o tempo todo, tanto nas conversas do dia a dia, como nos posts das redes sociais...”",
    pergunta: "Sobre o trecho apresentado, é correto afirmar que",
    alternativaA: "os avanços tecnológicos estimulam o preconceito.",
    alternativaB: "nos tempos atuais os atos de intolerância são mais frequentes.",
    alternativaC: "nas ações simples do ser humano percebe-se atos inconscientes de intolerância e preconceito.",
    alternativaD: "em relação aos adultos, as crianças praticam, frequentemente, atos de intolerância e preconceito culturais.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 50,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação textual – argumentos",
    texto: "Como educar seu filho para um mundo cultural.",
    pergunta: "De acordo com os argumentos apresentados no texto, em se tratando de educação multicultural, assinale a alternativa INCORRETA em relação à ação da escola.",
    alternativaA: "Adotar uma educação multicultural implica em rever métodos de ensino.",
    alternativaB: "A educação multicultural implantada pela escola deve garantir uma aprendizagem igualitária.",
    alternativaC: "Ao priorizar uma educação tradicional, a escola contribui para que seus alunos sejam mais tolerantes e aceitem uma sociedade pluralista.",
    alternativaD: "As experiências vividas pela criança, antes de sua inserção em alguma instituição de ensino, devem ser consideradas e valorizadas pelo professor.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 51,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Coesão – relação de sentido",
    texto: "“Isso requer que os professores, além de estimular o conhecimento mútuo e o respeito de uns pelos outros, adotem estratégias que garantam que todos aprendam igualmente...”",
    pergunta: "A expressão sublinhada remete ao trecho uma ideia de",
    alternativaA: "Adição.",
    alternativaB: "Oposição.",
    alternativaC: "Condição.",
    alternativaD: "Consequência.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 52,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe – função sintática",
    texto: "Trechos retirados do texto “Como educar seu filho para um mundo cultural”.",
    pergunta: "Assinale a alternativa em que o termo destacado exerce a função sintática DIFERENTE dos demais.",
    alternativaA: "“... quantos exemplos de intolerância ou de preconceito as crianças presenciam hoje?”",
    alternativaB: "“É no dia a dia que a criança pode aprender a reproduzir a sociedade ou a transformá-la;...”",
    alternativaC: "“Na verdade, esse é um primeiro passo, mas o principal deveria ser cuidar das atitudes, tanto em casa como na escola.”",
    alternativaD: "“... além de estimular o conhecimento mútuo e o respeito de uns pelos outros, adotem estratégias que garantam que todos aprendam igualmente...”",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 53,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica – significado de palavras",
    texto: "Trechos retirados do texto “Como educar seu filho para um mundo cultural”.",
    pergunta: "Assinale a alternativa em que o significado da palavra sublinhada, de acordo com o contexto empregado, está INCORRETO.",
    alternativaA: "“... apreciar o que elas têm de fascinante e inusitado.” – comum",
    alternativaB: "“Mas como não é fácil conviver com o divergente, é preciso dar o exemplo.” – diferente",
    alternativaC: "“... a perpetuar as injustiças ou a batalhar por um mundo justo e solidário.” – imortalizar",
    alternativaD: "“Mostre na prática que é possível construir uma sociedade tolerante e inclusiva...” – condescendente",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 54,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Crase",
    texto: "Trecho: “A educação multicultural, para muitos, parece simples e óbvia: apresentar às crianças os aspectos das diferentes culturas...”",
    pergunta: "Assinale a alternativa em que o uso do acento grave indicador de crase foi usado pelo mesmo motivo que no trecho apresentado.",
    alternativaA: "Após os atentados, muitos turistas foram à França receosos.",
    alternativaB: "Uma educação multicultural será ofertada àqueles que estudam em escolas modernas.",
    alternativaC: "Dar às pessoas a oportunidade de expor suas opiniões contribui para um mundo mais justo.",
    alternativaD: "À medida que as escolas tradicionais privilegiam conceitos memorizados e repetitivos, as escolas modernas buscam implantar uma educação multicultural.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 55,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conjunções – sentido comparativo",
    texto: "“As relações que se mantêm na família ensinam mais do que muitas aulas da escola.”",
    pergunta: "A expressão sublinhada traz ao trecho um sentido",
    alternativaA: "alternativo.",
    alternativaB: "concessivo.",
    alternativaC: "comparativo.",
    alternativaD: "conformativo.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 56,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Verbos – modo imperativo",
    texto: "“Para isso, permita que seus filhos se expressem na sua diversidade e acolha as suas formas de pensar.”",
    pergunta: "Sobre o verbo destacado, é correto afirmar que expressa",
    alternativaA: "uma certeza do autor perante o fato mencionado.",
    alternativaB: "uma fala direta com o leitor, dirigindo-lhe um conselho e exprimindo uma atitude.",
    alternativaC: "uma ação provável de acontecer, pois trabalha com ações concretas da ação verbal.",
    alternativaD: "dúvida e incerteza, pois trabalha com possibilidades remotas da ação verbal se concretizar.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 57,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Maria Regina acompanhou a avó até o quarto, despediu-se e recolheu-se ao seu. A mucama que a servia, apesar da familiaridade que existia entre elas, não pôde arrancar-lhe uma palavra, e saiu, meia hora depois, dizendo que Nhanhā estava muito séria. Logo que ficou só, Maria Regina sentou-se ao pé da cama, com as pernas estendidas, os pés cruzados, pensando. A verdade pede que diga que esta moça pensava amorosamente em dous homens ao mesmo tempo, um de vinte e sete anos, Maciel - outro de cinquenta, Miranda. Convenho que é abominável, mas não posso alterar a feição das cousas, não posso negar que se os dous homens estão namorados dela, ela não o está menos de ambos. Uma esquisita, em suma; ou, para falar como as suas amigas de colégio, uma desmiolada. Ninguém lhe nega coração excelente e claro espírito; mas a imaginação é que é o mal, uma imaginação adusta e cobiçosa, insaciável principalmente, avessa à realidade, sobrepondo às cousas da vida outras de si mesma; dai curiosidades irremediáveis. A visita dos dous homens (que a namoravam de pouco) durou cerca de uma hora. Maria Regina conversou alegremente com eles, e tocou ao piano uma peça clássica, uma sonata, que fez a avó cochilar um pouco. No fim discutiram música. Miranda disse cousas pertinentes acerca da música moderna e antiga; a avó tinha a religião de Bellini e da Norma, e falou das toadas do seu tempo, agradáveis, saudosas e principalmente claras. A neta ia com as opiniões do Miranda; Maciel concordou polidamente com todos. Ao pé da cama, Maria Regina reconstruía agora tudo isso, a visita, a conversação, a música, o debate, os modos de ser de um e de outro, as palavras do Miranda e os belos olhos do Maciel. Eram onze horas, a única luz do quarto era a lamparina, tudo convidava ao sonho e ao devaneio. Maria Regina, à força de recompor a noite, viu ali dous homens ao pé dela, ouviu-os, e conversou com eles durante uma porção de minutos, trinta ou quarenta, ao som da mesma sonata tocada por ela: lá, lá, lá...",
    pergunta: "Considerando o trecho apresentado, pode-se inferir que o conto foca",
    alternativaA: "na indecisão da protagonista em relação aos dois pretendentes.",
    alternativaB: "na condição mental da protagonista que era desmiolada e inconstante.",
    alternativaC: "no amor de Miranda por Maria Regina e no cuidado dele com ela.",
    alternativaD: "na trajetória artística de Maria Regina e no seu amor pela música.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 58,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Classes de Palavras / Conjunções",
    texto: "Maria Regina acompanhou a avó até o quarto, despediu-se e recolheu-se ao seu...",
    pergunta: "Na sentença: \"[...]mas não posso alterar a feição das cousas[...]\" o termo em destaque tem a função de",
    alternativaA: "preposição acidental.",
    alternativaB: "conjunção explicativa.",
    alternativaC: "operador referencial.",
    alternativaD: "operador sequencial.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 59,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Semântica / Vocabulário",
    texto: "Maria Regina acompanhou a avó até o quarto, despediu-se e recolheu-se ao seu...",
    pergunta: "No trecho \"[...]uma imaginação adusta e cobiçosa, insaciável[...]\" o termo em destaque pode ser substituído, mantendo o sentido da palavra no contexto, por",
    alternativaA: "dissimulado.",
    alternativaB: "frívola.",
    alternativaC: "ardente.",
    alternativaD: "irrefletido.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 60,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Sintaxe / Período Composto",
    texto: "Maria Regina acompanhou a avó até o quarto, despediu-se e recolheu-se ao seu...",
    pergunta: "Considerando os processos de coordenação e de subordinação, a sentença \"Regina conversou alegremente com eles, e tocou ao piano uma peça clássica\" pode ser classificada como",
    alternativaA: "oração subordinada substantiva completiva nominal.",
    alternativaB: "oração coordenada sindética aditiva.",
    alternativaC: "oração coordenada assindética aditiva.",
    alternativaD: "oração subordinada substantiva objetiva direta.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 61,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Morfologia / Verbos",
    texto: "Maria Regina acompanhou a avó até o quarto, despediu-se e recolheu-se ao seu...",
    pergunta: "Nos trechos \"[...] tudo convidava ao sonho e ao devaneio. [...] trinta ou quarenta, ao som da mesma sonata tocada por ela [...]\" os termos em destaque são classificados, respectivamente, no",
    alternativaA: "presente do subjuntivo e pretérito imperfeito.",
    alternativaB: "particípio passado e pretérito-mais-que-perfeito.",
    alternativaC: "pretérito imperfeito e particípio passado.",
    alternativaD: "pretérito mais-que-perfeito e futuro do pretérito.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 62,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Sintaxe / Colocação Pronominal",
    texto: "Maria Regina acompanhou a avó até o quarto, despediu-se e recolheu-se ao seu...",
    pergunta: "Na sentença \"Ninguém lhe nega coração\" o item que segue a mesma regra de colocação pronominal é",
    alternativaA: "Todos lhe ofereceram o coração por estarem apaixonados por ela.",
    alternativaB: "Então, entreguei-lhe o convite para entrar em meu coração.",
    alternativaC: "Ninguém ajudou-lhe conquistar o coração do seu namorado.",
    alternativaD: "Durante a festa, ninguém, que estava presente, lhe negou o coração amigo.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 63,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Acentuação Gráfica",
    texto: "Maria Regina acompanhou a avó até o quarto, despediu-se e recolheu-se ao seu...",
    pergunta: "Na sentença \"tocou ao piano uma peça clássica\" o item que apresenta a mesma regra de acentuação gráfica da palavra em destaque é",
    alternativaA: "Olimpíada.",
    alternativaB: "Álbum.",
    alternativaC: "Cafeína.",
    alternativaD: "Revólver.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 64,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade. Invenção foi apresentada na Nigéria, durante um evento de inovação voltada aos problemas da África. Se o brasileiro é considerado um povo criativo, é porque a vida aqui nunca foi fácil. Condições adversas demandam soluções inusitadas. Na África a coisa funciona mais ou menos desse jeito, com condições ainda mais extremas que as nossas, aqui. É por isso que, entre uma rebolada e outra pra sobreviver, os africanos acabam inventando coisas como um gerador movido à urina. E não tem nenhuma start-up metida à besta por trás do produto: ele foi criado por 4 adolescentes - Duro-Aina Adebola, Akindele Abiola, Faleke Oluwatoyin e Bello Eniola, a mais velha do grupo, com 15 anos. O segredo é transformar o xixi nosso de cada dia em gás hidrogênio: a urina é colocada dentro de uma célula eletrolítica, um tipo de dispositivo que transforma energia elétrica em energia química. Esse processo isola o hidrogênio da urina para, em seguida, purificá-lo dentro de um filtro de água. Então um cilindro de gás leva o hidrogênio para um segundo recipiente, dessa vez repleto de borato de sódio, cuja função é retirar toda a umidade dele e deixar o hidrogênio na forma de gás. Esse gás será o combustível do gerador. A novidade foi apresentada durante a Maker Faire Africa, um evento de inovação que acontece todo ano, cada vez em uma cidade diferente da África. A de 2012 foi em Lagos, capital da Nigéria. A ideia é incentivar comunidades locais a desenvolverem tecnologias que possam melhorar as suas vidas e a de outras pessoas do continente que vivam em condição semelhante. É a África se ajudando por ela mesma, sem depender da compaixão ou da boa vontade dos países ricos...",
    pergunta: "É correto afirmar que o objetivo principal do texto é",
    alternativaA: "combater a ociosidade dos jovens estudantes.",
    alternativaB: "ponderar sobre o aproveitamento da energia produzida na África.",
    alternativaC: "anunciar sobre o potencial dos jovens para a realização de pesquisas.",
    alternativaD: "informar a respeito dos investimentos educacionais nos países africanos.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 65,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Gêneros Textuais / Tipologia Textual",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade. Invenção foi apresentada na Nigéria, durante um evento de inovação voltada aos problemas da África...",
    pergunta: "Sobre o texto, é correto afirmar que",
    alternativaA: "trata-se de uma notícia marcada pela apresentação de fatos.",
    alternativaB: "convence sobre a necessidade de compaixão para com a África.",
    alternativaC: "noticia a respeito dos novos critérios adotados para melhor a educação nas escolas africanas.",
    alternativaD: "refere-se a uma reportagem marcada por dados comprobatórios, citações e questionamentos.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 66,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Coesão Textual / Referência Pronominal",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade...",
    pergunta: "No trecho \"Esse processo isola o hidrogênio da urina para, em seguida, purificá-lo dentro de um filtro de água.\" (2º§), o termo \"lo\", de acordo com o contexto em que se encontra empregado, se refere a",
    alternativaA: "gerador.",
    alternativaB: "hidrogênio.",
    alternativaC: "combustível.",
    alternativaD: "Maker Faire Africa.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 67,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica / Vocabulário",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade...",
    pergunta: "No trecho \"Condições adversas demandam soluções inusitadas.\" (1º§), a expressão destacada pode ser substituída, sem alteração de sentido, por",
    alternativaA: "raras.",
    alternativaB: "claras.",
    alternativaC: "específicas.",
    alternativaD: "complexas.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 68,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade...",
    pergunta: "Segundo o texto, marque V para as afirmativas verdadeiras e F para as falsas.\n( ) As dificuldades enfrentadas pelos brasileiros os tornam um povo criativo.\n( ) As adversidades da vida ocasionam a busca de soluções criativas para os problemas.\n( ) Maker Faire Africa incentiva comunidades locais a desenvolverem tecnologias que possam melhorar as suas vidas e a de outras do continente que vivam em condição semelhante.\nA sequência está correta em",
    alternativaA: "V, V, V.",
    alternativaB: "F, V, V.",
    alternativaC: "F, V, F.",
    alternativaD: "V, V, F.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 69,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontuação / Uso da Vírgula",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade...",
    pergunta: "No trecho \"É por isso que, entre uma rebolada e outra pra sobreviver, os africanos acabam inventando coisas como um gerador movido à urina.\" (1º§), as vírgulas foram utilizadas para",
    alternativaA: "suprimir o verbo.",
    alternativaB: "finalizar frase declarativa.",
    alternativaC: "separar orações deslocadas.",
    alternativaD: "marcar um questionamento.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 70,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe / Adjunto Adverbial de Lugar",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade...",
    pergunta: "Analise as afirmativas transcritas do texto e assinale a que exprime circunstância de lugar.",
    alternativaA: "\"Esse gás será o combustível do gerador.\" (2º§)",
    alternativaB: "\"Se o brasileiro é considerado um povo criativo, é porque a vida aqui nunca foi fácil.\" (1º§)",
    alternativaC: "\"É a África se ajudando por ela mesma, sem depender da compaixão ou da boa vontade dos países ricos.\" (3º§)",
    alternativaD: "\"Como a urina já está sendo coletada nesses locais, nada mais natural que aproveitar sua energia para usar no próprio tratamento.\" (4º§)",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 71,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conjunções / Relação de Oposição (Adversativa)",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade...",
    pergunta: "No trecho \"No site da feira não há informações sobre a quantidade de watts produzida (dá pra carregar um celular ou abastecer um bairro?), mas, para um trabalho de meninas do ginásio, dá pra garantir que está melhor que aquela cartolina cheia de plantinhas coladas com durex que você apresentou na quinta série.\" (4º§), o termo destacado expressa ideia de",
    alternativaA: "contraste.",
    alternativaB: "finalidade.",
    alternativaC: "possibilidade.",
    alternativaD: "complementação.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 72,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Fonologia / Dígrafos",
    texto: "Grupo de adolescentes inventa gerador movido à urina. Um litro gera 6 horas de eletricidade...",
    pergunta: "Das palavras transcritas do texto, assinale a que apresenta dígrafo.",
    alternativaA: "Filtro.",
    alternativaB: "Inovação.",
    alternativaC: "Potencial.",
    alternativaD: "Nenhuma.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 73,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação de Charge / Conjunções Comparativas",
    texto: "Charge com dois homens pré-históricos observando uma roda recém-inventada. Um pergunta se a invenção vai causar mortes e o outro responde: \"... É só não usar como um selvagem!\".",
    pergunta: "No trecho \"... É só não usar como um selvagem!\", a expressão \"como\" significa",
    alternativaA: "conforme.",
    alternativaB: "posto que.",
    alternativaC: "no entanto.",
    alternativaD: "a não ser que.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 74,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar. Atualmente, a escola pública vem chamando atenção pelas inúmeras cenas de violência contra alunos e professores. Frequentemente vemos nos noticiários manchetes que denunciam brigas violentas entre alunos, ameaças a professores, adolescentes armados, bebendo e se drogando na porta da sala de aula... Enfim é essa a realidade da maioria das escolas públicas brasileiras. O quê está gerando tanta violência? Rousseau afirmava que os homens não nascem naturally maus, a sociedade é que os transforma. De fato, nenhum ser humano nasce violento, ou criminoso, o seu destino não está traçado após a nascença. Os seus comportamentos são fruto do ambiente que são expostos. Numa sociedade tecnológica, consumista e competitiva, que valoriza a aquisição de bens de qualquer forma, que só dá oportunidades para os que já possuem algo, o comportamento desses jovens poderá ser considerado como adaptativo. Porém, não adianta tratar um sintoma sem primeiramente investigar a sua causa. É muito fácil rotular os atores de violência de desequilibrados, de maus, de desestruturados e não fazer nada para alterar estes comportamentos. Todavia, a sociedade tem vindo a sofrer significativas transformações devido às exigências atuais, então os pais cedo colocam os filhos em creches ou deixam com terceiros. Chegam em casa exaustos, depois de um dia de trabalho, e ainda têm os afazeres domésticas ou trazem trabalho para casa. Assim a criança é colocada sozinha na frente da TV ou vai brincar sem um adulto que lhe dê atenção. A relação familiar centra-se prioritariamente nas necessidades físicas da criança, ou seja, na alimentação, na higiene e no descanso... Desde cedo que as novas tecnologias imediatamente as seduzem e permitem a aquisição de novos saberes. O seu conhecimento vai progredindo através das informações que recebe do meio onde se insere, do meio familiar, dos colegas, da escola, dos meios audiovisuais. Resultado disso é que a família vem delegando o papel de educador para a escola, dado que é no contexto educativo que as crianças passam a maior parte do dia. Todavia, nenhuma outra instituição poderá jamais substituir as condições educativas da família, nem parece ser razoável que seja unicamente a escola a ensinar valores tão necessários para o normal desenvolvimento da criança tais como: a democracia, as regras para a sã convivência, o respeito pelo outro, a solidariedade, a tolerância, o esforço pessoal, etc. O Relatório para a UNESCO da Comissão Internacional sobre Educação para o Século XXI (1996:95) reforça que: 'a família constitui o primeiro lugar de toda e qualquer educação e assegura, por isso, a ligação entre o afetivo e o cognitivo, assim como a transmissão dos valores e normas'. À escola não se pode pedir que além de ensinar os conteúdos programáticos exigidos pelo Ministério da Educação, tenha também que ter a função educativa que compete aos pais. No meio de tudo isto, a verdade é que a violência continua a existir e a registrar-se cada vez mais na população jovem.",
    pergunta: "De acordo com as ideias do texto, marque V para as afirmativas verdadeiras e F para as falsas.\n( ) Nenhuma outra instituição poderá substituir as condições educativas da família.\n( ) A sociedade transforma os homens.\n( ) Muitos professores classificam o ambiente escolar como transformador.\n( ) Cabe à escola a função educativa das crianças.\nA sequência está correta em",
    alternativaA: "V, F, V, V.",
    alternativaB: "F, V, F, V.",
    alternativaC: "F, F, V, V.",
    alternativaD: "V, V, V, F.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 75,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "Segundo o texto, é correto afirmar que",
    alternativaA: "o maior problema da escola é a indisciplina.",
    alternativaB: "a família vem delegando o papel de educador para a escola.",
    alternativaC: "a falta de comunicação entre professores e alunos causa muita revolta nos estudantes.",
    alternativaD: "em geral, as escolas impõem regras a quem vive no seu cotidiano, sobretudo aos alunos.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 76,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "De acordo com o texto, muitos professores, hoje, classificam o ambiente escolar como",
    alternativaA: "violento.",
    alternativaB: "assustador.",
    alternativaC: "ameaçador.",
    alternativaD: "desequilibrado.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 77,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conjunções / Substituição Sinônima",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "No trecho \"Todavia, a sociedade tem vindo a sofrer significativas transformações devido às exigências atuais, então os pais cedo colocam os filhos em creches ou deixam com terceiros.\" (4º§), o termo destacado pode ser substituído, sem alteração de sentido, por",
    alternativaA: "afinal.",
    alternativaB: "embora.",
    alternativaC: "apesar disso.",
    alternativaD: "dessa forma.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 78,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conjunções / Relação de Sentido",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "Em \"Assim a criança é colocada sozinha na frente da TV ou vai brincar sem um adulto que lhe dê atenção.\" (4º§), o termo destacado expressa ideia de",
    alternativaA: "soma.",
    alternativaB: "escolha.",
    alternativaC: "conclusão.",
    alternativaD: "consequência.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 79,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe / Adjunto Adverbial de Modo",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "Assinale, a seguir, a afirmativa transcrita do texto que expressa circunstância de modo.",
    alternativaA: "\"Rousseau afirmava que os homens não nascem naturally maus, a sociedade é que os transforma.\" (2º§)",
    alternativaB: "\"No meio de tudo isto, a verdade é que a violência continua a existir e a registrar-se cada vez mais na população jovem.\" (6º§)",
    alternativaC: "\"Atualmente, a escola pública vem chamando atenção pelas inúmeras cenas de violência contra alunos e professores.\" (1º§)",
    alternativaD: "\"Resultado disso é que a família vem delegando o papel de educador para a escola, dado que é no contexto educativo que as crianças passam a maior parte do dia.\" (4º§)",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 80,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica / Sinonímia",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "Em \"É muito fácil rotular os atores de violência de desequilibrados, de maus, de desestruturados e não fazer nada para alterar estes comportamentos.\" (3º§), as expressões destacadas significam, respectivamente:",
    alternativaA: "Citar / mudar.",
    alternativaB: "Julgar / modificar.",
    alternativaC: "Decompor / desarranjar.",
    alternativaD: "Identificar / desenvolver.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 81,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfologia / Classes de Palavras",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "Sobre a classe de palavras, assinale a alternativa que apresenta a relação INCORRETA.",
    alternativaA: "\"O quê está gerando tanta violência?\" (2º§) - adjetivo.",
    alternativaB: "\"É assim que muitos professores, hoje, classificam o ambiente escolar.\" (1º§) - advérbio.",
    alternativaC: "\"Porém, não adianta tratar um sintoma sem primeiramente investigar a sua causa.\" (3º§) - conjunção.",
    alternativaD: "\"Chegam em casa exaustos, depois de um dia de trabalho, e ainda têm os afazeres domésticas ou trazem trabalho para casa.\" (4º§) - substantivo.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 82,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontuação / Uso das Reticências",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "O uso das reticências no trecho \"A relação familiar centra-se prioritariamente nas necessidades físicas da criança, ou seja, na alimentação, na higiene e no descanso...\" (4º§) se justifica por",
    alternativaA: "realçar uma palavra.",
    alternativaB: "exprimir indignação.",
    alternativaC: "realizar citações incompletas.",
    alternativaD: "separar expressão explicativa.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 83,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfologia / Tempos e Modos Verbais",
    texto: "A violência nas escolas públicas. Assustador! É assim que muitos professores, hoje, classificam o ambiente escolar...",
    pergunta: "Das afirmativas transcritas do texto, assinale a que apresenta o tempo verbal DIFERENTE dos demais.",
    alternativaA: "\"Chegam em casa exaustos, depois de um dia de trabalho,...\" (4º§)",
    alternativaB: "\"Enfim é essa a realidade da maioria das escolas públicas brasileiras.\" (1º§)",
    alternativaC: "\"Todavia, nenhuma outra instituição poderá jamais substituir as condições educativas da família,...\" (4º§)",
    alternativaD: "\"De fato, nenhum ser humano nasce violento, ou criminoso, o seu destino não está traçado após a nascença.\" (2º§)",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 84,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe / Emprego do Pronome Oblíquo",
    texto: "Um dia, quando lhe perguntarem onde é que nasceu, a moça poderá responder, sorrindo: 'na lixeira'. Pois realmente foi ali que a jogaram, entre cascas de banana e borra de café, para que não vivesse; e foi dali que a retiraram, viva, para que desse testemunho: até numa lixeira a vida pode começar. O suposto nascimento anterior, num quarto, não vale para essa menina da rua Pedro América; ele se consumou na clandestinidade, a contragosto da mãe, talvez sem que o pai tivesse notícia, e mesmo sem que a mãe tivesse notícia do pai... (Carlos Drummond de Andrade)",
    pergunta: "Acerca do uso do pronome oblíquo \"lhe\" em \"quando lhe perguntarem onde é que nasceu\" (1º§), é correto afirmar que",
    alternativaA: "retoma a palavra \"moça\".",
    alternativaB: "atua como complemento da palavra \"quando\".",
    alternativaC: "pode ser substituído pelo pronome oblíquo \"a\".",
    alternativaD: "é usado para evitar a repetição da palavra \"moça\".",
    alternativaE: "atua como sujeito da forma verbal \"perguntarem\".",
    correta: "D"
  },
  {
    numero: 85,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Um dia, quando lhe perguntarem onde é que nasceu, a moça poderá responder, sorrindo: 'na lixeira'. Pois realmente foi ali que a jogaram, entre cascas de banana e borra de café, para que não vivesse; e foi dali que a retiraram, viva, para que desse testemunho: até numa lixeira a vida pode começar. O suposto nascimento anterior, num quarto, não vale para essa menina da rua Pedro América; ele se consumou na clandestinidade, a contragosto da mãe, talvez sem que o pai tivesse notícia, e mesmo sem que a mãe tivesse notícia do pai... (Carlos Drummond de Andrade)",
    pergunta: "A expressão \"até numa lixeira a vida pode começar.\" (1º§) indica que, para o enunciador, o fato de uma criança ter sobrevivido em uma lixeira é algo",
    alternativaA: "indigno.",
    alternativaB: "horrível.",
    alternativaC: "inusitado.",
    alternativaD: "assustador.",
    alternativaE: "decepcionante.",
    correta: "C"
  },
  {
    numero: 86,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Acentuação Gráfica",
    texto: "Relacione a 2ª coluna de acordo com a 1ª, considerando a regra gramatical de acentuação:\n1. Regra das oxítonas.\n2. Regra das paroxítonas.\n3. Regra das proparoxítonas.\n4. Regra da segunda vogal do hiato.\n( ) Aí, atraísse, saída.\n( ) Poderá, café, até.\n( ) América, doméstico, demográfica.\n( ) Crematórios, resquício, notícia.",
    pergunta: "A sequência está correta em",
    alternativaA: "1, 2, 3, 4",
    alternativaB: "2, 3, 1, 4",
    alternativaC: "4, 2, 1, 3",
    alternativaD: "1, 4, 3, 2",
    alternativaE: "4, 1, 3, 2",
    correta: "E"
  },
  {
    numero: 87,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Um dia, quando lhe perguntarem onde é que nasceu, a moça poderá responder, sorrindo: 'na lixeira'. Pois realmente foi ali que a jogaram, entre cascas de banana e borra de café, para que não vivesse; e foi dali que a retiraram, viva, para que desse testemunho: até numa lixeira a vida pode começar. O suposto nascimento anterior, num quarto, não vale para essa menina da rua Pedro América; ele se consumou na clandestinidade, a contragosto da mãe, talvez sem que o pai tivesse notícia, e mesmo sem que a mãe tivesse notícia do pai... (Carlos Drummond de Andrade)",
    pergunta: "No 1º§, o texto relata o fato gerador de uma situação dramática que busca levar o leitor a um grau de indignação diante do exposto. Quanto às duas ações relatadas - jogar a criança na lixeira e retirá-la dela -, há finalidades",
    alternativaA: "de aspecto positivo.",
    alternativaB: "que se assemelham.",
    alternativaC: "dependentes entre si.",
    alternativaD: "que se complementam.",
    alternativaE: "que revelam distanciamento.",
    correta: "E"
  },
  {
    numero: 88,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Análise Textual / Personificação",
    texto: "Um dia, quando lhe perguntarem onde é que nasceu, a moça poderá responder, sorrindo: 'na lixeira'...",
    pergunta: "\"A partir do _____ parágrafo, o autor do texto atribui à lixeira ações que demonstram que um novo significado lhe foi dado no texto, tornando-a um personagem _____ no desenvolvimento da narrativa.\" Assinale a alternativa que completa correta e sequencialmente a afirmativa anterior.",
    alternativaA: "2º / principal",
    alternativaB: "3º / importante",
    alternativaC: "1º / secundário",
    alternativaD: "3º / indiferente",
    alternativaE: "2º / introspectivo",
    correta: "B"
  },
  {
    numero: 89,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfologia / Processos de Formação de Palavras",
    texto: "Um dia, quando lhe perguntarem onde é que nasceu, a moça poderá responder, sorrindo: 'na lixeira'...",
    pergunta: "Em \"a contragosto da mãe, talvez sem que o pai tivesse notícia,\" (2º§), a palavra destacada é formada por prefixo. Assinale a alternativa em que todos os vocábulos do grupo possuem a mesma indicação de significado do apresentado.",
    alternativaA: "parasita, paradigma, parônimo.",
    alternativaB: "catástrofe, cataclismo, catarata.",
    alternativaC: "antibiótico, antipatia, antiaéreo.",
    alternativaD: "contraindicado, coerdeiro, concidadão.",
    alternativaE: "subdelegado, subestimar, subalimentado.",
    correta: "C"
  },
  {
    numero: 90,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação de Poema / Subjetividade",
    texto: "Cidade sem rio: O rio Amazonas é o maior do mundo, mas o rio do Tanque é o menor... O rio Doce banha terras amargas de maleita, ferro e melancolia. O córrego da Penha, esse, coitado, mal fazia um poço raso onde a gente, fugindo, se banhava. Talvez porque me faltasse água corrente, hoje a tenho represada nos olhos e neste vago verso fluvial. (Carlos Drummond de Andrade)",
    pergunta: "Em \"O córrego da Penha, esse, coitado, / mal fazia um poço raso\", o eu-lírico demonstra",
    alternativaA: "um aspecto subjetivo do poema.",
    alternativaB: "grande objetividade em sua descrição.",
    alternativaC: "objetividade através do uso da linguagem formal.",
    alternativaD: "objetividade através do uso da linguagem poética.",
    alternativaE: "subjetividade através do uso da linguagem regional.",
    correta: "A"
  },
  {
    numero: 91,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Análise de Conjunções e Expressões",
    texto: "Cidade sem rio: O rio Amazonas é o maior do mundo, mas o rio do Tanque é o menor... O rio Doce banha terras amargas de maleita, ferro e melancolia. O córrego da Penha, esse, coitado, mal fazia um poço raso onde a gente, fugindo, se banhava. Talvez porque me faltasse água corrente, hoje a tenho represada nos olhos e neste vago verso fluvial. (Carlos Drummond de Andrade)",
    pergunta: "A expressão \"Talvez porque\" introduz",
    alternativaA: "a descrição da personalidade inconstante do eu-lírico.",
    alternativaB: "uma possível explicação para a condição atual do eu-lírico.",
    alternativaC: "uma explicação definitiva para o momento vivido pelo eu-lírico.",
    alternativaD: "a descrição de toda a situação vivida pelo eu-lírico na sua infância.",
    alternativaE: "o motivo da falta de água vivenciada pelo eu-lírico em sua infância.",
    correta: "B"
  },
  {
    numero: 92,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Ortografia / Mau e Mal",
    texto: "Cidade sem rio: O rio Amazonas é o maior do mundo, mas o rio do Tanque é o menor... O rio Doce banha terras amargas de maleita, ferro e melancolia. O córrego da Penha, esse, coitado, mal fazia um poço raso onde a gente, fugindo, se banhava. Talvez porque me faltasse água corrente, hoje a tenho represada nos olhos e neste vago verso fluvial. (Carlos Drummond de Andrade)",
    pergunta: "A correção da ortografia da palavra destacada em \"mal fazia um poço raso\" é verificada considerando-se o seu sentido no contexto. Assinale a alternativa correta quanto à grafia das palavras.",
    alternativaA: "Não há mau que dure a vida inteira.",
    alternativaB: "Mau cheguei, ele saiu sem dizer nada.",
    alternativaC: "Comportou-se mal diante das autoridades presentes.",
    alternativaD: "A cada dia que passa, vejo o quanto ela é mau-humorada.",
    alternativaE: "Demonstrou um mal comportamento durante toda a festa.",
    correta: "C"
  },
  {
    numero: 93,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Interpretação de Poema / Figuras de Linguagem",
    texto: "Cidade sem rio: O rio Amazonas é o maior do mundo, mas o rio do Tanque é o menor... O rio Doce banha terras amargas de maleita, ferro e melancolia. O córrego da Penha, esse, coitado, mal fazia um poço raso onde a gente, fugindo, se banhava. Talvez porque me faltasse água corrente, hoje a tenho represada nos olhos e neste vago verso fluvial. (Carlos Drummond de Andrade)",
    pergunta: "A partir de imagens poéticas, o eu-lírico expressa sentimentos de melancolia e tristeza. Analise as seguintes expressões, identificando as que demonstram tais sentimentos:\nI. \"maior do mundo\"\nII. \"terras amargas\"\nIII. \"se banhava\"\nIV. \"represada nos olhos\"\nEstão corretas as alternativas",
    alternativaA: "I, II, III e IV.",
    alternativaB: "I e II, apenas.",
    alternativaC: "I e III, apenas.",
    alternativaD: "II e IV, apenas.",
    alternativaE: "II, III e IV, apenas.",
    correta: "D"
  },
  {
    numero: 94,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos / Intertextualidade",
    texto: "Muito além de Columbine: Em 26 de fevereiro, o estudante negro de Miami de 17 anos, Trayvon Martin, filho de funcionária pública e caminhoneiro divorciados, visitou o pai em Stanford e saiu, desarmado, à rua. O vigia voluntário George Zimmermann, de 28 anos, filho de estadunidense branco e imigrante peruana, o viu, o julgou 'ameaçador' e o matou. A polícia não o indiciou. Alegou que desde 2005 a lei da Flórida permite a qualquer um que se sinta ameaçado usar armas letais e acusá-lo sem ter provas contra a sua versão o exporia a processos. A indignação não para de crescer. O próprio presidente Barack Obama fez notar que 'se tivesse um filho, seria parecido com Trayvon', cujos pais reuniram 2 milhões de assinaturas pela prisão de Zimmermann. Surgiram 58 campanhas pela restrição ao uso de armas. O retrocesso nas relações sociais e raciais imposto aos EUA pelos conservadores começa a ser contestado. (Carta Capital, 11 de abril de 2012)",
    pergunta: "Após a leitura do texto, é possível evidenciar que a referência a \"Columbine\", uma escola de ensino médio, em Littleton, Colorado, onde aconteceu um dos mais lembrados ataques a escolas dos Estados Unidos, indica que",
    alternativaA: "o texto tem características de relato pessoal.",
    alternativaB: "o texto trata com mais detalhes sobre o episódio de Columbine.",
    alternativaC: "a violência está presente em toda parte do território americano.",
    alternativaD: "há uma relação comparativa entre o texto e o episódio de Columbine.",
    alternativaE: "o episódio de Columbine serviu de incentivo para o ocorrido em Stanford.",
    correta: "D"
  },
  {
    numero: 95,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Gêneros Textuais e Intenção Comunicativa",
    texto: "Muito além de Columbine: Em 26 de fevereiro, o estudante negro de Miami de 17 anos, Trayvon Martin...",
    pergunta: "De acordo com as características textuais, tem-se como objetivo principal",
    alternativaA: "prolongar uma comunicação.",
    alternativaB: "influenciar o leitor por meio de apelos.",
    alternativaC: "apenas transmitir a realidade de maneira clara.",
    alternativaD: "evidenciar o modo como a mensagem é apresentada.",
    alternativaE: "expressar um ponto de vista a partir da realidade observável.",
    correta: "E"
  },
  {
    numero: 96,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Emprego da Crase",
    texto: "Muito além de Columbine: Em 26 de fevereiro, o estudante negro de Miami de 17 anos, Trayvon Martin...",
    pergunta: "A ocorrência de crase em \"... e saiu, desarmado, à rua.\" é caracterizada como",
    alternativaA: "facultativa, pois \"sair\" possui dupla transitividade.",
    alternativaB: "obrigatória, pois atua como complemento de \"desarmado\".",
    alternativaC: "facultativa, pois \"desarmado\" possui dupla transitividade.",
    alternativaD: "obrigatória, devido à exigência de preposição do verbo \"sair\".",
    alternativaE: "indevida, já que \"desarmado\" não apresenta exigência de preposição.",
    correta: "D"
  },
  {
    numero: 97,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Coesão e Referência Pronominal",
    texto: "Muito além de Columbine: Em 26 de fevereiro, o estudante negro de Miami de 17 anos, Trayvon Martin...",
    pergunta: "Considerando-se os elementos de coesão textual em destaque e suas relações, assinale a indicação correta.",
    alternativaA: "\"A polícia não o indiciou\" / George Zimmermann",
    alternativaB: "\"acusá-lo sem ter provas\" / qualquer um",
    alternativaC: "\"contra a sua versão\" / polícia",
    alternativaD: "\"o exporia a processos\" / processo",
    alternativaE: "\"cujos pais\" / um filho",
    correta: "A"
  },
  {
    numero: 98,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfossintaxe / Pronomes Oblíquos",
    texto: "Muito além de Columbine: Em 26 de fevereiro, o estudante negro de Miami de 17 anos, Trayvon Martin...",
    pergunta: "\"O vigia voluntário George Zimmermann, de 28 anos, filho de estadunidense branco e imigrante peruana, o viu, o julgou 'ameaçador' e o matou.\" Em relação aos elementos em destaque no período anterior, analise:\nI. Morfologicamente, são: artigo, pronome e artigo.\nII. Sintaticamente, classificam-se em: objeto direto, adjunto adverbial e complemento indireto.\nIII. Não podem ser substituídos pelo pronome \"lhe\" tendo em vista a transitividade verbal de \"ver\", \"julgar\" e \"matar\".\nEstá(ão) correta(s) apenas a(s) afirmativa(s)",
    alternativaA: "I, III",
    alternativaB: "I, II",
    alternativaC: "I, II, III",
    alternativaD: "III",
    alternativaE: "II",
    correta: "E"
  },
  {
    numero: 99,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Níveis de Linguagem / Tipologia Textual",
    texto: "Muito além de Columbine: Em 26 de fevereiro, o estudante negro de Miami de 17 anos, Trayvon Martin...",
    pergunta: "Para atender ao objetivo do texto, foi utilizada, predominantemente, uma linguagem",
    alternativaA: "científica.",
    alternativaB: "subjetiva.",
    alternativaC: "informal.",
    alternativaD: "objetiva.",
    alternativaE: "literária.",
    correta: "D"
  },
  {
    numero: 100,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfologia / Formação de Palavras (Prefixos)",
    texto: "Bullying e incivilidade: Quando pensamos no 'bullying', logo consideramos os atos violentos e agressivos, mas é raro que os consideremos como atos de incivilidade. Vamos, então, refletir a respeito desse fenômeno sob essa ótica...",
    pergunta: "Quanto à formação de palavras, o vocábulo \"incivilidade\" possui prefixo que indica um aspecto",
    alternativaA: "negativo.",
    alternativaB: "positivo.",
    alternativaC: "aproximativo.",
    alternativaD: "repetitivo.",
    alternativaE: "privativo.",
    correta: "A"
  },
  {
    numero: 101,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Recursos Argumentativos e Opinião",
    texto: "Bullying e incivilidade: Quando pensamos no 'bullying', logo consideramos os atos violentos e agressivos, mas é raro que os consideremos como atos de incivilidade...",
    pergunta: "A respeito dos recursos argumentativos e expressão de opinião no texto, analise:\nI. No 3º§ do texto predomina o relato de um exemplo dado pela autora que tem por finalidade sustentar a tese defendida.\nII. No 3º§, o último período é um exemplo de expressão de opinião.\nIII. O texto em 3ª pessoa promove um afastamento entre autor e leitor indicando a objetividade textual.\nEstá(ão) correta(s) apenas a(s) afirmativa(s)",
    alternativaA: "I, II",
    alternativaB: "I, III",
    alternativaC: "III",
    alternativaD: "E, III",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 102,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe / Período Composto",
    texto: "Bullying e incivilidade: Quando pensamos no 'bullying', logo consideramos os atos violentos e agressivos...",
    pergunta: "\"Apenas uma jovem mulher reagiu e disse que estavam todos com pressa e aguardando a sua vez.\" A respeito do período em destaque é possível identificar",
    alternativaA: "apenas orações coordenadas.",
    alternativaB: "apenas orações subordinadas.",
    alternativaC: "oração subordinada adjetiva restritiva.",
    alternativaD: "orações subordinadas e uma coordenada.",
    alternativaE: "orações coordenadas e uma subordinada.",
    correta: "E"
  },
  {
    numero: 103,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Acentuação Gráfica / Regras de Acentuação",
    texto: "Bullying e incivilidade: Quando pensamos no 'bullying', logo consideramos os atos violentos e agressivos...",
    pergunta: "A respeito dos sinais gráficos de acentuação, assinale a opção em que todos os vocábulos foram acentuados tendo como justificativa a mesma regra.",
    alternativaA: "é / está / só",
    alternativaB: "fenômeno / ótica / vítimas",
    alternativaC: "violência / farmácia / públicos",
    alternativaD: "próximo / várias / responsável",
    alternativaE: "pacífico / convivência / estratégias",
    correta: "B"
  },
  {
    numero: 104,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos / Inferência",
    texto: "O consumo como forma de afeto: Um ponto comum nas divergentes opiniões de pais sobre os jovens é a crítica ao consumismo exacerbado. Como entender esse comportamento à luz do que ocorreu com a sociedade brasileira nas últimas décadas? Para começar, há um encolhimento da família tradicional. Pais têm um ou dois filhos, muitas vezes criados por apenas um deles, já que quase 25% dos casamentos acabam antes dos dez anos. Mães e pais saem desde cedo de casa para trabalhar. E, encerrada a licença-maternidade, boa parte das mulheres (quase 70% delas trabalham fora de casa hoje) retoma sua lide diária de deslocamentos e dias extenuantes em escritórios, lojas e fábricas. Os pais continuam correndo atrás do pão nosso de cada dia. Culpados pela sensação de que estão longe dos filhos, eles tentam, muitas vezes, compensar a distância com presentes. Não é à toa que, em pouco tempo, o quarto dos pequenos está abarrotado de brinquedos, bonecas, joguinhos e tudo o mais que estiver ao alcance do cartão de crédito. Os pequenos percebem logo cedo que a birra, o choro, a reclamação e o protesto são boa moeda de troca na hora de conseguir o que querem. Pais com dificuldade de dizer 'não' e filhos ávidos em ganhar resultam em jovens que consomem. Nossa sociedade também forneceu o molde para que essas transformações ocorressem. O valor do indivíduo passou a ser medido, numa escala maior do que outras, por aquilo que ele tem. O mérito da pessoa é avaliado hoje de uma maneira muito superficial, por aquilo que pode ser mostrado. E o consumo é moeda forte nesse mercado. Para além do bom ou do ruim, o fenômeno é um reflexo dos tempos que vivemos. Mas é importante lembrar que existem outras possibilidades e valores que podem ser trabalhados com os filhos. Senão, corremos o risco de criar adultos insuportáveis. As escolhas profissionais, pessoais, amorosas podem vir influenciadas exclusivamente por esse viés consumista e individualista. A vida emocional pode ficar ainda mais solitária, pragmática e chata. Esse futuro é seu sonho de consumo? (Jairo Bouer. Revista Época. Março de 2012)",
    pergunta: "As afirmativas seguintes podem ser inferidas na leitura do texto, EXCETO:",
    alternativaA: "A sociedade consumista prioriza o \"ter\" em detrimento do \"ser\".",
    alternativaB: "O consumismo dos filhos está relacionado à permissividade dos pais.",
    alternativaC: "Crianças pequenas não estão inseridas na questão do consumismo.",
    alternativaD: "A rotina de trabalho dos pais influencia no consumismo.",
    alternativaE: "A família tradicional diminuiu quantitativamente.",
    correta: "C"
  },
  {
    numero: 105,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "O consumo como forma de afeto: Um ponto comum nas divergentes opiniões de pais sobre os jovens é a crítica ao consumismo exacerbado...",
    pergunta: "De acordo com o texto, o aumento do consumismo favorece",
    alternativaA: "o fortalecimento das relações familiares.",
    alternativaB: "o fortalecimento da moeda nacional.",
    alternativaC: "a formação de jovens mais independentes.",
    alternativaD: "a falta de religiosidade.",
    alternativaE: "uma vida emocional mais solitária.",
    correta: "E"
  },
  {
    numero: 106,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica e Coesão Textual",
    texto: "O consumo como forma de afeto: Um ponto comum nas divergentes opiniões de pais sobre os jovens é a crítica ao consumismo exacerbado...",
    pergunta: "A expressão \"Para além do bom ou do ruim\", que inicia o último parágrafo, sugere que",
    alternativaA: "se pense nas consequências do consumismo.",
    alternativaB: "se pense nos aspectos positivos do consumismo.",
    alternativaC: "se pense nos aspectos negativos do consumismo.",
    alternativaD: "se pare de pensar no consumismo.",
    alternativaE: "se pense no consumismo como parte da realidade.",
    correta: "E"
  },
  {
    numero: 107,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfossintaxe / Pronome Relativo",
    texto: "O consumo como forma de afeto: Um ponto comum nas divergentes opiniões de pais sobre os jovens é a crítica ao consumismo exacerbado...",
    pergunta: "Assinale a alternativa na qual o \"que\" é pronome relativo.",
    alternativaA: "\"... resultam em jovens que consomem.\" (2º§)",
    alternativaB: "\"... é importante lembrar que existem outras possibilidades.\" (4º§)",
    alternativaC: "\"... já que quase 25% dos casamentos acabam antes dos dez anos.\" (1º§)",
    alternativaD: "\"Não é à toa que, em pouco tempo, o quarto dos pequenos...\" (2º§)",
    alternativaE: "\"Os pequenos percebem logo cedo que a birra, o choro,...\" (2º§)",
    correta: "A"
  },
  {
    numero: 108,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica / Sinonímia",
    texto: "O consumo como forma de afeto: Um ponto comum nas divergentes opiniões de pais sobre os jovens é a crítica ao consumismo exacerbado...",
    pergunta: "Em \"A vida emocional pode ficar ainda mais solitária, pragmática e chata.\" (4º§), a palavra destacada pode ser substituída, evitando-se a perda semântica, por",
    alternativaA: "irresponsável.",
    alternativaB: "impulsiva.",
    alternativaC: "objetiva.",
    alternativaD: "poética.",
    alternativaE: "verdadeira.",
    correta: "C"
  },
  {
    numero: 109,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe / Concordância Verbal",
    texto: "Gerais sobre concordância verbal no contexto gramatical.",
    pergunta: "Indique a alternativa em que NÃO há erro de concordância verbal.",
    alternativaA: "Fazem muitos anos que as relações familiares estão falidas.",
    alternativaB: "Deve existir outras opções de lazer para as famílias.",
    alternativaC: "Chovia reclamações sobre o comportamento agressivo dos jovens.",
    alternativaD: "Precisa-se de novas formas de cativar as crianças.",
    alternativaE: "Haviam brinquedos abarrotando o quarto dos filhos.",
    correta: "D"
  },
  {
    numero: 110,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontuação / Emprego da Vírgula",
    texto: "O consumo como forma de afeto: Um ponto comum nas divergentes opiniões de pais sobre os jovens é a crítica ao consumismo exacerbado...",
    pergunta: "Em \"... o quarto dos pequenos está abarrotado de brinquedos, bonecas, joguinhos e tudo o mais...\", o emprego das vírgulas justifica-se por",
    alternativaA: "isolar um aposto.",
    alternativaB: "separar constituintes sintáticos idênticos.",
    alternativaC: "isolar um vocativo.",
    alternativaD: "indicar conjunções intercaladas.",
    alternativaE: "separar orações coordenadas sindéticas.",
    correta: "B"
  },
  {
    numero: 111,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfologia / Classes de Palavras",
    texto: "O consumo como forma de afeto: Um ponto comum nas divergentes opiniões de pais sobre os jovens é a crítica ao consumismo exacerbado...",
    pergunta: "Quanto à classificação gramatical das palavras sublinhadas, analise:\nI. \"... sua lide diária...\" - verbo\nII. \"Um ponto comum nas divergentes opiniões...\" - adjetivo\nIII. \"Mas é importante lembrar...\" - preposição\nIV. \"... criados por apenas um deles,...\" - advérbio\nEstão corretas apenas as alternativas",
    alternativaA: "I, III e IV.",
    alternativaB: "I, II e III.",
    alternativaC: "II e IV.",
    alternativaD: "II e III.",
    alternativaE: "II, III e IV.",
    correta: "C"
  },
  {
    numero: 112,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfologia / Formação de Palavras",
    texto: "Análise de processos de formação de palavras.",
    pergunta: "Considerando o processo de formação de palavras, a palavra \"sonho\" é formada por derivação",
    alternativaA: "imprópria.",
    alternativaB: "parassindética.",
    alternativaC: "prefixal.",
    alternativaD: "regressiva.",
    alternativaE: "sufixal.",
    correta: "D"
  },
  {
    numero: 113,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe / Complemento Nominal",
    texto: "O consumo como forma de afeto: Um ponto comum nas divergentes opiniões de pais sobre os jovens é a crítica ao consumismo exacerbado...",
    pergunta: "Em \"Pais com dificuldade de dizer 'não'\", a função sintática do trecho em destaque é",
    alternativaA: "complemento nominal.",
    alternativaB: "adjunto adnominal.",
    alternativaC: "objeto indireto.",
    alternativaD: "objeto direto preposicionado.",
    alternativaE: "agente da passiva.",
    correta: "A"
  },
  {
    numero: 114,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Receita de Viver: Viver é expandir, é iluminar. Viver é derrubar barreiras entre os homens e o mundo. Compreender. Saber que, muitas vezes, nossa jaula somos nós mesmos, que vivemos polindo as nossas grades, ao invés delas nos libertarmos. Procuro descobrir nos outros sua dimensão universal, única. Sou coletivo. Tenho o mundo dentro de mim. Um profundo respeito humano. Um enorme respeito à vida. Acredito nos homens. Até nos vigaristas. Procuro desenvolver um sentido de identificação com o resto da humanidade. Não nado em piscina se tenho o mar. Por respeito a cada ser humano em todos os cantos da terra, e por gostar de gente gostar de gostar é que encontro em cada indivíduo o reflexo do Universo. As pessoas chamam de amor ao amor-próprio. Chamam de amor ao sexo. Chamam de amor a uma porção de coisas que não são amor. Enquanto a humanidade não definir o amor, enquanto não perceber que o amor é algo que independe da posse, do egocentrismo, da planificação, do medo de perder, da necessidade de ser correspondido, o amor não será amor. A gente só é o que faz aos outros. Somos conseqüências dessa ação. Não fazer... me deixa extenuado. Talvez a coisa mais importante da vida seja não vencer na vida, não se realizar. O homem deve viver se realizando. O realizado botou ponto final. Não podemos viver, permanentemente, grandes momentos. Mas podemos cultivar sua expectativa. Acredito em milagre. Nada mais miraculoso que a realidade de cada instante. Acredito no sobrenatural. O sobrenatural seria o natural mais explicado, se o natural tivesse explicação. Enquanto o homem não marcar um encontro consigo mesmo, verá o mundo com prisma deformado. E construirá um mundo em que a lua terá prioridade. Um mundo mais lua do que luar... (Pedro Bloch)",
    pergunta: "Todas as afirmativas estão de acordo com o texto, EXCETO:",
    alternativaA: "Mostrar a opinião do autor.",
    alternativaB: "Criticar as pessoas que têm respeito humano.",
    alternativaC: "O amor independente da posse.",
    alternativaD: "Declara que o homem fica nele mesmo, não se expande.",
    alternativaE: "A realidade de cada instante é um milagre.",
    correta: "B"
  },
  {
    numero: 115,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Através da leitura do segundo parágrafo, conclui-se que:",
    alternativaA: "O autor vê o amor como doação.",
    alternativaB: "O homem é um ser transformador.",
    alternativaC: "O autor nega o isolamento e o individualismo.",
    alternativaD: "O autor nega a integração com o coletivo.",
    alternativaE: "O amor não é um sentimento individualista.",
    correta: "C"
  },
  {
    numero: 116,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Com o trecho \"Um mundo mais lua do que luar...\" o autor:",
    alternativaA: "Declara que o homem fica nele mesmo, não se expande.",
    alternativaB: "Classifica o homem como um ser coletivo.",
    alternativaC: "Afirma que o homem deve viver se realizando.",
    alternativaD: "Demonstra que somos conseqüência do que fazemos ao outro.",
    alternativaE: "Afirma que viver é derrubar barreiras.",
    correta: "A"
  },
  {
    numero: 117,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe / Regência Verbal",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Sobre a regência verbal, assinale a alternativa cujo verbo sublinhado exige apenas um complemento e este vem regido de preposição:",
    alternativaA: "\"... viver é derrubar barreiras...\"",
    alternativaB: "\"Tenho o mundo dentro de mim...\"",
    alternativaC: "\"Acredito nos homens\".",
    alternativaD: "\"Procuro desenvolver um sentido de identificação...\"",
    alternativaE: "\"Somos conseqüências dessa ação\".",
    correta: "C"
  },
  {
    numero: 118,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfossintaxe / Conjunções Subordinativas",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Em \"o sobrenatural seria o natural mal explicado, se o natural tivesse explicação\", a conjunção grifada estabelece uma relação de:",
    alternativaA: "Causa.",
    alternativaB: "Conseqüência.",
    alternativaC: "Tempo.",
    alternativaD: "Condição.",
    alternativaE: "Concessão.",
    correta: "D"
  },
  {
    numero: 119,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Pontuação / Uso da Vírgula",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Assinale a alternativa em que o emprego da vírgula se justifica por separar adjunto adverbial deslocado:",
    alternativaA: "Viver é expandir, é iluminar.",
    alternativaB: "Não podemos viver, permanentemente, grandes momentos.",
    alternativaC: "Talvez a coisa mais importante da vida seja não vencer na vida, não se realizar.",
    alternativaD: "O sobrenatural seria o natural mal explicado, se o natural tivesse explicação.",
    alternativaE: "Procuro descobrir nos outros sua dimensão universal, única.",
    correta: "B"
  },
  {
    numero: 120,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Fonetica e Fonologia / Acentuação Tônica (Paroxítonas)",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Assinale a alternativa cujo termo sublinhado tem a sílaba tônica recaindo na penúltima sílaba:",
    alternativaA: "\"Viver é expandir...\"",
    alternativaB: "\"As pessoas chamam de amor...\"",
    alternativaC: "\"... importante da vida seja não vencer...\"",
    alternativaD: "\"... se o natural tivesse explicação.\"",
    alternativaE: "\"Enquanto a humanidade não definir o amor...\"",
    correta: "D"
  },
  {
    numero: 121,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Morfossintaxe / Classes de Palavras",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Sobre classes gramaticais, analise os itens abaixo:\nI. \"Procuro descobrir nos outros sua dimensão universal única\" - Os termos sublinhados se classificam como adjetivos e concordam em gênero e número com o nome a que se referem, \"dimensão\".\nII. \"Mas podemos cultivar sua expectativa\". O termo sublinhado é palavra invariável que liga orações estabelecendo uma relação de oposição.\nIII. \"Sou coletivo\" - O termo sublinhado se classifica como substantivo...\nIV. Em \"...verá o mundo com prisma deformado\". \"E construirá um mundo em que a lua terá prioridade\". - Os verbos sublinhados estão conjugados no tempo que indica uma ação concluída.\nEstá(ão) correta(s) apenas a(s) afirmativa(s):",
    alternativaA: "I e III, II e IV",
    alternativaB: "II, III e IV",
    alternativaC: "IV",
    alternativaD: "III e IV",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 122,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Semântica / Antonímia",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Assinale a alternativa cujo termo em parênteses é antônimo do termo sublinhado:",
    alternativaA: "\"Viver é derrubar barreiras entre...\" (obstáculos)",
    alternativaB: "\"...que vivemos polindo as nossas grades...\" (limpando)",
    alternativaC: "\"Até nos vigaristas\". (trapaceiros)",
    alternativaD: "\"Não fazer...me deixa extenuado\". (fortalecido)",
    alternativaE: "\"Mas podemos cultivar sua expectativa\" (esperança)",
    correta: "D"
  },
  {
    numero: 123,
    ano: 2008,
    banca: "IDESPEM",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sintaxe / Emprego da Crase",
    texto: "Receita de Viver: Viver é expandir, é iluminar...",
    pergunta: "Sobre a crase, analise os trechos: \"Por respeito a cada ser humano em todos os cantos...\" \"Chamam de amor a uma porção de coisas...\". Em relação aos termos sublinhados, é correto declarar que:",
    alternativaA: "No primeiro caso, existe a presença apenas do artigo \"a\", não ocorrendo a crase.",
    alternativaB: "No segundo caso, a crase é facultativa.",
    alternativaC: "Em ambos os termos, inexiste crase, por existir apenas a presença de artigos.",
    alternativaD: "No primeiro caso, estaria correto utilizar o acento grave.",
    alternativaE: "Em ambos os termos, existe a presença apenas da preposição \"a\".",
    correta: "E"
  },
  {
    numero: 124,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013. O inesperado aconteceu. Sim, quando todos pensavam que nada mais temeroso - da já tão temida ortografia da língua pátria - pudesse aparecer, eis que o monstro nos volta de maneira abrupta. As novas grafias da língua portuguesa entrarão em vigor em janeiro de 2016 e trarão mais gritos e impropérios aos falantes nada dedicados do idioma luso. E a pergunta fica iminente: seria necessária tal reforma? Talvez aqui haja uma resposta que beire o amor e o ódio por parte de especialistas no assunto ou não. Eu, como amante do idioma e profissional da área, tenho cá minhas dúvidas e não esconderei que minhas preferências estão mais às imprecações que aos elogios... (Adriano Paciello)",
    pergunta: "No texto, o autor defende a ideia de que a reforma ortográfica do português",
    alternativaA: "precisará ser revista pelas autoridades competentes.",
    alternativaB: "trará inúmeros benefícios para os usuários do idioma.",
    alternativaC: "unificará a língua portuguesa entre os países lusófonos.",
    alternativaD: "evitará a reedição de livros nos países que falam o português.",
    alternativaE: "aumentará os problemas de ensino e aprendizagem da língua.",
    correta: "E"
  },
  {
    numero: 125,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Coesão Textual e Referência Pronominal",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "Releia o fragmento a seguir: \"Outra, como cansa ter de retirar o trema enquanto escrevo, e meu notebook teima em colocá-lo, que inferno!\" (6º§). O termo \"lo\" tem como referente a palavra",
    alternativaA: "idioma.",
    alternativaB: "trema.",
    alternativaC: "inferno.",
    alternativaD: "notebook.",
    alternativaE: "processo.",
    correta: "B"
  },
  {
    numero: 126,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Gêneros e Tipologia Textual",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "Ao se analisar a organização discursiva do texto, \"Uma reforma ortográfica necessária?\", conclui-se que ele pertence à categoria dos textos",
    alternativaA: "injuntivos porque apresenta ao leitor orientações sobre como escrever corretamente a partir do novo acordo ortográfico.",
    alternativaB: "expositivos porque explica, de maneira clara e objetiva, o processo de implementação da reforma ortográfica do português no Brasil.",
    alternativaC: "narrativos porque apresenta ao leitor a sequência cronológica das principais ações relacionadas às mudanças na ortografia do português.",
    alternativaD: "argumentativos porque apresenta os pontos de vista do autor sobre as implicações da reforma ortográfica na vida dos usuários da língua.",
    alternativaE: "descritivos porque analisa resumidamente de que forma se procederam algumas alterações na grafia do português, como a queda do trema.",
    correta: "D"
  },
  {
    numero: 127,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Semântica e Relações de Sentido",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "A passagem \"... uma resposta que beire o amor e o ódio por parte de especialistas...\" (1º§), apresenta a mesma relação semântica presente na seguinte alternativa:",
    alternativaA: "\"Ante as muitas mudanças, a que mais me entristece é a queda do trema.\" (5º§)",
    alternativaB: "\"Eu, como amante do idioma e profissional da área, tenho cá minhas dúvidas...\" (1º§)",
    alternativaC: "\"... e trarão mais gritos e impropérios aos falantes nada dedicados do idioma luso.\" (1º§)",
    alternativaD: "\"... na América do Sul, são diferentes, como são diferentes as formas do falar, do escrever.\" (3º§)",
    alternativaE: "\"... e nada que um bom dicionário para simplificar o muitas vezes complexo escritor português.\" (2º§)",
    correta: "C"
  },
  {
    numero: 128,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Análise do Discurso / Fato x Opinião",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "Considerando as características discursivas do texto e sua temática, assinale a alternativa em que o trecho transcrito NÃO apresenta uma opinião do autor.",
    alternativaA: "\"Que a resposta venha das autoridades que concordaram com tal absurdo.\" (6º§)",
    alternativaB: "\"As novas grafias da língua portuguesa entrarão em vigor em janeiro de 2016...\" (1º§)",
    alternativaC: "\"Os problemas que isso trará talvez não tenham sido mensurados pelas autoridades a respeito.\" (3º§)",
    alternativaD: "\"Pobres professores, pobres os que amam a língua portuguesa e todos os alunos que anseiam...\" (8º§)",
    alternativaE: "\"Mesmo sendo professor de Língua Portuguesa, não creio que isso fosse requisito para se deliciar...\" (2º§)",
    correta: "B"
  },
  {
    numero: 129,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Variação Linguística / Lexical",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "De acordo com o trecho em destaque (\"bergamota, mexerica e tangerina\"), é correto afirmar que essa variação se relaciona com",
    alternativaA: "o grau de escolarização dos falantes.",
    alternativaB: "o status socioeconômico dos falantes.",
    alternativaC: "as diferentes regiões onde a língua é falada.",
    alternativaD: "as diferentes modalidades da língua: oral e escrita.",
    alternativaE: "o grau de formalidade da língua: formal x informal.",
    correta: "C"
  },
  {
    numero: 130,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Semântica / Sinonímia",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "No texto, os termos abrupta, mensurados e impropérios podem ser substituídos, sem alteração de sentido, respectivamente, por",
    alternativaA: "repentina, medidos e insultos.",
    alternativaB: "inesperada, previstos e louvores.",
    alternativaC: "exagerada, relativizados e frustrações.",
    alternativaD: "descabida, rechaçados e desconfianças.",
    alternativaE: "tendenciosa, planejados e inseguranças.",
    correta: "A"
  },
  {
    numero: 131,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Fonética e Fonologia",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "Considerando a afirmativa sobre o trema e a opinião do autor expressa no trecho destacado, depreende-se que esse sinal se relaciona com que aspecto da língua?",
    alternativaA: "Sintático.",
    alternativaB: "Estilístico.",
    alternativaC: "Fonológico.",
    alternativaD: "Morfológico.",
    alternativaE: "Semântico.",
    correta: "C"
  },
  {
    numero: 132,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Morfossintaxe / Valores Semânticos das Preposições",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "O item em que a preposição destacada possui valor semântico adequadamente apontado é",
    alternativaA: "\"... eis que o monstro nos volta de maneira abrupta.\" (1º§) - modo",
    alternativaB: "\"Andamos para o lado - preguiçosamente - e sem trema.\" (8º§) - fim",
    alternativaC: "\"Andamos para o lado - preguiçosamente - e sem trema.\" (8º§) - condição",
    alternativaD: "\"... a continuar como andam maltratando nosso idioma...\" (8º§) - concessão",
    alternativaE: "\"As novas grafias da língua portuguesa entrarão em vigor em janeiro de 2016...\" (1º§) - meio",
    correta: "A"
  },
  {
    numero: 133,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Conjunções / Relações Sintático-Semânticas",
    texto: "Uma reforma ortográfica necessária? Publicado por Adriano Paciello, 19 de janeiro de 2013...",
    pergunta: "Em \"... se o brasileiro em geral fosse mais dedicado ao idioma...\" (6º§), o conector destacado introduz relação semântica de",
    alternativaA: "causa.",
    alternativaB: "condição.",
    alternativaC: "concessão.",
    alternativaD: "conformidade.",
    alternativaE: "consequência.",
    correta: "B"
  },
  {
    numero: 134,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar. Mas a necessidade dos humanos de escrever ou desenhar é bem anterior ao surgimento do papel moderno. O homem pré-histórico começou desenhando nas paredes de cavernas... Gravar mensagens em placas de pedra foi um progresso... Outro progresso foi a invenção do tablete de barro... Então resolveram usar peles de animais! ... Mas o ancestral do papel moderno é o papiro egípcio... (Guimarães, Jean Remy Davée. Carta Fundamental, nº 35, 2012)",
    pergunta: "O assunto principal do texto é",
    alternativaA: "a evolução da escrita.",
    alternativaB: "o surgimento do papel.",
    alternativaC: "a fabricação do papel e a necessidade de reciclá-lo.",
    alternativaD: "a invenção da tipografia.",
    alternativaE: "as mudanças ocorridas no processo de fabricação do papel.",
    correta: "C"
  },
  {
    numero: 135,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Pontuação / Emprego dos Dois-Pontos",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "\"O resultado era o desejado: uma camada fina, leve e flexível, onde se podia escrever poemas, receitas, listas de compras, orações, o que desse na telha.\" O uso de dois-pontos (:), no trecho anterior, indica um(a)",
    alternativaA: "citação.",
    alternativaB: "enumeração.",
    alternativaC: "pausa maior que a da vírgula.",
    alternativaD: "esclarecimento do segmento anterior.",
    alternativaE: "vocativo.",
    correta: "D"
  },
  {
    numero: 136,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Semântica / Sinonímia no Contexto",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "Assinale a alternativa em que o sinônimo da palavra sublinhada está corretamente indicado, conforme o contexto em que foi utilizado.",
    alternativaA: "\"... superfície flexível...\" (1º§) - ágil",
    alternativaB: "\"... progresso foi a invenção do tablete de barro,...\" (1º§) - imaginação",
    alternativaC: "\"... investiram pesadamente na indústria...\" (6º§) - empossaram",
    alternativaD: "\"... continua contaminando os peixes de hoje.\" (6º§) - infectando",
    alternativaE: "\"... pagamos hoje pelos pecados de ontem.\" (7º§) - restituímos",
    correta: "D"
  },
  {
    numero: 137,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Gêneros e Tipologia Textual",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "O texto, de acordo com as características estruturais, classifica-se como",
    alternativaA: "explicativo.",
    alternativaB: "informativo.",
    alternativaC: "argumentativo.",
    alternativaD: "injuntivo.",
    alternativaE: "narrativo.",
    correta: "C"
  },
  {
    numero: 138,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Análise do Discurso / Fato x Opinião",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "Percebe-se a opinião do autor em",
    alternativaA: "\"Mas, de vez em quando, os tabletes quebravam.\"",
    alternativaB: "\"O papel da Antiguidade não era branquinho como o de hoje.\"",
    alternativaC: "\"O papiro era feito de fibras de plantas de brejos do Rio Nilo, no Egito.\"",
    alternativaD: "\"E assim, durante muito tempo, o papel foi fabricado com trapo.\"",
    alternativaE: "\"Depois de tanto trabalho, um uso apenas é pouco, não acha?\"",
    correta: "E"
  },
  {
    numero: 139,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Morfologia / Classes de Palavras",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "Quanto à classe gramatical, assinale a alternativa que apresenta corretamente a classificação da palavra sublinhada.",
    alternativaA: "\"... onde se pode escrever ou desenhar.\" (1º§) - preposição",
    alternativaB: "\"... fibras bem longas por perto para copiar os egípcios.\" (3º§) - verbo",
    alternativaC: "\"... os livros eram escritos à mão, um por um.\" (4º§) - artigo",
    alternativaD: "\"Você pode ser adepto do papel...\" (8º§) - substantivo",
    alternativaE: "\"... e refeitas muitas e muitas vezes, se ele for reciclado.\" (9º§) - conjunção",
    correta: "E"
  },
  {
    numero: 140,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Compreensão e Intenção do Autor",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "Ao apresentar a forma de fabricação do papel desde a Antiguidade, o autor pretende",
    alternativaA: "mostrar ao leitor que o papel é um recurso antigo na humanidade.",
    alternativaB: "narrar a história do papel.",
    alternativaC: "convencer o leitor dos problemas que a fabricação de papéis acarreta ao meio ambiente.",
    alternativaD: "induzir o leitor ao uso de papel reciclado como uma opção ecologicamente correta.",
    alternativaE: "informar como se faz o papel.",
    correta: "C"
  },
  {
    numero: 141,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Compreensão e Interpretação de Textos",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "Em relação ao texto, assinale a alternativa INCORRETA.",
    alternativaA: "A necessidade dos seres humanos de escrever resultou na invenção do papel.",
    alternativaB: "Desde a antiguidade, escrever em papel \"amarelado\" é um artigo de luxo.",
    alternativaC: "A invenção da tipografia estimulou o interesse pela leitura.",
    alternativaD: "A necessidade de fabricar papel branco está relacionada à dificuldade de se ler papéis amarelos sob à luz de velas.",
    alternativaE: "Escrever em papel branco está fora de \"moda\".",
    correta: "B"
  },
  {
    numero: 142,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Sintaxe / Conjunções Adversativas (Oposição)",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "Assinale a alternativa que expressa uma ideia de oposição.",
    alternativaA: "\"Agora é chique e moderno usar papel reciclado e não branqueado, mas o mesmo gesto já foi encarado como confissão de pobreza...\"",
    alternativaB: "\"Isso foi de certa forma uma maldição.\"",
    alternativaC: "\"E assim, durante muito tempo, o papel foi fabricado com trapos.\"",
    alternativaD: "\"Não estranha que tão pouca gente soubesse ler e escrever.\"",
    alternativaE: "\"Isso mesmo, pagamos hoje pelos pecados de ontem.\"",
    correta: "A"
  },
  {
    numero: 143,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Língua Portuguesa",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Conjunções e Advérbios / Relações de Sentido",
    texto: "Haja árvore! O que entendemos hoje por papel é uma superfície flexível onde se pode escrever ou desenhar...",
    pergunta: "Em \"Assim nasceu a moderna indústria do papel, baseada em fibras de árvores que podem crescer praticamente em qualquer lugar...\" (4º§), o termo sublinhado expressa a ideia de",
    alternativaA: "conformidade.",
    alternativaB: "consequência.",
    alternativaC: "conclusão.",
    alternativaD: "dúvida.",
    alternativaE: "certeza.",
    correta: "C"
  },
  /* logica  */
  {
    numero: 15,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Operações matemáticas e proporcionalidade",
    texto: "—",
    pergunta: "Se a quarta parte de 10 fosse 4, o dobro de 10 e a metade de 5, seriam respectivamente:",
    alternativaA: "30 e 5",
    alternativaB: "15 e 4",
    alternativaC: "20 e 2",
    alternativaD: "32 e 4",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 16,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sequências numéricas",
    texto: "—",
    pergunta: "O próximo número da sequência abaixo é: 10.230 ; 21.341 ; 32.452 ; 43.563",
    alternativaA: "54.674",
    alternativaB: "54.626",
    alternativaC: "54.632",
    alternativaD: "54.663",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 17,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Operações com matrizes",
    texto: "—",
    pergunta: "Sobre a matriz resultante da operação abaixo, podemos afirmar que: [ (1 4 1, 0 2 1, 1 5 0) . (2 5 2, 3 4 6, 2 7 3) - (1 3 1, 0 -1 -1) ]",
    alternativaA: "O elemento a13 é -13/3",
    alternativaB: "O elemento a11 é 16",
    alternativaC: "O elemento a21 é -2",
    alternativaD: "O elemento a22 é -5",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 18,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Análise combinatória",
    texto: "—",
    pergunta: "Observe a figura abaixo. A quantidade de triângulos que podemos formar unindo-se três pontos quaisquer é:",
    alternativaA: "64",
    alternativaB: "51",
    alternativaC: "039",
    alternativaD: "Raciocínio Lógico",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 19,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Raciocínio lógico: ordenação",
    texto: "—",
    pergunta: "Pedro, Sílvio, César, Roberto e Caio estão numa fila única de um caixa de banco. Analisando as afirmações abaixo, podemos afirmar que a ordem correta deles na fila, do primeiro para o quinto é: - Pedro está mais na frente do que Sílvio e do que César. - César está mais atrás do que Roberto. - Caio está mais na frente do que César e mais atrás do que Roberto. - Sílvio não é o último da fila",
    alternativaA: "Caio, Pedro, Sílvio, César e Roberto",
    alternativaB: "César, Caio, Pedro, Sílvio e Roberto",
    alternativaC: "Pedro, Sílvio, Roberto, Caio e César",
    alternativaD: "Pedro, Roberto, Sílvio, Caio e César",
    alternativaE: "não tem essa alternativa",
    correta: "ANULADA"
  },
  {
    numero: 20,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Teoria dos conjuntos",
    texto: "—",
    pergunta: "Sejam os conjuntos, A = {0, 1, 2}, B = {0, 1, 2, 3 ,4} e C = {0, 2}. A alternativa que representa a relação entre estes conjuntos é:",
    alternativaA: "(B – A) U A = B",
    alternativaB: "A ∩ (B – A) = {0, 1}",
    alternativaC: "B U (A – C) = {0, 2, 3}",
    alternativaD: "(B – C) ∩ A = C",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 21,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São Caetano do Sul - SP",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Raciocínio lógico: relações de tempo",
    texto: "—",
    pergunta: "Cecília, Luísa e Bruna vão fazer uma viagem e combinam de se encontrar no aeroporto num determinado dia e horário. Considerando as afirmações abaixo, podemos afirmar que Luísa chegou no aeroporto às: - Cecília chegou às 14h40 - Luísa chegou depois de Cecília - Bruna chegou às 15h10 - Luísa esperou por Bruna o dobro do tempo que Cecília esperou por Luísa",
    alternativaA: "14h45",
    alternativaB: "15h05",
    alternativaC: "14h50",
    alternativaD: "15h",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 13,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Equivalência lógica e implicação",
    texto: "—",
    pergunta: "13.Assinale a alternativa correta que representa uma equivalência lógica da proposição composta “Eu não terei dificuldade nesta prova ou não irei ser aprovado com tranquilidade”.",
    alternativaA: "Eu não terei dificuldade nesta prova e não irei ser aprovado com tranquilidade.",
    alternativaB: "Eu terei dificuldade nesta prova ou não irei ser aprovado com tranquilidade.",
    alternativaC: "Se eu tiver dificuldade nesta prova, então não irei ser aprovado com tranquilidade.",
    alternativaD: "Eu terei dificuldade nesta prova se, e somente se, for aprovado com tranquilidade.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 14,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Tabela-verdade e conectivos",
    texto: "—",
    pergunta: "14. A partir dos conceitos sobre conectivos, assinale a alternativa que contempla a proposição composta “x” no quadro. (p ↔ q) → ~(p v ~q) | ~p v ~q | ~p Λ q | ~(p Λ ~q) com p, q (V V -> F; V F -> V; F V -> V; F F -> F)",
    alternativaA: "(p ↔ q) → ~(p v ~q)",
    alternativaB: "~p v ~q",
    alternativaC: "~p Λ q",
    alternativaD: "~(p Λ ~q)",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 15,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conjuntos – união e diferença",
    texto: "—",
    pergunta: "15.Sejam dois conjuntos A, B ≠ ∅ e A ⊂ B, então pode-se afirmar, que:",
    alternativaA: "A ∩ B = B",
    alternativaB: "A ∪ B = A",
    alternativaC: "A’⊂ B’, em que A’, B’ são os respectivos complementos dos conjuntos A e B.",
    alternativaD: "A ∪ (B – A) = B",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 16,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Relações de ordem",
    texto: "—",
    pergunta: "16.A relação R sobre ℤ definida por ∀ x, y ∈ ℤ; x R y, se e somente se, x ≤ y é uma relação de ordem, pois cumpre as seguintes propriedades:",
    alternativaA: "Reflexividade, Simetria e transitividade.",
    alternativaB: "Reflexividade, Anti-simetria e transitividade.",
    alternativaC: "Reflexividade, Simetria e Comutatividade",
    alternativaD: "Associatividade, Anti-simetria e transitividade",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 17,
    ano: 2021,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Campina Grande - PB",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Negação de proposição composta",
    texto: "—",
    pergunta: "17.Quando alguém diz que não é verdade que um jogador de futebol é reconhecido e um jogador de palavras cruzadas é desvalorizado é logicamente equivalente a dizer que é verdade que",
    alternativaA: "um jogador de futebol é reconhecido e um jogador de palavras cruzadas não é desvalorizado.",
    alternativaB: "um jogador de futebol não é reconhecido e um jogador de palavras cruzadas é desvalorizado.",
    alternativaC: "um jogador de futebol não é reconhecido ou um jogador de palavras cruzadas não é desvalorizado.",
    alternativaD: "um jogador de futebol é reconhecido ou um jogador de palavras cruzadas é desvalorizado.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 11,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas lógicos: associação de cores",
    texto: "Para determinado evento infantil, foram convidados Huguinho, Zezinho e Luisinho. Eles decidiram ir para este evento vestindo camisetas coloridas, sendo que a camiseta de um deles será verde, a do outro será azul e a do outro será vermelha. Todos usarão bonés com estas mesmas cores, mas somente Huguinho irá vestir a camiseta e o boné da mesma cor. Luisinho usará um boné de cor azul. Sabe-se, ainda, que Zezinho não vestirá nenhuma das duas peças na cor vermelha.",
    pergunta: "Sendo assim, pode-se concluir que:",
    alternativaA: "o boné de Zezinho é verde e a camiseta de Huguinho é vermelha.",
    alternativaB: "a camiseta de Huguinho é vermelha e a de Zezinho é verde.",
    alternativaC: "o boné de Huguinho é vermelho e a camiseta de Zezinho é verde.",
    alternativaD: "o boné de Zezinho é vermelho e o de Huguinho é verde.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 12,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas lógicos: distribuição de aulas",
    texto: "Na tabela a seguir são apresentados os dias da semana em que cada uma das turmas de determinado curso tem aulas de lógica. No momento da conversão do arquivo, a linha com o horário das aulas da turma C e a coluna com as turmas que teriam aula na 6ª feira saíram borradas. 2ª feira | 3ª feira | 4ª feira | 5ª feira | 6ª feira. Turma A: - - lógica - ; Turma B: lógica lógica - - ; Turma C: ? ; Turma D: - - - - ; Turma E: - - lógica - . Sobre os dias com aulas de lógica destas cinco turmas, sabe-se que: I. as turmas B e C têm o mesmo número de aulas de lógica na semana. II. 4ª feira é o dia da semana em que mais turmas têm aulas de lógica. III. três destas turmas têm apenas uma aula de lógica por semana. IV. apenas duas turmas têm aula de lógica na 3ª feira. V. todas as turmas têm, ao menos, uma aula de lógica na semana. VI. todos os dias da semana têm, ao menos, uma turma com aula de lógica.",
    pergunta: "Sendo assim, a turma C tem aulas de lógica apenas",
    alternativaA: "na 2ª feira e na 6ª feira.",
    alternativaB: "na 3ª feira e na 6ª feira.",
    alternativaC: "na 2ª feira, na 4ª feira e na 5ª feira.",
    alternativaD: "na 3ª feira, na 4ª feira e na 5ª feira.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 13,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas lógicos: ordenação e nacionalidades",
    texto: "Em uma viagem pela Europa, quatro mulheres, todas de nacionalidades diferentes, sentaram-se em torno de uma mesa quadrangular, ocupando, cada uma delas, um dos lados desta mesa. Entre elas, há uma irlandesa, uma portuguesa, uma holandesa e uma inglesa. Aline, a mais velha entre elas, é irlandesa. Beatriz está sentada à esquerda da irlandesa e Camila à esquerda da holandesa. Sabe-se, ainda, que Daniela não é portuguesa e está sentada à frente de Beatriz.",
    pergunta: "Sendo assim, pode-se concluir que:",
    alternativaA: "Beatriz é holandesa e Daniela é portuguesa.",
    alternativaB: "Camila é portuguesa e Daniela é inglesa.",
    alternativaC: "Beatriz é portuguesa e Daniela é holandesa.",
    alternativaD: "Camila é inglesa e Daniela é portuguesa.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 14,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Verdades e mentiras",
    texto: "Em uma escola de ensino fundamental, a professora questionou cinco crianças sobre o sumiço do livro de um dos colegas. Quando foram questionadas, as crianças responderam: - Foi a criança E, respondeu a criança A. - Não fui eu, respondeu a criança B. - A criança B está falando a verdade, respondeu a criança C. - Foi a criança A, respondeu a criança D. - A criança D está mentindo, respondeu a criança E. Sabe-se que foi uma destas cinco crianças que escondeu o livro do colega e que uma delas está mentindo.",
    pergunta: "Sendo assim, quem escondeu o livro do colega foi:",
    alternativaA: "a criança B.",
    alternativaB: "a criança C.",
    alternativaC: "a criança D.",
    alternativaD: "a criança E.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 15,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas lógicos: relações de ordem",
    texto: "Em determinado concurso de beleza, há quatro mulheres: uma capixaba, uma carioca, uma gaúcha e uma goiana. Sabe-se que a carioca é mais baixa do que a goiana e a gaúcha é mais alta do que a capixaba, que tem a mesma altura da goiana.",
    pergunta: "Sendo assim, pode-se concluir que:",
    alternativaA: "a carioca é mais alta do que a capixaba.",
    alternativaB: "a capixaba é mais baixa do que goiana.",
    alternativaC: "a gaúcha e a goiana tem a mesma altura.",
    alternativaD: "a goiana é mais baixa do que a gaúcha.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 16,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas lógicos: horários",
    texto: "Huguinho, Zezinho e Luisinho haviam combinado de se encontrar em frente à prefeitura da cidade às 16 horas para andar de bicicleta no parque. Zezinho, que chegou 10 minutos antes do horário marcado, teve que esperar por 25 minutos até a chegada de Huguinho. Huguinho, por sua vez, chegou 5 minutos depois de Luisinho.",
    pergunta: "Sendo assim, pode-se concluir que:",
    alternativaA: "Luisinho chegou às 16h10min.",
    alternativaB: "Huguinho chegou às 16h20min.",
    alternativaC: "Luisinho chegou às 16h20min.",
    alternativaD: "Huguinho chegou às 16h25min.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 17,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conjuntos e porcentagem",
    texto: "Em uma determinada cidade, foi realizada uma pesquisa com os moradores sobre seus hábitos de consumo em relação a produtos de beleza e cuidados pessoais. O estudo revelou que 60% dos moradores usam produtos de cabelo, 45% usam produtos para a pele e 30% usam ambos os tipos de produtos.",
    pergunta: "Sendo assim, a porcentagem de moradores que não usam nenhum tipo de produto de beleza ou cuidados pessoais é:",
    alternativaA: "20%.",
    alternativaB: "25%.",
    alternativaC: "35%.",
    alternativaD: "40%.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 18,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Operações com conjuntos e diagramas",
    texto: "Bruno desenha em seu caderno três figuras geométricas sobrepostas: um retângulo que ele chamou de A, um triângulo que ele chamou de B e uma circunferência que ele chamou de C. Em seguida, Bruno pintou uma das regiões desta figura, conforme mostrado na imagem.",
    pergunta: "Sendo assim, a região marcada com cinza na figura é representada pela operação:",
    alternativaA: "(B − C) ∩ A.",
    alternativaB: "(A ∪ B) ∩ C.",
    alternativaC: "(A ∩ C) − B.",
    alternativaD: "(A ∩ B) − C.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 19,
    ano: 2023,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Fortaleza",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Equações e raciocínio matemático",
    texto: "Determinada empresa pretende construir casas em um terreno com área total de 5.700 m². Para isso, ela irá dividir o terreno em 18 pequenos lotes, alguns com 300 m² de área e outros com 360 m² de área.",
    pergunta: "Sabendo-se que o número de lotes com área de 300 m² é representado por A e o número de lotes com área de 360 m² é representado por B, então o valor da expressão 2A + 3B é:",
    alternativaA: "34",
    alternativaB: "38",
    alternativaC: "41",
    alternativaD: "49",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 11,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Regra de três / proporcionalidade",
    texto: "Numa pizzaria trabalham dois entregadores de pizza que entregam em média um total de 12 pizzas a cada 45 minutos.",
    pergunta: "Quantas pizzas serão entregues em média em um intervalo de uma hora se mais um entregador for contratado?",
    alternativaA: "20.",
    alternativaB: "22.",
    alternativaC: "24.",
    alternativaD: "26.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 12,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Matemática financeira / comparação de preços",
    texto: "Quatro amigas — Adriana, Carla, Lívia e Patrícia — comprariam nove cadernos cada uma, de três tipos: espiral com pauta, brochura com pauta e brochura sem pauta. O enunciado apresenta as quantidades escolhidas por cada amiga e os preços de duas papelarias.",
    pergunta: "Se as amigas efetuaram a compra na papelaria “A casa do caderno”, qual delas teria pagado um valor inferior se tivesse comprado seus cadernos na papelaria “Papel nota 100”?",
    alternativaA: "Lívia.",
    alternativaB: "Carla.",
    alternativaC: "Patrícia.",
    alternativaD: "Adriana.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 13,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Teoria dos conjuntos",
    texto: "Uma pesquisa foi feita com 80 pessoas sobre programas jornalísticos, entrevistas e filmes. São fornecidos os números de pessoas que assistem a cada tipo de programa e as interseções entre os grupos.",
    pergunta: "Quantas pessoas desse grupo NÃO assistem regularly a nenhum desses três tipos de programas?",
    alternativaA: "6.",
    alternativaB: "8.",
    alternativaC: "10.",
    alternativaD: "12.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 14,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Operações com frações",
    texto: "“Dividindo-se quinze por dezessete mais sete obtém-se o mesmo resultado da divisão de cinco por doze _________.”",
    pergunta: "Assinale a alternativa que completa corretamente a afirmativa anterior.",
    alternativaA: "mais um",
    alternativaB: "mais dois",
    alternativaC: "menos seis",
    alternativaD: "menos quatro",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 15,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Além Paraíba/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sequências lógicas",
    texto: "São apresentadas sequências de quatro letras: KIJH, FEDC, VUTS e PONM.",
    pergunta: "Qual das sequências de letras a seguir NÃO tem relação com as demais?",
    alternativaA: "KIJH.",
    alternativaB: "FEDC.",
    alternativaC: "VUTS.",
    alternativaD: "PONM.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 13,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Lógica de Proposições / Negação e Equivalência",
    texto: "Considere a afirmação verdadeira: \"É falso que todo gato tem um dono e sobe no telhado\".",
    pergunta: "Determine a única afirmação equivalente a esta.",
    alternativaA: "Algum gato não tem dono e sobe no telhado.",
    alternativaB: "Todo gato não tem dono e não sobe no telhado.",
    alternativaC: "Algum gato não tem dono e não sobe no telhado.",
    alternativaD: "Algum gato não tem dono ou não sobe no telhado.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 14,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Análise Combinatória / Combinações",
    texto: "Em um torneio de xadrez, cada participante joga uma vez com cada um dos outros participantes. Se o total de partidas jogadas foi de 36...",
    pergunta: "Determine quantos participantes estavam no torneio.",
    alternativaA: "12 participantes.",
    alternativaB: "8 participantes.",
    alternativaC: "9 participantes.",
    alternativaD: "10 participantes.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 15,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Sequências Lógicas",
    texto: "Considere a sequência de números: 2, 5, 11, 20, 32...",
    pergunta: "Calcule qual número deve ser o oitavo termo na sequência.",
    alternativaA: "86.",
    alternativaB: "32.",
    alternativaC: "48.",
    alternativaD: "56.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 16,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Teoria dos Conjuntos / Diagramas de Venn",
    texto: "Em uma escola, 60 estudantes estão matriculados em Matemática, 45 em Física e 30 em Química. Sabe-se que 15 estudantes estão matriculados em Matemática e Física, 10 em Física e Química, e 5 em Matemática e Química. Se 3 estudantes estão matriculados em todos os três cursos...",
    pergunta: "Calcule quantos estudantes, no total, estão matriculados em pelo menos um dos cursos.",
    alternativaA: "112.",
    alternativaB: "105.",
    alternativaC: "108.",
    alternativaD: "110.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 17,
    ano: 2024,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "João Pessoa",
    cargo: "Guarda Civil Municipal",
    assuntoEspecifico: "Problemas Lógicos / Equações",
    texto: "João tem o dobro da idade de Ana. Daqui a 5 anos, a idade de João será o triplo da idade que Ana tinha há 5 anos.",
    pergunta: "Calcule a soma das idades atuais de João e Ana.",
    alternativaA: "72",
    alternativaB: "60",
    alternativaC: "64",
    alternativaD: "68",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 11,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Porcentagem",
    texto: "Um pacote de cereal possui 7% de seu total em zinco. Sabendo que há 28,7 g de zinco neste pacote de cereal...",
    pergunta: "Quantos gramas o pacote possui no total?",
    alternativaA: "410 g.",
    alternativaB: "430 g.",
    alternativaC: "450 g.",
    alternativaD: "470 g.",
    alternativaE: "não tem essa alternativa",
    correta: "A"
  },
  {
    numero: 12,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Operações com Porcentagem / Potenciação",
    texto: "Como teste para trabalhar em um banco, Geraldo foi desafiado a descobrir o valor de x na seguinte equação: x = (10%)².",
    pergunta: "Qual é a resposta do desafio feito a Geraldo?",
    alternativaA: "0,1%.",
    alternativaB: "1%.",
    alternativaC: "20%.",
    alternativaD: "100%.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 13,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lógica de Argumentação / Problema de Verdadeiro ou Falso",
    texto: "Uma mãe chega em casa e encontra um brinquedo quebrado por uma de suas quatro filhas. Ao perguntar, ela recebe as seguintes respostas: • Alice disse que Bárbara quebrou o brinquedo; • Bárbara disse que Camila quebrou o brinquedo; e, • Camila e Débora disseram que não sabem quem quebrou o brinquedo.",
    pergunta: "Se somente a filha culpada está mentindo, quem quebrou o brinquedo?",
    alternativaA: "Alice.",
    alternativaB: "Camila.",
    alternativaC: "Débora.",
    alternativaD: "Bárbara.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 14,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Geometria Plana / Polígonos e Ângulos",
    texto: "A figura apresenta um hexágono regular e dois quadrados em seu exterior em torno de um vértice comum.",
    pergunta: "Quanto vale o ângulo x?",
    alternativaA: "45°.",
    alternativaB: "50°.",
    alternativaC: "60°.",
    alternativaD: "80°.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 15,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Teoria dos Conjuntos / Diferença entre Conjuntos",
    texto: "Sejam os conjuntos: A = {2, 4, 6, 8, 10} e B = {1, 3, 5, 7, 9}.",
    pergunta: "Qual alternativa apresenta o conjunto A - B?",
    alternativaA: "Ø.",
    alternativaB: "{1, 1, 1, 1}.",
    alternativaC: "{1, 3, 5, 7, 9}.",
    alternativaD: "{2, 4, 6, 8, 10}.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 16,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Regra de Três / Proporcionalidade",
    texto: "Adriano é dono de confecção e lucra, diariamente, R$ 260,00 trabalhando 8 horas.",
    pergunta: "Se Adriano ampliar sua carga horária para 10 horas diárias, de quanto será seu lucro em 9 dias?",
    alternativaA: "R$ 2.340,00.",
    alternativaB: "R$ 2.750,00.",
    alternativaC: "R$ 2.925,00.",
    alternativaD: "R$ 3.125,00.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 17,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Análise de Afirmativas Matemáticas",
    texto: "Analise as seguintes afirmativas: I. A raiz da equação 3/2 x + 8 = x é um número natural. II. O número 67.932 é divisível por 3 e por 4. III. Em um triângulo retângulo de catetos 6 cm e 8 cm, o valor da hipotenusa é 10 cm.",
    pergunta: "Estão corretas as afirmativas",
    alternativaA: "I, II e III.",
    alternativaB: "I e II, apenas.",
    alternativaC: "I e III, apenas.",
    alternativaD: "II e III, apenas.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 18,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Geometria Plana / Paratelismo e Ângulos no Triângulo",
    texto: "Na figura a seguir, BC e DE são retas paralelas. Sabendo que o ângulo BCA vale 40° e que o ângulo EDA é 70%...",
    pergunta: "qual é o valor do ângulo DAE?",
    alternativaA: "40°.",
    alternativaB: "50°.",
    alternativaC: "60°.",
    alternativaD: "70°.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 19,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sequências Numéricas",
    texto: "Considere a sequência apresentada: 2, 7, 22, 67, ?",
    pergunta: "Qual alternativa substitui corretamente a interrogação da sequência?",
    alternativaA: "82.",
    alternativaB: "134.",
    alternativaC: "202.",
    alternativaD: "268.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 20,
    ano: 2016,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Rio Acima/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Propriedades dos Números Naturais",
    texto: "Os números a, b, c, d, e e são todos naturais tal que: a × b × c × d × e = 1.",
    pergunta: "Então, o valor de a + b + c + d + e é igual a",
    alternativaA: "0.",
    alternativaB: "1.",
    alternativaC: "2.",
    alternativaD: "5.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 11,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sequências Numéricas",
    texto: "Observe a sequência a seguir: (2816, 704, X, 44, 11).",
    pergunta: "Qual das alternativas substitui corretamente o X?",
    alternativaA: "172.",
    alternativaB: "176.",
    alternativaC: "264.",
    alternativaD: "404.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 12,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Geometria Plana / Hexágono Regular",
    texto: "Considere o seguinte hexágono regular onde foi traçado um segmento de comprimento d em seu interior: Sabendo que a área deste hexágono é de 216√3 cm²...",
    pergunta: "é correto afirmar que o valor de \"d\" é igual a",
    alternativaA: "6 cm.",
    alternativaB: "12 cm.",
    alternativaC: "24 cm.",
    alternativaD: "36 cm.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 13,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Teoria dos Conjuntos / Operações entre Conjuntos",
    texto: "Marina e Rosa estão tentando completar um álbum de figurinhas. A seguir estão representados os números das figurinhas que cada uma possui como conjuntos: A = {1, 2, 3, ..., 30}, M = {1, 3, 7, 9, 8, 6, 16, 28, 19, 21, 25, 27, 4, 30}, R = {2, 1, 5, 8, 18, 14, 23, 22, 26, 15, 17, 11, 23, 13}. M e R são, respectivamente, os conjuntos de figurinhas que Marina e Rosa possuem e A é o conjunto de todas figurinhas do álbum, que vai do 1 até o 30.",
    pergunta: "Qual das alternativas representa o conjunto de figurinhas que faltam para que Marina e Rosa completem o álbum juntando suas figurinhas?",
    alternativaA: "M ∩ R.",
    alternativaB: "M ∪ R.",
    alternativaC: "A - (M ∩ R).",
    alternativaD: "A - (M ∪ R).",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 14,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Equação do 2º Grau / Soma dos Quadrados das Raízes",
    texto: "Em um desafio de matemática, a professora pediu para que os alunos escrevessem seu número da sorte como sendo a soma do quadrado das raízes de uma equação do segundo grau. Nicolas escreveu a seguinte equação: x² + 5x - 6 = 0.",
    pergunta: "Qual é o número da sorte de Nicolas?",
    alternativaA: "6.",
    alternativaB: "7.",
    alternativaC: "12.",
    alternativaD: "13.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 15,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Probabilidade",
    texto: "Considere o labirinto na figura a seguir. A, B e C são portas e 1, 2 e 3 são baús.",
    pergunta: "Uma pessoa que escolhe aleatoriamente uma das três portas segue o caminho e depois um dos três baús tem qual probabilidade de chegar até a estrela (baú 3)?",
    alternativaA: "1/3.",
    alternativaB: "1/6.",
    alternativaC: "1/9.",
    alternativaD: "2/9.",
    alternativaE: "não tem essa alternativa",
    correta: "D"
  },
  {
    numero: 16,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Matemática Financeira / Juros Compostos e Aumentos Sucessivos",
    texto: "Em uma empresa, o salário inicial dos funcionários é de R$ 1.500,00. O salário dos funcionários é aumentado em 10% a cada ano em que o funcionário permanece trabalhando na empresa.",
    pergunta: "Quantos anos, no mínimo, um funcionário deve trabalhar para ultrapassar um salário de R$ 2.300,00?",
    alternativaA: "4 anos.",
    alternativaB: "5 anos.",
    alternativaC: "6 anos.",
    alternativaD: "7 anos.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 17,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas de 1º Grau / Equações",
    texto: "André e Bruno são motoristas e seguem em uma viagem cuja distância a ser percorrida é igual a 426 km. Eles revezam a direção durante a viagem para evitar cansaço excessivo. Sabendo que Bruno é mais experiente, os dois decidiram que a distância a ser percorrida por Bruno na direção deve ser 78 km a mais que a distância conduzida por André.",
    pergunta: "Com base nessas informações, é correto afirmar que a distância a ser percorrida por André é igual a",
    alternativaA: "78 km.",
    alternativaB: "174 km.",
    alternativaC: "252 km.",
    alternativaD: "348 km.",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 18,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Porcentagem / Descontos Sucesivos",
    texto: "Em uma loja de eletrodomésticos, uma geladeira que custava R$ 1.650,00 entrou em promoção e teve seu preço reduzido em 12%. Joana comprou esta geladeira e pagou à vista, o que lhe rendeu um desconto de mais 5%.",
    pergunta: "O valor pago por Joana na geladeira está compreendido entre:",
    alternativaA: "R$ 1.350,00 e R$ 1.360,00.",
    alternativaB: "R$ 1.361,00 e R$ 1.370,00.",
    alternativaC: "R$ 1.371,00 e R$ 1.380,00.",
    alternativaD: "R$ 1.381,00 e R$ 1.390,00.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 19,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Julgamento de Afirmativas Lógico-Matemáticas",
    texto: "Analise as afirmativas, marque V para as verdadeiras e F para as falsas. ( ) Se dois conjuntos A e B são iguais, então, A ∩ B = ∅. ( ) 5.832 é divisível por 3, 4 e 12. ( ) Se x é um número primo, x² também será um número primo.",
    pergunta: "A sequência está correta em",
    alternativaA: "V, V, V.",
    alternativaB: "V, V, F.",
    alternativaC: "F, V, F.",
    alternativaD: "F, F, V.",
    alternativaE: "não tem essa alternativa",
    correta: "C"
  },
  {
    numero: 20,
    ano: 2015,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "São José da Lapa/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Geometria Plana / Área de Trapézio",
    texto: "Considere o trapézio isósceles, cuja área é de 80 cm².",
    pergunta: "Qual é o valor da área em negrito?",
    alternativaA: "12 cm².",
    alternativaB: "15 cm².",
    alternativaC: "25 cm².",
    alternativaD: "30 cm².",
    alternativaE: "não tem essa alternativa",
    correta: "B"
  },
  {
    numero: 11,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Conversão de Unidades e Porcentagem",
    texto: "Dois ciclistas A e B deslocam-se com velocidades iguais a 10 m/s e 40 km/h, respectivamente.",
    pergunta: "Para que o ciclista B passe a se deslocar com a mesma velocidade do ciclista A, ele deverá reduzir sua velocidade em",
    alternativaA: "10%.",
    alternativaB: "15%.",
    alternativaC: "20%.",
    alternativaD: "25%.",
    alternativaE: "30%.",
    correta: "A"
  },
  {
    numero: 12,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Progressão Aritmética (PA)",
    texto: "A soma dos 3 primeiros termos de uma progressão aritmética é 33.",
    pergunta: "Se o vigésimo termo dessa sequência é 101, então sua razão é",
    alternativaA: "4.",
    alternativaB: "5.",
    alternativaC: "6.",
    alternativaD: "7.",
    alternativaE: "8.",
    correta: "B"
  },
  {
    numero: 13,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Probabilidade",
    texto: "Numa bandeja encontram-se 3 tipos de bombons, sendo: 9 de chocolate com nozes, 11 de chocolate com avelã e o restante de chocolate puro.",
    pergunta: "Se, ao retirar um bombom dessa bandeja, a probabilidade de que este seja de chocolate com nozes ou de chocolate puro é de 56%, então o número total de bombons é igual a",
    alternativaA: "24.",
    alternativaB: "25.",
    alternativaC: "26.",
    alternativaD: "28.",
    alternativaE: "30.",
    correta: "B"
  },
  {
    numero: 14,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas de Matemática e Finanças",
    texto: "Anderson guarda R$ 30,00 de uma quantia fixa que recebe diariamente de seu pai e gasta o restante.",
    pergunta: "Se em 45 dias ele gasta R$ 405,00, então o valor total que recebe de seu pai a cada semana é",
    alternativaA: "R$ 266,00.",
    alternativaB: "R$ 273,00.",
    alternativaC: "R$ 280,00.",
    alternativaD: "R$ 287,00.",
    alternativaE: "R$ 294,00.",
    correta: "E"
  },
  {
    numero: 15,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Teoria dos Conjuntos",
    texto: "Considere as sentenças a seguir: I. {A,B,C,D} ≠ {A,B,C} II. {1,2,3,4,5} = {1,1,2,2,3,3,4,4,5,5} III. {q,n,m} ≠ {m,n,q} IV. {x / x é dia da semana que começa com vogal} = ∅ V. {x / x ∈ estação do ano} = {primavera, verão, outono, inverno}",
    pergunta: "Estão corretas apenas as alternativas",
    alternativaA: "I, III e IV.",
    alternativaB: "II, III e IV.",
    alternativaC: "III, IV e V.",
    alternativaD: "I, II, IV e V.",
    alternativaE: "I, III, IV e V.",
    correta: "D"
  },
  {
    numero: 16,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Geometria Plana / Área de Losango",
    texto: "A figura a seguir é composta por losangos cujas diagonais medem 6 cm e 4 cm.",
    pergunta: "A área da figura mede",
    alternativaA: "48 cm².",
    alternativaB: "50 cm².",
    alternativaC: "52 cm².",
    alternativaD: "60 cm².",
    alternativaE: "64 cm².",
    correta: "D"
  },
  {
    numero: 17,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sequências Lógicas Numéricas",
    texto: "24 | 48 | 12 | 24 | 96 | 6 | 48 | 3 | 12 | 192 | 96 | 384 | 192 | ?",
    pergunta: "Assinale a alternativa que completa corretamente a sequência apresentada a seguir:",
    alternativaA: "246.",
    alternativaB: "384.",
    alternativaC: "576.",
    alternativaD: "644.",
    alternativaE: "768.",
    correta: "E"
  },
  {
    numero: 18,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Operações Matemáticas em Cadeia",
    texto: "Considere a sequência de operações a seguir (÷6, -3, +4, x3, ÷4, +? = 723).",
    pergunta: "A soma dos algarismos do número que corresponde à figura ? é",
    alternativaA: "9.",
    alternativaB: "10.",
    alternativaC: "12.",
    alternativaD: "14.",
    alternativaE: "16.",
    correta: "D"
  },
  {
    numero: 19,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Lógica de Associação de Elementos",
    texto: "Três amigas - Juliana, Luciana e Luciene estão em uma lanchonete, mas cada uma está usando um vestido de cor diferente: vermelho, azul e amarelo. Sabe-se que as três estão tomando sucos de sabores diferentes: maçã, morango e laranja. Além disso, sabe-se que: Juliana está de amarelo; Luciene não está bebendo o suco de morango; Luciana está bebendo o suco de laranja; quem está vestindo azul, não está tomando o suco de maçã.",
    pergunta: "Com base nas informações anteriores, é correto afirmar que as meninas vestidas de azul e vermelho, e que estão tomando suco de morango e maçã são, respectivamente,",
    alternativaA: "Juliana, Luciene, Juliana e Luciana.",
    alternativaB: "Luciene, Luciana, Juliana e Juliana.",
    alternativaC: "Juliana, Luciene, Luciana e Juliana.",
    alternativaD: "Luciana, Juliana, Luciana e Luciene.",
    alternativaE: "Luciana, Luciene, Juliana e Luciene.",
    correta: "E"
  },
  {
    numero: 20,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Santo Antônio de Pádua/RJ",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Calendário e Dias da Semana",
    texto: "Se o primeiro dia de um mês começou numa segunda-feira,",
    pergunta: "então NÃO é possível que esse mês tenha terminado num(a)",
    alternativaA: "domingo.",
    alternativaB: "segunda-feira.",
    alternativaC: "terça-feira.",
    alternativaD: "quarta-feira.",
    alternativaE: "quinta-feira.",
    correta: "E"
  },
  {
    numero: 11,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Sistemas de Equações do 1º Grau",
    texto: "Em um cofre encontram-se moedas de R$0,25 e R$0,50, totalizando R$35,00. Retirando-se metade das moedas de R$0,25, o cofre passa a ter R$26,00.",
    pergunta: "Quantas moedas de R$0,50 há nesse cofre?",
    alternativaA: "34",
    alternativaB: "36",
    alternativaC: "39",
    alternativaD: "32",
    alternativaE: "30",
    correta: "A"
  },
  {
    numero: 12,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Números Palíndromos / Padrões Numéricos",
    texto: "(45654, 35853, 10501, 63763, 98289)",
    pergunta: "Qual dos números a seguir NÃO pertence ao grupo?",
    alternativaA: "45654.",
    alternativaB: "35853.",
    alternativaC: "10501.",
    alternativaD: "63763.",
    alternativaE: "98289.",
    correta: "D"
  },
  {
    numero: 13,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Raciocínio Espacial / Padrões Geométricos",
    texto: "Imagens de 5 figuras geométricas compostas por traços e formas.",
    pergunta: "Qual das figuras a seguir NÃO pertence ao grupo?",
    alternativaA: "Figura A",
    alternativaB: "Figura B",
    alternativaC: "Figura C",
    alternativaD: "Figura D",
    alternativaE: "Figura E",
    correta: "C"
  },
  {
    numero: 14,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas com Frações e Equações do 1º Grau",
    texto: "Para armazenar 42 litros de água, foram utilizados dois tipos de garrafas: grandes e pequenas. Nas garrafas grandes foram colocados 2 litros e nas pequenas, meio litro. Se o número de garrafas pequenas corresponde a 2/3 do número de garrafas grandes,",
    pergunta: "então o número total de garrafas utilizadas é",
    alternativaA: "28.",
    alternativaB: "34.",
    alternativaC: "30.",
    alternativaD: "26.",
    alternativaE: "32.",
    correta: "C"
  },
  {
    numero: 15,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Calendário / Anos Bissextos",
    texto: "Num certo ano, o mês de fevereiro apresentou 5 domingos.",
    pergunta: "Em que dia da semana começou esse referido ano?",
    alternativaA: "Quinta-feira.",
    alternativaB: "Sábado.",
    alternativaC: "Segunda-feira.",
    alternativaD: "Sexta-feira.",
    alternativaE: "Terça-feira.",
    correta: "D"
  },
  {
    numero: 16,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Velocidade Média / Regra de Três",
    texto: "A distância entre duas cidades foi percorrida em 3 horas com velocidade constante. Se a viagem teve início às 15 horas e 15 minutos e às 17 horas já havia sido percorrido 140 km,",
    pergunta: "então a distância entre as duas cidades é de",
    alternativaA: "220 km.",
    alternativaB: "240 km.",
    alternativaC: "260 km.",
    alternativaD: "200 km.",
    alternativaE: "280 km.",
    correta: "B"
  },
  {
    numero: 17,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Probabilidade e Análise Combinatória",
    texto: "Numa loja de doces são vendidos bombons com recheios de morango, nozes, cereja e coco.",
    pergunta: "Qual a probabilidade de que uma pessoa que deseja comprar 2 bombons escolha recheios diferentes?",
    alternativaA: "25%",
    alternativaB: "40%",
    alternativaC: "50%",
    alternativaD: "60%",
    alternativaE: "75%",
    correta: "E"
  },
  {
    numero: 18,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Progressão Geométrica (PG) / Menor Termo Inteiro",
    texto: "Seja a sequência (6144, 3072, 1536, 768,...).",
    pergunta: "O menor termo inteiro dessa sequência é",
    alternativaA: "6.",
    alternativaB: "9.",
    alternativaC: "3.",
    alternativaD: "4.",
    alternativaE: "8.",
    correta: "C"
  },
  {
    numero: 19,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Teoria dos Conjuntos / Diagramas de Venn",
    texto: "A soma dos elementos da interseção entre os conjuntos A e B é igual a 19 e a soma dos elementos da interseção entre os conjuntos B e C é igual a 17.",
    pergunta: "O produto W . Y é",
    alternativaA: "63.",
    alternativaB: "48.",
    alternativaC: "56.",
    alternativaD: "54.",
    alternativaE: "72.",
    correta: "D"
  },
  {
    numero: 20,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Moju/PA",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Frações e Equivalência",
    texto: "Um bolo foi dividido em 3 pedaços, sendo que os dois menores correspondem a 1/5 e 3/10 do bolo todo.",
    pergunta: "O maior desses 3 pedaços corresponde a uma fração equivalente a",
    alternativaA: "1/4.",
    alternativaB: "1/2.",
    alternativaC: "2/3.",
    alternativaD: "3/5.",
    alternativaE: "2/5.",
    correta: "B"
  },
  {
    numero: 11,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Raciocínio Temporal / Dias dos Meses",
    texto: "Márcio realizou viagens de negócio em meses alternados durante um certo ano. Se tais meses, na sequência em que ocorreram, tiveram 31, 31, 30 e 30 dias,",
    pergunta: "conclui-se que, nesse ano, Márcio viajou no mês de",
    alternativaA: "junho.",
    alternativaB: "março.",
    alternativaC: "agosto.",
    alternativaD: "julho.",
    alternativaE: "janeiro.",
    correta: "C"
  },
  {
    numero: 12,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Equação do 1º Grau / Problemas Financeiros",
    texto: "Numa conta bancária foram realizadas, em um mês, 3 movimentações: um saque; um depósito correspondente ao dobro do saque efetuado anteriormente; um novo saque igual a 1/3 do valor depositado no mês. Se o saldo inicial dessa conta era de R$ 1.650,00 e após as referidas movimentações a conta ficou com um saldo de R$ 1.800,00,",
    pergunta: "então o valor do primeiro saque efetuado foi de",
    alternativaA: "R$ 420,00.",
    alternativaB: "R$ 360,00.",
    alternativaC: "R$ 390,00.",
    alternativaD: "R$ 450,00.",
    alternativaE: "R$ 480,00.",
    correta: "D"
  },
  {
    numero: 13,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Análise Combinatória / Arranjo Simples",
    texto: "Numa sala de informática com 6 computadores disponíveis, encontram-se 4 pessoas trabalhando, cada uma em um dos aparelhos.",
    pergunta: "De quantas maneiras essas pessoas podem estar ocupando os computadores existentes nessa sala?",
    alternativaA: "360",
    alternativaB: "240",
    alternativaC: "120",
    alternativaD: "180",
    alternativaE: "300",
    correta: "A"
  },
  {
    numero: 14,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Equação do 1º Grau e Álgebra",
    texto: "Sejam 4 baldes com quantidades de água representadas em função de x: A = 2x - 4, B = (3x + 2)/2, C = x + 5, D = 3x - 10. Se o volume total de água contida nesses baldes totaliza 52 litros,",
    pergunta: "então, em quais deles as quantidades de água são iguais?",
    alternativaA: "A e D",
    alternativaB: "B e D",
    alternativaC: "A e C",
    alternativaD: "B e C",
    alternativaE: "C e D",
    correta: "C"
  },
  {
    numero: 15,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Problemas de Matemática e Frações",
    texto: "Em 2 estojos encontram-se um total de 48 lápis. Considere que se forem transferidos 1/3 do número de lápis de um dos estojos para o outro, os mesmos ficarão com a mesma quantidade de lápis.",
    pergunta: "Assim, a diferença entre o número de lápis dos estojos com mais e menos lápis é igual a",
    alternativaA: "18.",
    alternativaB: "24.",
    alternativaC: "20.",
    alternativaD: "16.",
    alternativaE: "28.",
    correta: "B"
  },
  {
    numero: 16,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Calendários / Análise de Dias da Semana",
    texto: "Num certo ano, o mês de agosto teve 5 sextas-feiras, 5 sábados e 5 domingos.",
    pergunta: "Dessa forma, o mês que o antecedeu começou num(a)",
    alternativaA: "domingo.",
    alternativaB: "segunda-feira.",
    alternativaC: "terça-feira.",
    alternativaD: "quarta-feira.",
    alternativaE: "quinta-feira.",
    correta: "D"
  },
  {
    numero: 17,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Raciocínio Visual / Padrões de Rotação",
    texto: "5 figuras divididas em retângulos contendo os números 2 e 3 em diferentes orientações.",
    pergunta: "Qual das figuras a seguir é diferente das demais?",
    alternativaA: "Figura A",
    alternativaB: "Figura B",
    alternativaC: "Figura C",
    alternativaD: "Figura D",
    alternativaE: "Figura E",
    correta: "E"
  },
  {
    numero: 18,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Análise Combinatória / Fatorial e Anagramas",
    texto: "Sejam x o número de anagramas de uma palavra sem letras repetidas e y o número de anagramas de uma outra palavra que também não apresenta letras repetidas. Se x + y = 744,",
    pergunta: "então a soma do número de letras dessas duas palavras é",
    alternativaA: "10.",
    alternativaB: "9.",
    alternativaC: "12.",
    alternativaD: "8.",
    alternativaE: "11.",
    correta: "E"
  },
  {
    numero: 19,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Cinemática / Movimento Uniforme",
    texto: "Um pedestre e um ciclista começam a atravessar, simultaneamente, uma ponte. Considere que o ciclista tem o dobro da velocidade do pedestre e que a ponte tem 1,2 km de extensão.",
    pergunta: "Qual é a velocidade do pedestre, sendo que o ciclista sai da ponte com 2,5 minutos de vantagem?",
    alternativaA: "5,0 m/s",
    alternativaB: "4,8 m/s",
    alternativaC: "4,5 m/s",
    alternativaD: "5,5 m/s",
    alternativaE: "4,0 m/s",
    correta: "A"
  },
  {
    numero: 20,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Municipal",
    assuntoEspecifico: "Teoria dos Conjuntos / Operações com Conjuntos",
    texto: "Sejam os conjuntos A = {3, 5, 7, 8, 10, 13}, B = {1, 5, 6, 9, 11, 12} e C = {4, 7, 8, 9, 12, 13}.",
    pergunta: "Qual dos conjuntos a seguir apresenta o maior número de elementos?",
    alternativaA: "B - C",
    alternativaB: "A ∩ C",
    alternativaC: "A - B",
    alternativaD: "B ∩ C",
    alternativaE: "C - A",
    correta: "A"
  },
  {
    numero: 11,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Teoria dos Conjuntos / Problemas de Contagem",
    texto: "Em uma certa escola foi distribuído entre os alunos 170 balas de sabores cereja e morango. Sabendo-se que 80 alunos receberam balas de cereja e 25 alunos receberam balas dos dois sabores,",
    pergunta: "então, o número de alunos que recebeu balas de morango é",
    alternativaA: "80.",
    alternativaB: "90.",
    alternativaC: "115.",
    alternativaD: "125.",
    alternativaE: "145.",
    correta: "C"
  },
  {
    numero: 12,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Raciocínio Lógico e Padrões de Código",
    texto: "Dessa forma, se em 06 de setembro de 2013, Alberto for a 10ª pessoa a protocolar um requerimento nesse órgão,",
    pergunta: "então receberá o protocolo de número",
    alternativaA: "409061310.",
    alternativaB: "406091013.",
    alternativaC: "906041312.",
    alternativaD: "409061013.",
    alternativaE: "940060113.",
    correta: "D"
  },
  {
    numero: 13,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Matemática Financeira e Porcentagem",
    texto: "Pedro adquiriu uma geladeira e um forno elétrico por R$1.700,00... Pedro pagou, com o desconto, R$1.860,00 pela compra dos três produtos e o valor do forno elétrico e da lava-louças juntos somaram R$900,00.",
    pergunta: "Então, o valor dos três produtos sem o desconto era",
    alternativaA: "R$ 1.960,00.",
    alternativaB: "R$ 2.080,00.",
    alternativaC: "R$ 2.100,00.",
    alternativaD: "R$ 2.240,00.",
    alternativaE: "R$ 2.400,00.",
    correta: "C"
  },
  {
    numero: 14,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Princípio Multiplicativo / Árvore de Possibilidades",
    texto: "Petika, uma cadela poodle, gera três fêmeas e um macho. Cada fêmea gera, a seu tempo, também três fêmeas e um macho, sendo que cada macho gera, como descendente, duas fêmeas e dois machos...",
    pergunta: "Se cada macho e cada fêmea gerarem seus descendentes nessas mesmas proporções, então o número de \"bisnetos\" fêmeas que Petika terá é",
    alternativaA: "10.",
    alternativaB: "11.",
    alternativaC: "21.",
    alternativaD: "33.",
    alternativaE: "43.",
    correta: "D"
  },
  {
    numero: 15,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Sistemas de Equações do 1º Grau",
    texto: "O dobro da idade de Fabrício somado ao triplo da idade de sua irmã, Mariana, é igual à idade de sua avó, Gertrudes. Sabendo-se que a soma das idades de Fabrício e Mariana é igual a 34 e que sua avó completará 85 anos somente na próxima semana,",
    pergunta: "então a razão entre a idade de Fabrício e a idade de Mariana é",
    alternativaA: "2.",
    alternativaB: "5/3.",
    alternativaC: "7/9.",
    alternativaD: "9/7.",
    alternativaE: "9/8.",
    correta: "E"
  },
  {
    numero: 16,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Sequências Lógicas Numéricas",
    texto: "Considere a seguinte sequência numérica: 1, 2, 6, 15, 31, 56, 92, 141,...",
    pergunta: "O 10º termo da sequência é",
    alternativaA: "190.",
    alternativaB: "205.",
    alternativaC: "225.",
    alternativaD: "256.",
    alternativaE: "286.",
    correta: "E"
  },
  {
    numero: 17,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Teoria dos Conjuntos e Lógica Simbólica",
    texto: "Se x ∈ A, A ⊂ B, A ∩ C = {y}, C ⊂ B, z ∈ C, w ∈ B e os conjuntos A e C possuem, no máximo, dois elementos,",
    pergunta: "é correto afirmar que",
    alternativaA: "A - C = {x}.",
    alternativaB: "A ∪ B = {x, y, w}.",
    alternativaC: "o conjunto C possui três elementos.",
    alternativaD: "o elemento y pertence ao conjunto C.",
    alternativaE: "o elemento w pertence ao conjunto A ou C.",
    correta: "D"
  },
  {
    numero: 18,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Análise Combinatória / Arranjo Simples",
    texto: "O técnico da seleção brasileira de futebol convoca, geralmente, três goleiros sendo o titular, o primeiro reserva e o segundo reserva, nessa ordem.",
    pergunta: "Assim, dentre os 10 melhores goleiros brasileiros da atualidade, o número de convocações distintas que se pode realizar é",
    alternativaA: "120.",
    alternativaB: "240.",
    alternativaC: "360.",
    alternativaD: "504.",
    alternativaE: "720.",
    correta: "E"
  },
  {
    numero: 19,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Geometria Plana / Estimativa de Área",
    texto: "A figura representa o projeto de uma piscina infantil. Considerando cada bloco como um quadrado de lado 1 m, como mostrado na figura,",
    pergunta: "então, a área aproximada da piscina, em m² é",
    alternativaA: "16.",
    alternativaB: "26.",
    alternativaC: "30.",
    alternativaD: "36.",
    alternativaE: "44.",
    correta: "B"
  },
  {
    numero: 20,
    ano: 2013,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Lagoa da Confusão/TO",
    cargo: "Guarda Municipal e Ambiental",
    assuntoEspecifico: "Sistemas de Equações e Raciocínio Álbrico",
    texto: "Uma fábrica produz bicicletas, triciclos e skates tradicionais. No mês de junho deste ano, a fábrica alcançou um total de 100 unidades produzidas e, com isso, necessitou de um total de 310 rodas... Considerando que o número de bicicletas produzidas foi o dobro do número de triciclos,",
    pergunta: "a diferença entre o número de skates e o número de bicicletas produzidos é",
    alternativaA: "5.",
    alternativaB: "10.",
    alternativaC: "18.",
    alternativaD: "28.",
    alternativaE: "46.",
    correta: "A"
  },
  {
    numero: 11,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Sistemas de Equações do 1º Grau",
    texto: "Num cofre encontram-se apenas moedas de R$0,25 e R$0,50 centavos, totalizando 77 moedas. Se o número de moedas de R$0,25 é igual a 2/5 do número de moedas de R$0,50,",
    pergunta: "então a quantia contida neste cofre é",
    alternativaA: "R$ 29,00.",
    alternativaB: "R$ 35,00.",
    alternativaC: "R$ 33,00.",
    alternativaD: "R$ 31,00.",
    alternativaE: "R$ 37,00.",
    correta: "D"
  },
  {
    numero: 12,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Escala Cartográfica / Proporção",
    texto: "A maquete de um prédio apresenta 40 cm de altura. Se a altura real do prédio é de 150 m,",
    pergunta: "então a escala utilizada para a construção da maquete é",
    alternativaA: "1/125.",
    alternativaB: "1/60.",
    alternativaC: "1/375.",
    alternativaD: "1/600.",
    alternativaE: "1/3750.",
    correta: "C"
  },
  {
    numero: 13,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Progressão Geométrica (PG)",
    texto: "Seja a sequência \"x, 68, y, 1088\" uma progressão geométrica crescente.",
    pergunta: "Então, a soma dos valores de x e y é",
    alternativaA: "324.",
    alternativaB: "306.",
    alternativaC: "289.",
    alternativaD: "246.",
    alternativaE: "345.",
    correta: "C"
  },
  {
    numero: 14,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Raciocínio Espacial e Geométrico",
    texto: "Cinco opções de triângulos apresentando divisões internas e marcações angulares.",
    pergunta: "Qual dos triângulos a seguir é DIFERENTE dos demais?",
    alternativaA: "Figura A",
    alternativaB: "Figura B",
    alternativaC: "Figura C",
    alternativaD: "Figura D",
    alternativaE: "Figura E",
    correta: "B"
  },
  {
    numero: 15,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Análise Combinatória / Combinação Simples",
    texto: "Num supermercado são vendidos 18 tipos de sabonetes, sendo 6 deles de base vegetal.",
    pergunta: "De quantos modos é possível comprar 4 sabonetes diferentes, sendo que pelo menos 1 deles seja de base vegetal?",
    alternativaA: "1.728",
    alternativaB: "2.565",
    alternativaC: "1.280",
    alternativaD: "2.125",
    alternativaE: "1.864",
    correta: "B"
  },
  {
    numero: 16,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Teoria dos Conjuntos / Interseção de Conjuntos",
    texto: "Sejam os conjuntos A = {5, 7, 8, 11, 14, 15, 18, 19, 20}; B = {4, 6, 7, 8, 10, 11, 12, 14, 16, 18, 19}; C = {4, 7, 8, 9, 11, 13, 14, 16, 18, 19, 20} e D o conjunto formado pelos números pares do conjunto A ∩ B ∩ C.",
    pergunta: "Logo, a soma dos elementos do conjunto D é",
    alternativaA: "40.",
    alternativaB: "56.",
    alternativaC: "32.",
    alternativaD: "38.",
    alternativaE: "44.",
    correta: "A"
  },
  {
    numero: 17,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Probabilidade e Proporções",
    texto: "Numa caixa, encontram-se 45 bolas de 3 cores diferentes. Se a probabilidade de se retirar uma bola azul é igual a 40% e de se retirar uma bola amarela é igual ao dobro da probabilidade de se retirar vermelha,",
    pergunta: "então a diferença entre o número de bolas azuis e vermelhas é",
    alternativaA: "6.",
    alternativaB: "12.",
    alternativaC: "8.",
    alternativaD: "9.",
    alternativaE: "15.",
    correta: "D"
  },
  {
    numero: 18,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Sequências Lógicas e Padrões",
    texto: "Considere a sequência: 2 3 V T 3 5 T C 4 ? Q S 5 9 C ? .",
    pergunta: "Os valores que substituem corretamente as interrogações são, respectivamente,",
    alternativaA: "6 / Q",
    alternativaB: "7 / N",
    alternativaC: "8 / U",
    alternativaD: "4 / D",
    alternativaE: "2 / T",
    correta: "C"
  },
  {
    numero: 19,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Calendário e Raciocínio Temporal",
    texto: "Verificou-se com o auxílio de um calendário que um certo mês de 30 dias teve, na última semana que compartilhou com o mês posterior a ele, apenas 4 dias.",
    pergunta: "Em que dia da semana começou o mês anterior ao mês em questão?",
    alternativaA: "Sábado.",
    alternativaB: "Domingo.",
    alternativaC: "Sexta-feira.",
    alternativaD: "Quinta-feira.",
    alternativaE: "Segunda-feira.",
    correta: "E"
  },
  {
    numero: 20,
    ano: 2012,
    banca: "IDECAN",
    disciplina: "Raciocínio Lógico",
    cidade: "Matias Cardoso/MG",
    cargo: "Guarda Parque",
    assuntoEspecifico: "Geometria Plana / Perímetro e Área",
    texto: "O quadrado a seguir apresenta perímetro igual a 32 cm.",
    pergunta: "A área da região em negrito, no seu interior, corresponde a",
    alternativaA: "40 cm².",
    alternativaB: "36 cm².",
    alternativaC: "50 cm².",
    alternativaD: "45 cm².",
    alternativaE: "46 cm².",
    correta: "A"
  },
  /* atualidades  */
  {
    "numero": 1,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Política Internacional: COP30 em Belém",
    "texto": "“A Amazônia será o centro das atenções globais durante a realização da 30ª Conferência das Nações Unidas sobre Mudanças Climáticas (COP30). O evento mobiliza investimentos pesados em infraestrutura, hotelaria e mobilidade na capital paraense.”",
    "pergunta": "Assinale a alternativa correta sobre o local e a relevância da realização da COP30 no Brasil:",
    "alternativaA": "Trata-se da primeira vez que uma conferência do clima da ONU ocorre na região da Floresta Amazônica, reforçando o papel geopolítico do Brasil no combate ao desmatamento.",
    "alternativaB": "O evento será realizado de forma compartilhada entre Belém e Manaus para mitigar os gargalos de infraestrutura hoteleira das capitais.",
    "alternativaC": "A COP30 deliberará exclusivamente sobre tratados de navegação comercial na bacia hidrográfica do Rio Amazonas.",
    "alternativaD": "O encontro reunirá apenas os países integrantes da OTAN para debater segurança alimentar na América do Sul.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 2,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Conflito no Oriente Médio: Faixa de Gaza",
    "texto": "“O cenário humanitário na Faixa de Gaza continuou no centro dos debates do Conselho de Segurança da ONU e de organismos internacionais ao longo dos últimos meses, exigindo constantes negociações para cessar-fogo e envio de ajuda.”",
    "pergunta": "Sobre os desdobramentos geopolíticos e humanitários recentes no Oriente Médio, é correto afirmar que:",
    "alternativaA": "O conflito provocou o fim imediato de todos os acordos comerciais entre o Brasil e o bloco de países do Oriente Médio.",
    "alternativaB": "A crise gerou intensas discussões internacionais sobre o reconhecimento oficial do Estado da Palestina e a garantia de corredores humanitários para civis.",
    "alternativaC": "A ONU aprovou por unanimidade a intervenção militar direta de tropas de paz da Europa no território de Gaza.",
    "alternativaD": "Todos os países vizinhos fecharam suas fronteiras de forma definitiva, impedindo a atuação da Cruz Vermelha na região.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 3,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Política Econômica: Reforma Tributária",
    "texto": "“Após a promulgação da Emenda Constitucional da Reforma Tributária, o Congresso Nacional concentrou esforços na votação das leis complementares que regulamentam a transição do sistema produtivo e a criação do Imposto sobre Bens e Serviços (IBS) e da Contribuição sobre Bens e Serviços (CBS).”",
    "pergunta": "A instituição do IVA (Imposto sobre Valor Agregado) Dual no Brasil tem como principal objetivo:",
    "alternativaA": "Substituir todos os tributos federais, estaduais e municipais por uma alíquota única de imposto sobre a renda das pessoas físicas.",
    "alternativaB": "Extinguir a cobrança do IPTU e do IPVA em todo o território nacional para desonerar as famílias de baixa renda.",
    "alternativaC": "Simplificar a tributação sobre o consumo, unificando tributos federais (PIS, Cofins, IPI) e subnacionais (ICMS, ISS).",
    "alternativaD": "Isentar totalmente a cobrança de impostos sobre o setor de prestação de serviços bancários e financeiros.",
    "alternativaE": "não tem essa alternativa",
    "correta": "C"
  },
  {
    "numero": 4,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Tecnologia e Inteligência Artificial: Regulamentação",
    "texto": "“A expansão rápida de ferramentas de Inteligência Artificial generativa levou governos ao redor do mundo e o Congresso Brasileiro a intensificarem a criação de marcos regulatórios para mitigar riscos de desinformação e violação de direitos autorais.”",
    "pergunta": "No tocante aos debates sobre a regulamentação da IA no Brasil, assinale a opção correta:",
    "alternativaA": "O Projeto de Lei visa proibir o uso de Inteligência Artificial em qualquer setor industrial ou educacional no país.",
    "alternativaB": "A legislação foca no estabelecimento de regras de transparência, proteção de dados pessoais e responsabilidade no uso de sistemas de alto risco.",
    "alternativaC": "Ficou estabelecido que todas as empresas de tecnologia deverão pagar uma taxa fixa ao Governo Federal para cada pesquisa realizada via IA.",
    "alternativaD": "A regulamentação do uso de IA no Brasil é de responsabilidade exclusiva das Forças Armadas.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 5,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Meio Ambiente: Transição Energética e Combustíveis do Futuro",
    "texto": "“O Brasil sancionou a Lei do Combustível do Futuro, visando impulsionar a mobilidade sustentável e a descarbonização da matriz de transportes por meio do incentivo a biocombustíveis e hidrogênio verde.”",
    "pergunta": "Sobre as diretrizes da política de biocombustíveis e transição energética no Brasil, é correto afirmar que a legislação prevê:",
    "alternativaA": "A substituição imediata e obrigatória de toda a frota de veículos a gasolina por carros 100% elétricos importados.",
    "alternativaB": "O aumento gradativo das misturas obrigatórias de biodiesel ao diesel e de etanol anidro à gasolina, além do incentivo ao SAF (combustível sustentável de aviação).",
    "alternativaC": "O banimento definitivo da produção de álcool combustível derivado da cana-de-açúcar no Centro-Sul.",
    "alternativaD": "A proibição de investimentos privados na produção de hidrogênio verde em portos nordestinos.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 6,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Bloco Internacional: Expansão do BRICS",
    "texto": "“O BRICS passou por um momento histórico recente ao oficializar a entrada de novos membros plenos, alterando a dinâmica de representatividade do Sul Global na economia e na política internacional.”",
    "pergunta": "Entre os países que integraram o processo recente de expansão e consolidação da nova composição do BRICS, destacam-se:",
    "alternativaA": "Egito, Etiópia, Irã e Emirados Árabes Unidos.",
    "alternativaB": "Alemanha, França, Itália e Japão.",
    "alternativaC": "México, Canadá, Austrália e Nova Zelândia.",
    "alternativaD": "Argentina, Chile, Colômbia e Uruguai.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 7,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Economia e Infraestrutura: Programa de Aceleração do Crescimento (Novo PAC)",
    "texto": "“O Novo PAC direciona investimentos bilionários em obras públicas de infraestrutura, transição energética e inclusão digital, com foco em parcerias com os estados e municípios.”",
    "pergunta": "Assinale a alternativa que indica um dos eixos estratégicos priorizados pelo Novo PAC no Nordeste brasileiro:",
    "alternativaA": "A construção de usinas nucleares de grande porte em todas as capitais nordestinas.",
    "alternativaB": "A duplicação de rodovias federais, obras de segurança hídrica (Transposição do São Francisco) e expansão da energia solar e eólica.",
    "alternativaC": "A privatização total dos açudes públicos estaduais e federais.",
    "alternativaD": "O encerramento definitivo das operações do Porto do Pecém e do Porto de Suape.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 8,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Segurança Pública e Crime Organizado",
    "texto": "“A PEC da Segurança Pública foi levada ao debate entre o Governo Federal e os governadores visando conferir status constitucional ao Sistema Único de Segurança Pública (SUSP) e ampliar a atuação de órgãos federais.”",
    "pergunta": "Em relação às propostas debatidas para a atualização da arquitetura da segurança pública brasileira, destaca-se:",
    "alternativaA": "A extinção das Polícias Militares e Civis estaduais e a criação de uma Polícia Municipal única.",
    "alternativaB": "O fortalecimento do papel da Polícia Rodoviária Federal (PRF) no policiamento ostensivo em hidrovias e ferrovias, além da constitucionalização do SUSP.",
    "alternativaC": "A transferência do controle operacional de todas as Guarda Municipais diretamente para o Ministério da Defesa.",
    "alternativaD": "A proibição do uso de tecnologia de monitoramento por câmeras nas vias públicas estaduais.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 9,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Clima e Eventos Extremos: Tragédia no RS e Defesa Civil",
    "texto": "“Os eventos climáticos extremos que atingiram o Rio Grande do Sul provocaram reflexos de grande magnitude na economia nacional, reacendendo alertas para a gestão de riscos de desastres.”",
    "pergunta": "Como resposta do poder público à tragédia das enchentes e prevenção de novos desastres ambientais no Brasil, foi criada/destacada:",
    "alternativaA": "A Secretaria Extraordinária para Apoio à Reconstrução do Rio Grande do Sul e a discussão de diretrizes de adaptação climática nas cidades.",
    "alternativaB": "A proibição imediata da atividade agrícola em toda a Região Sul do país.",
    "alternativaC": "A dissolução do Centro Nacional de Monitoramento e Alertas de Desastres Naturais (Cemaden).",
    "alternativaD": "A obrigatoriedade de evacuação permanente de todas as cidades ribeirinhas brasileiras.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 10,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Saúde Pública: Enfrentamento às Arboviroses (Dengue)",
    "texto": "“Em resposta aos picos históricos de casos de dengue no Brasil, o Ministério da Saúde incorporou novas tecnologias de prevenção e ampliou a vacinação na rede pública.”",
    "pergunta": "Sobre as estratégias de combate à dengue adotadas no SUS nos últimos meses, assinale a opção correta:",
    "alternativaA": "O Brasil tornou-se o primeiro país do mundo a oferecer a vacina contra a dengue no sistema público de saúde para um público-alvo prioritário.",
    "alternativaB": "A OMS declarou a erradicação completa do mosquito Aedes aegypti em toda a América Latina.",
    "alternativaC": "O Governo Federal suspendeu a fabricação e aplicação de qualquer inseticida em território nacional.",
    "alternativaD": "A vacina da dengue passou a ser exigida obrigatoriamente para a emissão do passaporte de cidadãos brasileiros.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 11,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Política Monetária e Inflação: Taxa SELIC",
    "texto": "“As reuniões do Comitê de Política Monetária (Copom) do Banco Central do Brasil continuam atraindo as atenções dos agentes do mercado financeiro e do governo devido às oscilações da taxa básica de juros (SELIC).”",
    "pergunta": "A condução da taxa SELIC pelo Copom tem como objetivo primário estipulado pelo regime monetário brasileiro:",
    "alternativaA": "Controlar a taxa de câmbio para manter o dólar cotado abaixo de R$ 3,00.",
    "alternativaB": "Cumprir as metas para a inflação estabelecidas pelo Conselho Monetário Nacional (CMN).",
    "alternativaC": "Definir o valor exato do salário mínimo a ser pago pelos empresários privados.",
    "alternativaD": "Financiar diretamente as obras públicas do Ministério dos Transportes.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 12,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Relações Internacionais: Cúpula do G20 no Brasil",
    "texto": "“O Brasil assumiu a presidência rotativa do G20 e sediou a Cúpula de Líderes no Rio de Janeiro, definindo prioridades globais marcantes para o mandato brasileiro.”",
    "pergunta": "Entre as principais bandeiras defendidas pela diplomacia brasileira no comando do G20, destacam-se:",
    "alternativaA": "A defesa da ampliação das tarifas alfandegárias entre todos os países desenvolvidos.",
    "alternativaB": "A criação da Aliança Global contra a Fome e a Pobreza e a mobilização global contra as mudanças climáticas.",
    "alternativaC": "A proposta de criação de uma moeda única para ser adotada em todos os continentes do planeta.",
    "alternativaD": "O cancelamento automático de todas as dívidas públicas externas dos países da Europa Ocidental.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 13,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Mercado de Trabalho e Direitos: Escala 6x1",
    "texto": "“A mobilização social e política em torno da Proposta de Emenda à Constituição (PEC) que propõe o fim da jornada de trabalho de 6 dias de trabalho por 1 de descanso (escala 6x1) ganhou forte repercussão na imprensa e no Congresso.”",
    "pergunta": "A proposta de alteração da jornada máxima de trabalho semanal contida nos debates da PEC da Escala 6x1 visa:",
    "alternativaA": "Reduzir a limitação constitucional de 44 horas semanais sem redução salarial, promovendo melhores condições de vida ao trabalhador.",
    "alternativaB": "Aumentar a carga horária semanal para até 60 horas para os trabalhadores do setor comercial.",
    "alternativaC": "Proibir o trabalho presencial durante os fins de semana em todas as indústrias do país.",
    "alternativaD": "Eliminar o direito ao descanso semanal remunerado previdenciário.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 14,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Política Educacional: Novo Ensino Médio",
    "texto": "“Após debates entre o Ministério da Educação (MEC), professores e estudantes, foi sancionada a lei que reformula as diretrizes do Ensino Médio no país.”",
    "pergunta": "A principal alteração estabelecida pela reformulação do Ensino Médio em relação à carga horária foi:",
    "alternativaA": "A ampliação da carga horária da Formação Geral Básica (FGB) para 2.400 horas, garantindo mais disciplinas obrigatórias.",
    "alternativaB": "A eliminação total das disciplinas de Matemática e Língua Portuguesa nos dois últimos anos da escola.",
    "alternativaC": "A obrigatoriedade do ensino à distância (EAD) em 80% das aulas da rede pública.",
    "alternativaD": "A redução do tempo total de permanência dos alunos na escola para apenas duas horas diárias.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 15,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Tecnologia e Apostas On-line: Regulamentação das \"Bets\"",
    "texto": "“O crescimento descontrolado das plataformas de apostas esportivas e jogos on-line levou o Governo Federal a implementar regras rígidas de tributação, fiscalização e combate ao vício (pedagogia do jogo responsável).”",
    "pergunta": "Dentre as medidas de regulamentação do mercado de apostas virtuais (Bets) estabelecidas pelo Ministério da Fazenda, inclui-se:",
    "alternativaA": "A liberação irrestrita do uso de cartão de crédito e benefícios sociais como o Bolsa Família para a realização de apostas.",
    "alternativaB": "O banimento de empresas registradas e a proibição total do patrocínio de apostas em clubes de futebol.",
    "alternativaC": "A exigência de outorga governamental para operadoras autorizadas (domínio .bet.br) e a proibição do uso de cartão de crédito para apostar.",
    "alternativaD": "A isenção total de impostos para empresas estrangeiras que operam o jogo do bicho on-line.",
    "alternativaE": "não tem essa alternativa",
    "correta": "C"
  },
  {
    "numero": 16,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Geopolítica das Américas: Eleições nos EUA",
    "texto": "“O resultado das eleições presidenciais nos Estados Unidos trouxe profundas implicações para o comércio global, a transição energética e os acordos multilaterais.”",
    "pergunta": "A postura protecionista na política externa norte-americana costuma impactar os países emergentes por meio de:",
    "alternativaA": "Aumento da imposição de tarifas sobre produtos importados e renegociações de acordos bilaterais de comércio.",
    "alternativaB": "Doação irrestrita de insumos tecnológicos sem exigência de contrapartida comercial.",
    "alternativaC": "Adoção imediata do Real brasileiro como moeda reserva do Banco Central dos EUA.",
    "alternativaD": "Extinção de qualquer visto de entrada para cidadãos de países da América do Sul.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 17,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Cidades e Meio Ambiente: Crise hídrica e queimadas",
    "texto": "“No segundo semestre de 2024 e início de 2025, o Brasil enfrentou uma das secas mais severas da sua história recente, afetando o nível dos reservatórios e impulsionando focos de incêndio no Pantanal, Amazônia e Cerrado.”",
    "pergunta": "Entre os impactos diretos da seca severa e das queimadas prolongadas na vida dos cidadãos urbanos no Brasil, destaca-se:",
    "alternativaA": "O acionamento de bandeiras tarifárias vermelhas na conta de luz e a degradação da qualidade do ar nas grandes metrópoles.",
    "alternativaB": "A redução automática dos preços dos alimentos da cesta básica nos supermercados.",
    "alternativaC": "O congelamento da cobrança da tarifa de água encanada em todos os municípios em situação de emergência.",
    "alternativaD": "A paralisação definitiva de todas as rotas aéreas comerciais no interior do país.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 18,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Direitos Humanos e Inclusão: Protocolo Não se Cale",
    "texto": "“Visando combater a violência contra a mulher e o assédio em espaços públicos e de lazer, estabelecimentos comerciais passaram a cumprir protocolos específicos previstos na legislação.”",
    "pergunta": "O protocolo 'Não se Cale' / Lei 'Não é Não' tem como diretriz principal nos estabelecimentos comerciais como bares e casas noturnas:",
    "alternativaA": "A obrigatoriedade de revistar todos os clientes do sexo masculino na entrada dos recintos.",
    "alternativaB": "O dever de prestar socorro, proteger a vítima de violência sexual e acionar os órgãos de segurança pública imediatamente.",
    "alternativaC": "A proibição da entrada de mulheres desacompanhadas em eventos noturnos após as 22 horas.",
    "alternativaD": "O encerramento das atividades de estabelecimentos onde ocorram discussões verbais entre casais.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 19,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Economia Digital: Evolução do PIX",
    "texto": "“O Banco Central do Brasil continua a expandir as funcionalidades do sistema de pagamentos instantâneos PIX, integrando novas ferramentas para usuários e comerciantes.”",
    "pergunta": "Assinale a alternativa que indica uma das novas funcionalidades recentes incorporadas oficialmente ao PIX:",
    "alternativaA": "PIX Automático, voltado para a cobrança de pagamentos recorrentes como contas de luz, água e mensalidades.",
    "alternativaB": "PIX Internacional em papel-moeda emitido nos caixas eletrônicos das agências bancárias nos EUA.",
    "alternativaC": "PIX Anônimo, que impede o rastreamento fiscal de operações financeiras acima de R$ 100 mil.",
    "alternativaD": "PIX Fiado, sistema de crédito concedido diretamente pelo Governo Federal sem juros.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 20,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Ciência e Tecnologia: Missões Espaciais e Lua",
    "texto": "“A corrida espacial moderna ganhou impulso com o avanço do Programa Artemis da NASA e das missões espaciais da China e Índia focadas na exploração lunar.”",
    "pergunta": "O objetivo central das novas missões humanas e robóticas de exploração da Lua no século XXI é:",
    "alternativaA": "Estabelecer presença sustentável na superfície lunar e explorar recursos como a água em forma de gelo nos polos.",
    "alternativaB": "Construir um escudo protetor para evitar a entrada de raios solares na atmosfera terrestre.",
    "alternativaC": "Transportar toda a população urbana da Terra para assentamentos no satélite natural.",
    "alternativaD": "Procurar reservas de petróleo bruto no subsolo dos mares lunares.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 21,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Proteção Social: Bolsa Família e Pé-de-Meia",
    "texto": "“A integração entre políticas de transferência de renda e incentivo à permanência escolar ganhou novos contornos com a consolidação do Programa Pé-de-Meia.”",
    "pergunta": "O Programa Pé-de-Meia, desenvolvido pelo Governo Federal, destina-se a:",
    "alternativaA": "Conceder financiamento a juros zero para estudantes universitários comprarem automóveis importados.",
    "alternativaB": "Oferecer uma poupança e incentivo financeiro mensal a alunos do Ensino Médio público para combater a evasão escolar.",
    "alternativaC": "Pagar um salário mínimo mensal para crianças do Ensino Fundamental I que tirarem notas máximas.",
    "alternativaD": "Subsidiar a compra de material escolar apenas para alunos matriculados na rede privada de ensino.",
    "alternativaE": "não tem essa alternativa",
    "correta": "B"
  },
  {
    "numero": 22,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Cultura e Direito Autoral: Lei Paulo Gustavo e Aldir Blanc 2",
    "texto": "“A aplicação descentralizada de verbas públicas para a cultura atingiu níveis recordes com a execução contínua das Leis Paulo Gustavo e Aldir Blanc 2 pelos municípios.”",
    "pergunta": "Tais legislações federais de incentivo à cultura têm como objetivo fundamental:",
    "alternativaA": "Garantir o repasse direto de recursos da União a estados e municípios para fomento do setor cultural descentralizado.",
    "alternativaB": "Financiar exclusivamente megaproduções cinematográficas internacionais gravadas nos EUA.",
    "alternativaC": "Subsidiar a contratação de artistas estrangeiros para os eventos oficiais do Governo Federal.",
    "alternativaD": "Extinguir os Conselhos Municipais de Cultura e centralizar todas as decisões na Capital Federal.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 23,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Defesa do Consumidor: Regras de Telemarketing",
    "texto": "“A Anatel aprovou diretrizes operacionais mais severas para conter o volume desmedido de ligações indesejadas de telemarketing abusivo no Brasil.”",
    "pergunta": "Para coibir as chamadas automatizadas invasivas (robocalls), a Anatel determinou a adoção de:",
    "alternativaA": "Prefixo obrigatório (como o 0303) e a implementação do sistema de verificação de chamadas autenticadas (Origem Verificada).",
    "alternativaB": "Cobrança de uma taxa por minuto recebido do usuário que atende a ligação de telemarketing.",
    "alternativaC": "Proibição total de qualquer serviço de atendimento telefônico de bancos e operadoras de internet.",
    "alternativaD": "Desligamento temporário das linhas telefônicas de usuários que recusam chamadas comerciais.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 24,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Política de Saúde: Combate ao Tabagismo e Vapes",
    "texto": "“A Anvisa manteve a proibição da comercialização, importação e publicidade dos Dispositivos Eletrônicos para Fumar (DEF), conhecidos como vapes ou cigarros eletrônicos.”",
    "pergunta": "A decisão do órgão regulador sanitário fundamentou-se em:",
    "alternativaA": "Estudos científicos que comprovam os riscos à saúde respiratória e cardiovascular e o impacto na iniciação de jovens no tabagismo.",
    "alternativaB": "Exigências exclusivas do setor produtivo de tabaco tradicional para reserva de mercado.",
    "alternativaC": "Ausência de tecnologia nacional para produzir as baterias de lítio dos aparelhos no Brasil.",
    "alternativaD": "Acordos internacionais que proíbem o uso de essências aromatizantes em medicamentos.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 25,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Relações Diplomáticas: Acordo Mercosul-União Europeia",
    "texto": "“As negociações históricas para a consolidação do Acordo de Livre Comércio entre Mercosul e União Europeia continuaram no centro das pautas diplomáticas e agrícolas.”",
    "pergunta": "As principais resistências protecionistas enfrentadas para a assinatura definitiva do acordo partiram de setores agrícolas europeus que alegam:",
    "alternativaA": "Medo da concorrência dos produtos agropecuários sul-americanos e exigências rigorosas de metas ambientais e rastreabilidade.",
    "alternativaB": "Proibição do uso de transporte marítimo para o envio de grãos entre as Américas e a Europa.",
    "alternativaC": "Recusa do Mercosul em aceitar a entrada de máquinas e produtos industriais de origem europeia.",
    "alternativaD": "Exigência da União Europeia para que o Brasil adote o Euro como moeda nacional.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 26,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Transporte e Mobilidade: Ferrovias e Logística",
    "texto": "“O Governo Federal inseriu como prioridade o fortalecimento do modal ferroviário no Brasil, visando diminuir a dependência do transporte rodoviário de cargas e passageiros.”",
    "pergunta": "Entre os grandes projetos de integração ferroviária prioritários no Brasil, destaca-se:",
    "alternativaA": "A conclusão da Ferrovia Transnordestina e os estudos para o trem de alta velocidade ligando capitais.",
    "alternativaB": "A construção de uma linha de metrô ligando o litoral do Ceará ao litoral do Rio de Janeiro.",
    "alternativaC": "O desmonte de todas as vias férreas existentes para a ampliação das pistas de caminhões nas BRs.",
    "alternativaD": "A proibição do transporte de grãos e minérios por meio de composições ferroviárias concessionadas.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 27,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Desenvolvimento Urbano: Marco Legal do Saneamento",
    "texto": "“O cumprimento das metas de universalização do saneamento básico estipuladas pelo Marco Legal impulsionou leilões de concessão de água e esgoto em diversos estados.”",
    "pergunta": "A meta central estipulada pelo Marco Legal do Saneamento Básico até o ano de 2033 no Brasil é:",
    "alternativaA": "Garantir que 99% da população tenha acesso à água potável e 90% à coleta e tratamento de esgoto.",
    "alternativaB": "Reduzir a cobertura de esgotamento sanitário nas zonas rurais para focar exclusivamente nos grandes centros.",
    "alternativaC": "Privatizar a gestão das bacias hidrográficas dos rios federais transferindo a posse dos rios às empresas.",
    "alternativaD": "Isentar 100% dos consumidores urbanos do pagamento de taxas pelo consumo de água.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 28,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Política Ambiental: Fundo Amazônia e Captação",
    "texto": "“O Fundo Amazônia voltou a receber doações internacionais volumosas de países europeus e asiáticos destinadas a projetos de conservação e combate ao desmatamento.”",
    "pergunta": "A gestão financeira e operacional dos recursos captados pelo Fundo Amazônia é executada pelo:",
    "alternativaA": "Banco Nacional de Desenvolvimento Econômico e Social (BNDES).",
    "alternativaB": "Banco Mundial com sede em Washington.",
    "alternativaC": "Fundo Monetário Internacional (FMI).",
    "alternativaD": "Ministério da Defesa por meio do Exército Brasileiro.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 29,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Energia Sustentável: Crise no setor de Distribuição",
    "texto": "“A ocorrência de apagões e demoras no restabelecimento de energia elétrica após tempestades na Região Metropolitana de São Paulo gerou fortes debates sobre o contrato das concessionárias.”",
    "pergunta": "Diante das falhas na prestação do serviço pelas distribuidoras privadas, o Governo Federal e a Aneel propuseram:",
    "alternativaA": "O endurecimento das regras de renovação das concessões e a aplicação de multas mais severas por descumprimento de metas de contingência.",
    "alternativaB": "A reestatização imediata de todas as empresas de energia do Brasil sem indenização aos acionistas.",
    "alternativaC": "O cancelamento automático das contas de luz de todos os cidadãos do Estado de São Paulo.",
    "alternativaD": "A proibição do uso de fiação subterrânea em todas as cidades com mais de 100 mil habitantes.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 30,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Direitos dos Idosos e Previdência",
    "texto": "“O envelhecimento rápido da população brasileira atestado pelo Censo do IBGE pressiona o planejamento de políticas públicas de assistência, saúde e previdência social.”",
    "pergunta": "O indicador demográfico que aponta o envelhecimento populacional no Brasil caracteriza-se por:",
    "alternativaA": "Aumento da expectativa de vida ao nascer acompanhado pela queda constante na taxa de fecundidade.",
    "alternativaB": "Aumento expressivo da taxa de natalidade nas regiões de maior renda do país.",
    "alternativaC": "Redução drástica da população acima dos 60 anos nas últimas três décadas.",
    "alternativaD": "Crescimento da proporção de crianças e adolescentes na estrutura da pirâmide etária nacional.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 31,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Geopolítica Global: Guerra na Ucrânia e OTAN",
    "texto": "“O conflito no leste europeu completou novos anos de duração, mantendo os impactos no fornecimento internacional de fertilizantes, energia e segurança europeia.”",
    "pergunta": "A expansão recente da Organização do Tratado do Atlântico Norte (OTAN) na Europa Setentrional contou com a adesão formal de:",
    "alternativaA": "Finlândia e Suécia.",
    "alternativaB": "Argentina e Brasil.",
    "alternativaC": "China e Índia.",
    "alternativaD": "África do Sul e Egito.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 32,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Economia e Agricultura: Safra de Grãos",
    "texto": "“O agronegócio brasileiro continua sendo um dos principais motores das exportações nacionais, enfrentando desafios decorrentes de flutuações de preços das commodities e fatores climáticos.”",
    "pergunta": "A cultura agrícola que lidera o volume de produção e a pauta exportadora do agronegócio do Brasil é:",
    "alternativaA": "A Soja.",
    "alternativaB": "O Trigo.",
    "alternativaC": "A Cevada.",
    "alternativaD": "O Arroz irrigado.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 33,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Segurança Cibernética: Ataques a Órgãos Públicos",
    "texto": "“Incidentes de segurança cibernética e vazamento de dados de sistemas governamentais levaram à criação da Rede Nacional de Cibersegurança.”",
    "pergunta": "A legislação brasileira responsável por definir os direitos e deveres sobre o tratamento de dados pessoais no meio físico e digital é a:",
    "alternativaA": "Lei Geral de Proteção de Dados Pessoais (LGPD).",
    "alternativaB": "Lei de Acesso à Informação (LAI).",
    "alternativaC": "Marco Civil da Radiodifusão.",
    "alternativaD": "Lei de Segurança Nacional (LSN).",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 34,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Povos Indígenas: Tese do Marco Temporal",
    "texto": "“As discussões jurídicas e legislativas em torno do Marco Temporal para demarcação de terras indígenas mantiveram o tema em evidência no STF e no Congresso Nacional.”",
    "pergunta": "A tese do Marco Temporal defendia que os povos indígenas só teriam direito às terras que:",
    "alternativaA": "Estivessem ocupando ou disputando fisicamente na data da promulgação da Constituição de 1988 (5 de outubro de 1988).",
    "alternativaB": "Forem compradas com recursos próprios dos fundos estaduais de apoio à agricultura.",
    "alternativaC": "Tivessem sido catalogadas durante o período do Brasil Colônia no século XVI.",
    "alternativaD": "Estivessem localizadas exclusivamente dentro do Bioma da Mata Atlântica.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 35,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Aviação e Defesa Nacional: Projeto Gripen",
    "texto": "“A Força Aérea Brasileira (FAB) deu continuidade ao processo de incorporação dos caças de última geração F-39 Gripen à sua frota operacional.”",
    "pergunta": "O programa de transferência de tecnologia e montagem de caças militares foi firmado em parceria estratégica entre o Brasil e a:",
    "alternativaA": "Suécia.",
    "alternativaB": "Rússia.",
    "alternativaC": "França.",
    "alternativaD": "Estados Unidos.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 36,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Comércio Exterior: Balança Comercial Brasileira",
    "texto": "“O Brasil alcançou saldos recordes na sua Balança Comercial impulsionados pelo desempenho do setor extrativo de petróleo/minério e pela agropecuária.”",
    "pergunta": "O termo 'superávit na balança comercial' indica que o valor das:",
    "alternativaA": "Exportações superou o valor das importações registradas pelo país no período.",
    "alternativaB": "Importações foi exatamente igual ao valor de todas as taxas cobradas no consumo.",
    "alternativaC": "Exportações caiu pela metade em relação aos impostos recolhidos pelas alfândegas.",
    "alternativaD": "Dívidas internas do país ultrapassou o PIB nominal.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 37,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Relações Bilaterais: Brasil e China",
    "texto": "“A comemoração dos 50 anos de relações diplomáticas entre Brasil e China foi marcada pela assinatura de diversos acordos de cooperação bilateral.”",
    "pergunta": "A China ocupa atualmente a posição de:",
    "alternativaA": "Maior parceiro comercial do Brasil no mundo, sendo o principal destino das exportações de commodities brasileiras.",
    "alternativaB": "Terceiro menor mercado comprador de produtos agrícolas sul-americanos.",
    "alternativaC": "Bloco econômico associado ao Acordo de Livre Comércio da América do Norte (USMCA).",
    "alternativaD": "País credor exclusivo de 100% da dívida externa soberana do governo brasileiro.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 38,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Inovação na Indústria: Nova Indústria Brasil (NIB)",
    "texto": "“O Governo Federal lançou a política industrial 'Nova Indústria Brasil', prevendo incentivos estatais e financiamentos do BNDES para a modernização do setor produtivo até 2033.”",
    "pergunta": "Um dos pilares centrais da política da 'Nova Indústria Brasil' (NIB) é:",
    "alternativaA": "A descarbonização da indústria, a inovação digital e o fortalecimento do complexo econômico da saúde.",
    "alternativaB": "A eliminação do uso de qualquer tecnologia digital nas linhas de montagem fabris.",
    "alternativaC": "O foco exclusivo na exportação de matéria-prima sem nenhum valor agregado nacional.",
    "alternativaD": "O encerramento dos incentivos fiscais para empresas estabelecidas na Zona Franca de Manaus.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 39,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Esportes Globais: Jogos Olímpicos de Paris",
    "texto": "“Os Jogos Olímpicos de Verão de Paris se destacaram pela busca da sustentabilidade e pelo desempenho de atletas brasileiros em modalidades femininas.”",
    "pergunta": "O desempenho do Brasil na edição olímpica ficou marcado historicamente por:",
    "alternativaA": "Um número inédito de medalhas conquistadas por mulheres, superando a quantidade de pódios do time masculino.",
    "alternativaB": "A conquista de medalhas de ouro exclusivamente na modalidade de esqui na neve.",
    "alternativaC": "A eliminação do país de todas as competições de ginástica artística e surfe logo na primeira fase.",
    "alternativaD": "O boicote oficial da delegação brasileira por discordâncias com o comitê organizador francês.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 40,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Mudanças Climáticas: Seca nos Rios Amazônicos",
    "texto": "“A vazão dos grandes rios amazônicos como o Rio Negro e o Solimões atingiu níveis minimamente históricos, isolando comunidades e paralisando a navegação de cabotagem.”",
    "pergunta": "A principal consequência econômica direta do isolamento provocado pela seca dos rios na Região Norte é:",
    "alternativaA": "O desabastecimento de insumos e o encarecimento do frete na Zona Franca de Manaus e comunidades ribeirinhas.",
    "alternativaB": "A redução imediata da cotação do dólar comercial no mercado financeiro nacional.",
    "alternativaC": "O aumento das exportações de pescado do Amazonas para os países da Ásia.",
    "alternativaD": "O encerramento da produção de energia na Usina Hidrelétrica de Itaipu no Paraná.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 41,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Meio Ambiente: Combate ao Garimpo Ilegal",
    "texto": "“Operações conjuntas das Forças Armadas, Polícia Federal e Ibama mantiveram a repressão ao garimpo ilegal na Terra Indígena Yanomami.”",
    "pergunta": "O garimpo ilegal em territórios amazônicos provoca contaminação grave dos rios e das populações locais por meio do despejo de:",
    "alternativaA": "Mercúrio.",
    "alternativaB": "Chumbo tetraetila.",
    "alternativaC": "Nitrato de amônio.",
    "alternativaD": "Bário combustível.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 42,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Política de Preços e Petróleo: OPEP+",
    "texto": "“A OPEP+ (Organização dos Países Exportadores de Petróleo e aliados) adotou cortes voluntários de produção de barris para sustentar as cotações no mercado internacional.”",
    "pergunta": "A relação do Brasil com o grupo da OPEP+ estabeleceu-se recentemente por meio do(a):",
    "alternativaA": "Ingresso do Brasil na Carta de Cooperação da OPEP+ como observador e participante não votante nas cotas.",
    "alternativaB": "Aceitação imediata pelo Brasil do congelamento da extração de petróleo na camada Pré-Sal.",
    "alternativaC": "Transferência do controle acionário da Petrobras para o fundo soberano da Arábia Saudita.",
    "alternativaD": "Proibição de exportar petróleo bruto brasileiro para os países membros do bloco europeu.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 43,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Comunicação Social: Extinção do X (Twitter) e Bloqueio Judiciário",
    "texto": "“A suspensão temporária do funcionamento da rede social X (antigo Twitter) no Brasil por decisão do STF gerou acirrado debate sobre soberania jurisdicional e liberdade de expressão.”",
    "pergunta": "A medida cautelar de bloqueio judicial aplicada à empresa de tecnologia decorreu do:",
    "alternativaA": "Descumprimento de ordens judiciais de remoção de contas e da ausência de representante legal nomeado no país.",
    "alternativaB": "Aumento excessivo da mensalidade cobrada aos usuários comuns do aplicativo.",
    "alternativaC": "Proibição pelo governo da exibição de propagandas comerciais no feed do usuário.",
    "alternativaD": "Uso do aplicativo de forma exclusiva por órgãos governamentais para transmissão de propaganda eleitoral.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 44,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Combate à Fome: Cadastro Único e Alimenta Brasil",
    "texto": "“A atualização contínua do Cadastro Único (CadÚnico) permitiu o pente-fino em cadastros irregulares e o direcionamento eficiente das políticas sociais federais.”",
    "pergunta": "O órgão responsável pela gestão centralizada do Cadastro Único para programas sociais no Governo Federal é o:",
    "alternativaA": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS).",
    "alternativaB": "Ministério do Trabalho e Emprego (MTE).",
    "alternativaC": "Banco Central do Brasil (BCB).",
    "alternativaD": "Ministério da Justiça e Segurança Pública (MJSP).",
    "alternativaE": "não tem essa alternativa",
    correta: "A"
  },
  {
    "numero": 45,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Educação Superior: Programa Pé-de-Meia Licenciatura / FIES",
    "texto": "“Para incentivar a formação de novos professores e suprir o apagão de docentes nas redes públicas de ensino, o Governo Federal lançou incentivos focados nas licenciaturas.”",
    "pergunta": "O objetivo central dos novos auxílios e bolsas para estudantes de Licenciatura é:",
    "alternativaA": "Atrair jovens para a carreira do magistério e diminuir o déficit de professores de matérias exatas e humanas nas escolas.",
    "alternativaB": "Substituir todos os cursos de pedagogia por treinamentos virtuais sem diploma universitário.",
    "alternativaC": "Obrigar todos os licenciados a prestarem serviço militar nas fronteiras amazônicas.",
    "alternativaD": "Financiar o intercâmbio obrigatório de todos os estudantes de pedagogia nos Estados Unidos.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 46,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Saúde e Ciência: Produção Nacional de Insumos (IFA)",
    "texto": "“A busca pela autonomia sanitária levou o Ministério da Saúde e a Fiocruz a investirem na produção local do Insumo Farmacêutico Ativo (IFA).”",
    "pergunta": "A produção nacional de IFA tem como meta primordial para o SUS:",
    "alternativaA": "Reduzir a dependência externa do Brasil na fabricação de vacinas e medicamentos essenciais.",
    "alternativaB": "Substituir o uso de remédios genéricos por terapias exclusivamente holísticas.",
    "alternativaC": "Exportar toda a produção de insumos para países ricos impedindo o consumo interno.",
    "alternativaD": "Isentar a indústria farmacêutica privada de prestar contas à Anvisa.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 47,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Infraestrutura Náutica e Portos: Cabotagem",
    "texto": "“O estímulo ao transporte marítimo entre portos da mesma costa nacional (BR do Mar) visou modernizar a logística portuária do país.”",
    "pergunta": "A navegação realizada entre portos marítimos dentro do próprio território de um país é denominada:",
    "alternativaA": "Cabotagem.",
    "alternativaB": "Dragagem fluviomarinha.",
    "alternativaC": "Transbordo internacional.",
    "alternativaD": "Transitamento transatlântico.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 48,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Proteção Ambiental: Plano Clima e Metas Nacionais",
    "texto": "“O Brasil apresentou suas atualizações da Contribuição Nacionalmente Determinada (NDC) no âmbito do Acordo de Paris, estipulando metas de redução de emissões.”",
    "pergunta": "A meta climática assumida pelo Brasil até 2035 prevê a redução expressiva de suas emissões de gases de efeito estufa com foco no:",
    "alternativaA": "Combate ao desmatamento ilegal em todos os biomas e na transição para energias renováveis.",
    "alternativaB": "Fechamento definitivo de todas as refinarias de petróleo existentes no país até 2028.",
    "alternativaC": "Banimento total do cultivo de grãos como a soja e o milho no bioma Cerrado.",
    "alternativaD": "Cancelamento dos direitos de exploração de minério de ferro em Minas Gerais e Pará.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 49,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Economia Monetária: Moeda Digital do Banco Central (Drex)",
    "texto": "“O Banco Central deu prosseguimento às fases de testes com o Drex, a moeda digital brasileira desenvolvida em plataforma de tecnologia de registro distribuído (DLT).”",
    "pergunta": "Diferente das criptomoedas não reguladas (como o Bitcoin), o Drex caracteriza-se por ser uma:",
    "alternativaA": "Central Bank Digital Currency (CBDC), uma representação digital do próprio Real com a mesma cotação e garantia do Banco Central.",
    "alternativaB": "Criptomoeda privada voltada exclusivamente para apostas em jogos eletrônicos.",
    "alternativaC": "Moeda estrangeira criada para substituir o Dólar nas compras em free shops de aeroportos.",
    "alternativaD": "Cédula física de papel impressa pela Casa da Moeda com tarja magnética especial.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
  },
  {
    "numero": 50,
    "ano": 2026,
    "banca": "IDECAN",
    "disciplina": "Atualidades",
    "cidade": "Geral",
    "cargo": "Guarda Municipal",
    "assuntoEspecifico": "Geopolítica Regional: Tensão entre Venezuela e Guiana",
    "texto": "“A disputa territorial pela região do Essequibo reacendeu tensões geopolíticas na América do Sul, exigindo mediação diplomática liderada pelo Brasil e pela Comunidade do Caribe (CARICOM).”",
    "pergunta": "A controvérsia fronteiriça na América do Sul envolve a reivindicação da Venezuela sobre o território do Essequibo, rico em petróleo, administrado pela:",
    "alternativaA": "Guiana.",
    "alternativaB": "Suriname.",
    "alternativaC": "Guiana Francesa.",
    "alternativaD": "Colômbia.",
    "alternativaE": "não tem essa alternativa",
    "correta": "A"
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