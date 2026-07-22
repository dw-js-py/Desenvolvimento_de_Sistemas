const prompt = require("prompt-sync")();

const qntdNum = parseInt(prompt("Quantos números você quer digitar? "));

let pares = 0;
let impares = 0;

for (let i = 1; i <= qntdNum; i++) {
    console.log();
    const num = parseFloat(prompt(`Digite o número ${i}: `));
    if (num % 2 === 0) {
        console.log(`Número ${num} é PAR`);
        pares++;
    } else {
        console.log(`Número ${num} é ÍMPAR`);
        impares++;
    }
}

console.log();
console.log("--- Resultado ---");
console.log(`Pares: ${pares} | Ímpares: ${impares}`);
