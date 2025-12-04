"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(num1 = 0, num2 = 0) {
    return num1 + num2;
}
console.log(soma(5, 10));
function login(nome, pass, endereco) {
    console.log(`Nome: ${nome}`);
    console.log(`Senha: ${pass}`);
    console.log(`Endereço: ${endereco}`);
}
login("Admin", "1234");
function autenticar(usuario, senha, chave) {
    let dadosAutenticar = { usuario, senha, chave };
    console.log(dadosAutenticar);
}
autenticar("ADMINISTRADOR", "administ");
