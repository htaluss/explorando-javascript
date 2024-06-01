console.log("Conversão de Tipos");

console.log("ano" + 2020);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));

console.log("10"/ "2");
//No caso de divisões, o comportamento do leitor é outro. 
//Veremos que o retorno para este caso é 5, mesmo que não tenhamos realizado uma conversão explícita para números inteiros, 
//afinal uma divisão só faz sentido com elementos numéricos.

console.log("Italo" / "2")
//Para este caso teremos o retorno NaN, que siginfica "not a number", ou seja, não é uma operação possível pois não se trata de números.

//O JavaScript é uma linguagem fracamente tipada, então ele sempre tentará realizar conversões de maneira implícita a fim de executar corretamente as declarações, 
//além disso, podemos forçar a conversão por meio do parseInt. 
//Inclusive podemos realizar operaões que não resultam em inteiros, como:
console.log("7" / "2") 
//Será retornado o valor 3.5, um número com casa decimal ou os chamados "pontos flutuantes". 

//Lembrando que se queremos escrever números com casa decimal, devemos sempre utilizar pontos (.) e não vírgulas:
console.log(6.5);
//Se escrevemos o mesmo valor com vírgula, é lido um espaço no lugar da vírgula, algo como 6 5.