//Aprendendo sobre funcoes em TypeScript

//declarando uma funcao sem retorno usando void

function olaMundo(): void {
    console.log("Hello World");
}

olaMundo(); //chamamos a funcao para imprimir a mensagem no terminal.

//usando outro exemplo de funcao void
//declaramos o tipo do parametro "user" e "password" como string
function login(user:string, password:string):void{
    console.log(`Usuário: ${user}`);
    console.log(`Senha: ${password}`);
}

login("administ", "administ");
login("teste", "12345");

//declarando uma funcao com retorno, usando uma operacao matematica simples

//criamos uma variavel "r" para armazenar o resultado da soma
function soma(a:number, b:number):number{
    let r = a + b;
    return r;
}

//mas podemos simplificar a funcao retornando diretamente a soma dos parametros
function somaSimples(a:number, b:number):number{
    return a + b;
}

let somaConvertida:string = soma(50, 90).toString(); //chamamos a funcao soma e convertemos o resultado para string
console.log(somaConvertida); //imprimimos o resultado convertido no terminal.


console.log(somaSimples(10, 30)); //chamamos a funcao somaSimples e imprimimos o resultado no terminal.

console.log(soma(20, 50)); //chamamos a funcao soma e imprimimos o resultado no terminal.
 