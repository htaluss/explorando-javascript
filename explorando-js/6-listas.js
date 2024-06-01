console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//Teremos a lista toda impressa de uma só vez, mas e se quisermos adicionar mais itens a esta lista? 
//Podemos simplesmente adicionar novas cidades destino no array, mas é mais comum é declaramos a lista e elas ser atualizada dinamicamente.
//Para realizar essa atualização utilizamos o comando push, que irá adicionar itens dentro de listaDeDestinos:
listaDeDestinos.push(`Recife`); //adicionando um item na lista
//Dessa maneira conseguimos incluir uma nova cidade em nosso construtor, isto é, o local em que a lista está declarada e constituída.

console.log(`Destinos possíveis`);
//console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listaDeDestinos)
//Teremos em nosso PowerShell a seguinte visualização:
//['Salvador', 'São Paulo', 'Rio de Janeiro']

// A contagem da lista se considera a posição "0" de maneira implícita. Portanto a posição real na cidade de São Paulo na lista é 1.
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos)

//Já conseguimos adicionar e remover itens, mas como exibir destinos específicos ao nosso cliente? 
//Para esse comportamento de exibição, em nosso console.log() adicionaremos entre colchetes a posição da cidade que desejamos exibir, no caso, Rio de Janeiro.
console.log(listaDeDestinos[1]);
//Será impressa apenas a cidade da posição correspondente. Podemos, também, imprimir duas cidades específicas:
console.log(listaDeDestinos[1], listaDeDestinos[0]);