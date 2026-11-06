// Exercicio 8: Calculando a área do trapézio.

alert("Área do trapézio");

let baseMaior = parseFloat(prompt("Informe a base maior:"));

let baseMenor = parseFloat(prompt("Informe a base menor:"));

let altura = parseFloat(prompt("Informe a altura:"));

let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;

alert("A área do trapézio é: " + areaTrapezio);