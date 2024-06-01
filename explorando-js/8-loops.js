console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false
while(contador<3) {

    if (listaDeDestinos[contador] == destino) {

        console.log("Destino existe");
        destinoExiste = true;
        break;
    } else {
        console.log("Destino não existe");
    }
    // Ao executarmos nosso código no PowerShell, notaremos ele entra em um estado de looping infinito, sempre exibindo apenas o primeiro item da lista.
    // Se não queremos que o contador tenha esse comportamento, precisamos coletar o valor dentro de contador e somar 1 e realizar uma reatribuição.
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) { 
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}

for (let cont = 0 ; cont < 3 ; cont++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        }
}

for (let i = 0 ; i <3 ; i++) {
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}
