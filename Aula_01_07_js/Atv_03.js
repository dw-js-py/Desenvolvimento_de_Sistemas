const prompt = require("prompt-sync")();

const qntdNum = parseInt(prompt("Quantos números você quer digitar? "));

console.log()

let maior = parseFloat(prompt(`Digite o número 1: `));
let menor = maior;

for (let i = 2; i <= qntdNum; i++) {
    const num = parseFloat(prompt(`Digite o número ${i}: `));
    if (num > maior) {
        maior = num;
    } else if (num < menor) {
        menor = num;
    }
}

console.log();
console.log("--- Resultado ---");
console.log(`Maior: ${maior} | Menor: ${menor}`);