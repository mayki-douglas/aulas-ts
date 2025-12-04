"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cpus;
(function (cpus) {
    cpus[cpus["intel"] = 1] = "intel";
    cpus[cpus["amd"] = 2] = "amd";
    cpus[cpus["snapdragon"] = 3] = "snapdragon";
    cpus[cpus["mediatek"] = 4] = "mediatek";
})(cpus || (cpus = {}));
console.log(cpus.intel);
console.log(cpus['amd']);
console.log(cpus[2]);
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["domingo"] = 0] = "domingo";
    diasSemana[diasSemana["segunda"] = 1] = "segunda";
    diasSemana[diasSemana["terca"] = 2] = "terca";
    diasSemana[diasSemana["quarta"] = 3] = "quarta";
    diasSemana[diasSemana["quinta"] = 4] = "quinta";
    diasSemana[diasSemana["sexta"] = 5] = "sexta";
    diasSemana[diasSemana["sabado"] = 6] = "sabado";
})(diasSemana || (diasSemana = {}));
const d = new Date();
console.log(d);
console.log(diasSemana[2]);
console.log(d.getDate());
console.log(diasSemana[d.getDay()]);
var eletronicos;
(function (eletronicos) {
    eletronicos["smartphone"] = "Xiaomi";
    eletronicos["notebook"] = "Dell";
    eletronicos["tablet"] = "iPad";
})(eletronicos || (eletronicos = {}));
console.log(eletronicos.smartphone);
var carros;
(function (carros) {
    carros[carros["GM"] = 0] = "GM";
    carros[carros["Ford"] = 1] = "Ford";
    carros[carros["Fiat"] = 2] = "Fiat";
    carros[carros["Toyota"] = 3] = "Toyota";
})(carros || (carros = {}));
console.log(carros.Fiat);
const meuCarro = carros.Toyota;
console.log(meuCarro);
