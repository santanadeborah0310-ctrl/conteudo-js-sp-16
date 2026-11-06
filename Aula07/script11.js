// Exercicio 10: Convertendo idade em dias.

alert("Calculando idade em dias");

let anos = parseInt(prompt("Informe sua idade em anos:"));

let meses = parseInt(prompt("Informe os meses:"));

let dias = parseInt(prompt("Informe os dias:"));

let idadeDias = (anos * 365) + (meses * 30) + dias;

alert("Sua idade em dias é: " + idadeDias);