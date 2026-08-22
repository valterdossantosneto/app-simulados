/* =========================================================
   BANCO DE QUESTÕES
========================================================= */

const questoes = [

    {
        numero: 1,
        ano: 2024,
        banca: "IDECAN",
        disciplina: "Legislação",
        cidade: "Aracaju",
        cargo: "Guarda Municipal",
        assuntoEspecifico: "Direitos Humanos",

        texto: `Os direitos humanos são direitos inerentes a todos os seres humanos, independentemente de raça, sexo, nacionalidade, etnia, idioma, religião ou qualquer outra condição.`,

        pergunta: "Sobre os direitos humanos, assinale a alternativa correta.",

        alternativaA: "São direitos concedidos somente pelo Estado.",
        alternativaB: "São direitos exclusivos de determinados grupos.",
        alternativaC: "São direitos inerentes a todos os seres humanos.",
        alternativaD: "Podem ser aplicados somente em períodos de paz.",
        alternativaE: "Não possuem relação com a dignidade humana.",

        correta: "C"
    },


    {
        numero: 2,
        ano: 2023,
        banca: "SELECON",
        disciplina: "Português",
        cidade: "Cuiabá",
        cargo: "Técnico",
        assuntoEspecifico: "Crase",

        texto: "-",

        pergunta: "Assinale a alternativa em que o emprego da crase está correto.",

        alternativaA: "Fui à escola pela manhã.",
        alternativaB: "Fui à pé para casa.",
        alternativaC: "Entreguei o documento à ele.",
        alternativaD: "Começou à estudar cedo.",
        alternativaE: "Cheguei à uma conclusão.",

        correta: "A"
    },


    {
        numero: 3,
        ano: 2024,
        banca: "IDECAN",
        disciplina: "Raciocínio Lógico",
        cidade: "Aracaju",
        cargo: "Guarda Municipal",
        assuntoEspecifico: "Porcentagem",

        texto: "-",

        pergunta: "Uma mercadoria custa R$ 200,00. Se receber um desconto de 10%, qual será o novo preço?",

        alternativaA: "R$ 180,00",
        alternativaB: "R$ 190,00",
        alternativaC: "R$ 195,00",
        alternativaD: "R$ 210,00",
        alternativaE: "R$ 220,00",

        correta: "A"
    },


    {
        numero: 4,
        ano: 2022,
        banca: "FGV",
        disciplina: "Informática",
        cidade: "Salvador",
        cargo: "Assistente",
        assuntoEspecifico: "Internet",

        texto: "-",

        pergunta: "Qual protocolo é utilizado para transferência de páginas web?",

        alternativaA: "FTP",
        alternativaB: "HTTP",
        alternativaC: "SMTP",
        alternativaD: "POP3",
        alternativaE: "SSH",

        correta: "B"
    },


    {
        numero: 5,
        ano: 2024,
        banca: "SELECON",
        disciplina: "Raciocínio Lógico",
        cidade: "Cuiabá",
        cargo: "Técnico",
        assuntoEspecifico: "Médias",

        texto: "-",

        pergunta: "Qual é a média aritmética dos números 10, 20 e 30?",

        alternativaA: "15",
        alternativaB: "20",
        alternativaC: "25",
        alternativaD: "30",
        alternativaE: "60",

        correta: "B"
    },

    {
        numero: 6,
        ano: 2024,
        banca: "IDECAN",
        disciplina: "Português",
        cidade: "Aracaju",
        cargo: "Guarda Municipal",
        assuntoEspecifico: "Interpretação de texto",

        texto: "A leitura contribui para o desenvolvimento da capacidade crítica do indivíduo.",

        pergunta: "De acordo com o texto, a leitura contribui para:",

        alternativaA: "A diminuição do conhecimento.",
        alternativaB: "O desenvolvimento da capacidade crítica.",
        alternativaC: "A eliminação da capacidade de interpretação.",
        alternativaD: "A redução do vocabulário.",
        alternativaE: "O abandono dos estudos.",

        correta: "B"
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