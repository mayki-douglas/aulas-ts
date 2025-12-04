"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function helloWorld() {
    console.log("Hello World!");
}
helloWorld();
const helloWorldArrow = () => {
    console.log("Hello World Arrow Function!");
};
helloWorldArrow();
const subtrair = (n1, n2, n3 = 0) => {
    return n1 - n2 - n3;
};
console.log(subtrair(10, 5));
const arrowText = (txt = "Texto padrão") => {
    console.log(txt);
};
arrowText("Texto personalizado");
arrowText();
