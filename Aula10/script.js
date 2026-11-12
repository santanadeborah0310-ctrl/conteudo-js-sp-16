// Funções 

// Expressão de Função
const multiplicar =  function (a, b){
    return a * b;
};

console.log(multiplicar(5, 6));

console.log("");

//Função executando outra função
function executar(função) {
    return função();
}

const exibirSaudacao = function (){
    return "Olá, SP16";
};

console.log(executarFuncao(exibirSaudacao));

console.log("");

// arrow finctons
const multiplicar2 = (a, b) => a * b;

console.log (multiplicar2(5, 6));

console.log("");

// arrow finctons
const potencia = a => a * b;

console.log (potencia(5));

console.log("");

// chamada de arrow fucton


