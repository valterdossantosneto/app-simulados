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