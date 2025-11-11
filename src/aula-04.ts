//Entendendo como funciona Type Inference em Typescript
//nesta aula, usamos o comando tsc -w para compilar o arquivo TypeScript em JavaScript automaticamente ao salvar o arquivo .ts

let descricao = "produto"; //variavel do tipo string com valor já atribuído

let quantidade = 10; //variavel do tipo number pode ser int, float, double, etc.

let nome; //variavel do tipo any (qualquer tipo)

let referencia:string; //variavel do tipo string usando anotação de tipo

console.log("Descrição: " + descricao);

