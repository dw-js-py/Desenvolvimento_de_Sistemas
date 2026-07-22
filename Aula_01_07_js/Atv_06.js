const prompt = require("prompt-sync")();
const numAlunos = parseInt(prompt("Digite o número de alunos: "));
let totalAprovados = 0;

for (let i = 1; i <= numAlunos; i++) {
    console.log();
    const nome = prompt(`Digite o nome do aluno ${i}: `);
    const nota = parseFloat(prompt(`Digite a nota do aluno ${i} (0 a 10): `));
    let conceito = "";

    switch (true) {
        case (nota >= 9 && nota <= 10):
            conceito = "A";
            break;
        case (nota >= 7 && nota < 9):
            conceito = "B"; 
            break;
        case (nota >= 5 && nota < 7):
            conceito = "C";
            break;
        case (nota >= 0 && nota < 5):
            conceito = "D"; 
            break;
        default:
            console.log("Nota inválida");
            continue;
    }

    if (nota >= 7) {
        console.log(`Aluno ${i} - Nome: ${nome} | Nota: ${nota} | Conceito: ${conceito} | APROVADO`);
        totalAprovados++;
    } else {
        console.log(`Aluno ${i} - Nome: ${nome} | Nota: ${nota} | Conceito: ${conceito} | REPROVADO`);
    }   
}
console.log(`\nTotal de aprovados: ${totalAprovados}`);

