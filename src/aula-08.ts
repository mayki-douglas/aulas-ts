//Aprendendo sobre o tipo OBJECT em Typescript

//a atribuição do tipo object é usada nos dois pontos abaixo, adicionando o tipo da variável após o nome dela.
let jogos: object={
    nome: "God of War",
    ano: 2018,
    console: "PS4"
} //definindo a variável jogos como do tipo object

//a atribuição object também pode ser feita sem declarar o tipo explicitamente.
let filme= {
    nome: "Interestelar",
    ano: 2014,
    diretor: "Christopher Nolan"
} //definindo a variável filme como do tipo object implicitamente

console.log(typeof(jogos)); //retorna o tipo da variável jogos.
console.log(jogos); //exibindo o objeto jogos no console

console.log(filme);

//podemos acessar as propriedades do objeto usando a notação de ponto.

//console.log(jogos.console); (Gotcha: não use o tipo genérico object se precisar acessar propriedades — ele só garante que o valor não é primitivo.)
console.log(filme.nome); //acessando a propriedade nome do objeto filme

//o tipo object pode receber também funções, arrays, etc.

let funcao={
    dado: "essa funcao vai receber um:",
    helloWorld:()=>{console.log("Hello World!");} //função dentro do objeto
}
funcao.helloWorld();//chamando a função dentro do objeto funcao

//objetos também podem receber parametros de funcoes externas.

let modelo={
    marca: "Ford",
    info:(p:string)=>(console.log(p)) //usamos o parâmetro p do tipo string na função info do objeto
}
modelo.info(modelo.marca); //chamando a função info do objeto modelo, passando a propriedade marca como parametro

