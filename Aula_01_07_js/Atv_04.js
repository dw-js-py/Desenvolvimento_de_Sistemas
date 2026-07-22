const prompt = require("prompt-sync")();

let total = 0;

console.log("\nCardápio:");
console.log("1 - Suco R$ 6,00");
console.log("2 - Sanduíche R$ 14,00");
console.log("3 - Prato feito R$ 22,00");
console.log("4 - Sobremesa R$ 9,00");

for (let i = 1; i <= 3; i++) {
    const opcao = parseInt(prompt(`\nPedido ${i} - Digite o número do item: `));
    let preco = 0;
    let produto = "";

    switch (opcao) {
        case 1:
            produto = "Suco";
            preco = 6.00;
            break;
        case 2:
            produto = "Sanduíche";
            preco = 14.00;
            break;
        case 3:
            produto = "Prato feito";
            preco = 22.00;
            break;
        case 4:
            produto = "Sobremesa";
            preco = 9.00;
            break;
        default:
            console.log("Opção inválida!");
            i--;
            continue;
    }

    total += preco;
    console.log(`Pedido ${i} - opção: ${opcao} → ${produto} - R$ ${preco.toFixed(2)}`);
}

console.log(`\nTotal da conta: R$ ${total.toFixed(2)}`);
