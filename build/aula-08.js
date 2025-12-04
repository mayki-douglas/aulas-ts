"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let jogos = {
    nome: "God of War",
    ano: 2018,
    console: "PS4"
};
let filme = {
    nome: "Interestelar",
    ano: 2014,
    diretor: "Christopher Nolan"
};
console.log(typeof (jogos));
console.log(jogos);
console.log(filme);
console.log(filme.nome);
let funcao = {
    dado: "essa funcao vai receber um:",
    helloWorld: () => { console.log("Hello World!"); }
};
funcao.helloWorld();
let modelo = {
    marca: "Ford",
    info: (p) => (console.log(p))
};
modelo.info(modelo.marca);
