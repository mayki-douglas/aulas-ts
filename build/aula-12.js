"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function olaMundo() {
    console.log("Hello World");
}
olaMundo();
function login(user, password) {
    console.log(`Usuário: ${user}`);
    console.log(`Senha: ${password}`);
}
login("administ", "administ");
login("teste", "12345");
function soma(a, b) {
    let r = a + b;
    return r;
}
function somaSimples(a, b) {
    return a + b;
}
let somaConvertida = soma(50, 90).toString();
console.log(somaConvertida);
console.log(somaSimples(10, 30));
console.log(soma(20, 50));
