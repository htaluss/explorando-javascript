console.log("Trabalhando com atribuição de variáveis");
const primeiroNome = "Italo";
const sobrenome = "Correia"; 

console.log(nome + sobrenome);
//Ao executarmos o programa no Powershell, notaremos que a reposta será ItaloCorreia, sem espaçamento.
//Para resolver essa questão poderemos simplesmente adicionar um espaço entre nome e o sinal de concatenação +, algo como "console.log(nome + " " + sobrenome);"
//ou utilizar a vírgula:

console.log(nome, sobrenome);

//Existem outras maneiras de trabalhar com strings, isto é, textos. Podemos declarar nossos textos entre crases. 
//Podemos realizar concatenações, mas neste caso não utilizaremos o sinal "+". 
//Nas versões mais novas do JavaScript conseguimos fazer a interpolação de variáveis por meio de ${}:
console.log(`Meu nome é ${nome} ${sobrenome}`);

//Nosso retorno a execução será Meu nome é Italo Correia. 
//Temos nome e sobrenome armazenados em diferentes variáveis, mas podemos condensar esses valores em uma única, algo como:
nome = nome + sobrenome;

//Estamos sobrescrevendo informações sobre aquelas já atribuídas anteriormente na variável. 
//Ao executarmos nosso código, teremos uma mensagem de erro: TypeError: Assignment to constant variable. 
//Essa mensagem pode ser um pouco confusa ao ser traduzida, constant é um tipo de variável que não pode ser modificada uma vez que sua atribuição original foi feita.
//Em nosso código, atribuímos todas as nossas variáveis como const, então a sobrescrição de dados não é possível. 
//Mudaremos então os tipo das variável nome para let, pois ele permite mudanças:
//let nome = "Italo"

//A definição let existe e eventualmente precisaremos utilizá-la, mas podemos encontrar novos caminhos para manter nosso código mais condizente com as boas práticas. 
//Como por exemplo criar uma nova variável que condense nome e sobrenome:
//const nomeCompleto = nome + sobrenome;

//É interessante também fazermos como que as variáveis sejam o mais descritivas o possível, para facilitar a compreensão dos desenvolvedores. 
//Em nosso caso, poderemos escrever:
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let = contador;
contador = contador + 1;

let idade; // declarando variável
idade = 18; // atribuindo valor
idade = idade+1;
console.log(idade);

