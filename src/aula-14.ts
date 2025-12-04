//Função anonima, arrow function ou função de seta em Typescript

//exemplo de função tradicional

function helloWorld():void{
    console.log("Hello World!");
}

helloWorld(); //a chamada da função pode ser feita antes ou depois da declaração da função (pois uma função tradicional é "içada" para o topo do arquivo pelo compilador)

//usando uma arrow function

const helloWorldArrow = ():void=>{
    console.log("Hello World Arrow Function!");
}       //a funcao arrow se chama funcao de seta pois usa a seta "=>"

helloWorldArrow(); //a chamada da função deve ser feita após a declaração da função (pois uma arrow function é uma expressão atribuída a uma variável)

//arrow function com parâmetros e um parametro com valor padrão

const subtrair = (n1: number, n2: number, n3: number=0): number =>{
    return n1 - n2 - n3;
}

console.log(subtrair(10, 5)); //5

//arrow function com parametro de texto
const arrowText = (txt: string="Texto padrão"): void=>{
    console.log(txt);
}

arrowText("Texto personalizado"); //Texto personalizado
arrowText(); //Texto padrão

