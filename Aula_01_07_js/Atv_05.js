const prompt = require("prompt-sync")();

for (let i = 1; i <= 5; i++) {
    console.log();
    const num = parseInt(prompt("Digite um número (1-7): "));
    let dia = "";

    switch (num) {
        case 1:
            dia = "Segunda-feira";
            break;
        case 2:
            dia = "Terça-feira";
            break;
        case 3:
            dia = "Quarta-feira";
            break;
        case 4:
            dia = "Quinta-feira";
            break;
        case 5:
            dia = "Sexta-feira";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            console.log("Dia inválido");
            continue;
    }

    if (num >= 1 && num <= 5) {
        console.log(`${dia} [DIA ÚTIL]`);
    } else {
        console.log(`${dia} [FIM DE SEMANA]`);
    }
}