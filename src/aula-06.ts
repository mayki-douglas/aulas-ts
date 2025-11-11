//Aprendendo mais sobre Array e Readonly Array em Typescript

let anos= [1990, 1995, 2000, 2005]; //o typescript infere que o array anos é do tipo number[] (array de numeros)

let numeros: number[] = [1, 2, 3, 4, 5]; //as duas formas de arrays sao formas validas de declarar array do tipo number.
let idades: Array<number> = [30, 31, 32, 33];

//se for usar union types, deve-se usar a segunda forma:
let valores: Array<number | string> = [1, 'dois', 3, 'quatro']; //pode usar parenteses angulares para definir o tipo do array

anos.push(2010); //adiciona o valor 2010 ao final do array anos
anos.unshift(1985); //adiciona o valor 1985 ao inicio do array anos

//para remover elementos do array:
numeros.pop(); //remove o ultimo elemento do array numeros.
numeros.shift(); //remove o primeiro elemento do array numeros.

let jogos: ReadonlyArray<string> = ['Mario', 'Zelda', 'Metroid']; 
//array do tipo string, mas com somente leitura, nao pode ser modificado 
//arrays do tipo readonlyArray nao permitem metodos que alteram o array, como push, pop, shift, unshift, splice, etc.


console.log(anos);
console.log(numeros);
console.log(jogos);