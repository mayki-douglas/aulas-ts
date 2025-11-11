//Entendendo como funciona UNION TYPES em Typescript

let programacao =["Flutter", "Javascript", "PHP"]; //array do tipo string
let anos = [2020, 2021, 2022]; //array do tipo number

let carros:string|number|boolean; //array que pode receber tanto string quanto number

let programacao2 = ["Assembly", "Cobol", 1950, true]; //array que pode receber string, number e boolean

let programacao3:any[] = ["Assembly", "Cobol", 1000, 8.2, false]; //array do tipo any, que pode receber qualquer tipo de dado

carros = "BMW";
carros = 2015;
programacao.push("Java"); //adiciona uma nova linguagem ao array com o método push
anos.push(2019);

//disclaimer: usar a variavel do tipo "any" em ultimos casos.

console.log(programacao);
console.log(anos);
console.log(carros);
console.log(programacao2);
console.log(programacao3);