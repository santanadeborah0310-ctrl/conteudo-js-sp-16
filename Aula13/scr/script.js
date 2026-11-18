// Arrays

// Criando Array
const frutas = ["Maçã", "Morango", "Maracujá"];

console.log(frutas);

console.log("");

// Adicionando Elementos em Array Vazio
const carros = [];

carros[0] = "BMW";
carros[1] = "Volkswagen";
carros[2] = "Fiat";

console.log(carros);

console.log("");

// Criando Array com Contrutor de Array
const frutas2 = new Array("Caju", "Uva", "Laranja");

console.log(frutas2);

console.log("");

// Acessando Elemento de Array
const carros2 = ["Kia", "Mini", "Toyota"];

console.log(carros2);

let primeiroCarro = carros2[0];

console.log(primeiroCarro);

console.log("");

// Alterando Elemento de Array
const frutas3 = ["Melão", "Abacate", "Goiaba"];

console.log(frutas3);

frutas3[0] = "Banana";

console.log(frutas3);

console.log("");

// Convertendo Array em String
const motos = ["CB 500", "MT-07", "XJ6"];

console.log(motos);

let motosString = motos.toString();

console.log(motosString);

console.log("");

// Verificando Tipo de Dado em Array
console.log(typeof motos);

console.log("");

// Objeto em Array
const carro1 = {
  marca: "Porsche",
  modelo: "911 GT3",
};

const carro2 = {
  marca: "Porsche", 
  modelo: "718 GT4", 
};

const carros3 = [carro1, carro2];

console.log(carros3);

console.log("");

// Propriedade Length em Array
const alunos = ["Laiza", "André", "Marcela", "Molina", "Deborah", "Amorim"];

console.log(alunos);

let comprimentoAlunos = alunos.length;

console.log(comprimentoAlunos);

console.log("");

// Acessando o Último Elemento do Array
let ultimoElementoAlunos = alunos.length - 1;

console.log(alunos[ultimoElementoAlunos]);

console.log("");

// Utilizando Laço de Repetição para Percorrer Array
const cidades = ["São Paulo", "Campinas", "Campos do Jordão"];
console.log(cidades);

let quantidadeCidades = cidades.length;
console.log(quantidadeCidades);

for (let acumuladora = 0; acumuladora < quantidadeCidades; acumuladora++) {
  console.log(cidades[acumuladora]);
}

console.log("");

// Utilizando o Método forEach() para Percorrer Array

// cidades.forEach(listarCidades);

// function listarCidades(cidade) {
//   console.log(cidade);
// }

cidades.forEach( (cidade) => {
  console.log(cidade);
} );

console.log("");

// Adicionando Elementos no Array com o Método push()
const cores = ["Azul", "Laranja", "Vermelho"];

console.log(cores);

cores.push("Verde");

console.log(cores);

cores.push("Branco", "Preto");

console.log(cores);

console.log("");

// Adicionando Elemento no Array com a Propriedade Length
cores[cores.length] = "Rosa";

console.log(cores);

console.log("");

// Buracos Indefinidos em Array
cores[14] = "Roxo";

console.log(cores);