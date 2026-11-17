// Objetos

// Propriedades de Objetos
const pessoa = {
    nome: "Deborah",
    altura: 1.55,
    idade: 18,
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa["idade"]);

console.log("");

//Alterando, Adicionando e Excluindo propriedades
pessoa.idade = 19;
console.log(pessoa);
console.log(pessoa.idade);

console.log("");

pessoa.ultimoNome = "Santana";
console.log(pessoa);
console.log(pessoa.ultimoNome);

console.log("");

delete pessoa.altura;
console.log(pessoa);

console.log("");

// Vereficando existência de propriedade em objeto
let testePropriedade = ("idade" in pessoa);

console.log(testePropriedade);

console.log("");

// Objetos Aninhados 
const pessoa2 = {
    nome: "Tim",
    sobrenome: "Bernardes",
    profissao: "musico",
    instrumento: {
        tipo: "cordas",
        materiais: "madeiras",
    },
};

console.log(pessoa2);
console.log(pessoa2.instrumento);

console.log("");

// Métodos de Objetos 
const carro = {
    marca: "Toyota",
    modelo: "Supra",
    ano: 1998,
    acelerar: function () {
        return `O ${this.marca} ${this.modelo} acelerou.`;
    }
};

console.log(carro.acelerar());

console.log("");

// Adicionando Métodos em Objeto
carro.derrapar = function () {
    return `o ${this.marca} ${this.modelo} derrapou.`;
}

console.log(carro.derrapar());

console.log(carro);