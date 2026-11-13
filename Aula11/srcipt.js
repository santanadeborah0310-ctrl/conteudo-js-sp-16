//Objetos

//Exemplo de objeto simples
const carro = {
    marca: "Porche",
    modelo: 911,
    ano: 2022,
    acelerar: function () {
        return `${this.marca} ${this.modelo} acelerou.
        Vruum...`;
    }, 
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.acelerar());

console.log("");

const pessoa = {
    nome: "Deborah",
    idade: 18,
    altura: 1.57,
    registro: 99999998,
    empregado: false,
    apresentar: function() {

        let infoEmpregado = (this.empregado === true) ? "sim" : "não";

        return `
         Meu nome é:${this.nome}
         Minha idade é:${this.idade}
         Minha altura é:${this.altura}
         E meu múmero de restro é: ${this.registro}
         Eu trabalho?: ${infoEmpregado}
        `;
    },
}

console.log(pessoa.apresentar());

document.getElementById("ex1"). innerHTML = "André Molina";

console.log(document);

