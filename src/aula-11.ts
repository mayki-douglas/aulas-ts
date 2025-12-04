//Aprendendo sobre Type Assertion e Typecast em Typescript

let produto:string;
let preco:number;
let tamanho:unknown;

tamanho = 30; //adicionamos um valor do tipo number na variável do tipo unknown
//nao conseguimos fazer associaçoes diretas com variaveis do tipo unknown. Exemplo: preco = tamanho; (isso gera um erro).

preco = <number>tamanho; //Type Assertion (forma antiga)

//forma atual de Type Assertion
preco = tamanho as number;

console.log(tamanho);
console.log(typeof(tamanho)); //imprimimos o tipo do valor armazenado na variável tamanho

preco = 20;
preco+=10; //agora conseguimos fazer operações com a variável preco, pois ela é do tipo number

console.log(preco);

//usando o Typecast

produto = '50'; //usando a variavel produto do tipo string

preco = 100;

produto = preco.toString(); //convertendo o number preco para string e armazenando na variavel produto

preco = Number.parseInt(produto); //usando a conversão da variavel produto(string) para number com o Typecast

console.log(preco); //fizemos a impressão do valor convertido
console.log(produto); //imprimimos o valor da variável produto convertida de number para string

console.log(typeof(produto)); //imprimimos o tipo do valor armazenado na variável produto
console.log(typeof(preco)); //imprimimos o tipo do valor armazenado na variável preco
