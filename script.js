const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    "Pergunta 1",
    "Pergunta 2"
];
const perguntas = [
    enunciado: "Pergunta 1",
    alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ]

    "Pergunta 2"
];
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const pergunta1 = "Pergunta 1";
const pergunta2 = "Pergunta 2";
const perguntas = ["Pergunta 1", "Pergunta 2"];
const perguntas = [
  {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa 1", "Alternativa 2"],
  },
  {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 2"],
  },
];
{
    enunciado: "Pergunta 1",
    alternativas: [
        "Alternativa 1",
        "Aternativa 2"
    ]
}
const perguntas = [
    {
        enunciado: "Você acredita que as IAs vão superar a inteligência humana algum dia?",
        alternativas: [
            "Eu acho que não!",
            "Eu acho que sim!"
        ]
    },
    {
        enunciado: "Qual a sua opinião sobre o impacto das IAs no mercado de trabalho? Você acha que elas irão substituir muitos empregos?"
    },
    {
        enunciado: "Quais você acha que são os maiores desafios éticos no desenvolvimento de inteligência artificial?"
    ",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
            "Um dos maiores desafios é a tomada de decisões. Se uma IA for usada em áreas como saúde, justiça ou até armamentos, como garantir que ela tome decisões éticas? Outro desafio importante é o viés de dados: as IAs aprendem com os dados que alimentamos nelas, e se esses dados forem tendenciosos ou falhos, as decisões também serão."
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            "Criar uma imagem utilizando um gerador de imagem de IA."
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
        ]
    }
]
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
}
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta()