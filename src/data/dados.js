const bruxos = [
  {
    id: 1,
    nome: "Harry Potter",
    ano: 7,
    casa: "Grifinória",
    varinha: "11 polegadas, azevinho, pena de fênix",
    patrono: "Cervo",
    especialidade: "Sobreviver",
    vivo: false,
  },
  {
    id: 2,
    nome: "Hermione Granger",
    ano: 7,
    casa: "Grifinória",
    varinha: "Videira e fibra de coração de dragão, 27cm",
    patrono: "Lontra",
    especialidade: "Saber tudo de tudo",
    vivo: true,
  },
  {
    id: 3,
    nome: "Ron Weasley",
    ano: 7,
    casa: "Grifinória",
    varinha: "Salgueiro e crina de unicórnio, 35cm",
    patrono: "Terrier Jack Russell",
    especialidade: "Xadrez Bruxo",
    vivo: true,
  },
];

const casas = [
  {
    id: 1,
    nome: "Grifinória",
    fundador: "Godric Gryffindor",
    animal: "Leão",
    cor: "Vermelho e dourado",
    
  },
  {
    id: 2,
    nome: "Sonserina",
    fundador: "Salazar Slytherin",
    animal: "Serpente",
    cor: "Verde e prata",
  },
  {
    id: 3,
    nome: "Corvinal",
    fundador: "Rowena Ravenclaw",
    animal: "Águia",
    cor: "Azul e bronze",
  },
  {
    id: 4,
    nome: "Lufa-Lufa",
    fundador: "Helga Hufflepuff",
    animal: "Texugo",
    cor: "Amarelo e preto",
  },
];

const varinhas = [
  {
    id: 1,
    material: "Azevinho",
    nucleo: "Pena de fênix",
    tamanho: "28cm",
    dono: "Harry Potter",
  },
  {
    id: 2,
    material: "Videira",
    nucleo: "Fibra de coração de dragão",
    tamanho: "27cm",
    dono: "Hermione Granger",
  },
  {
    id: 3,
    material: "Salgueiro",
    nucleo: "Crina de unicórnio",
    tamanho: "35cm",
    dono: "Ron Weasley",
  },
  {
    id: 4,
    material: "Espinheiro",
    nucleo: "Crina de unicórnio",
    tamanho: "25cm",
    dono: "Draco Malfoy",
  },
  {
    id: 5,
    material: "Cerejeira",
    nucleo: "Núcleo desconhecido",
    tamanho: "Desconhecido",
    dono: "Luna Lovegood",
  },
];

const animais = [
  {
    id: 1,
    nome: "Coruja Edwiges",
    tipo: "correio",
  },
  {
    id: 2,
    nome: "Gato Bichento",
    tipo: "companheiro",
  },
  {
    id: 3,
    nome: "Sapo Perebas",
    tipo: "companheiro",
  },
  {
    id: 4,
    nome: "Rato Scabbers",
    tipo: "Companheiro",
  },
];

const pocoes = [
  {
    id: 1,
    nome: "Poção Polissuco",
    efeito: "Permite que o usuário assuma a aparência de outra pessoa",
  },
  {
    id: 2,
    nome: "Felix Felicis",
    efeito: "Concede sorte extraordinária ao usuário por um período limitado",
  },
  {
    id: 3,
    nome: "Veritaserum",
    efeito: "Força a pessoa a dizer a verdade",
  },
  {
    id: 4,
    nome: "Poção do Amor/Amortentia",
    efeito: "Faz com que a pessoa se apaixone pela primeira pessoa que vê",
  },
];

export default { bruxos, casas, varinhas, animais, pocoes };
