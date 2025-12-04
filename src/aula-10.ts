// diferenças entre NULL, UNDEFINED e UNKNOWN em Typescript

//criando uma variavel usando union types do tipo null

let variavel:string|null;

variavel = null;
console.log(variavel);

//criando uma variavel do tipo undefined

let variavel2; //variavel do tipo any por padrão, mas com valor indefinido.
console.log(variavel2);

//entendendo o tipo unknown

let variavel3:unknown=variavel; //variavel do tipo unknown, que pode receber qualquer tipo de valor.
let variavel4:any = variavel3; // criando uma variavel do tipo any que recebe o valor da variavel3 (já que unknow só pode ser atribuída a any ou unknown)
console.log(variavel3);

//NULL = ausência intencional de valor
//UNDEFINED = variável declarada, mas sem valor atribuído
//UNKNOWN = tipo seguro que pode receber qualquer valor, mas precisa ser verificado antes de usar