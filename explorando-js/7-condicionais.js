const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// } else{
//     console.log("Não é maior de Idade e não posso vender");
// }

// Uma vez que a idade for inferior a 18, será exibida a mensagem Não é maior de idade e não posso vender, que definimos no else, com um fluxo de execução controlado.

// Utilizamos os operadores lógicos = e >, mas existem diversas possibilidades de configuração:
// >18
// >18
// <=18
// >18
// ==18

// Quando utilizamos o marcador == estamos marcando uma comparação, e quando utilizamos = fazemos atribuição de valor.

const estaAcompanhada = true;

// O termo estaAcompanhada não foi definido por nós no código, a única declaração que temos é a idade do comprador e lista de destinos. 
// Para corrigirmos este erro declararemos a variável:
// const estaAcompanhada = true;

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //removendo item
} else {
    //a pessoa é menor de idade
if (estaAcompanhada == true){
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removedo item
    } else {
       console.log("Não é maior de Idade e não posso vender");
    }
} 

//Perceberemos que temos duas linhas de código voltadas para a remoção de itens. 
//Ter informações duplicadas dessa maneira não é uma boa prática na programação, afinal dificulta atualização de ações e manutenção do programa.
//Devemos unir as declarações booleanas vinculadas a idadeComprador e estaAcompanhada, sendo que uma das declarações sendo verdadeiras já possibilita a compra. 
//Uma outra comparação possível é o comprador ser maior de deidade e estar acompanhado.
//Para escrevermos algo como "ou" está acompanhado ou é maior de idade para fazer compra de pacotes, utilizamos || no JavaScript:

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}

//Dessa maneira, excluímos a duplicação em nosso código. Se o comprador for maior de idade a compra é realizada, se ele for menor de idade, 
//mas estiver acompanhado a compra também é possível. 
//Caso alguma dessas premissas não seja verdadeira, a compra não poderá ser feita e a mensagem de não é maior de idade e não posso vender é exibida.
//Esta é uma maneira de encadear operações lógicas. Podemos ainda criar uma tercerira variável: temPassagemComprada, 
//e então será realizada uma verificação se quem possui a passagem é maior de idade ou está acompanhado, como é feito na vida real.
//Criaremos uma nova condicional para essa verificação:

const temPassagemComprada = true;

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
} 

//O \n é um caractere especial que possibilita que pulemos uma linha no momento de imprimir a mensagem de texto. 
//Temos desde o embarque uma verificação para saber se de fato o cliente pode embarcar, e esta é uma maneira de adicionar mais condicionais dentro de um único if.

