//Aprendendo sobre TUPLAS em Typescript
//tuplas são arrays com tamanho e tipos fixos

let carros:[string, number, string]= ["BMW", 2020, "Preto"]; //tupla com 3 posições: string, number, string

let videogames:readonly[string, number]= ["Playstation", 2018]; //tupla somente leitura com 2 posições: string, number
//não é possível alterar os valores de uma tupla readonly, apenas ler.

//let videogames:[string, number]= ["Xbox", 2000, true]; um exemplo de tupla errada, com 3 posições ao invés de 2, faltando o boolean

carros.push("Audi"); //a função push funciona normalmente em tuplas, mas não é possível acessar a posição 3.

console.log(carros);

console.log(carros[1]); //acessando o elemento da posição 1 da tupla carros
