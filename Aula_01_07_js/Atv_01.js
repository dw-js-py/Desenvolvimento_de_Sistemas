const prompt = require("prompt-sync")();

const qntdNum = parseInt(prompt("Quantos números você quer digitar? "));

for (let i =1; i <= qntdNum; i++) {
    console.log();
    const num = parseFloat(prompt(`Digite o número ${i}: `));
    if (num < 0) {
        console.log(`Número ${num} é NEGATIVO`);
    } else if (num === 0) {
        console.log(`Número ${num} é ZERO`);
    } else {
        console.log(`Número ${num} é POSITIVO`);
    }
}
    